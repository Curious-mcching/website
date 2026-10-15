# Work record 0057: Question-led expertise introduction CTA

- Date: 2026-10-14
- Status at creation: Implemented and verified

## Request and decision

Michelle proposed using the former reassurance as a CTA beside the "Your next
challenge. Our starting point." introduction, supplying a screenshot of that
heading area, and asked for less redundant wording.

Place a quiet outlined "Start with a question" action directly beneath the
existing introductory copy, before the offering cards. It links to #connect.
Remove the original reassurance from card 04. This supersedes only its placement
and wording from [0056](0056-integrated-invitation-and-readable-small-text.md);
retain that record's badge, contact-button and hero typography changes.

## Changes

- Add a native anchor styled with the shared button class and a right arrow.
  Keep it inside the section's existing left-aligned introduction group.
- Use 24px top spacing, a 52px minimum height, 15px text and an aubergine outline
  with rounded corners. Hover uses existing eucalyptus tint; keyboard focus
  retains the shared visible iris outline. No new palette colours.
- Remove the reassurance conditional, its card-action wrappers and unused CSS.
  Restore margin-top: auto on collaboration-link so all four original mailto
  actions stay aligned at their card bottoms.
- Preserve the section heading, supplied introductory sentences, card descriptions,
  tags, action labels, email subjects, all artwork and other pending refinements.
- No new dependencies, assets, client state or architecture.

## Verification and limitations

- npm run lint, npm run typecheck and npm run build all passed.
- The previously blocked generated-output cleanup from 0056 succeeded this time.
  This successful build also includes the pending typography changes from 0056.
- git diff --check passed before and after adding this record, with existing
  Windows line-ending notices.
- Source review confirms one "Start with a question" anchor, the existing
  #connect target, and absence of the old reassurance and obsolete action classes.
- Native fragment navigation, shared focus treatment, hit target and responsive
  introduction layout are retained. No custom client behavior was introduced.
- No live browser interaction or visual fit check following the prior browser
  policy block; source and build checks do not confirm perceived placement.
- No behavior tests for this reversible native link and presentation change.
- No commit, push or deployment.

## Files and future guidance

- [Introduction CTA](../src/app/page.tsx)
- [CTA appearance and restored card alignment](../src/app/editorial.css)

Keep this invitation with the introduction rather than restoring a separate
footer or duplicating the old reassurance inside card 04. It is a section-level
contact invitation; the four card-specific mailto actions remain distinct.
