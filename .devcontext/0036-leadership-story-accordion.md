# ADR and work record 0036: Leadership story accordion

- Date: 2026-10-14
- Status at creation: Accepted and implemented

## Context and decision

Michelle requested a more designed, modern, drop-and-expand presentation for the
four experiences under "Different challenges. One challenger mindset." This
supersedes the always-visible story presentation in
[0033](0033-leadership-in-action-stories.md), retaining all supplied copy.

Use native details/summary controls with a shared name="leadership-stories".
All four start collapsed; browsers supporting named disclosure groups allow
one story open at a time. Older browsers retain independent native disclosures.
No client component, dependency, custom keyboard handlers or animation library.
Each summary contains one heading with the category and story title. Decorative
numbers, soft orbital outlines and plus/minus indicators are hidden from assistive
technology. The entire summary is clickable and retains a visible focus outline.

Design closed panels with softly rounded borders, iris/eucalyptus accents and
geometric number treatments. Open summaries use aubergine with mist titles and
lime accents. Present the lesson as a highlighted inset and the italic themes
as a separated closing line. Mobile styles narrow the number column, hide the
decorative "Explore story" hint and give expanded copy the full panel width.
Existing reduced-motion rules disable the new colour/icon transitions.

## Alternatives and consequences

Keeping the full narratives visible would preserve the long section but miss
the requested interaction. A custom React accordion could enforce grouping in
older browsers but would add JavaScript and state for behavior native HTML supplies.
The content remains server-rendered and available when JavaScript is disabled.
Readers now expand a story to read its body; category and headline stay visible.

## Verification

- npm run lint, npm run typecheck and npm run build passed after this change.
- git diff --check passed with the existing Windows line-ending notice.
- Before/after normalized SHA-256 hashes matched for all four body-copy blocks,
  including emphasis and paragraph markup.
- Source comparison confirmed every other homepage section was unchanged.
- Source contains four named details, four summary controls and four unique
  story headings; none starts open. Reviewed focus and reduced-motion rules.
- No live browser, keyboard-interaction or mobile visual check performed due
  to the previously documented browser policy block. Native keyboard semantics
  are used; these checks do not establish rendered appearance or live grouping.
- No mirrored implementation tests added for the browser's native controls.
- No commit, push or deployment for this update.

## Files and future guidance

- [Homepage disclosures](../src/app/page.tsx)
- [Accordion styling](../src/app/editorial.css)

Keep these four experiences distinct from the collaboration offerings and the
three thought leadership pillars. Preserve the complete supplied body copy
when adjusting disclosure appearance or behavior.
