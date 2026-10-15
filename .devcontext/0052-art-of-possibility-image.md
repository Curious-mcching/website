# ADR 0052: Art of possibility for the writing space

- Date: 2026-10-14
- Status at creation: Accepted, implemented, and verified

## Context

Michelle supplied a screenshot showing that the previous SVG writing graphic
rendered only its glow and dots, and requested other imagery expressing ideas
and the art of possibility. Preserve her rejection of confined cubes/books in
[0051](0051-open-writing-artwork.md). Keep the calm palette and primary-action
accent decisions from [0048](0048-eucalyptus-headlines-and-single-lime-action.md).

## Decision and changes

Replace the thin SVG artwork with an original generated raster artwork: an airy,
luminous abstract horizon with broad translucent forms opening into space.
Use eucalyptus, iris, mist, and subtle warm daylight. No enclosed central object,
paper/book metaphor, graph, or words. Generate with the built-in image_gen tool,
inspect the result, and copy the selected file into the project.

Saved asset: [art-of-possibility.png](../public/images/art-of-possibility.png).
Source dimensions: 1254 x 1254; size: 1,696,317 bytes. Original output remains in
Codex's generated_images directory as exec-07bfa37e-7ca5-4bab-a354-5fc2613dbda4.png.

Use the existing Next.js image pipeline with reserved square dimensions,
responsive sizes, default lazy loading, and decorative empty alt text. Enlarge
the visual to a maximum 320px desktop and 260px mobile, allowing it to shrink to
its column. Give the desktop column a 220px minimum and .55fr proportion.
Blend the outer 8% of each image edge with intersecting CSS linear-gradient
masks so the art sits naturally in the existing panel.

Remove the SVG markup, gradient IDs, dot/curve elements, and unused SVG styles.
Preserve the writing text, unpublished state, filters, errors, contact link, and
the filter/empty-panel sibling relationship from
[0043](0043-whole-page-design-and-visitor-flow.md). No dependencies or publishing
changes. This supersedes only the SVG artwork choice in record 0051.

## Alternatives and consequences

Another thin-line diagram would continue the direction Michelle asked to move
away from. Stock business imagery or lightbulb symbols would feel generic.
The selected atmospheric artwork provides an open, imaginative focal point
without implying that writing has already been published.

The source PNG adds about 1.7 MB; Next.js supplies smaller optimized variants
for the actual display sizes. The masks affect only decorative image edges.
The artwork is conceptual digital art, not a photograph of a real venue.

## Verification

- npm run lint: passed.
- npm run typecheck: passed, including Next route generation.
- npm run build: passed after the image replacement and again after the final
  edge-blending CSS, including TypeScript and static generation.
- git diff --check: passed; existing line-ending notices only.
- Used installed Windows npm outside the sandbox, with process-only memory
  options for the previously observed memory/OneDrive constraints. No persistent
  runtime configuration change or generated-output deletion.
- Source image endpoint: HTTP 200, image/png, 1,696,317 bytes.
- Actual desktop browser: optimized image complete with naturalWidth 320,
  display width 320px; computed mask composite intersect; clientWidth and
  scrollWidth both 1265px. Inspected the full panel and its edge blending.
- Actual 320px mobile browser: optimized image complete with naturalWidth 260,
  display width about 215.2px; clientWidth and scrollWidth both 305px.
  Inspected the full image, headline, body, and contact link.
- Browser's initial navigation timed out; accessing the already-created tab
  recovered visual QA. A measurement immediately after reload found the
  asynchronous library still loading; waited for the artwork and navigated
  to the writing section before assessing lazy image loading.
- Saved art-of-possibility-desktop.jpg and art-of-possibility-mobile.jpg in
  the chat visualization directory as proof.
- Restored the default viewport and closed only the temporary QA tab.
- No automated behavior tests added or publishing tests rerun for this
  decorative asset replacement. No commit, push, or deployment.

## Generation prompt

Tool: built-in image_gen.imagegen; generation mode; transparent_background false.
No reference images were supplied as edit targets.

Use case: stylized-concept. Asset type: original fine-art editorial artwork for a sophisticated personal leadership website, square composition. Primary request: evoke 'Room for ideas. Space for what's next.' and the art of possibility through openness, imagination, and an expansive sense of light. Scene: an airy abstract horizon, where two or three broad, delicate translucent veils of light sweep gently outward and dissolve into an open luminous mist atmosphere. An elegant asymmetrical current curves upward through the lower-left and opens toward generous clear space in the upper-right; there is no closed central object. Sculptural material depth, silky frosted translucency, delicate edge refractions, intentional large readable shapes, quiet cinematic light and rich subtle tonal variation. Colour palette: mist/off-white #F5F3F8 and #E8E4F0, muted eucalyptus #80AFA5, restrained iris #6659AC, very subtle warm daylight; aubergine #221B38 only in delicate depth accents. The artwork should remain legible as a 260px visual beside editorial text, so keep a distinct luminous sweeping form and avoid overly faint thin lines. Calm, optimistic, contemporary, polished gallery-quality digital art, not a diagram. Background blends softly toward pale mist near edges. No words, text, UI, logos, watermark, border, cube, open book, paper, rectangle, box, door, room, architectural walls, enclosing ring, globe, orbital dots, graph axes, lightbulb, brain, flowers, rainbow stripes, saturated neon or busy particles.

## Files and future guidance

- [Writing library](../src/components/pov-library.tsx)
- [Image sizing and blending](../src/app/globals.css)
- [Writing-panel grid](../src/app/editorial.css)
- [Artwork](../public/images/art-of-possibility.png)
- [Previous SVG and rendering limitations](0051-open-writing-artwork.md)

Verify decorative artwork in the actual browser at its final size. A standalone
SVG render did not establish that CSS gradient references worked in the live
page; the prior screenshot demonstrated the gap. Confirm image.complete and
nonzero naturalWidth after the image enters the viewport, then inspect the
screenshot instead of treating markup presence as successful image rendering.
