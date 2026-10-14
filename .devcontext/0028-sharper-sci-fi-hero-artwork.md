# ADR 0028: Sharper sci-fi hero artwork

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and request

Michelle felt the luminous rosette hero looked too floral and requested a more
modern, sophisticated sci-fi interpretation of her geometric references.
Reviewed the existing image and relevant records, including
[0021](0021-radical-perspective-palette-and-imagery.md),
[0023](0023-eucalyptus-palette-grounded-imagery.md), and the typography/text
updates in [0025](0025-restore-original-georgia-italics.md) and
[0026](0026-larger-body-and-button-text.md).

## Decision and changes

Replace the hero rosette with one original asymmetric composition of angular
facets, translucent planes, nested polyhedra, and precise wireframe lines.
Retain a quiet aubergine left side for the headline and place the geometry on
the right. Use the currently approved Eucalyptus #80AFA5 palette refinement,
with Aubergine #221B38, Iris #6659AC, Lime #BFD86C, and Mist #E8E4F0.

Generate a new image with the built-in image_gen tool through the imagegen
skill, inspect it, and save the project copy as
[angular-perspective-hero.png](../public/images/angular-perspective-hero.png)
(2,119,239 bytes). Update the homepage's single image reference. Existing fill,
sizes, preload, decorative empty alt, overlays, mobile crop, and finite image
transition are retained. Keep the current Rubik/Georgia typography, larger
copy/buttons, grounded thinking image, curiosity panel, and header behavior.

Remove the now-unreferenced radical-perspective-hero.png project copy. Its
original generated output remains in Codex's generated_images directory as
documented in record 0021. This supersedes only that record's rosette hero
choice. Older development records are unchanged.

## Alternatives and consequences

Recolouring the rosette would preserve the floral silhouette Michelle disliked.
Changing to a generic space or technology photograph would depart from her
geometric references. Angular layers and restrained material/edge illumination
provide a sharper visual language without adding animation or dependencies.
No new architectural runtime behavior or content changes.

## Verification

- npm run lint: passed.
- npm run typecheck: passed.
- npm run build: passed, including TypeScript and static page generation.
- git diff --check: passed; existing line-ending conversion notices only.
- Checks used installed Windows npm outside the sandbox, consistent with the
  prior OneDrive path canonicalization findings.
- Optimized hero image loaded with nonzero natural width in the browser.
- Desktop clientWidth and scrollWidth both 1265px; mobile at 320px both 305px.
- Visually inspected desktop and mobile composition and text legibility.
- Mobile opening header remained hidden as expected.
- Saved inspected previews to .next/qa/angular-hero-desktop.png and
  .next/qa/angular-hero-mobile.png. These are ignored build-area QA artifacts
  and may be removed by future cache cleanup.
- Reset the viewport and closed the temporary QA tab. Existing user preview
  remains open. No commit, push, or deployment.
- No behavior tests added for this reversible image-reference replacement;
  navigation, publishing, and reduced-motion implementations are unchanged.

## Generation prompt

Built-in image_gen generation mode; transparent_background false.
No edit target was supplied to the generator. The existing hero was inspected
before producing the replacement. Original generated output:
C:/Users/mcchi/.codex/generated_images/01a135cb-99ad-7e32-ae40-c6d880496eb0/exec-a3941be1-4828-405a-92cb-8e9cabeed8ba.png

Use case: stylized-concept. Asset type: original 16:9 landscape background for Michelle Ching's personal website hero. Primary request: sophisticated modern sci-fi geometry, replacing a composition that looked too floral. Create an asymmetric spatial structure of sharp intersecting planar polygons, offset nested angular polyhedra, and precisely drawn triangular wireframe lattices. Think of a finely engineered impossible geometric object seen in perspective, with a few translucent flat glass facets and many crisp straight edges. Place the main structure on the right 55% of the frame, extending just beyond the right edge. The left 45% must be quiet dark negative space for large real HTML text; avoid bright lines crossing it. Background deep Aubergine #221B38 with restrained dimensional light and a subtle atmospheric falloff. Current site palette: muted Eucalyptus #80AFA5 and Mist #E8E4F0 edge highlights, subtle Iris #6659AC glass facets, tiny Lime #BFD86C light accents. Art-directed, elegant, intelligent and futuristic; precise understated luminosity, no noisy neon or gaming aesthetic. Visually angular and architectural in its geometry without depicting a building. No petals, flowers, leaves, organic loops, rounded rosettes, circular mandalas, radial botanical symmetry, ribbons, vines, glowing starbursts, sparkles, people, text, UI, logos or watermarks. Only a single complete editorial artwork, not a collage or multiple panels.

## Relevant files and lesson

- [Homepage](../src/app/page.tsx)
- [Hero asset](../public/images/angular-perspective-hero.png)

Rounded radial symmetry can read as botanical even when described as geometric.
For this hero, favour asymmetry, straight-edged planes, and perspective lattices.

