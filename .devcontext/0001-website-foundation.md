# ADR 0001: Personal website foundation

- Date: 2026-10-13
- Status at creation: Accepted

## Context

Michelle requested initialization of this empty workspace with Git, the remote
`https://github.com/Curious-mcching/website`, local author details, and a Next.js,
React, and Tailwind CSS development stack.

## Decision

Initialize Git on `main` and configure the author locally as Michelle Ching
<mc.ching@gmail.com>. Use the official `create-next-app` App Router template
with TypeScript, Tailwind CSS, ESLint, `src/`, and the `@/*` import alias.
The scaffold selected Next.js 16.4.0 and React 19.3.0. Use pnpm 11.25.0,
available through the Codex bundled runtime, because npm/npx are absent from
this session's PATH. Commit the generated pnpm lockfile with the project.

Replace template marketing content with a minimal homepage bearing Michelle's
name and personal-site metadata. Use system fonts to avoid build-time font
downloads. Keep deployment, integrations, and full site design outside this
initial setup. Provide lint, type-check, and production-build commands.

## Alternatives considered

- npm: conventional, but unavailable in this session; pnpm is already bundled.
- Plain JavaScript or the Pages Router: supported, but TypeScript and the
  App Router offer the standard starting point for a new Next.js project.
- A fully designed portfolio: beyond this setup request.

## Consequences

Future work starts from `src/app/page.tsx`, `src/app/layout.tsx`, and
`src/app/globals.css`. Developers need Node.js and pnpm; README documents the
machine-specific bundled pnpm fallback. No remote commit or push is part of
this initialization. Checks are planned; their actual outcomes will be
recorded in a separate append-only verification record.

## References

- [Project README](../README.md)
- [Agent instructions](../agents.md)
- [Next.js installation](https://nextjs.org/docs/app/getting-started/installation)
