# Work record: Company logo carousel

- Date: 2026-10-13
- Status at creation: Completed

## Request and final changes

Michelle requested the rotating logo treatment at https://backboard.io/ as
inspiration, then explicitly requested removal of the pause button and vertical
centering. Inspected the reference's continuous horizontal ticker. Read relevant
records, including [0014](0014-company-logos.md), and installed Next.js guides.

Converted the existing five-logo strip into a slow, seamless 32-second CSS
loop with soft edge fades. A second identical set supplies the continuation;
that duplicate is aria-hidden with empty alt text. The track is twice the set
width, with a minimum set width of 720px, ensuring the visible window is always
covered. All images load eagerly so approaching logos are ready before entering.

The final LogoCarousel is a Server Component. Removed the initial pause control,
its state, client directive, and related styles after Michelle's follow-up.
The strip and logo sets align to their vertical centers. Reduced-motion CSS
stops animation, removes the mask, hides the duplicate set, and wraps a single
static row. Retained original artwork, sizes, local assets, and provenance from
record 0014. No dependency or publishing changes.

## Decisions and alternatives

Used CSS animation rather than a carousel package or JavaScript timer: the
requested behavior is a continuous decorative ticker without navigation.
Preserved the established personal-site design and existing experience copy.
Only the experience strip is within this request's scope; concurrent editorial
changes elsewhere in the shared checkout were preserved.

## Verification

- Final npm run lint: passed.
- Final npm run typecheck: passed.
- Final npm run build: passed, including TypeScript and static generation.
- git diff --check: passed, with existing LF/CRLF conversion notices.
- Desktop: clientWidth and scrollWidth both 1265px. Two equal 943.64px sets
  occupy a 1887.28px track covering a 943.64px window.
- All five logo vertical centers matched the window center within 0.01px.
- Final DOM has zero buttons in the carousel; no pause control remains.
- Motion advanced from translateX(-426.441px) to -524.24px between screenshot
  observations, confirming that the loop progresses.
- At 320px: clientWidth and scrollWidth both 305px; visible window 264.8px,
  track 1440px, two equal 720px sets. All ten image instances loaded.
  All five logo vertical centers aligned within 0.01px.
- At 820px: clientWidth and scrollWidth both 805px; window 531.64px,
  track 1440px. No horizontal overflow.
- Reduced-motion fallback checked in source; the browser tooling did not offer
  a documented reduced-motion emulator, so no live preference test is claimed.
- Saved and visually inspected logo-carousel.png in the chat visualization
  directory. The cropped proof includes the complete experience strip and caption.
- Reset the viewport and closed the temporary QA and reference tabs. Retained
  the existing homepage preview; dev server remains at http://127.0.0.1:3000.
- No deployment, commit, or push. No publishing tests rerun for this isolated UI.

## Lessons

The dev server initially served old CSS. Stopped only its identified processes,
verified the exact workspace .next/dev/cache/turbopack directory, removed that
generated cache, and restarted. An early build failed with Windows EPERM while
unlinking a generated .next/static directory. Retrying after stopping the dev
server succeeded; the final build also succeeded. Checks use installed Windows
npm outside the sandbox because this workspace's Next.js path canonicalization
is restricted inside the sandbox, as documented in record 0014.

CSS masks create a blending boundary: giving each logo set the paper background
keeps FCB's white canvas integrated through its existing multiply blend.

## References

- [Previous logo work and provenance](0014-company-logos.md)
- [Carousel](../src/components/logo-carousel.tsx)
- [Homepage](../src/app/page.tsx)
- [Styles](../src/app/globals.css)
- [Visual inspiration](https://backboard.io/)