# Work record 0035: Staged whitespace review

- Date: 2026-10-13
- Status at creation: Reviewed; accepted formatting notices

## Context and decision

During the commit requested in [0034](0034-website-update-commit-preparation.md),
git diff --cached --check inspected newly staged files that the earlier unstaged
diff check had not included. It returned five formatting notices:

- Extra blank lines at EOF in existing immutable records 0012, 0021, 0028 and 0029.
- One trailing space at line 21 of the bundled Rubik OFL license.

Preserve historical development records under the append-only policy and retain
the supplied license text. These notices do not affect application behavior or
the passed lint, typecheck and build. Proceed with the authorized commit and
normal push without changing those files. No automatic approval rejection or
runtime failure occurred; the commit command had not run because the initial
shell sequence stopped at the formatting check's nonzero exit.

## Verification and lesson

Reviewed the exact five staged notices. The earlier successful git diff --check
claim in 0034 refers to the tracked unstaged application changes, not all newly
added files. Future commit preparation should inspect both tracked and new files
before reporting a complete staged whitespace result.
