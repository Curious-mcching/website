# ADR and work record 0099: Balanced experience and leadership positioning

- Date: 2026-10-17
- Status at creation: Implemented; lint, typecheck and live responsive checks
  passed; production build blocked by a CSS worker failure

## Context and request

Michelle asked for visually balanced copy across the three experience columns,
more space between them, and a whole-site narrative review informed by current
senior marketing and change-management job postings.

Read relevant records including 0078, 0079, 0091-0097 and the concurrently added
0098. Preserve the employer/client band, companion illustrations, current Venn
artwork, industry capitalization, justified paragraphs and approved capability
labels. This supersedes only the paragraph wording in 0091, 0096 and 0097; keep
0097's Building Brands. Modernizing Marketing. heading and four labels. All
earlier records remain immutable, including both records numbered 0095.

## Decision and changes

Use comparable-length single paragraphs for each lens. Connect industry breadth
to customer-led strategic judgment; marketing depth to integrated brand building,
modernization, creator partnerships and AI discoverability; international
collaboration to alignment and locally relevant strategy. Tighten the overview
introduction around brand growth, organizational change and coordinated execution.
Correct unlock growth to unlocked growth in the Throughline copy.

Increase desktop column gaps from 32px to a fluid 40-72px. Use CSS row subgrid
inside a feature query: each section spans four shared rows for its decorative
artwork, heading, paragraph and list. Content determines row heights; no fixed
paragraph heights, clipping or filler text. Below 1051px, use normal block sections
in a single-column layout with 38px gaps (32px through 760px). This prevents wider
desktop gutters from squeezing tablet copy. Keep the existing 18px body/list
type and requested justification, last-line alignment and automatic hyphenation.

Alternatives considered: independent columns retain uneven starts; fixed minimum
heights are brittle with wrapping and font changes; shrinking type conflicts with
the established legibility direction; adding more lists or invented results would
undermine the intended executive narrative. Subgrid is a progressive enhancement:
unsupported browsers retain the basic three-column flow with comparable copy.
The lists have different amounts of content, so their ends intentionally differ.

Reference: [MDN CSS subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Subgrid).
Read the installed Next CSS guide before implementation. No dependencies, runtime
behavior, package scripts, publishing features or client components were added.

## Research and whole-site review

Created [leadership positioning review](../docs/leadership-positioning-review.md)
with six first-party employer postings across four organizations: three Arc'teryx
VP roles, Genea VP Marketing, HopSkipDrive VP Marketing and Northwestern Mutual
Senior Director Change Management. All six readable job pages were checked this
turn. The sample is qualitative, with employer concentration, and does not support
a claim about what most companies require. Closed/unreadable postings were excluded.

The report maps employer priorities to the hero, overview, offerings, four
leadership stories, thought leadership, writing and contact. It recommends linking
strategy, team alignment and execution to verified outcomes. It identifies proof
of scale, personal accountability and sustained change adoption as gaps to fill
with Michelle's evidence. The RBC creative partnership alone should not be used
to claim enterprise-wide operational transformation. No metrics, budgets, team
sizes, certifications or international leadership roles were invented.

## Checks and actual outcomes

- npm run lint: exit 0, no reported errors.
- npm run typecheck: exit 0, route generation and TypeScript passed.
- Live in-app browser confirmed the new text. At 1440px, all three headings,
  paragraphs and lists start on shared rows. Headings may have different line
  counts; their text is top-aligned. The two shorter paragraphs each measured
  221px high and the middle one 252px; the list row shared the same top position.
- At 1440px and 1051px there was no document horizontal overflow. At 1051px all
  three lists had equal client/scroll widths of 276px. At 900px and 390px the
  section stacked into one column with block sections and no horizontal overflow.
  Desktop and 390px screenshots were visually inspected. Reset temporary viewport.
- Screenshot: C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/balanced-experience-columns.jpg.
- git diff --check passed with existing Windows line-ending notices.
- npm run build initially failed on EPERM removing generated
  .next/server/app/api/povs/route. Inspected read-only/reparse attributes, verified
  the absolute .next/server target stayed in this workspace, confirmed no build
  lock, and removed only that generated subtree. Retry failed on .next/types;
  applied the same guarded cleanup to generated types, preserving .next/dev.
- The following build progressed to compilation, then Turbopack failed because a
  CSS worker process exited before connecting. Repeating npm run build outside the
  restricted environment also failed with that error (globals.css this time).
  Production build remains unsuccessful; do not characterize it as a confirmed
  sandbox-only problem or claim production readiness. Panic log from the final
  attempt: C:/Users/mcchi/AppData/Local/Temp/next-panic-b7f72f005dc5363f63ee2b892702a3c6.log.
- No new behavioral tests for static copy/layout. No commit, push or deployment.
  Existing pending artwork, styles, previews and records were preserved.

## Files and future guidance

- [Page copy and structure](../src/app/page.tsx)
- [Scoped layout rules](../src/app/editorial.css)
- [Research review and primary source links](../docs/leadership-positioning-review.md)

Keep four direct children per lens while using the four-row subgrid; if content
structure changes, update that relationship intentionally. Continue to describe
international experience as collaboration unless further responsibility is
confirmed. Resolve the CSS worker/build environment failure before a production
release; the successful browser checks validate this layout, not a production
build. Additional case-study claims require actual evidence from Michelle.
