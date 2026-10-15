# Work record 0063: Dusty rose pillar graphic details

- Date: 2026-10-14
- Status at creation: Implemented and build-verified

## Request and decision

Michelle asked whether pink would complement the thought-leadership graphics
and approved the recommendation to use dusty rose #C89AAE selectively. Keep
eucalyptus as the main graphic colour; confine rose to illustration details.
This supersedes only two mist graphic details from
[0048](0048-eucalyptus-headlines-and-single-lime-action.md).

## Changes

- Add --graphic-rose locally on .pillar-art, not to the root interface palette.
- Use it for the second overlapping Human x Machine circle's border.
- Use it for the filled inner Leading Through Reinvention doorway panel.
- Keep the Challenger Mindset square eucalyptus, other outlines eucalyptus,
  and the small central Human x Machine dot mist.
- Preserve all shapes, dimensions, hover motion, reduced-motion handling,
  typography, headline colours, CTA colours and raster artwork.
- No dependencies, assets, client behavior or architecture changes.

## Verification and limitations

- npm run build passed, including TypeScript and static generation.
- git diff --check passed before and after adding this record.
- Reviewed the source diff: exactly three CSS declarations changed, comprising
  one local colour token and its two illustration uses.
- No live browser appearance check following the prior browser policy block.
- No separate lint/typecheck rerun for this reversible CSS colour-only change;
  production build includes TypeScript validation. No behavior tests.
- No commit or push for this task. The preceding work is already committed and
  pushed as 970223a; this record and CSS refinement remain pending.

## File and future guidance

- [Scoped illustration accent](../src/app/globals.css)

Keep rose local to the pillar graphics. Do not spread it to headlines or buttons
without Michelle requesting another palette change.
