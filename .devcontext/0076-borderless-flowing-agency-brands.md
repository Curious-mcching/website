# Work record 0076: Borderless, flowing agency brand names

- Date: 2026-10-16
- Status at creation: Implemented and checks passed; live visual QA pending

## Requests and changes

Michelle supplied a screenshot of Agency + enterprise and requested a sleeker
organization with fewer dividing lines. During implementation she also noted
that SickKids Foundation looked awkward split across lines in the equal-width
brand columns.

In editorial.css, group the agency-client names on one softly shaded surface
with rounded corners. Remove every brand's bottom rule, the long divider before
the three experience dimensions, and the tablet divider between employers and
clients. Retain one outer boundary above the full experience overview. Use
whitespace to separate groups and give employer content matching top padding.

Replace the equal-width brand grid with a wrapping flex list. Each brand takes
its natural width and stays on one line; the whole name moves to the next row
when needed. This includes SickKids Foundation. Use 22px/32px row/column gaps
and smaller mobile gaps/panel padding. Preserve existing name typography and
all eight names. The existing agency-brand-grid class is retained, but now
styles a flowing list rather than fixed columns.

This updates the presentation from
[0072](0072-unified-experience-and-perspectives.md). All experience wording,
relationship labels, the carousel and dimensional artwork from
[0073](0073-dimensional-experience-artwork.md) remain unchanged. No new
dependencies, assets, runtime behavior or architecture.

## Verification and actual outcomes

- Read relevant records and the local Next CSS guide before implementation.
- npm run lint and npm run typecheck passed. The subsequent change to flex
  wrapping was CSS-only; application TypeScript and JavaScript remain unchanged.
- The first production build passed but had compiled before the final flex-list
  edit. Rebuilding the final source twice hit Windows EPERM while unlinking
  .next/static/rzvC2qrOWi0RP_xpXIKuL. Inspection showed a generated directory
  with ReadOnly, Directory, Archive and ReparsePoint attributes under OneDrive.
- Verified the resolved absolute .next/static path was exactly the project's
  generated production output, then removed only that directory using native
  PowerShell Remove-Item -LiteralPath -Recurse -Force. Source and the separate
  .next/dev preview cache were not removed. The final npm run build passed.
- Final compiled CSS confirms wrapping flex layout, white-space: nowrap on
  complete names, and no brand underlines or divider on experience-lenses.
  Generated HTML retains SickKids Foundation and one logo carousel.
- git diff --exit-code for page.tsx, logo-carousel.tsx and
  experience-perspectives.tsx passed: unchanged. git diff --check passed.
- No new tests for a reversible styling-only change. No live browser, screenshot,
  mobile-fit or enlarged-text review following the prior browser URL-policy
  block. Compiled CSS verification is not a rendered layout claim.
- Preserve the pre-existing untracked record
  [0075](0075-local-preview-restart.md). No commit, push or deployment.

## Files and future guidance

- [Experience presentation](../src/app/editorial.css)
- [Unchanged semantic brand list](../src/app/page.tsx)
- [Unchanged rotating employer logos](../src/components/logo-carousel.tsx)

Do not restore equal-width columns that split longer brand names or the
individual brand dividers without a new request. Review the list at narrow
widths and enlarged text when live visual QA is available, especially the longest
names. If the same OneDrive build-output error recurs, inspect the exact generated
path and attributes before clearing any output; do not delete source, active
build locks or the running preview's cache as a shortcut.
