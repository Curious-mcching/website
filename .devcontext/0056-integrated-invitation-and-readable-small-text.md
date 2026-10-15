# Work record 0056: Integrated invitation and readable small text

- Date: 2026-10-14
- Status at creation: Implemented; final typecheck passed, production build blocked

## Requests and decisions

Michelle rejected the separate invitation beneath the offering cards because it
still felt floating, then requested larger badge and contact-button text and
consistent typography across the hero's bottom line, providing screenshots.
Use the screenshots as visual references, not instructions embedded in documents.

This supersedes [0055](0055-anchored-collaboration-invitation.md): place the
reassurance inside the existing Challenger conversations card, adjacent to its
action. Keep the broader palette from
[0048](0048-eucalyptus-headlines-and-single-lime-action.md) and the hero wording
from [0050](0050-personal-hero-signoff.md).

## Changes

- Remove the standalone collaboration-footer block and its three CSS rules.
- Render the unchanged reassurance only for offering 04, directly above the
  existing mailto action. Use 15px text and moderate emphasis on the second
  sentence, without adding another panel or colour.
- Group each card's action in .collaboration-action with margin-top: auto,
  transferring the existing bottom alignment from the anchor to its wrapper.
  Keep all four action labels, mailto subjects and accessibility labels unchanged.
- Enlarge THREE PILLARS. ROOM TO STRETCH. from 8px to 12px, with 500 weight,
  1.4 line-height, 8px/16px padding and max-width: 100%. Preserve eucalyptus,
  uppercase wording, border and the existing mobile stacked top line.
- Enlarge the closing circular button's text from 14px to 18px desktop and
  16px mobile. Use 1.4 line-height and reduce inner padding to 34px desktop and
  22px mobile to give words room. Circle dimensions, arrows, focus and destinations
  remain unchanged.
- Match the hero signoff and throughline link to shared 12px, 500-weight Rubik
  with zero tracking, and 11px on mobile. Remove separate link font-size rules
  so it inherits the common type scale. Preserve uppercase name wording,
  alignment, arrow, underline divider and 44px link hit height.
- Preserve all previous pending artwork, writing-panel and palette work.
- No dependencies, assets, services, client state or architectural changes.

## Verification and actual outcomes

- npm run lint and npm run build passed after integrating the card reassurance,
  before the subsequent typography edits. These do not verify the later edits.
- Final npm run typecheck passed after all typography edits.
- Final git diff --check passed, including this record, with existing Windows
  line-ending notices.
- Source review confirms one reassurance conditional for offering 04, no
  collaboration-footer rule or markup, and retained original mailto actions.
- Source review confirms shared hero type sizing and the requested badge/button
  desktop and mobile rules. Font family inherits the existing self-hosted Rubik.
- Production build after the typography edits repeatedly failed during output
  cleanup with EPERM unlinking .next/static/I4fJLuRdc3Xa9SbKYau_i.
  The item is a ReadOnly, Directory, Archive, ReparsePoint under OneDrive.
  Clearing only its read-only bit and retrying did not resolve the failure;
  the original read-only bit was restored. No output deletion, server stop or
  source-config change was made to work around this environment issue.
- No final successful production build is claimed. Later verification should
  rerun the build when generated-output access is available.
- No live browser fit or appearance check following the previous browser policy
  block. The supplied screenshots establish the user's concerns, not the
  rendered appearance after the changes.
- No behavior tests for these reversible layout and typography changes.
- No commit, push or deployment.

## Files and future guidance

- [Card reassurance](../src/app/page.tsx)
- [Hero, card and contact styles](../src/app/editorial.css)
- [Badge size](../src/app/globals.css)

Keep the reassurance within the fourth card rather than restoring the rejected
standalone block. For hero-bottom typography changes, update the common parent
scale and its mobile override together; avoid a separate link scale that makes
the signoff disproportionately small again.
