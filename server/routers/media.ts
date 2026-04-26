/**
 * Media & Documents router
 * - projectMedia: admin upload/list/delete for project gallery photos
 * - documents: admin upload/list/delete for marketing/operational assets
 * - Public list endpoints for gallery display
 */
import { TRPCError } from "@trpc/server";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { documents, projectMedia } from "../../drizzle/schema";
import { getDb } from "../db";
import { storagePut } from "../storage";
import { adminProcedure, publicProcedure, router } from "../_core/trpc";

// ─── Project Media ─────────────────────────────────────────────────────────

export const projectMediaRouter = router({
  /** List all media for a given category (public) */
  listByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      return db
        .select()
        .from(projectMedia)
        .where(eq(projectMedia.category, input.category))
        .orderBy(projectMedia.sortOrder, desc(projectMedia.uploadedAt));
    }),

  /** List all media across all categories (admin) */
  listAll: adminProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    return db
      .select()
      .from(projectMedia)
      .orderBy(projectMedia.category, desc(projectMedia.uploadedAt));
  }),

  /** Upload a project photo — receives base64 encoded file from client */
  upload: adminProcedure
    .input(
      z.object({
        category: z.string().min(1),
        projectName: z.string().optional(),
        caption: z.string().optional(),
        fileName: z.string().min(1),
        mimeType: z.string().min(1),
        fileBase64: z.string().min(1), // base64 encoded file content
        fileSize: z.number().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      const buffer = Buffer.from(input.fileBase64, "base64");
      const fileKey = `project-media/${input.category}/${input.fileName}`;
      const { key, url } = await storagePut(fileKey, buffer, input.mimeType);

      await db.insert(projectMedia).values({
        category: input.category,
        projectName: input.projectName ?? null,
        caption: input.caption ?? null,
        fileKey: key,
        url,
        mimeType: input.mimeType,
        fileSize: input.fileSize ?? null,
        sortOrder: 0,
      });

      return { success: true, url, key };
    }),

  /** Delete a project media item (admin) */
  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
      await db.delete(projectMedia).where(eq(projectMedia.id, input.id));
      return { success: true };
    }),

  /** Update sort order or caption (admin) */
  update: adminProcedure
    .input(z.object({ id: z.number(), caption: z.string().optional(), sortOrder: z.number().optional() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
      const updates: Partial<typeof projectMedia.$inferInsert> = {};
      if (input.caption !== undefined) updates.caption = input.caption;
      if (input.sortOrder !== undefined) updates.sortOrder = input.sortOrder;
      await db.update(projectMedia).set(updates).where(eq(projectMedia.id, input.id));
      return { success: true };
    }),
});

// ─── Documents ─────────────────────────────────────────────────────────────

export const documentsRouter = router({
  /** List public documents (visible on public site) */
  listPublic: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    return db
      .select()
      .from(documents)
      .where(eq(documents.isPublic, 1))
      .orderBy(documents.tag, desc(documents.uploadedAt));
  }),

  /** List all documents (admin) */
  listAll: adminProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    return db.select().from(documents).orderBy(documents.tag, desc(documents.uploadedAt));
  }),

  /** Upload a document */
  upload: adminProcedure
    .input(
      z.object({
        title: z.string().min(1),
        tag: z.string().min(1),
        fileName: z.string().min(1),
        mimeType: z.string().min(1),
        fileBase64: z.string().min(1),
        fileSize: z.number().optional(),
        isPublic: z.boolean().default(false),
      }),
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      const buffer = Buffer.from(input.fileBase64, "base64");
      const fileKey = `documents/${input.tag.toLowerCase().replace(/\s+/g, "-")}/${input.fileName}`;
      const { key, url } = await storagePut(fileKey, buffer, input.mimeType);

      await db.insert(documents).values({
        title: input.title,
        tag: input.tag,
        fileKey: key,
        url,
        mimeType: input.mimeType,
        fileSize: input.fileSize ?? null,
        isPublic: input.isPublic ? 1 : 0,
      });

      return { success: true, url, key };
    }),

  /** Toggle public visibility (admin) */
  togglePublic: adminProcedure
    .input(z.object({ id: z.number(), isPublic: z.boolean() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
      await db
        .update(documents)
        .set({ isPublic: input.isPublic ? 1 : 0 })
        .where(eq(documents.id, input.id));
      return { success: true };
    }),

  /** Delete a document (admin) */
  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
      await db.delete(documents).where(eq(documents.id, input.id));
      return { success: true };
    }),
});
