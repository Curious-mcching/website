# Work record 0087: Distinct shadow shapes and selected soft object

- Date: 2026-10-16
- Status at creation: User-selected softer image implemented and browser verified

## Requests and direction

Following 0086, Michelle requested a different object with distinctly different
shadow shapes to convey one object seen from several sides. Edited the graphic
with built-in imagegen into one softer asymmetric solid with an oval projection,
a rounded-square projection and a rounded triangular projection, preserving the
lime crochet thread, palette and seamless mist background.

An intermediate edit restored visible continuity of the thread across the lower
front. She asked for more obvious object angles, so another edit made top, front
and side faces distinct with iris, aubergine and teal surfaces. Applied that
variant briefly. She then supplied a screenshot and explicitly said 'try this',
selecting the EARLIER softer solid with no sharply separated colored faces and
the thread partly occluded by the solid. Match that selection exactly rather
than reintroducing the subsequently defined faces or visible front-thread arc.

## Final implementation

Use the original full-resolution image corresponding to her screenshot:
`exec-d14fe390-ade7-4e8d-a4ba-bcef37a2bd65.png` in this chat's generated_images.
Copied it to `public/images/perspective-one-object-many-views-soft.png` and verified
matching SHA-256 hashes. Updated only the Image source in PerspectiveArtwork.
Retain the existing feathered edge masks, image sizing, live name below, three
small illustrations, experience copy and approved shared employer/client band.
Previous variants and the original SVG snapshot remain available to revert.

Exact edit prompts and provenance are in
`design-previews/perspectives-2026-10-16/option-1-distinct-shadow-edits.md`.
The projections are a conceptual editorial metaphor, not a physically validated
optical simulation or a claim about measured experience.

## Verification and actual outcomes

- Lint, typecheck and build all passed for the defined-face variant. Final
  selection changes only the bitmap and its source string; no repeat test suite
  for that asset-only selection. Verified final asset copy and live loading.
- Desktop browser loaded the selected soft asset; artwork clientWidth and
  scrollWidth both 568px. Screenshot confirms softer solid, distinct shadow
  silhouettes, neon stitched thread and seamless edge fade in context.
- Saved selected-soft-perspectives-desktop.jpg in this chat's visualization folder.
- At 320px viewport: document clientWidth/scrollWidth both 305px, artwork
  clientWidth/scrollWidth both 265px and name width 130px. Verified responsive
  image loading; reset viewport and closed QA tab.
- git diff --check passed with existing Windows line-ending notices. No commit,
  push or deployment. Original runtime artwork backups intentionally retained
  for the user's explicit request to keep versions for possible reversal.
