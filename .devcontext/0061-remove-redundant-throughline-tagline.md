# Work record 0061: Remove redundant throughline tagline

- Date: 2026-10-14
- Status at creation: Implemented and source-verified

## Request and decision

Michelle suggested removing "TORONTO, CANADA · OPEN TO A GOOD CONVERSATION" or
incorporating its invitation elsewhere, and asked whether it was needed.
Remove the line: the existing introductory copy, section CTAs and closing contact
invitation already convey openness to conversation. Avoid adding redundant copy.

## Changes

- Remove only that small-label span from the throughline's text column.
- Preserve all four supplied paragraphs from
  [0030](0030-throughline-and-transformation-copy.md), the adjacent CTA and its
  existing 22px spacing, artwork and other Toronto references.
- Do not remove the shared small-label CSS: other labels, including the
  curiosity graphic's label, still use it.
- No dependencies, assets, style, behavior or architectural changes.

## Verification and limitations

- Source review confirms the old tagline is absent and the final paragraph
  now directly precedes the #expertise CTA.
- git diff --check passed before and after adding this record, with existing
  Windows line-ending notices.
- No lint, typecheck or production build rerun for removal of one static text
  span. The preceding task's build passed; that check predates this edit.
- No live browser check following the prior browser policy block. No behavior
  tests for this low-impact copy removal.
- No commit, push or deployment.

## File

- [Throughline copy and CTA](../src/app/page.tsx)
