# ADR 0004: Use npm in the ordinary Windows terminal

- Date: 2026-10-13
- Status at creation: Accepted
- Supersedes: The pnpm package-manager choice in [ADR 0001](0001-website-foundation.md).

## Context

Michelle's app terminal reports `pnpm` is not recognized. The initial checks
used Codex's bundled pnpm executable, so they did not establish that the
documented command worked in her terminal. Michelle explicitly requested npm.

Inspection found Node.js 24.21.0 and npm 11.19.0 already installed under
`C:/Program Files/nodejs`. The persistent machine PATH includes this directory,
but the inherited Codex execution PATH omits it. Existing terminals can retain
an older PATH until refreshed or the parent app is restarted.

## Decision

Use the installed npm, declare `npm@11.19.0` in package.json, replace pnpm's
lockfile and workspace configuration with package-lock.json, and reinstall
dependencies using npm. Update README and agents.md to use `npm ci` and
`npm run <script>`.

Document a current-terminal PATH refresh and a Windows `npm.cmd` fallback
so PowerShell execution-policy restrictions on npm.ps1 do not require changing
the user's security settings. Do not reinstall Node.js or change persistent
PATH, which already contains the installation directory.

## Alternatives considered

- Expose bundled pnpm: contradicts the user's npm preference and ties ordinary
  development to a Codex runtime path.
- Reinstall Node.js: unnecessary because both Node.js and npm are installed.
- Change PowerShell execution policy: unnecessary; npm.cmd invokes the same CLI.

## Consequences and verification plan

Future agents use npm and commit package-lock.json. Historical ADRs remain
unchanged; their pnpm instructions are superseded by this decision.
Verify npm installation, lint, type checking, production build, and an HTTP
response from `npm run dev`, using the ordinary installed Node/npm binaries.
Record actual results in a new work record. Treat agent-tool checks and the
user's already-open terminal state as separate evidence.
