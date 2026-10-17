# Work record: Local preview restart

- Date: 2026-10-16
- Status at creation: Completed

## Request and diagnosis

The user reported ERR_CONNECTION_REFUSED at http://localhost:3000/#challenger.
An unsandboxed HTTP request to 127.0.0.1:3000 confirmed connection refused.
Read agents.md, README.md, package.json and relevant records 0005 and 0019.

## Action and verification

Started the installed Windows Node.js executable with the project's Next.js
CLI, dev --hostname 127.0.0.1 --port 3000, in the Website project directory.
The background process runs hidden and its logs are in the requesting chat's
work folder. Startup took several seconds. A later duplicate npm run dev
attempt detected the running server and exited; no process was killed.

Verified HTTP 200 at both http://127.0.0.1:3000/ and http://localhost:3000/.
The returned homepage contains Michelle Ching and id="challenger".
No application source or configuration changes. No lint/typecheck/build run
because this task only restarted the local preview. No commit or push.

## Future guidance

localhost requires a running local server. To restart manually in PowerShell:

```powershell
cd "C:\Users\mcchi\OneDrive\Desktop\Website"
npm.cmd run dev
```

Keep that terminal open while viewing the site. If npm is not found, use the
process PATH refresh already documented in README.md and record 0005.
The server intentionally binds only to 127.0.0.1.
