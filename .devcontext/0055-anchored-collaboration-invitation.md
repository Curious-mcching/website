# Work record 0055: Anchored collaboration invitation

- Date: 2026-10-14
- Status at creation: Implemented and build-verified

## Request and decision

Michelle felt "You don’t need a finished brief. Just a question worth exploring."
was dangling beneath the collaboration cards. She approved grouping the reassurance
and action into a compact left-aligned invitation with a subtle divider above it.
This supersedes the split desktop footer presentation retained in
[0043](0043-whole-page-design-and-visitor-flow.md).

The decision applies proximity: related copy and action read as a group when
placed close together. See
[NN/g's proximity guidance](https://www.nngroup.com/articles/gestalt-proximity/).
This is a design rationale, not a measured engagement result.

## Changes

- Stack the original two sentences and the existing "What’s on your mind?"
  link directly underneath, left-aligned on desktop and mobile.
- Add a line break after the first sentence and moderate strong emphasis to
  "Just a question worth exploring." Retain the original wording and punctuation.
- Increase paragraph size from 15px to 17px with 1.55 line-height and a 580px
  maximum width. Use existing muted text and aubergine emphasis, weight 500.
- Place the invitation below a thin existing-palette divider, with 28px margin,
  24px inner spacing and an 8px gap between reassurance and the link.
- Remove the redundant mobile-only footer layout rule; the shared column layout
  now covers all screen sizes.
- Keep the native #connect destination, arrow, underline, focus behavior and
  44px link target. Preserve all cards, artwork and other pending work.
- No dependencies, assets, client state or architecture changes.

## Verification and limitations

- npm run lint and npm run build passed, including TypeScript and static generation.
- git diff --check passed before and after adding this record, with existing
  Windows line-ending notices.
- Source review confirms one shared column layout, no remaining mobile override,
  unchanged copy and link destination, and an existing section with id="connect".
- No live browser or responsive visual verification following the documented
  browser policy block. Source and build checks do not establish rendered balance.
- Standalone typecheck was not repeated; production build includes TypeScript
  validation. No behavior tests for this reversible markup and CSS grouping.
- No commit, push or deployment.

## Files

- [Invitation markup](../src/app/page.tsx)
- [Invitation layout and typography](../src/app/editorial.css)
