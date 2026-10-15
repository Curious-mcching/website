# Work record 0050: Personal hero signoff

- Date: 2026-10-14
- Status at creation: Implemented and source-verified

## Request and changes

Michelle requested replacing "Toronto, Canada" in the bottom-of-hero line
"TORONTO, CANADA / ALWAYS CURIOUS" with her name. The personal signoff reinforces
her identity while keeping the curiosity theme.

- Replace only that hero span with "MICHELLE CHING / ALWAYS CURIOUS", matching
  the existing uppercase treatment.
- Preserve the adjacent throughline link, typography, layout and responsive rules.
- Other Toronto references are outside the specifically quoted line and remain.
- No new runtime behavior, assets, dependencies or architecture.

## Verification and limitations

- Source search confirms the new hero signoff and absence of the old slash-
  separated text in page.tsx.
- git diff --check passed before recording this work, with existing Windows
  line-ending notices; the final record-inclusive check passed as well.
- No lint, typecheck or build rerun for this static plain-text replacement.
  The preceding highlight task's build passed; that is not a build verification
  of this subsequent text edit.
- No live browser check following the previously documented browser policy block.
- No behavior tests for this low-impact copy edit. No commit or push.

## File

- [Hero signoff](../src/app/page.tsx)
