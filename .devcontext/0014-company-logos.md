# Work record 0014: Actual company logos

- Date: 2026-10-13
- Status at creation: Completed

## Request and scope

Michelle requested actual company logos and an updated website. Interpreted
this as the existing RBC, HSBC, Publicis, JWT, and FCB experience strip.
Preserved personal copy, career claims, publishing behavior, and the hero.
Read relevant development records and the installed Next.js image guide.
The concurrent pillar restoration in [ADR 0013](0013-restore-thought-leadership-graphics.md)
remains intact; this task changes only the experience branding.

## Changes

Replaced text placeholders with five local logo assets through next/image,
with company-name alt text and intrinsic dimensions. Retained brand colors
and proportions, balanced display widths, and enabled wrapping for narrow
layouts. Removed the superseded text-only strip styling.

RBC, HSBC, and Publicis assets come from official company website references.
JWT and FCB are archived company-authored assets on Wikimedia Commons with
source attribution to WPP's annual report and FCB's official account. JWT
retains its historical identity to match Michelle's career experience.
Download URLs and provenance are recorded in [asset notes](../public/logos/README.md).
The Publicis CDN returned WebP bytes; its local extension reflects that format.
FCB's white canvas blends with the paper background using CSS multiply.
No dependencies, hosting, or architectural changes were introduced.

## Checks and outcomes

- npm run lint: passed in the ordinary installed Windows npm environment.
- npm run typecheck: passed outside the Windows filesystem sandbox.
- npm run build: passed outside the sandbox, including TypeScript and static generation.
- git diff --check: passed; Git emitted its existing LF/CRLF conversion notices.
- Desktop screenshot: all five logos rendered with balanced spacing below the hero.
- Browser confirmed all five completed image loads with nonzero natural width.
  Display widths: RBC 44px, HSBC 120px, Publicis 56px, JWT 84px, FCB 104px.
- At 320px, document clientWidth and scrollWidth were both 305px. Each logo
  stayed within the content area, and all five were loaded.
- At 820px, document clientWidth and scrollWidth were both 805px, with all
  five logos loaded.
- Saved company-logos.png in the chat visualization folder as desktop proof.
- Reset the browser viewport and closed the temporary responsive QA tab.
  The local development server remains at http://127.0.0.1:3000.
- No behavioral tests were added for this reversible asset and styling change.
- No deployment, commit, or push as part of this request.

## Verification environment and lessons

Initial sandboxed Next.js type generation and build failed with Access denied
while canonicalizing the workspace path. The authorized runs outside the
sandbox passed. A separate build process temporarily held the Next.js build
lock; waited until it exited before the final successful build. Do not delete
an active build lock or stop another task's build.

The first browser load used the earlier strip stylesheet. Restarted only this
website's dev server and removed only the resolved workspace
.next/dev/cache/turbopack directory, following the guidance in
[record 0010](0010-thought-leadership-verification.md). Final generated CSS and
browser measurements confirmed the new styles. Browser timeouts recovered
with a fresh QA tab. Viewport overrides applied to that tab; measurements of
the original desktop tab were not treated as mobile verification.

## References

- [Homepage](../src/app/page.tsx)
- [Styles](../src/app/globals.css)
- [Asset provenance](../public/logos/README.md)
- [Original experience framework](0006-portfolio-and-local-publishing-framework.md)