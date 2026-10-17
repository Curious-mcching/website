# Work record 0112: Balanced Throughline opening

- Date: 2026-10-17
- Status at creation: Implemented and responsive browser verified

Michelle wanted the opening beside her portrait to occupy three desktop lines,
without way? dangling alone on a fourth line. The portrait preview in 0108 showed
that earlier four-line arrangement. Read 0108, current source and CSS, recent
0109-0111 records and the installed Next CSS guide. Preserve portrait, copy,
caption, restored thought-leadership graphics and new dawn artwork.

Change only the existing editorial.css rule for the introduction's large copy:
use font-size clamp(28px, 2.5vw, 38px) and text-wrap: balance. Keep its line-height,
font family and letter spacing. Make its em an inline block with nowrap so the
complete question stays together. No fixed height, clipping, hard-coded line
breaks, wording change or surrounding grid/portrait changes.

Verification:
- Live 1440px preview: 36px type, 43.2px line-height, three paragraph lines and
  one question line. Visually confirmed no dangling word beside the portrait.
- At 1920px: 38px type, three lines; at 1280px: 32px type, three lines. Both keep
  the question on a single line and have no document horizontal overflow.
- At 390px and 320px: readable 28px type and four natural lines, with the entire
  question on the last line. Question remained one line and no document overflow
  occurred. Inspected the narrow 320px layout and reset the viewport override.
- Screenshot: C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/throughline-three-line-opening.jpg.
- git diff --check exited 0 with existing Windows line-ending notices.
- No new tests or repeated lint/typecheck for a CSS-only typography change.
  No production build repeated; the previously recorded build limitation remains.
- No commit, push or deployment. Existing records remain immutable.

This refines only the large opening paragraph typography. Preserve the 28px
minimum on mobile and test the kept-together question before increasing it.
