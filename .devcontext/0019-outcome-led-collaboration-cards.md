# Work record 0019: Outcome-led collaboration cards

- Date: 2026-10-13
- Status at creation: Completed

## Request and changes

Michelle requested another option for the "Where we could make a difference"
section that feels more compelling, engaging, and modern.

Replace the sticky introduction and expandable offering rows from
[0016](0016-video-inspired-editorial-motion.md) with a large editorial introduction
and four visible cards in a two-column grid. The new headline is "Your next
challenge. Our starting point." Retain the former heading as the section label.
Lead each card with an outcome-oriented headline, preserve all four expertise
categories and their descriptions, and display collaboration areas as wrapping
tags. Highlight growth in a dark green panel with lime type; use sage, warm
neutral, and paper for the remaining cards. Add restrained hover movement,
distinct accessible email-link names, and a low-pressure invitation to contact.

This is a presentation refinement of [ADR 0006](0006-portfolio-and-local-publishing-framework.md),
without new runtime architecture or dependencies. Keep server rendering and the
existing reveal/reduced-motion behavior. Remove the accordion styles made unused
by this replacement; shared details styling remains for case studies and writing.
Preserve other work already present in this checkout, including navigation,
throughline imagery, the logo carousel, and thought leadership artwork.

## Verification

- npm run lint: passed using installed Windows npm.cmd.
- npm run typecheck: passed, including Next.js route generation.
- npm run build: passed, including TypeScript and static generation.
- git diff --check: passed; existing Windows line-ending notices only.
- Initial sandboxed typecheck and attempted dev-server startup encountered the
  documented SWC OneDrive canonicalization restriction (Access is denied).
  Typecheck and build succeeded outside the sandbox. The attempted additional
  dev server exited; the user's existing server at 127.0.0.1:3000 served QA.
- Desktop: document clientWidth and scrollWidth both 1265px; all four cards
  measured approximately 567.4px wide. Visually inspected both card rows.
- Mobile 320px: clientWidth and scrollWidth both 305px, one grid column and
  approximately 264.8px card width. Inspected card text, wrapping tags, and CTA.
- Tablet 820px: clientWidth and scrollWidth both 805px; two approximately
  361.4px columns. No horizontal overflow at any checked viewport.
- Keyboard Tab moved from the growth CTA to the brand CTA; the focused link
  had a solid visible outline. Accessibility state exposed distinct link names.
- All four email links use Michelle's existing address and an encoded subject
  identifying the expertise area. No email was sent.
- Reduced-motion handling remains in the existing stylesheet; live preference
  emulation was not performed. No new automated tests for this visual change.
- Restored the default browser viewport and left the redesigned section open.
- Saved collaboration-option.jpg in the chat visualization folder as proof.
- No deployment, commit, or push.

## Future guidance and references

The four collaboration areas are proposed ways to work together, not promises
of outcomes or invented engagements. Preserve the developing-space qualifier
for Challenger conversations. Showing complete descriptions adds page height
but makes the possibilities discoverable without opening disclosures.

- [Homepage](../src/app/page.tsx)
- [Offering content](../src/lib/portfolio.ts)
- [Editorial styles](../src/app/editorial.css)
- [Shared styles](../src/app/globals.css)
- [Concurrent record numbering](0018-development-record-number-collision.md)
