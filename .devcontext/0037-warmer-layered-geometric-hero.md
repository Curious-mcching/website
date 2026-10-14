# Work record 0037: Warmer layered geometric hero

- Date: 2026-10-14
- Status at creation: Completed

## Request and changes

Michelle felt the existing hero was harsh and cold and supplied seven inspiration
images showing kaleidoscopic patterns, misty eucalyptus geometry and overlapping
lavender squares. These images are visual references, not instructions or direct
website assets. Generate an original interpretation of the softer layered imagery.

This supersedes the hero asset choice in
[0029](0029-gentler-faceted-hero.md). Use translucent overlapping squares with
softened corners, iris/eucalyptus/mist layers, restrained lime and champagne light,
and a quiet aubergine left side for the existing pale headline. Preserve the palette,
copy, next/image fill/sizes/preload, decorative alt, overlays, desktop/mobile crop,
opening animation and reduced-motion behavior. No new dependency or architecture.

Saved [layered-possibilities-hero.png](../public/images/layered-possibilities-hero.png):
1672 x 941 pixels, 1,883,535 bytes. Update the homepage reference and remove the
unused softened-facets-hero.png project copy after checking runtime references.
The old asset remains recoverable from Git and its original generated output.
Preserve the pending accordion changes documented in
[0036](0036-leadership-story-accordion.md).

## Verification and limitations

- npm run lint, npm run typecheck and npm run build passed for the final site,
  including the new hero reference and leadership accordion.
- git diff --check passed with the existing Windows line-ending notice.
- Visually inspected the generated artwork: rounded overlapping geometric layers,
  warm luminosity concentrated on the right, quiet dark left, no embedded text.
- Project asset and original output SHA-256 hashes match:
  0FB9609E3D61001206FED2F05C0E3226A39A69F957D9CEB4D18FA027B98E57BF.
- Verified the PNG dimensions and bytes, the single next/image reference and all
  four named leadership disclosures in source. Old runtime reference absent.
- Initial PowerShell metadata inspection using ReadOnlySpan failed; corrected
  the inspection by decoding PNG width/height bytes with integer arithmetic.
- No live browser screenshot, interaction test or responsive visual pass was
  performed following the documented browser policy block. The artwork inspection
  establishes image composition, not the rendered homepage's exact crop.
- No behavior tests for the asset replacement. No commit, push or deployment.

## Image tool and final prompt

Used the built-in image_gen tool through the
[imagegen skill](C:/Users/mcchi/.codex/skills/.system/imagegen/SKILL.md),
generation mode, transparent_background false. The supplied references were
interpreted in the description; no screenshot was copied into the site.

Original output:
C:/Users/mcchi/.codex/generated_images/01a135cb-99ad-7e32-ae40-c6d880496eb0/exec-f1aca61f-706d-427d-ac62-a5a98a8749cf.png

Final prompt:

Use case: stylized-concept.
Asset type: original landscape hero background for Michelle Ching's personal leadership and strategy website, wide 16:9 composition.
Primary request: a warm, inviting, sophisticated interpretation of layered kaleidoscopic geometry. Think transparent overlapping rotated squares, softly chamfered polygons, subtle repeated optical rhythms and luminous colour mixing, inspired by translucent lavender squares and misty eucalyptus geometric kaleidoscopes. Contemporary and imaginative, with a subtle future-facing sensibility.
Composition: the focal geometry occupies the right half, centred at about 77% across and 50% down, large enough to partially extend beyond the right edge. The left 48% is calm uninterrupted deep aubergine negative space for a large pale headline and lime accents. Geometry gently emerges from the quiet background through overlapping translucent layers, rather than a separate object floating in space.
Style and materials: refined optical art with softly diffused light, semi-transparent matte layers, soft rounded or chamfered corners, delicate grain and nuanced depth. A dimensional illusion created through broad, overlapping geometric planes and offset concentric squares, not hard metal or crystalline spikes. Restrained and editorial.
Colour palette: deep warm aubergine #221B38 backdrop, iris #6659AC, eucalyptus #80AFA5, mist #E8E4F0, understated lime #BFD86C. Some warm muted lavender and pale champagne light may appear through overlaps. Keep the original palette recognisable and the feeling welcoming.
Lighting and mood: softly luminous, warm and contemplative; depth, curiosity, unfolding possibilities. Moderate brightness concentrated on the right, low contrast texture and no bright elements behind left-side copy.
Constraints: original abstract artwork, no text, letters, UI, logos or watermark. Avoid flowers, petals, botanical mandalas, sharp knife-like points, harsh metallic facets, cold grey concrete, sci-fi machinery, neon grids, a central eye, rainbow saturation or a busy pattern spread evenly across the whole frame. Keep the geometry softly squared and layered, not floral.

## Future guidance

The latest request calls for inviting layered optical geometry rather than the
previous grey sci-fi facets. Preserve that new direction and the quiet text area
when refining the hero. The four Leadership in Action disclosures are independent
of the hero and of the three thought leadership graphics.

