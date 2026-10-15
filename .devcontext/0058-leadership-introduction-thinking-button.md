# Work record 0058: Leadership introduction thinking button

- Date: 2026-10-14
- Status at creation: Implemented and verified

## Request and decision

Michelle requested moving the "Explore my thinking" link from below Leadership
in Action's four stories to its introduction, supplying a screenshot of that
heading and copy, and presenting it as a CTA button.

Place it immediately after the three introductory paragraphs, within the left
column beside the existing decorative artwork and above the story accordion.
Retain its native #challenger destination. This supersedes the below-stories
continuation placement from [0043](0043-whole-page-design-and-visitor-flow.md).

## Changes

- Move the existing label and right arrow into a native button-styled anchor
  inside the introduction. Remove its old section-bridge wrapper and unused rule.
- Share the outlined treatment from
  [0057](0057-question-led-expertise-introduction-cta.md), renaming
  expertise-invitation to section-invitation for both introduction CTAs.
- Retain the same 24px spacing, 52px minimum height, 15px text, aubergine outline,
  rounded shape, eucalyptus-tint hover and visible focus treatment.
- Preserve the original introductory paragraphs, companion image bleed, all four
  story contents, disclosure behavior, hero CTA and other pending work.
- No dependencies, assets, client state or architectural changes.

## Verification and limitations

- npm run lint, npm run typecheck and npm run build all passed.
- git diff --check passed before and after adding this record, with existing
  Windows line-ending notices.
- Source review confirms the moved CTA is within the introduction, no obsolete
  section-bridge or expertise-invitation references remain, and #challenger exists.
- The separate hero "Explore my thinking" button is retained intentionally.
- Existing one-column mobile introduction layout and native anchor behavior
  remain; no live browser or responsive fit check following the prior browser
  policy block. Build/source review does not establish rendered balance.
- No behavior tests for this reversible native-anchor presentation change.
- No commit, push or deployment.

## Files and future guidance

- [Leadership introduction CTA](../src/app/page.tsx)
- [Shared section CTA treatment](../src/app/editorial.css)

Keep the expertise and leadership introduction buttons visually consistent via
section-invitation. The hero uses its distinct primary-button styling.

Michelle subsequently asked whether her hero signoff should use mixed case.
Recommended "Michelle Ching / Always curious" in the conversation, but did not
change the uppercase source text in this task; that message asked for advice.
