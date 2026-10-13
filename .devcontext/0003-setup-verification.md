# Work record 0003: Setup verification

- Date: 2026-10-13
- Status at creation: Completed

## Request and changes

Initialized the requested Git repository, installed the Next.js/React/Tailwind
stack, adapted the supplied agent-instruction sample, and established the
append-only ADR policy. Added a minimal homepage, project metadata, development
commands, ignored dependency/build/environment files, and a pnpm lockfile.

## Verification and outcomes

- Git branch: `main`.
- Fetch and push remote: `https://github.com/Curious-mcching/website`.
- Repository-local author: Michelle Ching <mc.ching@gmail.com>.
- Dependency installation: completed with pnpm 11.25.0.
- Installed framework versions: Next.js 16.4.0, React/React DOM 19.3.0,
  Tailwind CSS and its Turbopack integration 4.3.3.
- `pnpm lint`: passed (exit 0).
- `pnpm build`: passed (exit 0); `/` and `/_not-found` were prerendered.
- `pnpm typecheck`: passed (exit 0), including route type generation.
- Inspected `.next/server/app/index.html`: homepage content and Michelle Ching
  title metadata were present.
- Inspected generated CSS: `min-h-screen` and `text-4xl` Tailwind utilities
  were present.
- Git ignore checks confirmed `.next`, `node_modules`, and `.env.local`
  are excluded.
- `git diff --check`: passed; files remain untracked in this new repository,
  so this check does not assess the untracked source files.
- Verified the lowercase root `agents.md` includes the sample principles,
  semantic commit rules, and immutable numbered development-context records.

## Lessons and limitations

- This session exposes bundled Node.js but no npm/npx command. Use the bundled
  pnpm command documented in README when pnpm is not on PATH.
- The Windows sandbox blocked pnpm realpath operations with EPERM. Authorized
  package installation and checks succeeded outside that sandbox; this was
  an execution-environment restriction, not an application failure.
- Installed Next.js documentation uses `.md` filenames under
  `node_modules/next/dist/docs/`; do not assume `.mdx` paths.
- The official scaffold pins ESLint 9, which emitted a deprecation warning
  during installation. Its configured lint check passed. A future dependency
  upgrade should assess compatibility and document its decision in a new ADR.
- No browser visual QA was performed for this minimal setup. Production
  compilation, type checking, and generated HTML/CSS inspection passed.
- No commit, push, or deployment was performed. The setup is ready for review.
- Existing ADRs were preserved without modification while recording results.

## References

- [Foundation ADR](0001-website-foundation.md)
- [Development-memory ADR](0002-append-only-development-memory.md)
- [Agent instructions](../agents.md)
- [Project README](../README.md)
