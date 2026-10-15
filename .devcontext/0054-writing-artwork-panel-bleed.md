# Work record 0054: Writing artwork bleeds into its panel

- Date: 2026-10-14
- Status at creation: Completed and verified

## Request and changes

Michelle confirmed she sees the new artwork from
[0052](0052-art-of-possibility-image.md), but requested that it bleed off rather
than look like an image placed on top of the section.

Keep the same asset. Place the Next.js Image inside a decorative relative
wrapper and use fill with object-fit cover. Extend the wrapper through the
panel's left, top, and bottom padding on desktop and through the column gap.
Apply a broad horizontal mask that is fully opaque over the left half, then
fades toward the copy. Clip the image to the existing rounded panel boundary.
Text retains its existing separate grid column and padding.

At the existing mobile breakpoint, extend the image through the panel's top
and side padding, reserve a 260px visual area, and fade downward before the copy.
Update responsive image sizes for the larger rendered area. Remove the former
320px/260px thumbnail sizing and small four-edge mask. Keep all new layout and
image styling scoped together in editorial.css. No asset regeneration, new
service, dependency, API behavior, or authored-copy changes.

## Verification and outcomes

- npm run lint: passed.
- npm run typecheck: passed, including Next route generation.
- Final npm run build: passed, including TypeScript and static generation.
- First build encountered the existing OneDrive EPERM error unlinking a
  generated .next/static build-ID directory. Retry passed without deleting
  generated files or changing source.
- git diff --check: passed; existing line-ending notices only.
- Checks used installed Windows npm outside the sandbox; initial check shell
  used process-only memory options. No persistent configuration changes.
- Initial live check found that the browser had picked up editorial margins
  but not the new global wrapper positioning/min-height; the wrapper collapsed.
  Consolidated the complete wrapper and image declarations beside the existing
  homepage panel rules. Reloaded and confirmed position relative, min-height
  320px, and a nonzero image frame. A normal filesystem write also refreshed
  the global stylesheet after source inspection.
- Desktop: image complete, naturalWidth 519; image frame about 458 x 365px.
  Frame edges reach the panel's inner left/top/bottom border (1px inset).
  Visually inspected the full bleed, gradient and separate text area.
  Document clientWidth and scrollWidth both 1265px.
- Mobile 320px: image complete, naturalWidth 320; frame 260px tall, from x21
  to x284 inside the panel's x20 to x285 border. Visually inspected the top
  bleed, downward fade, headline, copy and contact link. Document clientWidth
  and scrollWidth both 305px; no horizontal overflow.
- Saved writing-art-bleed-desktop.jpg and writing-art-bleed-mobile.jpg in the
  chat visualization folder. Restored default viewport and closed the QA tab.
- No automated tests for this reversible presentation change; publishing
  behavior and the empty/filter sibling relationship remain unchanged.
- No commit, push or deployment.

## Files and future guidance

- [Writing library image wrapper](../src/components/pov-library.tsx)
- [Scoped bleed rules](../src/app/editorial.css)
- [Removed thumbnail rules](../src/app/globals.css)
- [Unchanged artwork and generation prompt](0052-art-of-possibility-image.md)

This supersedes only the contained-thumbnail sizing and mask treatment in 0052.
Keep the broad edge-to-edge artwork treatment with a readable separate copy
area. Check computed wrapper dimensions and actual image loading in the browser
when changing fill-based images; DOM presence alone does not verify rendering.