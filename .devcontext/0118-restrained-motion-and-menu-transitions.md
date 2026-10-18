# ADR and work record 0118: Restrained motion and menu transitions

- Date: 2026-10-17
- Status at creation: Implemented; application, interaction and fallback tests passed; production build blocked

## Request and context

Michelle requested restrained control/card feedback, selected once-only entrances,
animated mobile menu open/close, immediate closed-menu keyboard exclusion, and
reduced-motion support without dependencies or layout/content changes. Read 0117,
current motion/navigation components and installed Next CSS guidance. Preserve the
uncommitted mobile improvements from 0117 and all branding/content.

## Decisions and changes

- Use lightweight CSS and the existing IntersectionObserver/PageMotion component.
  Controls transition colours, underline colour and shadow in 180ms; summary/play
  controls use 200ms and card feedback retains 250ms. Keep visible focus outlines.
  Keyboard focus gets corresponding visual feedback. No information relies on hover.
- Only a collaboration card's actual action hover/focus triggers its 2px lift.
  Remove the hover movement from noninteractive thought graphics. Whole cards are
  not made clickable and no additional click handlers or destinations were added.
- Replace the slow 650ms/24px pending-to-visible system with six selected entrance
  groups: portrait/copy, offerings heading, leadership introduction, thought
  introduction, writing heading and contact group. Remove per-card, per-story,
  nested portrait and per-pillar entrances. No stagger or animation delays.
- New setupSectionEntrances helper adds an entry attribute only when an offscreen
  group intersects. CSS plays a 360ms fade/10px rise, without persistent fill or
  pending hidden styles. Default content is always visible. Initially visible groups
  skip animation; a WeakSet prevents replay. Animation end/cancel clears the marker.
  Focus immediately clears/skips an entrance, including focus before observer entry.
  Cleanup disconnects observation/listeners and ignores queued callbacks.
- Missing observer support or reduced motion leaves content visible. Preference
  changes stop active entrances and never replay already seen groups. CSS also
  suppresses entrance animation when reduced motion is preferred. Helper extraction
  makes actual observer/fallback behavior testable without a browser dependency.
- Mobile menu uses opacity and a 6px translation over 180ms for both directions.
  Visibility is delayed only on exit to allow fading; pointer events stop at once.
  Responsive React state applies inert and aria-hidden as soon as a mobile menu
  closes, so the visually exiting links cannot receive focus. Desktop panel remains
  display:contents, without inert/aria-hidden, retaining the existing header layout.
  Keep link/outside/Escape dismissal and focus return. Reduced motion removes the
  transition, including the delayed visibility change.
- Stop automatic logo scrolling and show all five logos in one static desktop row;
  keep 0117's mobile two-column logo grid. Remove the initial long hero-image zoom.
  This supersedes the earlier automatic desktop carousel preference because the
  current request explicitly excludes continuously moving elements. Same branding,
  content and panel placement; no dependency or asset changes.
- Keep the existing purposeful S-curve accordion expansion. It changes content
  height by design; its controls are quicker and reduced motion remains immediate.
  Reading progress continues to respond to user scrolling; no scroll interception,
  parallax, bounce, continuous animation or essential hover-only content was added.

Alternatives: keep a pre-hidden reveal state (could leave content inaccessible),
add an animation package (unnecessary), or delay unmounting menu content in JavaScript
(extra state/timers with potential focus races). Default-visible entrances plus a
CSS transition and native inert supply the needed behavior with fewer moving parts.

## Verification and actual outcomes

- Full npm run lint passed, then focused lint passed after the final helper/test
  refinements. Final npm run typecheck exited 0.
- node --test scripts/test-section-motion.mjs scripts/test-navigation.mjs
  scripts/test-challenger-films.mjs: 18 passed. Four new behavioral tests cover
  default visibility, once-only observation, reduced-motion startup/live changes,
  missing observer support, keyboard focus before/during entry, and cleanup/queued
  callbacks. Existing MODULE_TYPELESS_PACKAGE_JSON notices remain.
- Live desktop (1440px): no horizontal overflow; header 86px, panel display:contents
  and not inert. All five original logos visible; computed logo animation none.
  Noninteractive graphics have no transition. Tab reached the first offering CTA
  with focus-visible; its card settled at translateY(-2px). Enter opened contact
  options; Escape closed them and restored the offering CTA focus.
- Live mobile: Enter and Space opened the menu; Tab reached Expertise; Escape
  closed it and returned focus to the menu button. Next Tab skipped the closed
  panel and reached the hero CTA. Closed panel has inert and aria-hidden=true;
  open panel has neither. Keyboard link activation navigated to Leadership in
  Action, closed the panel and restored its inert state. No console errors.
- Responsive checks at 320/375/390/430/768/1440px: matching document client/scroll
  widths, phone header 68px, tablet/desktop 86px. Closed phone panels inert; desktop
  panels not inert. All sizes have zero pending reveal markers and no logo animation.
  Inspected settled entrance groups: opacity 1, no active marker/animation. Menu
  computed transition is 180ms; shared control transitions 180ms; card 250ms.
- Actual browser preference is no-preference. Reduced-motion helper behavior was
  tested with native EventTarget fakes; corresponding CSS rules were reviewed.
  Available browser APIs cannot force OS reduced-motion preference, so no live
  reduced-motion media-emulation claim. Physical touch hardware/iOS/Android and
  direct pointer-hover automation were not tested; keyboard feedback and normal
  browser click/activation paths were verified. Existing hover-capability guards
  retain touch-independent operation.
- npm run build again failed before compilation on existing EPERM removing
  .next/static/FW8In346nDPl8ZWv96VE-. No production-build success is claimed.
- git diff --check passed with existing Windows line-ending notices. No dependency,
  content or image asset changes. No commit, push or deployment. Reset temporary
  viewport and closed QA tab. Preserve 0117 and its outstanding source changes.

## Evidence and files

Screenshot and responsive data:
C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/motion-mobile-menu.png
and motion-responsive-checks.json in the same directory.

Files: ../src/app/editorial.css, ../src/app/page.tsx,
../src/components/page-motion.tsx, ../src/components/site-navigation.tsx,
../src/lib/section-motion.ts and ../scripts/test-section-motion.mjs.

Future guidance: do not restore opacity:0 for pending/offscreen content. Keep
closed-menu inert independent of the exit animation's delayed visibility. Add
entrance markers at group level sparingly, and preserve focus-before-entry coverage.
