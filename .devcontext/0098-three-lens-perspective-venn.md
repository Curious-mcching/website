# Work record 0098: Three lenses, one broader perspective

- Date: 2026-10-17
- Status at creation: Implemented and visually verified; production build blocked
  by generated-output filesystem permissions

## Request and design

Michelle wanted the main perspective graphic to explain the distinctive
combination of industry breadth (B2C and B2B), full-funnel marketing depth including
modern/emerging media, and global/local perspectives. She suggested a sophisticated
three-circle Venn diagram with callouts instead of the abstract object/shadows.

Replace PerspectiveArtwork's bitmap with a native SVG/HTML figure. Three thin
outlined circles use translucent eucalyptus, iris and teal gradients. Readable
HTML callouts label Industry Breadth / B2C + B2B, Marketing Depth / Full Funnel +
Emerging Media, and Global + Local / Across Markets. Their intersection reads
A Broader Point of View. Keep the figure unboxed on the existing mist background.
The accessible figure label explains the combination without requiring color.
Remove the unused next/image import and superseded image-only CSS.

At widths through 480px, replace in-circle callouts with numbered lenses and
three descriptive rows below. The first narrow-screen inspection found overlapping
labels; this responsive treatment corrected that observed failure. Keep desktop
labels inside circles. No animation, dependency, client component or new runtime
architecture. Preserve the three companion illustrations, current thread styling,
all narrative copy, employer/client band and other sections.

## Reversibility

Original soft-object and prior bitmap assets remain in public/images. Saved
pre-change component and stylesheet copies in
snapshots/perspective-before-three-lens-2026-10-17/. Restore selectively; do not
overwrite unrelated pending stylesheet/component changes with full snapshots.
This supersedes only the main artwork direction in 0087 and 0092.

## Verification and actual outcomes

- Read relevant records, current source and installed Next CSS guidance.
- Focused component lint and npm run typecheck exited 0 for the initial diagram.
  Final mobile-only text/markup and CSS refinements were browser verified after
  those checks; no repeated lint/typecheck on that last static refinement.
- Desktop screenshot confirms all three lenses and centered overlap text in
  context with Many perspectives. One throughline.
- At 320px viewport: document client/scroll widths both 305px; figure client/scroll
  widths both 265px. Visually verified readable numbered mobile lens callouts with
  no text collisions, and confirmed all text including Full Funnel + Emerging
  Media via the live DOM. Reset viewport and closed temporary QA tab.
- Screenshots: three-lens-perspective-desktop.jpg and
  three-lens-perspective-mobile.jpg in this chat's visualization directory.
- git diff --check passed with existing Windows line-ending notices.
- Production build failed on EPERM removing .next/build/chunks. Inspected the
  directory (ReadOnly, Directory, Archive, ReparsePoint), verified absolute targets
  stayed within this checkout's .next, and confirmed no production build lock.
  Native PowerShell removal of that generated subtree allowed the next attempt
  to progress to another EPERM on .next/build. Guarded cleanup of .next/build and
  .next/static then allowed a third attempt to progress to EPERM on
  .next/server/app/api/povs/route. Build remains unsuccessful; source and .next/dev
  were preserved. Do not report a successful final production build.
- No new behavioral tests for a static editorial diagram; no commit, push or
  deployment. Existing development records remain immutable.
