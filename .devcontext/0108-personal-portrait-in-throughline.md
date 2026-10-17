# Work record 0108: Personal portrait in the Throughline

- Date: 2026-10-17
- Status at creation: Implemented; focused lint, typecheck and responsive preview
  checks passed

## Request and placement

Michelle supplied Michelle Image - 2025.jpg and asked for it to be added to the
website in the recommended location. Apply the placement proposed in
[0105](0105-personal-portrait-recommendation.md): beside the personal introduction
under Bold thinking. Grounded in experience. This makes the portrait part of the
biographical story after the abstract hero. Placement is a design judgment; no
conversion or hiring benefit is claimed. Reconsulted NN/G's Photos as Web Content
article, which supports using relevant portraits on personal websites:
https://www.nngroup.com/articles/photos-as-web-content/

## Changes

- Copy the supplied 584x438 JPEG into public/images/michelle-ching-2025.jpg.
  SHA-256 of source and copied asset both:
  7F3E1E9022410724CA2CA4F687C7A02F9AF64969C9443F96E3B3C15F5630042F.
  The source file remains untouched; no retouching, recoloring, generation or
  pixel crop. Retain its natural colour and full 4:3 composition.
- Replace the existing left-hand orbital illustration with a semantic figure
  containing a Next Image and figcaption. Keep the Curiosity is a strategy message,
  A different point of view label and Fresh perspective / Real-world impact line.
  Set the message as a readable, compact caption beneath the photograph rather
  than competing with the main section headline. Keep the existing strategy accent.
- Render the portrait at width 100% with automatic height and the existing
  asymmetric rounded-corner style. Caption follows the photo with 24px spacing.
  The original two-column introduction stacks naturally on mobile. Keep all
  biographical paragraphs, CTA and the rest of the page unchanged.
- Use Next Image with accurate intrinsic dimensions, responsive sizes, descriptive
  alt Michelle Ching, and default lazy loading. Read the installed Next image and
  CSS guides before implementation. No new dependency or client behavior.
- Remove only the orbital illustration's now-unused CSS and its animation/hover
  rules. Preserve reveal motion and reduced-motion support for the figure.

## Verification and outcomes

- npm run lint -- src/app/page.tsx exited 0.
- npm run typecheck exited 0, including generated route types and TypeScript.
- git diff --check passed with existing Windows line-ending notices. A combined
  readback command ended 1 solely because rg found no remaining orbital selectors;
  its preceding diff check and hash comparison completed successfully. Re-ran
  git diff --check separately and confirmed exit 0.
- Live desktop preview at 1440px: portrait loaded, alt was Michelle Ching, displayed
  approximately 617x463 (maintaining source ratio), with caption and complete
  introduction readable alongside it. No document horizontal overflow.
- At 390px: portrait loaded at approximately 335x251, stacked above caption and
  introduction. Visually checked the portrait and readable caption; no overflow.
- At 320px: portrait/caption width 265px, caption client/scroll widths equal, and
  no document horizontal overflow. Reset temporary viewport override.
- Desktop preview screenshot:
  C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/michelle-portrait-throughline-desktop.jpg.
- No new behavioral tests for image placement. Did not repeat the production
  build already blocked by the CSS worker failure recorded in 0103. This task
  does not resolve that issue or establish production readiness.
- No commit, push or deployment. Existing pending changes, including artwork,
  leadership copy, larger Venn circles and concurrent record 0107, were preserved.
  No earlier development record was changed.

## Files and future guidance

- [Portrait placement](../src/app/page.tsx)
- [Portrait and caption styles](../src/app/editorial.css)
- [Public portrait](../public/images/michelle-ching-2025.jpg)

The previous advisory-only portrait recommendation in 0105 is now implemented.
This record supersedes the orbital artwork only in the Throughline visual slot;
the abstract hero and other illustrations remain. Keep the supplied photograph
authentic; any future retouching or replacement should follow Michelle's direction.
The source is modest resolution, so avoid substantially increasing display size
without a higher-resolution original.
