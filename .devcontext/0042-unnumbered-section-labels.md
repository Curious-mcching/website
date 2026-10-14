# Work record 0042: Unnumbered section labels

- Date: 2026-10-14
- Status at creation: Completed

## Request and design decision

Michelle questioned numbering the six main section labels and requested a more
interesting, modern treatment that preserves the headline below each label.
Remove only the six chapter-number prefixes. Keep numbering on collaboration
cards, leadership stories and thought leadership graphics where it identifies
members of a collection.

Use a shared section-label class with 12px uppercase Rubik, existing weight 600,
modest tracking and a short rounded 28px colour-accent rule. Light sections use
muted text and iris/eucalyptus accent colours. The dark thought leadership section
uses on-dark text and an eucalyptus/lime rule; the green closing section uses
aubergine text and an aubergine/iris rule. Retain the existing label-to-headline
spacing and all label wording. Remove unused chapter-number selectors.

Keep every h2 headline, its markup, size, font, colour and emphasis unchanged.
No runtime architecture or dependencies changed. Interest comes from a consistent
type system and limited accent colour, applying
[NN/g's visual design guidance](https://www.nngroup.com/articles/good-visual-design/).
This is the chosen application of the guidance, not a claim that every designer
uses this exact treatment. Large icons or bright label backgrounds could compete
with the headlines; the small rules provide a quieter repeating detail.

## Verification and limitations

- npm run lint, npm run typecheck and npm run build passed.
- git diff --check passed with the existing Windows line-ending notice.
- Source has six section-label elements and no remaining chapter-number references.
- All six h2 blocks exactly match the committed headline markup.
- Calculated label contrast: mist 5.20:1, leadership background 4.68:1,
  dark background 10.10:1 and green closing background 6.70:1.
- Source allows wrapping for long labels, with a non-shrinking decorative rule.
- No live browser or mobile visual check following the prior browser policy block;
  no rendered screenshot or overflow measurement is claimed.
- No behavior tests for these reversible typography changes.
- No commit, push or deployment.

## Files and future guidance

- [Label markup](../src/app/page.tsx)
- [Shared label treatment](../src/app/editorial.css)

Use these labels for quiet orientation; the h2 below remains the main message.
Avoid restoring section numbering without a new user request. Keep the stacked
introduction relationships documented in
[0041](0041-balanced-experience-and-section-introductions.md).
