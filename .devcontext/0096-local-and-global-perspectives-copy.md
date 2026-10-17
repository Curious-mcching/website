# Work record 0096: Local and global perspectives copy

- Date: 2026-10-17
- Status at creation: Implemented; focused lint and typecheck passed

## Request and changes

Michelle requested Local + Global Perspectives capitalization, a more compelling
explanation of the value of her international experience, visual balance with
the neighbouring lists and no HSBC callout in this section.

Update the global section in page.tsx with a paragraph explaining how collaboration
across cultures, customer expectations and commercial priorities broadens her
thinking. Emphasize recognizing what travels across markets, what needs to adapt
and how broader perspective informs locally relevant strategy. Avoid unverified
comparisons with other candidates or claims of employment/residence in every
listed geography.

Add a matching flowing ribbon: Canada, United States, United Kingdom, Europe,
Asia. These reflect Michelle's previously supplied collaboration with Canada,
London, Asia, Europe and the USA; United Kingdom represents the London experience.
The semantic list's label explicitly describes markets and regions of
collaboration, rather than treating all entries as individual countries.

Reuse experience-perspective-copy and experience-ribbon from
[0094](0094-full-funnel-marketing-disciplines.md), preserving the existing 18px
type, justified paragraph, eucalyptus names and decorative dots. All three
experience dimensions now have a paragraph followed by a flowing list. Keep
natural content heights rather than padding with invented experience or imposing
fixed heights. Preserve existing illustration and other content.

Remove HSBC from this specific paragraph; retain unrelated employer evidence and
leadership stories. The research-led marketing recommendation in
[0095-research-led-marketing-experience-story.md](0095-research-led-marketing-experience-story.md)
is separate pending work and was not applied or overwritten here.

## Verification and actual outcomes

- Read current source, relevant context and installed Next CSS guidance.
- npm run lint -- src/app/page.tsx passed.
- npm run typecheck passed, including route type generation and tsc --noEmit.
- Source readback confirms title capitalization, no HSBC callout in the global
  section, all five supplied markets/regions and three shared ribbon instances.
- git diff --check passed with existing Windows line-ending notices.
- No new tests or full build for this static copy and list update using existing
  markup/CSS. No live browser, responsive fit or visual balance verification for
  this change. Matching structure is not a measured rendered-balance claim.
- Other pending work remains intact. No commit, push or deployment.

## Files and numbering guidance

- [Global perspective paragraph and list](../src/app/page.tsx)
- [Shared styles, unchanged by this task](../src/app/editorial.css)

Two existing records have prefix 0095 from concurrent work. They remain immutable;
0096 was the next unused prefix checked immediately before creating this record.
Do not renumber either existing record. Keep the local/global framing about
cross-market collaboration and strategic contribution without adding unsupported
global role titles, market counts or personal locations.
