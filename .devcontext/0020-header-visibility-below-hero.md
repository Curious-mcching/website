# ADR 0020: Header visibility below the hero

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context

Michelle reported that the navigation did not appear while scrolling and clarified
that it should show below the hero. Reproduced in the existing preview: scrollY
1336, hero bottom -746px, header opacity 0 and no data-scrolled attribute.
This supersedes the 40px visibility threshold and DOM mutation approach in
[0017](0017-scroll-revealed-navigation-and-clean-opening.md).

## Decision

Add a small HomeHeader client wrapper that owns visibility through React state.
Keep SiteHeader server-rendered as its children. On initial mounting, scrolling,
or resizing, schedule one animation frame, query the current hero, and reveal
the fixed header when the hero's bottom reaches the viewport top. Keep it visible
through later sections and hide it when returning into the hero. Retain keyboard
focus visibility and reduced-motion styling.

Remove header attribute mutation and cleanup from PageMotion. It previously
captured a header DOM element once, which can become stale when the shared page
is replaced during development. The observed missing attribute is consistent
with that failure; the exact replacement timing was not instrumented. The new
wrapper lets React own its own rendered attribute, and measures current geometry.

## Alternatives and consequences

Re-querying the header from PageMotion would retain cross-component DOM mutation.
A dedicated state-owning wrapper makes visibility independent of content reveals
and progress. A fixed pixel threshold would not implement the clarified hero
boundary and would differ across mobile layouts. Adds no dependency and preserves
the publishing studio, existing content, palette, and unrelated shared changes.

## Verification

- npm run lint, npm run typecheck, npm run build: passed with installed Windows npm.
- Existing preview reproduced the failure before implementation and showed
  header opacity 1/data-scrolled after implementation at the same scroll position.
- At the opening, scrollY 0 and no data-scrolled; header opacity 0.
- Further down the page, hero bottom -1847px and header opacity 1.
- Saved navigation-below-hero.png in the chat visualization directory.
- Native home-link navigation returned to the hidden-header opening.
- Further responsive and boundary checks continue with the subsequent requested
  geometric imagery/palette update; no completed mobile-specific boundary test
  is claimed here. No commit, push, or deployment.

## Files

- [Header wrapper](../src/components/home-header.tsx)
- [Homepage](../src/app/page.tsx)
- [Content motion](../src/components/page-motion.tsx)
