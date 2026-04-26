import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, bigint } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Project media — photos uploaded to project category gallery pages.
 * category maps to the 6 project categories: ffe, joinery, relocations, special, av, warehousing
 */
export const projectMedia = mysqlTable("project_media", {
  id: int("id").autoincrement().primaryKey(),
  category: varchar("category", { length: 64 }).notNull(), // e.g. "ffe", "joinery", "relocations"
  projectName: varchar("projectName", { length: 255 }), // optional project label
  caption: text("caption"),
  fileKey: varchar("fileKey", { length: 512 }).notNull(),
  url: varchar("url", { length: 1024 }).notNull(),
  mimeType: varchar("mimeType", { length: 128 }),
  fileSize: bigint("fileSize", { mode: "number" }),
  sortOrder: int("sortOrder").default(0),
  uploadedAt: timestamp("uploadedAt").defaultNow().notNull(),
});

export type ProjectMedia = typeof projectMedia.$inferSelect;
export type InsertProjectMedia = typeof projectMedia.$inferInsert;

/**
 * Documents — marketing and operational assets (capability statements, ISO certs, brochures, logos).
 * tag values: Logos | Cap Statements | Brand | Branch | Compliance | Other
 */
export const documents = mysqlTable("documents", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  tag: varchar("tag", { length: 64 }).notNull().default("Other"), // Logos | Cap Statements | Brand | Branch | Compliance | Other
  fileKey: varchar("fileKey", { length: 512 }).notNull(),
  url: varchar("url", { length: 1024 }).notNull(),
  mimeType: varchar("mimeType", { length: 128 }),
  fileSize: bigint("fileSize", { mode: "number" }),
  isPublic: int("isPublic").default(0).notNull(), // 1 = visible on public site, 0 = internal only
  uploadedAt: timestamp("uploadedAt").defaultNow().notNull(),
});

export type Document = typeof documents.$inferSelect;
export type InsertDocument = typeof documents.$inferInsert;
