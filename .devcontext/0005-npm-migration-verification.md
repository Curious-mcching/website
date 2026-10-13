# Work record 0005: npm migration verification

- Date: 2026-10-13
- Status at creation: Completed

## Request and changes

Michelle reported `pnpm` was missing from her app terminal and requested npm.
Read the terminal output and existing development records. Replaced the
package-manager declaration with npm 11.19.0, removed pnpm-lock.yaml and
pnpm-workspace.yaml, generated package-lock.json, and installed dependencies
with npm. Updated README and agents.md with npm commands and terminal setup.
Added [ADR 0004](0004-switch-to-npm.md); existing records remain unchanged.

## Verification and outcomes

- Installed Windows tools: Node.js 24.21.0 and npm 11.19.0 at
  `C:/Program Files/nodejs`.
- In Windows PowerShell, adding this directory to the process PATH made
  `node --version` and `npm --version` succeed. `Get-Command` resolved them
  to the installed Node/npm, rather than Codex's bundled pnpm runtime.
- `npm install`: passed; 357 packages installed.
- package-lock.json uses lockfile version 3 and contains no pnpm paths.
  The dependency folder no longer contains a `.pnpm` directory.
- `npm run lint`: passed.
- `npm run typecheck`: passed, including Next.js route type generation.
- `npm run build`: passed; homepage and not-found route prerendered.
- `npm run dev`: started successfully at http://localhost:3000.
- HTTP request to that address: status 200, with Michelle Ching title metadata
  and the personal-website homepage content.
- The temporary verification dev server was stopped after the HTTP check,
  leaving the port available for the user's own `npm run dev` command.

## Lessons and remaining terminal action

The initial npm lockfile attempt failed with `Cannot read properties of null
(reading 'matches')` while the pnpm-generated dependency folder existed.
Removing only this workspace's generated node_modules and installing afresh
with npm resolved it. Do not reuse a pnpm node_modules layout during migration.

The persistent machine PATH already includes Node.js, but an existing terminal
can retain its inherited stale PATH. The user's already-open terminal was read
but could not be modified through the available terminal tool. Run this there:

```powershell
$env:Path = "C:\Program Files\nodejs;$env:Path"
npm run dev
```

Alternatively use `npm.cmd run dev` if PowerShell blocks npm.ps1. No persistent
PATH or execution-policy changes were made. Restarting Codex also refreshes
the environment inherited by new terminals.

Installation warned that the scaffold's ESLint 9 is deprecated and skipped
unapproved unrs-resolver postinstall scripts under npm's current script policy.
No extra script approvals were needed for the successful checks or dev server.

## References

- [npm decision](0004-switch-to-npm.md)
- [Prior setup verification](0003-setup-verification.md)
- [README](../README.md)
- [Agent instructions](../agents.md)
- [npm reproducible installation documentation](https://docs.npmjs.com/cli/commands/npm-ci/)
