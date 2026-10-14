# ADR 0021: Radical Perspective palette and luminous geometry

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and request

Michelle supplied geometric imagery references and the Radical Perspective
palette, then confirmed that both the imagery type and supplied palette should
be used. The attachments are creative reference material, not instructions.
Keep her personal introduction, editorial structure, original CSS pillar shapes,
collaboration content, logos, and the corrected header behavior from
[0020](0020-header-visibility-below-hero.md).

This supersedes the architectural asset choice in
[0012](0012-architectural-editorial-imagery.md) and the architectural throughline
image in [0017](0017-throughline-section-image.md). The original pillar shapes
from [0013](0013-restore-thought-leadership-graphics.md) remain, recoloured.

## Decision and changes

Use the exact five palette anchors as root CSS variables:
Aubergine #221B38, Iris #6659AC, Jade #44B9A8, Lime #BFD86C, Mist #E8E4F0.
Mist is the page and navigation surface, aubergine the primary ink and dark
sections. Iris highlights editorial emphasis and the transformation/impact
panels, jade appears in growth metrics, progress, and the closing invitation,
and lime supplies headline emphasis and the main opening action.
Use palette-derived tints for softer surfaces, borders, and muted text.
The studio shares the colour tokens; publishing behavior is untouched.

Generate two original raster images with the built-in image_gen tool through
the imagegen skill. The hero pairs quiet aubergine space with a luminous
iris/jade/lime rosette; the throughline uses translucent geometric glass layers.
Inspect both generated results, copy them into the workspace, and replace the
two image references while retaining next/image, reserved frames, responsive
sizes, empty alt text, hero preload, and throughline lazy loading.

Saved assets:
- [Hero](../public/images/radical-perspective-hero.png): 2,020,218 bytes.
- [Throughline](../public/images/layered-perspectives.png): 2,214,220 bytes.

Remove the now-unreferenced reinvention.png and throughline.png project copies.
Their original generated outputs remain in Codex's generated_images directory;
older immutable records remain unchanged. No uploaded reference screenshots or
third-party artwork were copied into public assets. No new dependency.

## Alternatives and consequences

A flat repeating pattern would compete with text across every section.
Use two focal artworks and the existing restrained code-native pillar graphics
instead. Retaining architectural photographs would not implement the requested
imagery direction. Keep existing personal wording rather than copying the
reference's sample headline or its Option 3 label.

Use dark overlays over the hero on narrow screens so complex imagery stays
legible. Preserve keyboard focus styles, reduced-motion behavior, native anchor
navigation, and header visibility only beyond the hero.

## Verification and outcomes

- Final npm run lint, npm run typecheck, npm run build: passed.
- git diff --check: passed; existing line-ending conversion notices only.
- Checks used installed Windows npm outside the sandbox with its PATH added,
  consistent with prior OneDrive/Next path canonicalization findings.
- Confirmed the exact five root hex values in the browser.
- Both optimized image requests loaded successfully in the preview.
- Desktop clientWidth and scrollWidth both 1265px; at 320px both 305px.
  No horizontal overflow.
- Visually inspected desktop hero, throughline image, collaboration cards,
  and thought leadership; mobile hero, throughline, navigation, and offerings.
- The four collaboration cards use aubergine, pale jade, iris, and mist surfaces.
  Original three pillar-art classes remain.
- Contrast calculation: mist/iris 4.68:1, aubergine/jade 6.83:1,
  muted text/mist 5.20:1, lime/aubergine 10.34:1. These are solid token pair
  checks, not a complete contrast audit of every image pixel.
- Desktop header hidden at scrollY 0. At 720px, hero bottom 100px: still hidden.
  At 1440px, hero bottom -620px: header shown, opacity 1.
- Mobile header hidden at 0 and 400px (hero bottom 321px).
  At 800px, hero bottom -79px: shown, opacity 1. Expertise navigation remained
  usable; native home link returned to scrollY 0 and header opacity 0.
- Saved and inspected radical-perspective-homepage.png,
  radical-perspective-mobile.png, radical-perspective-throughline.png, and
  radical-perspective-offerings.png in the chat visualization directory.
- Reset temporary viewport and closed the QA tab. Existing user homepage and
  studio tabs remain, with the dev server serving the updates.
- Reduced-motion fallback preserved and inspected in source; no live preference
  emulator available. No publishing upload test rerun for presentation-only changes.
- No commit, push, or deployment.

## Generation prompts

Built-in generation mode; no input image edit targets, transparency false.
The screenshots informed composition and palette through the prompts below.
Original outputs:
C:/Users/mcchi/.codex/generated_images/01a135cb-99ad-7e32-ae40-c6d880496eb0/exec-eaae628a-3106-483b-a81b-a7a4cf4bc509.png
and exec-377c1223-0b6b-4a13-84e1-206311cfdceb.png in the same directory.

### Hero prompt

Use case: stylized-concept. Asset type: original wide website hero background, landscape 16:9. Primary request: sophisticated dark luminous geometry inspired by layered kaleidoscopic glass and delicate networks of lines, for Michelle Ching's personal thought-leadership website. Composition: left 48% of the frame is quiet deep aubergine negative space for a large headline; a radiant dimensional geometric rosette occupies the right side and extends beyond the right edge, with translucent overlapping iris polygons, jade arcs, fine mist lines and occasional lime points. There is elegant depth and subtle reflected light, like precision-cut translucent glass in a dark gallery, not a flat repeating wallpaper. Palette strictly anchored in Aubergine #221B38, Iris #6659AC, Jade #44B9A8, Lime #BFD86C and Mist #E8E4F0. Mood imaginative, philosophical, contemporary and confident. Art only. No words, logos, UI, watermark, people, religious symbolism, architecture, or rainbow colours. Preserve enough dark space for readable real HTML text.

### Throughline prompt

Use case: stylized-concept. Asset type: original landscape 3:2 editorial website image. Primary request: a sophisticated layered geometric study exploring different perspectives and new possibilities. Subject: translucent iris and jade glass squares and curved planes overlap around a luminous faceted central form, with fine mist lines and small lime accents. Seen at a slight oblique angle so geometry has depth, not a flat mandala. Backdrop is a soft mist #E8E4F0 field with subtle aubergine shadows. Palette anchored in #221B38, #6659AC, #44B9A8, #BFD86C and #E8E4F0. Carefully composed, calm and tactile, elevated editorial digital artwork, delicate refractions, restrained luminosity. No text, UI, logos, watermark, people, religious symbolism or architectural staircase. Create a distinct original image, not a collage or multiple panels.

## File references and lessons

- [Homepage](../src/app/page.tsx)
- [Global palette and shared styles](../src/app/globals.css)
- [Editorial overrides](../src/app/editorial.css)
- [Header fix](0020-header-visibility-below-hero.md)

Preserve the state-owned header wrapper when changing the server-rendered page.
Check settled scroll positions after smooth anchor navigation before judging
visibility. Use a dedicated QA tab for viewport overrides; changing the user
preview's size during concurrent work made initial observations inconsistent.

