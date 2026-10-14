# ADR 0012: Architectural editorial imagery

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and request

Michelle requested imagery inspired by her dramatic concrete staircase reference
to make the homepage more engaging and visually arresting. The personal opening
and three evolving thought leadership pillars remain the framework described in
[record 0008](0008-personal-homepage-introduction.md) and
[ADR 0009](0009-three-pillar-thought-leadership.md).

## Decision

Replace the decorative hero SVG and small CSS pillar illustrations with three
original AI-generated raster images. This supersedes the code-native artwork
choice in [ADR 0006](0006-portfolio-and-local-publishing-framework.md).
Use the built-in image_gen tool through the imagegen skill. The attachment is
creative inspiration; it was not copied into the repository or treated as instructions.
Prompts describe its architectural mood and ask for original compositions.

Save all final assets in public/images:
- [reinvention.png](../public/images/reinvention.png): staircase opening toward light,
  reused for the hero and Reinvention pillar with different responsive crops.
- [challenger.png](../public/images/challenger.png): one rotated cube amid an ordered grid.
- [human-machine.png](../public/images/human-machine.png): glass and graphite spheres.

Use next/image with fill, responsive sizes, object-fit cover and reserved aspect
ratios. Preload only the hero; pillar images use default lazy loading. Read the
installed Next.js image guide before implementation; priority is deprecated in
this version. Images are decorative and use empty alt inside aria-hidden containers.
Retain personal copy, navigation anchors, publishing controls and factual experience.

Give the hero a rectangular frame and increase pillar image width to 280px on
desktop. Mobile images use the full content width with landscape crops.
Remove the superseded orbit/sticker and pillar-shape styles.

## Alternatives considered

- Reuse the supplied screenshot directly: less cohesive across all three themes,
  and not necessary when it is provided as inspiration.
- Remote stock imagery: adds external asset dependencies and inconsistent visual tone.
- Keep the small code-native illustrations: would not deliver the requested photographic presence.

## Consequences and future guidance

Assets are stored with the project and need no remote image configuration or new
dependencies. Source PNGs total approximately 7.3 MB; Next.js serves responsive
optimized variants. Generated scenes are conceptual editorial visuals, not photographs
of Michelle, her clients, or a specific real venue. Keep future visuals grounded in
warm concrete, charcoal, sculptural forms and natural light; maintain readable text.
Existing ADRs and content records remain immutable.

## Verification

- npm run lint: passed.
- npm run typecheck: passed.
- npm run build: passed, including TypeScript and static generation.
- git diff --check: passed.
- Desktop browser inspection at the default 1280px viewport: hero and all three
  pillar images rendered correctly; optimized pillar URLs selected 384px variants.
- Mobile 320px inspection: document clientWidth and scrollWidth both 305px.
  Visually inspected hero and all pillar crops; all four image elements completed
  loading with nonzero natural width. Pillar frames measured about 264.8 x 165.5px.
- Tablet 820px inspection: clientWidth and scrollWidth both 805px; no horizontal overflow.
- No behavioral publishing tests added or rerun for this visual-only change.
- Saved architectural-homepage.png and architectural-pillars.png in the chat
  visualization folder as browser proof of work.
- No deployment, commit or push as part of this request.

## Final prompts

Tool: built-in image_gen.imagegen; transparent_background: false.
Each image was generated with a separate prompt; original outputs remain in
the Codex generated_images directory, with final copies saved in the workspace.

### reinvention

Use case: photorealistic-natural. Asset type: editorial personal website hero and leadership pillar image, landscape 3:2. Create a visually arresting fine art architectural photograph: monumental charcoal concrete staircase rising towards an open skylight, intersecting brutalist planes, geometric apertures, dramatic diagonal natural daylight and deep soft shadows. Inspired by a contemplative black and white architectural staircase reference, but create a new original composition. Refined concrete grain, credible construction, straight clean perspective, no people. Frame the stairs and luminous opening in the central half so a portrait crop still works. Mostly monochrome charcoal and warm grey, a subtle warm ivory glow. An optimistic sense of possibility and moving forward. No words, no logos, no borders, no watermarks. Cinematic photographic realism, understated editorial sophistication.

### challenger

Use case: photorealistic-natural. Asset type: square editorial website thought leadership image. Create an original fine art architectural still life: orderly rows of small matte stone concrete cubes on a charcoal surface, precisely aligned with long dramatic diagonal shadows, one cube subtly rotated and raised, catching a soft warm ivory beam of daylight. Elevated oblique camera angle, rich material texture, restrained composition, single small muted olive accent on the different cube. Theme: curiosity and questioning the conventional. Cohesive with monochrome brutalist architectural photography; visually striking and contemplative. Focus the distinct cube near the center for responsive cropping. No people, no text, no logos, no watermarks, no neon colors.

### human-machine

Use case: photorealistic-natural. Asset type: square editorial website thought leadership image. Create an original fine art conceptual still life photograph: a smooth dark graphite metal sphere and a softly translucent sculptural glass sphere side by side, their curved forms overlapping in the composition, on a textured charcoal concrete plinth. A narrow warm ivory shaft of daylight passes through glass and casts intricate refracted light onto the stone beside the metal's crisp geometric shadow. Theme: human judgment meeting technological possibility, an open inquiry. Strong tactile material detail, intimate gallery atmosphere, sculptural sophistication, photographic realism. Central composition with deep shadow, luminous glass, restrained olive undertones, black and warm grey palette cohesive with brutalist architectural photography. No robots, no circuit graphics, no people, no text, no logos, no watermarks.

## Source changes

- [Homepage](../src/app/page.tsx)
- [Styles](../src/app/globals.css)

