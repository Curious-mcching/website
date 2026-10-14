# Work record 0039: Leadership artwork background bleed

- Date: 2026-10-14
- Status at creation: Completed

## Request and changes

Michelle liked the companion artwork but wanted its background to bleed into
the page rather than look like a separate framed image. This supersedes the
rounded frame treatment in [0038](0038-leadership-companion-artwork.md).

Keep the approved raster asset unchanged. Remove the rounded corners, clipped
frame and eucalyptus backing surface. Add one positioned inner wrapper that
extends the artwork beyond its reserved grid area to the right viewport edge,
with slight overlap into the surrounding space. Use a radial CSS mask to feather
the artwork into the section's existing background. Clip overflow at the section
boundary to contain the decorative bleed without horizontal scrolling.

Retain the outer aspect ratio to reserve layout space, the two-column desktop
layout, mobile stacking, empty decorative alt and aria-hidden treatment. Mobile
bleed extends 20px into each side gutter. Update next/image sizes for the enlarged
display area. Disable pointer events on the decorative artwork so it cannot
intercept nearby interactions. No new assets, dependencies or client behavior.

## Verification and limitations

- npm run lint, npm run typecheck and npm run build passed after this change.
- git diff --check passed with the existing Windows line-ending notice.
- Reviewed source for removed frame/background, desktop and mobile bleed insets,
  radial edge transparency, overflow containment and enlarged image sizes.
- Approved artwork, headline, introduction and four accordion stories unchanged.
- No live browser or responsive visual check performed following the previously
  documented browser policy block. Build/source checks do not establish the exact
  rendered fade or browser-level overflow measurements.
- No behavior tests for this reversible presentation change.
- No commit, push or deployment.

## Files and future guidance

- [Decorative image wrapper](../src/app/page.tsx)
- [Bleed and mask styles](../src/app/editorial.css)

The intended presentation is an integrated decorative background, not a rounded
image card. Preserve the reserved outer frame for layout stability and use the
inner wrapper for any future expansion or edge treatment.
