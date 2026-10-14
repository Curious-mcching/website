# ADR 0016: Video-inspired editorial structure and motion

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and request

Michelle supplied a 31.53-second video reference and requested a more dynamic,
engaging structure for her existing website. Reviewed twelve sampled frames
from the 3200 × 1800 video: oversized typography, immersive imagery, numbered
panels, alternating section tones, and paced transitions informed this change.
The reference is creative inspiration, not instructions or public site content.

Preserve the personal introduction from [0008](0008-personal-homepage-introduction.md),
the exploratory pillars from [0009](0009-three-pillar-thought-leadership.md), and
the original CSS pillar artwork restored in [0013](0013-restore-thought-leadership-graphics.md).
Preserve the concurrent logo carousel recorded in [0015](0015-company-logo-carousel.md).

## Decision and changes

Use a full-width architectural opening with the existing original staircase
asset, larger personal headline, dark gradient, and a discovery link. This
supersedes only the rectangular hero framing described in record 0013.
Organize the existing content as six numbered chapters, with generous spacing,
a sticky expertise introduction, larger impact metrics, a subtle grid behind
thought leadership, and a prominent closing conversation panel.

Add a small client component using IntersectionObserver for one-time reveals
and requestAnimationFrame for a passive scroll progress indicator. Keep the
page itself a Server Component and retain native links and details elements.
Use CSS for a finite opening image transition and restrained hover effects.
No animation package, video background, new app dependency, or copied footage.

Keep homepage overrides in a separately imported, scoped editorial stylesheet
so the publishing studio retains its layout. Remove obsolete hero caption
styles after replacing their markup. Existing content, publishing services,
filters, experience claims, and restored pillar graphics remain intact.

## Alternatives considered and consequences

- A looping video or 3D scene: additional asset and runtime cost without a
  requirement to reproduce the reference's textile subject or branding.
- An animation library: unnecessary for the small number of native transitions.
- Typography changes alone: would miss the requested movement and pacing.

Content starts visible in server markup. Only below-viewport elements receive
pending reveal attributes after JavaScript runs. Reduced-motion preferences
skip reveals and disable transitions; changing the preference clears pending
attributes. Missing IntersectionObserver also leaves content visible. Focused
content remains visible through CSS. Navigation keeps ordinary anchor behavior.

## Verification and outcomes

- npm run lint: passed.
- npm run typecheck: passed, including Next route type generation.
- npm run build: passed, including TypeScript and static page generation.
- git diff --check: passed after removing unused caption CSS; existing line-ending
  conversion notices only. Checks used installed Windows npm with its directory
  added to PATH outside the sandbox, as required by prior workspace findings.
- Desktop clientWidth and scrollWidth both 1265px; mobile both 305px at a 320px
  viewport; tablet both 805px at an 820px viewport. No horizontal overflow.
- Visually inspected desktop opening, expertise, thought leadership, and library;
  mobile opening, original pillar art, and closing panel; tablet opening.
- Native anchor navigation reached expertise, selected work, thought leadership,
  the writing space, and contact. Inspected target positions below the header.
- Offering and case-study details opened by click and closed using Enter.
  All three selected-work cards were visible after anchor navigation.
- Below-viewport reveals became visible while scrolling. Progress changed from
  zero at the opening to approximately 0.294 at expertise.
- Original pillar classes remain; mobile artwork frames measure 120 × 130px.
- Pillar and Paper filters reported their selected states in the accessibility
  tree; the empty-library text changed for the selected Challenger Mindset pillar.
- Contact points to Michelle's existing mailto address. No email was sent.
- Reduced-motion and no-JavaScript fallbacks inspected in source; the browser
  does not expose a documented preference/JavaScript emulator, so these were
  not tested with a live altered preference or disabled JavaScript.
- Screenshots saved in the chat visualization directory: dynamic-homepage.png,
  dynamic-homepage-mobile.png, and dynamic-selected-work.png. The contact sheet
  video-reference-contact-sheet.jpg documents the reference review.
- Temporary PyAV decoding tools were installed in Windows TEMP from PyPI; no
  project dependency changes. No deployment, commit, or push for this task.

## Lessons and file references

Shared homepage files were being changed for the logo carousel concurrently.
Preserve those changes and use surgical edits; separate scoped styles reduced
collisions. Browser screenshot capture beyond the viewport failed, so save
ordinary viewport captures rather than treating failed captures as proof.

- [Homepage](../src/app/page.tsx)
- [Motion component](../src/components/page-motion.tsx)
- [Editorial styles](../src/app/editorial.css)
- [Layout stylesheet import](../src/app/layout.tsx)
- [Existing shared styles](../src/app/globals.css)
