# Work record 0126: Subtle hero zoom-in

- Date: 2026-10-17
- Status at creation: Implemented; live desktop/mobile checks passed

## Request and implementation

After approving the lighter hero artwork in 0125, Michelle explicitly requested
a zoom-in effect. Read 0118's previous restrained-motion decision before editing.
This new request supersedes only its removal of the initial hero zoom; retain
the static logos, existing menu/control behavior and reduced-motion rules.

Add a CSS-only hero-zoom-in animation from scale(1) to scale(1.045) over 4.8s,
with cubic-bezier(.2,.6,.3,1), a single iteration and both fill mode. Anchor the
image at 72% 42% to retain the prominent right-hand artwork. It plays on page load
and then settles; no looping, scroll effect, hover behavior or new JS. The image
remains clipped by the existing hero wrapper. Text, overlay, CTAs and layout stay
stationary. Apply animation only under prefers-reduced-motion: no-preference;
existing reduced-motion !important rules additionally suppress animations.

## Verification and limitations

- Read relevant immutable records and installed Next CSS guidance.
- Browser caught active animation at matrix(1.04387,0,0,1.04387,0,0), followed by
  settled matrix(1.045,0,0,1.045,0,0). Computed name hero-zoom-in, duration 4.8s,
  iteration count 1. Text transform remains none.
- Desktop document client/scroll widths both 1265px; mobile at 390px viewport
  both 375px. Confirmed animation styling and clipped image remain valid on mobile.
- Actual browser preference is no-preference. Reduced-motion gating and global
  suppression reviewed in source; OS preference was not emulated or changed.
- Saved hero-gentle-zoom.jpg in the chat visualization directory. Screenshot
  shows the settled frame, not animation playback. To watch it, load the page at
  #top; jumping back to the hero after the initial animation has finished does
  not replay it.
- Reset viewport and closed temporary QA tab. User tabs preserved.
- git diff --check -- src/app/editorial.css passed.
- No lint/typecheck/build or new tests for this small CSS-only motion treatment;
  live animation properties and transforms were verified directly.
- No assets, dependencies, runtime architecture, commit, push or deployment.
  All other pending work preserved; existing records remain immutable.
