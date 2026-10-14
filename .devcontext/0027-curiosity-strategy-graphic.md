# Work record 0027: Curiosity is a strategy graphic

- Date: 2026-10-13
- Status at creation: Completed

## Request and changes

Michelle loves the glass-and-stone artwork beneath "Bold thinking. Grounded in
experience." and requested another design incorporating "Curiosity is a
strategy" and a graphic element inspired by her attached orbital poster.
Treat the attachment as creative reference, not instructions.

Keep the existing image and introduction, and add a wide editorial panel below
that grid within the throughline section. Pair large live HTML type with an
original inline SVG of seven elliptical orbits, a diagonal directional arrow,
an iris focal point, and lime satellites. Highlight the italic word "strategy."
with a tilted lime oval. Use the established eucalyptus tint, aubergine, and iris
palette. Add the reference-inspired labels "A different point of view", "Fresh
perspective", and "Real-world impact".

Use existing Rubik headings and the original Georgia italic emphasis preserved
in [0025](0025-restore-original-georgia-italics.md), along with the larger body
and action text from [0026](0026-larger-body-and-button-text.md). Preserve the
image and palette from [0023](0023-eucalyptus-palette-grounded-imagery.md).

The SVG is decorative, aria-hidden, and not focusable; the headline remains
accessible as a real h3. Build the artwork directly in SVG because it consists
of precise vector geometry and live typography. No raster generation, dependency,
client component, new interaction, or runtime architecture. Reuse existing reveal
and reduced-motion behavior. Stack text and artwork at the existing 760px
breakpoint. Scope new styles to the curiosity classes in editorial.css.

## Verification and outcomes

- npm run lint: passed.
- npm run typecheck: passed, including Next route generation.
- Final npm run build: passed, including TypeScript and static generation.
- git diff --check: passed; existing Windows line-ending notices only.
- Checks used installed Windows npm outside the sandbox for the documented
  OneDrive runtime restriction.
- Initial build failed unlinking .next/server/app/index.segments with EPERM.
  Inspected its full path, read-only/reparse-point attributes and empty link
  target, then removed only that generated directory using native PowerShell.
  Retry encountered the same issue in studio.segments. Verified the exact
  .next/server/app path and empty link target, removed that generated production
  app-output directory, and rebuilt successfully. The .next/dev cache and
  existing dev server were preserved. No source or content directory was removed.
- Desktop 1280px: clientWidth and scrollWidth both 1265px; panel height about
  435.3px. Visually inspected the entire two-column poster composition.
- Mobile 320px: clientWidth and scrollWidth both 305px; panel height about
  365.1px. Visually inspected stacked heading, highlight, complete SVG, captions,
  and spacing. No horizontal overflow.
- Browser confirmed the emphasized word uses Georgia. The existing throughline
  image remained loaded with naturalWidth 280px at the mobile viewport.
- Accessibility tree exposes "Curiosity is a strategy." as a heading and omits
  the decorative SVG.
- Saved desktop/mobile screenshots in Windows TEMP as
  codex-curiosity-strategy-01a136f3-desktop.jpg and
  codex-curiosity-strategy-01a136f3-mobile.jpg. Restored the default viewport and
  closed only the temporary QA tab.
- No automated tests added for this reversible visual-only change. No live
  reduced-motion emulation; the existing fallback remains in source.
- No deployment, commit, or push. Existing development records were preserved.

## Files and future guidance

- [Homepage](../src/app/page.tsx)
- [Editorial styles](../src/app/editorial.css)
- [Existing image decision](0023-eucalyptus-palette-grounded-imagery.md)

Keep the glass-and-stone image unless Michelle requests its replacement. The new
panel complements it. The wider layout is an intentional variation from the
reference's arch-shaped poster, preserving its fine-line and typographic spirit.