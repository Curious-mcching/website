# ADR 0017: Scroll-revealed homepage navigation and clean opening

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and requests

Michelle requested that the top navigation appear only after scrolling, then
requested removal of the "Marketing & Growth Leader" hero label. This refines
the always-visible sticky header from [0016](0016-video-inspired-editorial-motion.md).

## Decision and changes

Make the homepage header a fixed overlay, initially translated above the screen
with no layout gap. Reveal it after 40px of scrolling and hide it again near the
top. Reuse PageMotion's existing passive listener and animation frame rather
than adding a second client component or scroll handler. Maintain visibility
when a navigation link has keyboard-visible focus. Disable the header transition
for reduced-motion preferences.

Move the homepage's unique top anchor to the hero. SiteHeader accepts an optional
anchor ID so the studio retains its existing top anchor. Use a native fragment
link for the homepage wordmark to reliably return to the hero; retain Next Link
for the studio and other header links. The hero starts at document position zero
and occupies at least a full viewport on desktop. Remove the requested label,
its decorative dot, and styles made unused by their removal.

## Alternatives and consequences

Keeping a hidden sticky header would leave a blank strip above the hero. A fixed
overlay avoids that gap and layout shifts when navigation appears. A direction-
sensitive header would hide on upward scrolling away from the top, which was
not requested. Keyboard focus is a deliberate accessibility exception to the
scroll threshold; focus can reveal navigation even at the top. Without JavaScript,
keyboard focus can still reveal it, but pointer scrolling does not toggle it.

## Verification

- Final npm run lint and npm run typecheck: passed using installed Windows npm.
- Production build passed after label removal. The subsequent native wordmark
  link adjustment was verified with final lint, TypeScript, and browser checks.
- git diff --check: passed with existing line-ending conversion notices.
- Fresh desktop load: scrollY 0, hero top 0, header opacity 0, translateY -86px.
  The removed label is absent from page text and accessibility output.
- After scrolling: scrollY 720, data-scrolled present, header opacity 1.
- Native home link returned to scrollY 0 and hid the header. Checked settled
  screenshot/DOM state; immediate reads during smooth scrolling can be stale.
- At the top, keyboard Tab focus on Expertise revealed the header (opacity 1).
- At a 320px viewport, visually inspected the opening with no bar or label;
  clientWidth and scrollWidth both 305px. A mobile scroll check was interrupted
  by a browser timeout, so no completed mobile reveal measurement is claimed.
- Saved and inspected clean-homepage-opening.png in the chat visualization
  directory. Reset the temporary viewport and closed the QA tab; the existing
  homepage preview and studio tabs remain. No commit, push, or deployment.
- Reduced-motion behavior checked in source; no live preference emulator available.

## Relevant files

- [Homepage](../src/app/page.tsx)
- [Header and footer](../src/components/site-shell.tsx)
- [Scroll behavior](../src/components/page-motion.tsx)
- [Homepage styles](../src/app/editorial.css)
- [Shared styles](../src/app/globals.css)
