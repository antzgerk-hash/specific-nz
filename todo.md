
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
- [x] Add public document download section to About page (grouped by tag, download links)
- [x] Add admin link in SiteNav for logged-in admin users

## Group Structure Restructure
- [x] Rewrite The Group page — NZ as Head Office, AU as sister operation with live link
- [x] Add "Specific Australia" cross-link in SiteNav (visible on all pages)
- [x] Add "Specific Australia" cross-link in Footer (Group page footer)
- [x] Update home page to reinforce NZ as primary entity for NZ clients
- [x] Update About page to position NZ as Head Office for NZ clients

## Graphics Upgrade — Full Site Audit
- [ ] Fix Aotearoa values card on Group page — replace flat green card with premium design
- [ ] Upgrade Group page — Australia card graphic
- [ ] Audit and upgrade Home page hero and stats section graphics
- [ ] Audit and upgrade About page graphics
- [ ] Audit and upgrade Services page graphics
- [ ] Ensure all project category pages have strong hero images
