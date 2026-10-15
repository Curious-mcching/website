# Work record 0045: Unnumbered thought leadership pillars

- Date: 2026-10-14
- Status at creation: Completed

## Request and design decision

Michelle questioned the numbers on MY SIGNATURE THESIS, AN EMERGING FRONTIER and
MY LEADERSHIP LENS, and asked to remove numbering from the corresponding graphics.
Use unnumbered role labels and the existing three distinctive geometric graphics.
The pillar titles and grouping provide orientation without repeated indices.

This supersedes only the choice in
[0042](0042-unnumbered-section-labels.md) to retain thought leadership graphic
numbers. Keep collaboration card and leadership story numbering unchanged.
Hierarchy follows scale, colour and grouping as described in
[NN/g's visual hierarchy guidance](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/).
There is no universal requirement to remove numbers; this is the chosen treatment
for these three related themes and Michelle's preference.

## Changes

- Render pillar.lens alone, without the numeric prefix and slash.
- Remove each graphic's numeric span and its now-unused CSS rule.
- Remove the unused number properties from the shared pillar definitions.
  Keep stable IDs, array order, titles, questions, descriptions and publishing types.
- Make role labels slightly more readable at 11px with .12em tracking. Retain
  their quiet on-dark colour and existing weight; lime titles and emphasized
  questions from [0040](0040-thought-leadership-text-hierarchy.md) remain dominant.
- Preserve all three shape elements per graphic, sizes, layouts, hover behavior
  and reduced-motion handling from [0013](0013-restore-thought-leadership-graphics.md).
- No new dependencies, assets, client behavior or architecture.

## Verification and limitations

- npm run lint, npm run typecheck and npm run build passed, including components
  that consume the shared pillar definitions.
- git diff --check passed with existing Windows line-ending notices.
- Source search found no pillar.number references or obsolete numeric-span rule.
- Diff review confirms only numeral rendering/data and the label-size rule changed;
  existing labels, titles, questions, descriptions, stable IDs and graphics remain.
- No live browser or responsive visual check following the documented browser
  policy block; no screenshot or computed-style measurement is claimed.
- No behavior tests for this reversible display-only change.
- No commit, push or deployment.

## Files and future guidance

- [Pillar markup](../src/app/page.tsx)
- [Role-label typography](../src/app/editorial.css)
- [Graphic styles](../src/app/globals.css)
- [Stable pillar definitions](../src/lib/thought-leadership.ts)

Keep the three exploratory themes unnumbered unless Michelle requests another
direction. Do not confuse these graphics with the four numbered leadership stories.
