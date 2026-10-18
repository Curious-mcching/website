# Michelle Ching's personal website

Next.js App Router, React, Tailwind CSS, TypeScript, and ESLint. Uses npm;
commit `package-lock.json` alongside dependency changes.

## Development

Use Node.js 24 LTS and npm 11 (package.json records npm 11.19.0).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Edit `src/app/page.tsx` for the homepage,
`src/app/layout.tsx` for shared layout and metadata, and
`src/app/globals.css` for global styles and Tailwind theme values.
The `@/*` import alias maps to `src/*`. Static assets belong in `public/`.
The site uses system fonts, so builds do not download fonts.

## Portfolio and thought leadership

The homepage includes expertise, proposed ways to collaborate, selected
experience grounded in the supplied résumé, and three evolving thought
leadership pillars: The Challenger Mindset, Human × Machine, and Leading
Through Reinvention. No sample writing is published.

While running `npm run dev`, visit http://127.0.0.1:3000/studio. Choose a pillar
and a format: Point of view, Paper, Idea, or Perspective. A title and introduction
(20–600 characters) are required; the introduction can be the entire short piece.
Experience notes are optional (20–1,500 characters if added). Add a PDF up to
10 MB for longer writing; only the Paper format requires one.

Published pieces appear in the writing library, filterable by pillar and format.
The studio writes `content/povs/<id>/metadata.json` and, when attached, `paper.pdf`.
Keep an attachment with its metadata; commit the content you intend to deploy.
Earlier theme-based entries remain readable without rewriting them: Leadership
and Transformation map to Reinvention; the original other themes map to Challenger.

Development binds to 127.0.0.1 so this unauthenticated editor stays on your
computer. Restart an older dev-server session to use this listener setting.
The studio and upload endpoint are disabled in production. Deployed writing
is read-only; an editor on a live website will require authentication and
durable hosted storage before enabling uploads.
For the current file-backed library, a production Node server must include
the content directory. Serverless or standalone packaging needs explicit
content inclusion or a hosted content store.

All records in `.devcontext/` remain append-only; writing content is separate
from those architectural records.

With the development server running, `npm run test:publishing` exercises
validation, all pillars/formats, publication with and without PDFs, PDF serving,
and fixture cleanup. Run
`npm run test:publishing -- --production http://127.0.0.1:3001` against a
production server on that port to verify the studio and uploads are disabled.
The tests never use your résumé or leave a sample paper published.

Use `npm install` when intentionally changing dependencies, then commit the
updated package.json and package-lock.json together. Use `npm ci` to reinstall
exactly the locked dependencies.

## Contact conversations

The homepage's `#connect` section is the single destination for navigation,
footer, collaboration and leadership enquiries. Contextual links use
`/?conversation=executive#connect`, `advisory`, or `speaking`; a general visit
starts with “Something else.” Visitors can always change that selection.
The visible Message label stays in place while its guidance changes.

The existing confirmed recipient is `mc.ching@gmail.com`. Direct email options
and the existing LinkedIn profile remain usable even before form activation.
No mailing list, booking service, uploaded files, local message storage or
automatic reply is added.

There was no sending service configured. `/api/contact` now supports
[Resend's email API](https://resend.com/docs/api-reference/emails/send-email)
through server-side fetch, without another dependency. To activate it:

1. Set up a Resend account and [verify a sending domain](https://resend.com/docs/dashboard/domains/introduction).
2. Add `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` to the deployment's **server**
   environment. The latter must be a sender on that verified domain; it is not
   the visitor's address. For local development use the ignored `.env.local`,
   then restart the development server. Never use `NEXT_PUBLIC_` for these values
   or commit credentials. The recipient is fixed in `src/lib/contact.ts` and
   cannot be supplied by a visitor. Visitor email is used only as Reply-To.
3. Restart/redeploy and send a genuine test. Confirm it arrives in the recipient
   inbox and that Reply goes to the visitor. Provider acceptance is not proof of
   inbox delivery; check provider logs for bounces or delivery problems.

For local testing before domain verification, Resend supplies
`onboarding@resend.dev`. It can send only to the Resend account owner's email
([testing restriction](https://resend.com/docs/api-reference/errors)). This
project's local setup uses that sender with a sending-only key and the existing
recipient, which matches the account owner. A real form submission was reported
Delivered by Resend on 2026-10-17. Inbox placement and replying from the recipient's
mail app were not checked. Use a verified domain sender for launch, and configure
the hosting service separately; ignored local settings are not deployed by Git.

Without both settings, the form displays an unavailable notice and submissions
return 503. No success is shown. Failures preserve the draft and offer retry;
only a successful provider response with a message ID permits the success state.
Identical retries reuse a provider idempotency key to avoid duplicate emails.
See [Resend's idempotency behavior](https://resend.com/docs/dashboard/emails/idempotency-keys).

Validation runs on client and server. The endpoint rejects cross-origin requests,
oversized bodies, invalid choices and filled honeypots; sends plain text only;
and does not log messages or raw addresses. Basic process-local limits allow
six valid send attempts per address per ten minutes and twenty per process per
minute. These reset on restarts and are not shared between serverless instances.
Use the deployment host's shared rate limiting/WAF for public production traffic.
Sending requires a Node-capable deployment, not a static-only export.

`npm run test:contact` tests validation, request rejection, unavailable service,
provider success/failure, retry idempotency and rate limits with a mocked provider.
It cannot send real email or establish real inbox delivery.

## Checks and production

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serves the production build after `npm run build` succeeds.

## Windows terminal setup

Node.js and npm are installed at `C:\Program Files\nodejs` on this machine.
If an already-open terminal reports that npm is missing, run:

```powershell
$env:Path = "C:\Program Files\nodejs;$env:Path"
npm.cmd --version
npm.cmd run dev
```

This refreshes the current terminal without restarting it. The persistent
Windows PATH already includes Node.js; restarting Codex also lets newly opened
terminals inherit it. If PowerShell blocks npm.ps1, use `npm.cmd` in place of
`npm` for any command; no execution-policy change is needed.

## Repository workflow

The origin remote is https://github.com/Curious-mcching/website.
The local branch is main. Git commit identity is configured locally as
Michelle Ching <mc.ching@gmail.com>.

Read agents.md and relevant .devcontext/NNNN-description.md records before
making changes. Add new records for work, decisions, fixes, and verification;
never rewrite existing records. Use semantic commit prefixes such as feat,
fix, docs, refactor, or chore. ADR 0004 supersedes the initial pnpm decision.
