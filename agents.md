# Agent instructions

These rules apply throughout this workspace. They adapt the supplied
`keyInstructions.md` sample and add the project's development-memory policy.
Follow the user's current request when it conflicts with these guidelines.

## 1. Think before coding

- State material assumptions and tradeoffs before implementation.
- Surface ambiguity; ask when missing information affects the outcome.
- Present meaningful alternative interpretations instead of choosing silently.
- Suggest a simpler approach when appropriate and push back when warranted.
- Check relevant `.devcontext/` records before planning or changing code.

## 2. Simplicity first

- Write the minimum code that solves the requested problem.
- Do not add speculative features, configuration, or abstractions for one use.
- Do not add error handling for impossible scenarios.
- Prefer a clear, small implementation over unnecessary complexity.

## 3. Surgical changes

- Every changed line should trace to the request or its necessary verification.
- Match existing style and avoid unrelated cleanup, refactors, or formatting.
- Mention unrelated dead code rather than deleting it without authorization.
- Remove imports, variables, functions, and assets made unused by your changes.
- Preserve existing fixes and behavior documented in `.devcontext/`.

## 4. Goal-driven execution

- Define verifiable success criteria before implementing.
- For multi-step work, give a brief plan with a verification check per step.
- For bug fixes, reproduce the failure and verify the corrected behavior.
- For validation, check relevant invalid and valid inputs.
- For refactoring, verify behavior before and after the change.
- Run checks appropriate to the change and report results and limitations.
- For application or configuration changes, use `npm run lint`, `npm run typecheck`,
  and `npm run build` as appropriate. Add meaningful tests for behavior changes;
  avoid tests that merely duplicate implementation or low-impact edits.

## 5. Contribution rules

- Use semantic commit prefixes: `feat`, `fix`, `docs`, `refactor`, or `chore`.
- Keep commits focused and commit the lockfile when dependencies change.
- Do not commit credentials, `.env` files, build output, or `node_modules`.
- Keep Git identity configuration local to this repository.

## 6. Append-only development context and ADRs

- Before starting, list `.devcontext/` and read records relevant to the task.
  Use them to avoid repeating mistakes or regressing previously fixed behavior.
- Document meaningful work, decisions, fixes, lessons, and verification in new
  `.devcontext/NNNN-description.md` files. Every new architectural decision
  requires a new architecture decision record (ADR).
- Use the next unused four-digit number in increasing order and a short
  lowercase hyphenated description, for example `0004-contact-form-storage.md`.
  Check existing filenames immediately before creation to avoid collisions.
- Existing records are immutable: never edit, overwrite, rename, renumber,
  or delete an existing ADR or development-context record.
- Corrections, changes of direction, and superseding decisions go into a new
  record that links the earlier record and explains what changed and why.
  Do not modify the earlier record's status or add backlinks to it.
- ADRs should include the date, status at creation, context, decision,
  alternatives considered, consequences, and relevant record/file links.
- Work and verification records should include the request, changes made,
  checks and outcomes, unresolved issues, and lessons relevant to future work.
- Record actual evidence; never claim that a planned or skipped check passed.
- Add records before finishing each meaningful task. Reference the relevant
  record in handoffs so future agents can recover the rationale.

## Project conventions

- Stack: Next.js App Router, React, Tailwind CSS, TypeScript, and ESLint.
- Package manager: npm, declared in the `packageManager` field. Use
  `package-lock.json` and `npm ci` for reproducible installs; do not add pnpm files.
- Verify setup commands in the user's ordinary terminal environment, not only
  through Codex's bundled tools. If PATH is stale, document the refresh command.
- Application code lives in `src/app/`; `@/*` resolves to `src/*`.
- Prefer Server Components; add `"use client"` only for client-side behavior.
- Keep the initial setup minimal; do not add hosting or services without a need.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
