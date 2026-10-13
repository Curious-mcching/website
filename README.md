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
