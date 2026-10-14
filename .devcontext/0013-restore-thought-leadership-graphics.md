# ADR 0013: Restore thought leadership graphics

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and request

Michelle requested the original graphics in the "Questions I’m exploring.
Thinking that keeps growing." section after reviewing the photographic version.
This supersedes only the pillar-image decision in
[ADR 0012](0012-architectural-editorial-imagery.md).

## Decision and changes

Restore the original CSS grid and rotated square, overlapping circles, and nested
doorways from the committed three-pillar implementation described in
[record 0010](0010-thought-leadership-verification.md). Restore its 150px desktop
frames, compact mobile frames, and row spacing. Keep the architectural staircase
image and rectangular frame in the personal homepage introduction.

Remove the unused pillar image mapping, pillar next/image elements, image-specific
styles, and the unreferenced challenger.png and human-machine.png workspace copies.
Their original generated files remain in Codex's generated_images directory.
Keep reinvention.png, which the hero still uses. Do not modify older records.

## Alternatives considered and consequences

- Revert all homepage imagery: outside this section-specific request.
- Keep the larger photo layout with CSS illustrations: would not restore the
  original visual treatment.

The pillars return to their restrained olive/lime graphics. The hero remains
photographic. Preserve this distinction in future visual changes unless Michelle
requests otherwise. Copy, anchors and publishing behavior are unchanged.

## Verification and lessons

- npm run lint: passed.
- npm run typecheck: passed.
- npm run build: passed. Rebuilt after the final mobile CSS correction; final
  build also passed TypeScript and static generation.
- git diff --check: passed.
- Browser confirmed three CSS graphics with three shape elements each, zero
  pillar image elements, and the staircase image still present in the hero.
- Final desktop inspection: frames are 150 x 150px; document clientWidth and
  scrollWidth both 1265px. Saved and inspected restored-pillar-graphics.png in
  the chat visualization folder.
- An initial broad style replacement also matched the mobile rule block.
  Corrected it before completion and restored the original one-column mobile
  rules. Future replacements must distinguish base selectors from media-query
  overrides. Final mobile styles were checked in source; a fresh narrow-viewport
  browser check was not performed after correction.
- Browser requests and the first build were unusually slow; a fresh temporary
  tab recovered final visual verification. No generated cache was removed.
- No new tests for this reversible visual restoration. No publishing changes,
  deployment, commit, or push.

## References

- [Homepage](../src/app/page.tsx)
- [Styles](../src/app/globals.css)
- [Previous imagery decision](0012-architectural-editorial-imagery.md)
