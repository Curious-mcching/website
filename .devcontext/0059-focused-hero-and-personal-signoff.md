# Work record 0059: Focused hero and personal signoff

- Date: 2026-10-14
- Status at creation: Implemented and verified

## Request and changes

Michelle approved the recommendation to keep one main hero CTA. Apply the
single-action opening and the discussed mixed-case signoff.

- Remove the secondary "Let’s connect" link beside the hero's primary button.
- Retain "Explore my thinking" with its lime styling and #challenger destination.
- Keep contact available through the existing navigation and closing section.
- Change the hero signoff to "Michelle Ching / Always curious", superseding
  the uppercase treatment from [0050](0050-personal-hero-signoff.md).
- Preserve matching Rubik typography from
  [0056](0056-integrated-invitation-and-readable-small-text.md).
- Remove the now-unused hero text-link focus selector from the combined rule;
  retain the primary button's eucalyptus focus outline.
- Retain the quieter "Discover the throughline" scroll-navigation cue, hero
  artwork, supplied paragraphs, heading and recently moved section CTAs.
- No dependencies, assets, client behavior or architecture changes.

## Verification and limitations

- npm run lint, npm run typecheck and npm run build all passed.
- git diff --check passed before and after adding this record, with existing
  Windows line-ending notices.
- Source review confirms a single anchor in hero-actions, the mixed-case
  signoff, intact #challenger/#connect targets, header contact and closing action.
- No live browser or responsive visual check following the prior browser policy
  block. No behavior tests for these reversible static presentation edits.
- No commit, push or deployment.

## Files and follow-up advice

- [Hero action and signoff](../src/app/page.tsx)
- [Hero focus styling](../src/app/editorial.css)

Michelle subsequently asked about replacing the slash with a vertical bar or dot.
Recommended "Michelle Ching · Always curious" in the conversation. The source
still uses a slash in this record's task; the separator question requested advice.
