# Work record 0086: Option 1 with integrated neon crochet throughline

- Date: 2026-10-16
- Status at creation: Implemented and browser verified; user now refining object/shadow shapes

## Requests and implementation

Michelle selected option 1 from record 0085 and requested flow into the page.
Applied the one-form/three-shadows graphic beside Many perspectives. Retain
the existing layout, live name below, three smaller illustrations, all copy and
the employer-left / agency-client-right band.

She then requested restoring the throughline, found the first overlay disjointed,
and clarified that it should pass THROUGH the image to connect the perspectives.
An initial native SVG overlay was removed. Edited the bitmap with built-in
imagegen instead, preserving the scene and adding an integrated connecting
stroke. Corrected an unwanted upper branch in a follow-up edit. She requested a
crochet-style line, then a neon color. Applied fine linked crochet stitches and
electric lime, interpreted from her 'neo colour' request. This latest explicit
request allows lime on the connecting thread despite earlier CTA-only guidance.

Final asset at this point:
`public/images/perspective-three-shadows-neon-crochet.png`

The connecting line is now part of the image; no SVG overlay or text halo remains.
Keep feathered linear masks around the image for page blending, with the top and
bottom opaque range adjusted to 8–86% to preserve the taller form. Earlier
versions remain saved for the user's requested reversibility. The original SVG
source snapshot from 0079 is still retained.

Exact image-edit prompts, tool provenance and final asset path are saved in
`design-previews/perspectives-2026-10-16/option-1-throughline-edits.md`.

## Verification and outcomes

- Verified initial Option 1 asset copy against its design-preview SHA-256 hash.
- Lint, typecheck and build passed for the initial image. Lint/typecheck and
  production build also passed during the overlay refinement. After removing
  the overlay, lint and typecheck passed again. Production build passed for the
  crochet image version. Final neon change modifies only the image URL/bitmap;
  runtime image loading and fit were verified rather than repeating all checks.
- Desktop final neon image loaded, naturalWidth 640, wrapper clientWidth and
  scrollWidth both 568px. Visually inspected the integrated stitch line and page
  blend. Saved neon-crochet-throughline-desktop.jpg in the visualization directory.
- At 320px viewport: document clientWidth/scrollWidth both 305px, artwork
  clientWidth/scrollWidth both 265px, name width 130px; responsive image loaded
  with naturalWidth 320. Reset viewport and closed QA tab.
- git diff --check passed with line-ending notices. page.tsx and LogoCarousel
  have no content diff from HEAD. No new behavioral tests for decorative graphics.
- No commit, push or deployment.

## Latest direction

After this implementation, Michelle asked for a different central shape and
more distinct shadow shapes to better illustrate one object, multiple views.
That refinement supersedes the three similar elongated shadow shapes. Continue
using the approved palette and connected neon crochet throughline.
