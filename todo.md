
## File Storage — Option C (Phase 3–6)
- [x] Add `projectMedia` table to drizzle schema (id, category, projectName, fileKey, url, caption, uploadedAt)
- [x] Add `documents` table to drizzle schema (id, title, tag, fileKey, url, mimeType, size, uploadedAt)
- [x] Run pnpm db:push to migrate schema
- [x] Build tRPC projectMedia.upload, listByCategory, listAll, delete, update procedures (admin-guarded)
- [x] Build tRPC documents.upload, listPublic, listAll, togglePublic, delete procedures (admin-guarded)
- [x] Build AdminMedia page with drag-and-drop for project photos (tagged by category) at /admin/media
- [x] Build AdminMedia page with drag-and-drop for documents (tagged: Logos, Cap Statements, Brand, Branch, Compliance)
- [x] Wire ProjectCategoryPage to display uploaded photos from DB with lightbox
- [x] Add /admin/media route to App.tsx (admin-only guard)
- [x] Write vitest tests for all media/documents procedures (9 tests passing)
- [ ] Add public document download section to About or Services page
- [ ] Add admin link in SiteNav for logged-in admin users
