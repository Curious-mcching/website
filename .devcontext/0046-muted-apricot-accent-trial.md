# Work record 0046: Muted apricot accent trial

- Date: 2026-10-14
- Status at creation: Trial implemented and checks passed

## Request and decision

Michelle requested another colour for lime headline callouts and buttons so she
can compare combinations for a warm, curious and modern site. Try muted apricot
#EDB494 as the accent. Keep aubergine #221B38, iris #6659AC, eucalyptus #80AFA5
and mist #E8E4F0 unchanged. The intent is warmth with restrained saturation and
consistent use, applying
[NN/g's purposeful-colour guidance](https://www.nngroup.com/articles/good-visual-design/).
This is a preference trial, not a claim of a universally best colour combination.

This supersedes only the lime accent choice in
[0023](0023-eucalyptus-palette-grounded-imagery.md) and the lime title accents in
[0040](0040-thought-leadership-text-hierarchy.md) for the current comparison.
Preserve unnumbered pillar labels from
[0045](0045-unnumbered-thought-leadership-pillars.md).

## Changes

- Rename the runtime CSS colour token --lime to the role-based --accent and set
  it to #EDB494. Use --accent in both globals.css and editorial.css.
- Apply it consistently to emphasized headlines, the hero button, dark-card
  callouts, open leadership highlights, thought leadership links/titles,
  decorative graphic accents, focus outlines and text selection.
- Preserve every other colour, stylesheet declaration, layout, font and copy.
- Keep approved raster artwork unchanged; its subtle green/lime mixtures remain
  part of the images. This trial changes the interface colour tokens only.
- No new dependencies, assets or runtime architecture.

## Verification and limitations

- npm run lint, npm run typecheck and npm run build passed.
- git diff --check passed with the existing Windows line-ending notices.
- Source search confirms --accent is defined once and all former runtime --lime
  references now use it; the original #BFD86C token is absent from runtime CSS.
- Calculated apricot/aubergine sRGB contrast: 9.02:1, applicable to the highlighted
  dark-background text and dark text on the hero accent button.
- No live browser or rendered colour sampling following the prior browser policy
  block; visual preference and appearance across screens remain to be reviewed.
- No behavior tests for this reversible colour-only change.
- No commit, push or deployment.

## Files and future guidance

- [Palette and shared accents](../src/app/globals.css)
- [Homepage accent usage](../src/app/editorial.css)

For further comparisons, change --accent centrally. To restore the previous lime
option, set --accent to #BFD86C; retain the semantic token name. Do not regenerate
the approved artwork or rewrite prior development records merely for an accent
trial unless Michelle asks for those changes.
