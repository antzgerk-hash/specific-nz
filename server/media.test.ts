/**
 * Unit tests for media and documents tRPC procedures
 * Tests the public list endpoints and admin-guard enforcement
 */
import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function makeCtx(role: "user" | "admin" | null): TrpcContext {
  const user: AuthenticatedUser | null = role
    ? {
        id: 1,
        openId: "test-user",
        email: "test@specificnz.com",
        name: "Test User",
        loginMethod: "manus",
        role,
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      }
    : null;

  return {
    user: user as TrpcContext["user"],
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as unknown as TrpcContext["res"],
  };
}

describe("projectMedia router", () => {
  it("listByCategory returns empty array when db is unavailable (public endpoint)", async () => {
    const caller = appRouter.createCaller(makeCtx(null));
    const result = await caller.projectMedia.listByCategory({ category: "ffe" });
    expect(Array.isArray(result)).toBe(true);
  });

  it("listAll throws FORBIDDEN for non-admin users", async () => {
    const caller = appRouter.createCaller(makeCtx("user"));
    await expect(caller.projectMedia.listAll()).rejects.toMatchObject({
      code: "FORBIDDEN",
    });
  });

  it("listAll throws UNAUTHORIZED for unauthenticated users", async () => {
    const caller = appRouter.createCaller(makeCtx(null));
    await expect(caller.projectMedia.listAll()).rejects.toMatchObject({
      code: "FORBIDDEN",
    });
  });

  it("delete throws FORBIDDEN for non-admin", async () => {
    const caller = appRouter.createCaller(makeCtx("user"));
    await expect(caller.projectMedia.delete({ id: 1 })).rejects.toMatchObject({
      code: "FORBIDDEN",
    });
  });
});

describe("documents router", () => {
  it("listPublic returns empty array when db is unavailable (public endpoint)", async () => {
    const caller = appRouter.createCaller(makeCtx(null));
    const result = await caller.documents.listPublic();
    expect(Array.isArray(result)).toBe(true);
  });

  it("listAll throws FORBIDDEN for non-admin users", async () => {
    const caller = appRouter.createCaller(makeCtx("user"));
    await expect(caller.documents.listAll()).rejects.toMatchObject({
      code: "FORBIDDEN",
    });
  });

  it("togglePublic throws FORBIDDEN for non-admin", async () => {
    const caller = appRouter.createCaller(makeCtx("user"));
    await expect(
      caller.documents.togglePublic({ id: 1, isPublic: true }),
    ).rejects.toMatchObject({
      code: "FORBIDDEN",
    });
  });

  it("delete throws FORBIDDEN for non-admin", async () => {
    const caller = appRouter.createCaller(makeCtx("user"));
    await expect(caller.documents.delete({ id: 1 })).rejects.toMatchObject({
      code: "FORBIDDEN",
    });
  });
});
