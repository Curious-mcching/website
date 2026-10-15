# ADR and work record 0065: Readable navigation and current section

- Date: 2026-10-14
- Status at creation: Accepted, implemented and checks passed; live visual QA pending

## Context and decision

Michelle approved the recommendations from
[0064](0064-navigation-best-practice-review.md): larger navigation text, a subtle
current-section indicator and better mobile sizing. Preserve the explicit
hero-boundary reveal behavior from [0020](0020-header-visibility-below-hero.md).

Keep SiteHeader and SiteFooter as Server Components. Extract only navigation
into a small SiteNavigation client component for scroll state and geometry.
Track the latest navigation section reaching the reading line below the header,
with a page-end case so a short contact section can become current. Writing
remains grouped under Thought leadership until the contact section is reached.

Observe the fixed header's height with ResizeObserver and set a homepage-local
CSS --navigation-offset to its rounded height plus 16px. Use this for anchor
and focused-element scroll margins. The tracker adds the existing 28px HTML
scroll padding to this offset when choosing the current section.

## Alternatives and consequences

- Hash-only highlighting would miss ordinary scrolling and backward reading.
- Making the entire shared shell a Client Component would expand the boundary
  without need. Passing a boolean homepage flag preserves studio links back home
  and avoids running the scroll observer on the studio.
- A new hamburger menu would add disclosure state and hide three otherwise
  visible destinations. Retain the existing mobile second row, with balanced
  columns and wrapping instead.
- A static anchor offset could become too small when larger text wraps. Measured
  height follows resizing and font/layout changes. Fixed fallback margins remain
  in the CSS before hydration.
- Adds no dependencies, services or custom scrolling/animation library. Native
  links and existing header reveal behavior remain.

## Changes

- Navigation links use 14px on desktop and mobile, up from 12px/11px. Header
  contact uses 14px desktop/13px mobile, up from 13px/12px.
- Mobile links have equal flexible columns, min-width: 0, centred balanced text,
  modest padding and overflow wrapping; preserve at least 44px link height.
- Current main-nav link has a 2px eucalyptus underline and aria-current=location.
  The separate contact action also exposes its current location semantically.
- Homepage links use local fragments; studio links retain /#section destinations.
- Frame-coalesced passive scroll, resize and hash-change tracking uses actual
  section geometry. Observer/listeners/frame are cleaned up on unmount, and the
  previous homepage CSS offset is restored.
- Existing focus outlines, reduced-motion rules, home link, skip link, contact
  destination and all section IDs remain. HomeHeader's source is unchanged.
- Preserve pending dusty-rose graphics from
  [0063](0063-dusty-rose-pillar-graphic-details.md).

## Verification and actual outcomes

- node --test scripts/test-navigation.mjs: eight tests passed. Cases cover the
  hero/throughline with no selected section, exact reading-line boundary, forward
  and backward transitions, writing grouping, short contact at page end, taller
  header offsets and no available section targets.
- The test exercises the geometry-selection helper used by the live component;
  it does not simulate ResizeObserver, actual DOM scrolling or keyboard focus.
- Node emitted MODULE_TYPELESS_PACKAGE_JSON while detecting the helper's ESM
  syntax. Tests passed; no package-wide module setting was added for that warning.
- npm run lint, npm run typecheck and npm run build all passed.
- git diff --check passed before and after adding this record, with existing
  Windows line-ending notices. Reviewed state/listener cleanup and responsive CSS.
- No live browser, screen-reader, touch, zoom or rendered mobile fit verification
  following the prior browser policy block. This is not a conformance claim.
- No publishing tests rerun: storage, API and studio publishing behavior unchanged.
- No commit, push or deployment.

## Files and future guidance

- [Shared server shell](../src/components/site-shell.tsx)
- [Client navigation](../src/components/site-navigation.tsx)
- [Section selection](../src/lib/navigation.ts)
- [Behavior tests](../scripts/test-navigation.mjs)
- [Link sizing](../src/app/globals.css)
- [Current marker and measured offset](../src/app/editorial.css)

Keep the header hidden over the hero except for its existing keyboard-focus
reveal rule. If HTML scroll-padding-top changes from 28px, update the tracker's
reading-line calculation together. Inspect 320px screens and enlarged text when
live browser QA is available; source wrapping rules alone do not establish fit.
