# Work record 0129: Matching experience list treatment

- Date: 2026-10-17
- Status at creation: Implemented and verified

## Request and changes

Michelle approved 0128's industry index and requested matching the marketing
capability and global/local market lists to it. Read 0128, current source and
installed Next CSS guidance before editing.

- Promote the industry's regular 17px text, 12px row padding, transparent
  background and thin bottom rules to the shared experience-ribbon styles.
- Keep the industry pairings and two-column market list. Use full-width rows
  for the longer marketing capability labels to preserve readable wording.
- Preserve shared list-top alignment, semantic lists, all copy, 16px mobile
  type and the <=380px one-column fallback. Remove the obsolete industry-only
  class and pill styles now unused by these lists.
- No image, motion, section spacing, dependency or architectural changes.

This supersedes 0128's decision to leave the other two lists as soft chips.

## Verification and limitations

- npm run lint -- src/app/page.tsx exited 0.
- git diff --check exited 0; existing Windows line-ending notices remain.
- Live desktop: all three lists start at y=503.55px in the inspected viewport;
  computed text is 17px, rows have 12px vertical padding, matching dividers and
  transparent backgrounds. No list or item horizontal overflow.
- At 390px, text is 16px, all three lists and items fit; document client/scroll
  widths both 375px. At 320px, all lists are one column, no item overflow and
  document widths both 305px. Reset viewport and closed temporary QA tab.
- Visually inspected and saved experience-lists-matched.jpg under this chat's
  visualization directory. No new tests for this static presentation change.
- No production build repeated; the existing OneDrive EPERM build limitation
  remains as documented in 0127. No build-success claim, commit, push or deploy.

Files: ../src/app/editorial.css and ../src/app/page.tsx.
