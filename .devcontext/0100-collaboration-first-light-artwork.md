# Work record 0100: First-light collaboration artwork

- Date: 2026-10-17
- Status at creation: Implemented; desktop and mobile preview verified

## Request and direction

Michelle felt the right side of the Your next challenge. Our starting point.
introduction needed a contemporary image. The initial custom open-ribbon trial
was rejected as ribbons. She clarified that the visual should signal beginnings,
possibility and a start. Replaced that trial with an abstract first-light horizon:
pale lime-white light emerging above broad eucalyptus and iris fields.

Generated both assets with the built-in image_gen tool. Final project asset is
public/images/collaboration-first-light.png. Exact prompts, generation settings
and provenance are in design-previews/collaboration-2026-10-17/README.md. Moved the
unused ribbon trial to that preview directory, outside public. Preserve the
generated originals under this chat's generated_images directory.

## Implementation

Add a decorative Next Image beside the existing introduction, with empty alt and
aria-hidden wrapper. Scope the desktop two-column grid to expertise-section so
the writing introduction's stacked layout is unaffected. Retain all headings,
copy, CTA destinations and collaboration cards. The desktop text/art proportions
are 1.5:1 with a 3% gap. On screens up to 760px, stack the artwork below the CTA,
with 440px max width and a shallower aspect ratio.

The final image uses the existing mist palette as its background and a radial
CSS edge fade, allowing the horizon to blend into the page. No borders, panel,
new dependencies, motion or client-side behavior. Preserve concurrent experience
and leadership copy updates, including record 0099.

## Checks and actual outcomes

- Read relevant collaboration records, imagegen skill and prompt guidance. The
  installed Next CSS guide was already read for this active work sequence.
- Focused page lint exited 0 for the layout/markup with the initial image. The
  final asset-source string and image-only CSS were subsequently browser verified;
  no repeat lint for that static asset replacement.
- Desktop browser confirms final image loaded and blends beside the complete
  heading and CTA. Mobile screenshot confirms artwork stacks below CTA and above
  cards. At 390px viewport, document client/scroll widths are both 375px and art
  client/scroll widths are both 335px. Image complete is true.
- Screenshots: collaboration-first-light-desktop.jpg and
  collaboration-first-light-mobile.jpg in this chat's visualization directory.
  Viewport reset and temporary QA tab closed; user tab preserved.
- git diff --check passed with existing Windows line-ending notices.
- No new tests, separate typecheck or full production build for this decorative
  asset/layout edit. The earlier production-output EPERM issue remains documented
  in 0098; no successful production build is claimed for this update.
- No commit, push or deployment. Existing development records remain immutable.
