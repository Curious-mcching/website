# Work record 0064: Navigation best-practice review

- Date: 2026-10-14
- Status at creation: Source review completed; live interaction audit outstanding

## Request and scope

Michelle asked whether the website's navigation bar follows best practices.
Review the shared header, homepage visibility wrapper, responsive CSS, focus,
skip link and anchor offsets. This task provides assessment and recommendations;
no application code or approved navigation behavior was changed.

## Findings from source

- Three descriptive navigation links plus a separate contact action. The logo
  provides a home/top link with an accessible name.
- A nav element labelled Main navigation, native link semantics, a skip-to-main
  link, visible global focus outline and keyboard-focus header reveal rule.
- Navigation links and contact action have a 44px minimum height in CSS.
- HomeHeader schedules visibility updates on mounting, passive scrolling and
  resizing. The bar is fixed and visible after the hero bottom crosses the
  viewport top, consistent with Michelle's explicit choice in
  [0020](0020-header-visibility-below-hero.md).
- Source defines reduced-motion handling and 100px desktop/156px mobile anchor
  offsets. These values are not measurements of the actual rendered header.
- Navigation text is 12px desktop/11px mobile. Mobile exposes the same links on
  a second row rather than hiding them in a hamburger menu.
- No current-section indicator or aria-current appears in the shared navigation.

## Recommendations, not implemented

- Increase navigation text modestly for readability, especially the 11px mobile
  labels, while preserving adequate target sizes.
- Consider a subtle underline or other non-colour-only marker for the current
  section. Apply the current-location principle to this one-page navigation.
- Inspect narrow mobile and enlarged-text layouts to keep the fixed header
  compact and confirm it does not obscure focused content or section headings.
- Treat hidden-on-landing navigation as a deliberate visual tradeoff: the opening
  is cleaner, but pointer/touch users cannot access the navbar until scrolling
  beyond the hero. Do not reverse this requested behavior during unrelated work.

## Guidance and evidence limits

- [W3C WAI menu styling](https://www.w3.org/WAI/tutorials/menus/styling/): readable
  menu sizing, focus and current-item states, and preventing overlap at zoom.
- [NN/g sticky-header guidance](https://www.nngroup.com/articles/sticky-headers/):
  compact readable persistent navigation, contrast and unobtrusive motion.
- The suggested font sizes and section marker are design applications, not
  universal mandates or an accessibility-conformance verdict.
- No fresh browser, keyboard, screen-reader, touch, zoom, overflow or target-size
  measurement performed following the prior browser policy block. Source review
  does not establish live accessibility or successful navigation behavior.
- No lint/typecheck/build or behavior tests for this documentation-only assessment.
- No application edits, commit or push.

## Files reviewed

- [Shared navigation](../src/components/site-shell.tsx)
- [Visibility wrapper](../src/components/home-header.tsx)
- [Header and anchor styles](../src/app/editorial.css)
- [Shared and mobile navigation styles](../src/app/globals.css)
- [Skip link](../src/app/page.tsx)
