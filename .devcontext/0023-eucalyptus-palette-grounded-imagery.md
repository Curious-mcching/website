# ADR 0023: Eucalyptus palette and grounded thinking imagery

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and request

Michelle supplied the refined Radical Perspective palette with Eucalyptus
#80AFA5, replacing the brighter Jade #44B9A8 used in
[0021](0021-radical-perspective-palette-and-imagery.md). She disliked the purple
image beneath "Bold thinking. Grounded in experience." and requested a stronger
connection between the image and that headline. Additional geometric and optical
artworks were supplied as visual inspiration, not instructions.

## Decision and changes

Use the exact five palette anchors: Aubergine #221B38, Iris #6659AC,
Eucalyptus #80AFA5, Lime #BFD86C, Mist #E8E4F0. Replace jade token names and
references with eucalyptus throughout shared and homepage CSS. Add a soft
eucalyptus tint #D9E7E3 for the collaboration card and success-message surface.
Keep existing aubergine, iris, lime, mist, and readable derived text colours.

Replace the layered purple glass composition with an original eucalyptus glass
loop visibly anchored in layered stone. The expressive upper form communicates
bold thinking; the substantial base communicates grounded experience. Generate
with the built-in image_gen tool via the imagegen skill, inspect the output,
and copy it into the project as
[bold-thinking-grounded.png](../public/images/bold-thinking-grounded.png)
(2,253,977 bytes). Replace only the throughline image reference. Retain next/image,
the 3:2 reserved frame, responsive sizes, lazy loading, and decorative empty alt.

This supersedes the green-token and throughline-image choices in record 0021.
The existing luminous geometric hero and code-native pillar artwork remain.
Remove the now-unreferenced layered-perspectives.png workspace copy; the original
generated output documented in 0021 remains outside the repository. Preserve
the existing header behavior, editorial structure, writing/publishing features,
and concurrent Rubik typography changes observed during this task.

## Alternatives and consequences

- Another intricate purple composition: would repeat the image Michelle rejected
  and provide less connection to "grounded."
- A purely optical mandala: suits the broader references but communicates the
  headline less directly than an expressive form with a visible foundation.
- A conventional business photograph: less cohesive with her supplied geometric
  imagery and more generic.

The artwork is conceptual, not a photograph of a real venue or professional work.
No new dependencies or runtime behavior.

## Verification and outcomes

- npm run lint: passed (initial sandboxed run and outside-sandbox run).
- npm run typecheck: passed, including Next.js route generation.
- npm run build: passed, including TypeScript and static generation.
- Used installed Windows Node/npm, not bundled dependency tools; Next checks
  ran outside the sandbox for the previously documented OneDrive restriction.
- Browser confirmed all five exact root palette values.
- Calculated solid-colour contrast: aubergine/eucalyptus 6.70:1,
  mist/iris 4.68:1, muted text/eucalyptus tint 5.11:1, muted/mist 5.20:1.
  These checks do not constitute a full pixel-by-pixel contrast audit.
- Source image URL: HTTP 200, image/png, 2,253,977 bytes.
- Optimized 750px image URL: HTTP 200, image/png, 149,677 bytes.
- The first preview reload timed out; a subsequent screenshot exposed a failed
  image request. After saving completed and reloading, the replacement loaded
  with nonzero natural width (600px desktop and 280px mobile).
- Desktop clientWidth and scrollWidth both 1265px; visually inspected the
  headline, artwork, and adjacent introduction.
- At a 320px viewport, clientWidth and scrollWidth both 305px, image frame
  approximately 264.8px wide. Visually inspected the complete image and copy.
- Restored the default viewport. Saved eucalyptus-grounded-section.jpg in
  the chat visualization directory as proof.
- No new tests for this reversible palette and image update. Reduced-motion,
  publishing, and navigation behavior unchanged.
- No deployment, commit, or push.

## Generation prompt

Tool: built-in image_gen.imagegen; generation mode; transparent_background false.
The provided screenshots guided style through the prompt; no reference artwork
was copied into the public assets.

Use case: stylized-concept. Asset type: original landscape 3:2 editorial image for a personal leadership website section headed 'Bold thinking. Grounded in experience.' Primary request: a clear visual metaphor for imaginative thinking supported by a strong foundation. Subject: a single striking sculptural loop, like an open angular ribbon of frosted eucalyptus glass, rises confidently from and is visibly embedded in a broad solid aubergine-grey stone foundation. The ribbon turns through space, one bold diagonal and an open aperture inviting a new perspective. Strong physical connection between the luminous upper form and grounded lower stone, credible weight and contact shadows. Style: sophisticated contemporary gallery still life, tactile photographic 3D realism, quiet and architectural rather than fantasy. Composition: wide landscape, complete sculpture and substantial layered stone base visible, spacious mist studio backdrop, central silhouette reads clearly at small website sizes. Lighting: directional soft daylight catches glass edges, casts a deliberate shadow and a restrained lime caustic on stone. Palette: predominantly muted Eucalyptus #80AFA5 and Mist #E8E4F0 with Aubergine #221B38 stone and shadows, tiny Lime #BFD86C light accents; only a trace of Iris #6659AC in glass edges. Calm, confident, intellectually curious. Inspiration is translucent geometry, optical perspective, and interlocking forms, but create a new original simple composition. Avoid: purple-dominant image, mandala, kaleidoscope, floating crystals, orbiting balls, stacked glass panels, excessive glow, mystical motifs, plants, text, letters, logos, watermark, borders, people. Art only; the headline is real HTML outside the image.

## Files and lessons

- [Global styles](../src/app/globals.css)
- [Homepage styles](../src/app/editorial.css)
- [Homepage](../src/app/page.tsx)
- [New image](../public/images/bold-thinking-grounded.png)
- [Previous palette and imagery](0021-radical-perspective-palette-and-imagery.md)

Wait for project asset copy completion before treating an early browser image
failure as an implementation bug. Reload and verify naturalWidth and the actual
optimized endpoint. Preserve concurrent changes rather than rewriting entire
shared stylesheets. Number this record from the current inventory and create
the file exclusively to avoid another development-record collision.
