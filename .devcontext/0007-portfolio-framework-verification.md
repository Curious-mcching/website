# Work record 0007: Portfolio framework verification

- Date: 2026-10-13
- Status at creation: Completed

## Request and changes

Built the first website framework around Michelle's expertise, proposed
collaboration offerings, selected experience, and the developing Challenger
Mindset project. The audience includes clients, hiring leaders, and thinkers,
dreamers, and leaders. Michelle explicitly clarified that she has not written
papers or POVs yet; the writing library ships empty.

Read both pages of the supplied October 9, 2026 résumé and visually inspected
them. Grounded the selected RBC, HSBC Canada, and SickKids/JWT outcomes in that
document, preserving team contribution language. Did not copy the résumé into
the public site or invent published writing, testimonials, or service history.

Created responsive page sections, native expandable offerings and case
details, contact links, code-native artwork, and a local /studio. Future PDFs
are stored with title, format, theme, introduction, and experience metadata in
content/povs. Updated README with authoring instructions and npm test commands.
Added [ADR 0006](0006-portfolio-and-local-publishing-framework.md).

## Verification and outcomes

- npm run lint: passed after correcting a framework Link rule.
- npm run typecheck: passed with generated route types.
- Final npm run build: passed, including TypeScript and prerendering.
- Existing local development homepage: HTTP 200 with the new content.
- Writing API: returned an empty array before and after disposable tests.
- npm run test:publishing: passed. Covered cross-origin rejection, short or
  missing text, unknown formats/themes, non-PDF filenames, invalid magic
  headers, oversized files, invalid IDs, a successful publication, persisted
  metadata, fresh library reads, and matching PDF response bytes/headers.
- The fixture used a synthetic PDF-header payload to exercise the upload/API
  contract. It was not a real paper and did not test PDF viewer rendering.
- Production checks on a temporary loopback server at port 3001: passed.
  Public library was readable; /studio and POST /api/povs returned 404.
- Temporary content was removed by the test after verifying its unique marker
  and resolved workspace path. content/povs contains only .gitkeep.
- Desktop browser inspection at 1440px: two-column hero and three-column
  selected-work layout displayed correctly; no horizontal overflow.
- Browser checks confirmed offering expansion, case detail expansion, anchor
  navigation, and the return-to-top link.
- Mobile homepage inspected at 390px. At 320px, the employer-name strip initially
  overflowed; wrapping and smaller narrow-screen type fixed it. Final browser
  measurements were clientWidth 305 and scrollWidth 305 at a 320px viewport.
- Studio inspected at 320px: no horizontal overflow. End-to-end form submission
  was exercised through the API tests rather than a browser file chooser.
- Desktop screenshot saved in this chat's visualization directory as
  portfolio-desktop.jpg. Browser viewport overrides were reset and the
  dedicated temporary QA tab was closed.
- Owned temporary production server was stopped; Michelle's existing dev
  server was preserved. No deployment, commit, or push was performed.

## Lessons and limitations

- With this installed Next.js version and Cache Components enabled, explicit
  `runtime = "nodejs"` route config is rejected. Default Node runtime is
  sufficient here; do not add that export without rechecking framework docs.
- An uncached new Date() call in a Server Component blocks prerendering. The
  footer does not need a dynamic year, so the unnecessary date call was removed.
- A later build hit Windows EPERM deleting a generated .next/server route
  directory marked as a OneDrive reparse point. Verified its real path stayed
  within the workspace's generated output, removed only that generated route
  directory with native PowerShell, and rebuilt successfully. Do not clear the
  entire .next tree while the user's dev server is using .next/dev.
- The npm dev script now binds to 127.0.0.1. An already-running old `next dev`
  process retains its previous listener; restart it to apply the local-only
  authoring boundary before using the studio.
- Local publication is the initial assumption; live-site editing has not been
  selected or implemented. Authenticated administration and durable hosted
  storage are required before offering uploads on a deployed website.
- File-backed publication was verified with npm start in the same checkout.
  Hosting must include the content directory; do not assume serverless/standalone
  bundling automatically includes dynamically read PDFs and metadata.
- Existing ADRs and work records were not modified.

## References

- [Framework decision](0006-portfolio-and-local-publishing-framework.md)
- [npm decision](0004-switch-to-npm.md)
- [Publishing regression tests](../scripts/test-publishing.mjs)
- [Project README](../README.md)
