# Work record 0094: Full-funnel marketing disciplines

- Date: 2026-10-17
- Status at creation: Implemented; focused lint and final production build passed

## Request and changes

Michelle requested the title Across Marketing Disciplines and fuller articulation
of her integrated, 360-degree experience across the marketing funnel. She supplied
research, insights, strategy, brand advertising, integrated go-to-market,
CRM/lifecycle, retention, reactivation, winback, traditional and digital channels,
emerging media/discovery, events, activations and sponsorship.

Replace the previous short generic paragraph with copy connecting research and
strategy through brand, go-to-market and customer lifecycle, and explaining how
that breadth informs her integrated view of channels, content and experiences.
Follow it with five flowing capability groups:

- TV, radio, OOH and digital.
- CRM, next-best action, retention, reactivation and winback. Preserve the previously
  established NBA capability alongside the newly supplied lifecycle detail.
- Content creators, influencers and affiliate marketing.
- AEO and AI discoverability.
- Events, activations and sponsorships.

Reuse the approved eucalyptus typography, decorative dot separators and justified
paragraph treatment from [0093](0093-justified-industry-copy-and-categories.md).
Rename the former industry-specific CSS classes to experience-perspective-copy
and experience-ribbon now that both sections use them. Preserve the exact industry
copy, eight corrected categories and paragraph alignment. The list and capability
copy remain static Server Component content; no new architecture or dependency.

Retain the existing illustrations, shared employer/client band, capitalized
Agency + Brand Leadership heading and local/global section. All experience claims
come from Michelle's supplied account; no invented performance results, tools,
geographic roles or sole creative authorship.

## Verification and actual outcomes

- Read current source and relevant context, including 0092's latest companion-art
  direction and 0093's industry treatment. The local Next CSS guide was already
  read for this active sequence of changes.
- npm run lint -- src/app/page.tsx passed.
- Initial npm run build failed with the known OneDrive EPERM while unlinking
  .next/static/bKtcTptygf2fHrgahpUkw. Inspected attributes: ReadOnly, Directory,
  Archive, ReparsePoint.
- Verified the resolved .next/static absolute path exactly matched this project's
  generated production output and stayed within its workspace. Checked that no
  production build lock existed, then removed only .next/static with native
  PowerShell Remove-Item -LiteralPath -Recurse -Force. Source and .next/dev were
  preserved. Final npm run build passed, including TypeScript and static generation.
- Inspected final generated HTML: correct title, full-funnel/360-degree paragraph,
  all supplied capability terms and five list groups. Both flowing lists and all
  four corrected industry labels remain. Compiled CSS includes the shared
  justification and ribbon styling.
- git diff --check passed with existing Windows line-ending notices.
- No new tests for static copy/style changes; no separate typecheck command or
  live browser/mobile/visual-balance inspection for this task. Generated HTML
  verification does not establish rendered paragraph spacing or column balance.
- Other pending workspace work was preserved. No commit, push or deployment.

## Files and future guidance

- [Full-funnel copy and capability list](../src/app/page.tsx)
- [Shared paragraph and ribbon presentation](../src/app/editorial.css)
- [Industry alignment and categories](0093-justified-industry-copy-and-categories.md)
- [Current companion artwork](0092-perspective-companions-and-deeper-lime-thread.md)

Preserve both strategic leadership and channel/lifecycle depth when tightening
this copy in future. Do not reduce it to media channels alone. Review longer
capability items, justified word spacing and responsive balance live when
available; maintain the existing readable 18px type and clear heading hierarchy.
