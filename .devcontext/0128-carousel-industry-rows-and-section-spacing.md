# Work record 0128: Carousel, industry rows and section spacing

- Date: 2026-10-17
- Status at creation: Implemented; focused lint and live responsive checks passed

## Requests and changes

Michelle requested restoring employer-logo animation, pairing Technology with
Lottery & Gaming and Consumer Packaged Goods with Non-Profit, checking excessive
section gaps, then exploring a better structure for the industry labels.

- Restore the existing 32-second seamless logo-scroll animation above 760px for
  no-preference motion. Show both equal-width sets; retain the duplicate's
  aria-hidden semantics. Preserve the static phone grid and reduced-motion view.
- Keep the requested industry order. Replace the transient forced-width CPG chip
  treatment with an industry-only two-column index: regular 17px type, subtle
  bottom rules, no pill backgrounds. Use a slightly wider left column. The other
  two experience lists retain their soft labels. Preserve all industry wording;
  row adjacency does not introduce new categorical claims. Below 381px, use one
  column to preserve readability; normal phone type remains 16px.
- Set desktop chapter outer padding to 80px. The same-background transition from
  throughline to collaboration uses 56px below the former and zero above the
  latter; image centering contributes the remaining visible gap. Mobile chapter
  padding uses 56px; preserve the thought chapter's existing 40px lower padding
  and its internal row spacing. Hero spacing is unchanged.
- Preserve the portrait, imagery, right-edge dawn bleed, copy, current motion,
  contact and publishing work. No dependencies or architectural changes.

This supersedes only the industry-list styling from [0115](0115-soft-experience-labels.md)
and restores desktop logo behavior intended by [0117](0117-mobile-design-and-navigation.md).
Read those records, 0102, 0041, current source and installed Next CSS guidance.
The earlier 0114 two-column treatment applied broadly to experience lists; this
trial is scoped to the specifically requested industry list and row pairings.

## Actual verification

- npm run lint -- src/app/page.tsx exited 0 on final JSX.
- git diff --check exited 0 with existing Windows line-ending notices. A later
  CSS-only 380px fallback was added after that check.
- Desktop logo track measured 1440px with equal 720px sets. Transform progressed
  from approximately -14px to -558px in separate observations; later final CSS
  computed logo-scroll / 32s with a nonzero transform. No new pause control.
- Desktop industry rows retain matching y-coordinates for the requested pairs.
  At final 17px sizing, Technology/Lottery & Gaming and Telecom/Postal each fit
  one line; CPG wraps naturally and its paired cell shares the row height.
- Default desktop document client/scroll widths both 1265px. Chapter padding
  computed as intended; the throughline-to-collaboration eyebrow gap measured
  93.14px, down from 162.14px before the spacing change.
- At 390px viewport, document widths both 375px, industry cells had no horizontal
  overflow and both requested pairs shared y-coordinates. Mobile logo animation
  computed none and duplicate set display:none. Collaboration gap measured 56px.
- At 320px, industry index was one column, all cells fit, document widths both
  305px. At 1051px, document widths both 1036px; industry cells fit their columns.
  Narrow desktop labels may wrap. Viewport testing is not physical-device QA.
- Visually inspected desktop index, phone collaboration intro and photo bleed.
  Saved industry-paired-rows.jpg, section-spacing-refined.jpg and earlier
  logo-scroll-restored.jpg in this chat's visualization folder.
- No new tests for these static list/CSS edits. No production build repeated;
  the existing precompilation OneDrive EPERM failure remains documented in 0127.
  No claim of production-build success, commit, push or deployment.

Files: ../src/app/editorial.css and ../src/app/page.tsx.
