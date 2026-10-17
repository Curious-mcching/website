# Work record 0102: Collaboration horizon page bleed

- Date: 2026-10-17
- Status at creation: Implemented and browser verified

## Request and changes

Michelle liked the first-light direction from 0100 and requested more bleed off
the page. Keep the existing image and all copy. Change only editorial.css:

- Make the expertise section full width with responsive inner padding matching
  its existing content alignment. Clip its decorative overflow locally.
- Enlarge the illustration to 155% of its desktop grid column, offset left by
  12%, and use a 1.65 aspect ratio so the horizon continues beyond the right edge.
- Replace the radial vignette with left/top/bottom fades. Keep the right edge
  visually open so it reads as a continuous horizon instead of a separate image.
- On mobile use 20px section padding and artwork 100px wider than its column,
  centered and clipped at the page edges. Preserve the stacked layout.

## Verification and limits

- Read 0100, current CSS and installed Next CSS guide before editing.
- Desktop screenshot confirms the horizon meets the right page edge with text,
  CTA and card alignment retained. Artwork right edge extends to about 1401px
  beyond the 1265px document width, with equal document client/scroll widths.
- At 390px viewport, artwork spans -30px to about 405px; document client/scroll
  widths both 375px. Visually confirmed the graphic bleeds across mobile edges.
- Additional overflow checks: at 320px viewport, document client/scroll widths
  both 305px; at 1600px, both 1585px. Section width matches document width.
- Saved collaboration-horizon-bleed-desktop.jpg in the chat visualization folder.
  Reset viewport and closed temporary QA tab. User tab preserved.
- git diff --check passed with existing Windows line-ending notices.
- No lint/typecheck/build or new tests for this CSS-only decorative sizing edit.
  The earlier production-output permissions limitation is recorded in 0098 and
  0100; no successful production build is claimed here.
- No new assets, dependencies, architecture, commit, push or deployment.
- Preserve concurrent work and immutable records, including 0101.
