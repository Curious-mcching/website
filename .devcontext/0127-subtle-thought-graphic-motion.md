# Work record 0127: Slow motion for original thought-leadership graphics

- Date: 2026-10-17
- Status at creation: Implemented; tests/lint/typecheck and browser checks passed;
  production build blocked by existing generated-output permissions

## Request and treatment

Michelle requested slow motion for the original boxed square, overlapping circles
and doorway graphics. Keep the original graphics, sizes, colors and content. Use
a restrained 4.8-second single cycle when they enter view, then settle back to the
original shapes, consistent with 0126's restrained hero treatment and earlier
preference against continuous motion. No infinite loop or new pause-control UI.

- Square rocks from -15 to -4 degrees and rises 6px, returning to its start.
- The two circle outlines move in opposite directions by 4px; central dot stays.
- The three doorway layers rise 4/6/8px with a slight skew change, returning to
  their original geometry. Boxes and text remain still.

Define CSS animations only under prefers-reduced-motion: no-preference. Animation
is paused by default; a data-motion-active attribute enables playback. Add a small
setupPillarMotion observer helper alongside the existing section-motion helper,
and connect it from the existing PageMotion effect. It resumes/pauses on viewport
entry/exit and does not reset a completed animation. Reduced motion or missing
IntersectionObserver leaves static visible artwork. Preference changes disconnect
the old observer, clear markers and reconfigure; stale callbacks and unmount are
guarded. Clean up listeners/observer/attributes. No new client boundary, dependency,
architecture, asset or changes to existing entrance, navigation or progress logic.

## Verification and actual outcomes

- Read relevant records, current implementation and installed Next component
  guidance before changes.
- node --test scripts/test-section-motion.mjs: all 7 tests passed (4 existing and
  3 added). New tests cover enter/leave, cleanup/queued callbacks, initial reduced
  motion, preference changes, stale observers and unsupported observation.
  Existing Node MODULE_TYPELESS_PACKAGE_JSON warning remains; no package change.
- Full npm run lint and npm run typecheck exited 0.
- npm run build failed before compilation on existing EPERM removing
  .next/static/FW8In346nDPl8ZWv96VE-. No cleanup or successful build claimed.
- Browser initially at #top: all graphics inactive and their animated shapes
  paused. Scrolled into view: square and circles running; doorway offscreen paused.
  Captured nonzero square translation/rotation and circle translation. After moving
  down: square marker removed/paused, doorway running with distinct nonzero layer
  translations. All animation durations 4.8s and iteration counts 1.
- Desktop screenshot confirms original designs and unaffected text/boxes. Saved
  thought-graphics-subtle-motion.jpg in chat visualization directory; it is a
  static preview, not a recording of playback.
- At 390px: graphics remain 150x150px (current mobile styling), document client/
  scroll widths both 375px. Viewport reset and temporary QA tab closed.
- Reduced-motion behavior unit tested and CSS reviewed. Actual OS/browser reduced
  motion preference was not changed/emulated during live checks.
- git diff --check on changed source/test files passed with existing line-ending
  notices. No commit, push or deployment. Preserve portrait and unrelated work.
