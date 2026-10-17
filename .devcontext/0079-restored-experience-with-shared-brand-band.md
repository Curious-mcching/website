# Work record 0079: Restored experience with shared brand band

- Date: 2026-10-16
- Status at creation: Implemented and browser verified; final rebuild running

## Requests and changes

Michelle requested trying Three dimensions from record 0077 while retaining the
original. Saved exact pre-edit page.tsx, editorial.css and experience artwork
module as .txt references in
`snapshots/experience-before-three-dimensions-2026-10-16/`. SHA-256 comparisons
confirmed the copies before editing. README explains selective restoration.

Implemented the editorial bands and industry groupings, then Michelle rejected
the overall layout. Restored the original section and SVG module from those
copies, retaining only her preferred rounded, full-width Agency + enterprise
band. She first requested agency-client names on the left, then explicitly
flipped that order. Final source has rotating employer logos on the left and
eight naturally wrapping, complete agency-client names on the right.

Retain the original Many perspectives artwork and three illustrated dimensions.
Use one shared surface, no individual brand dividers, transparent logo-set
background within this band, and matching width proportions (1fr / 1.15fr).
Stack at the existing tablet breakpoint and reduce padding on mobile. No carousel
logic, assets, captions or other experience wording changed. Preserve record
0078's larger typography and unrelated global style changes.

## Verification and limitations

- Read installed Next CSS guide and records 0072, 0073, 0076, 0077 and 0078.
- Lint and typecheck passed on the restored layout before the final child-order
  flip. The flip moves the same two existing JSX blocks; page.tsx now matches
  HEAD exactly. The artwork module and LogoCarousel also match HEAD.
- Initial Three dimensions build passed. Restored-layout builds hit known
  OneDrive EPERM errors on generated index.segments, then studio.segments.
- Inspected the exact generated index.segments directory, verified its absolute
  path stayed within this workspace and removed only that folder; another
  generated folder was also locked. Then verified and removed .next/server.
  .next/static was absent, so the guarded cleanup stopped and build was started
  separately. Source and .next/dev were preserved. Final result belongs in a
  subsequent append-only verification record.
- Final desktop browser: logos at x=88, agency-client names at x=629.35;
  eight names present, band clientWidth and scrollWidth both 1153px.
- Screenshot visually confirms rounded shared band, logos left, names right,
  original three graphics underneath. Saved final-experience-band-brands-right.jpg
  in this chat's visualization directory.
- At a 320px viewport: document clientWidth/scrollWidth both 305px, band
  clientWidth/scrollWidth both 265px, one column, all complete brand names fit.
  Reset viewport and closed QA tabs.
- git diff --check passed with Windows line-ending notices. No new behavior
  tests for reversible static layout changes. No commit, push or deployment.

## Future guidance

Current intent is the original layout with this shared band; do not reapply the
rejected Three dimensions design. Original source copies remain available for
future selective restoration. Do not overwrite entire current files from them.
