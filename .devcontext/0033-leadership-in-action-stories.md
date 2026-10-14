# ADR and work record 0033: Leadership in Action stories

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and request

Michelle renamed section 03 to "Leadership in Action" and supplied the headline
"Different challenges. One challenger mindset." and three introductory paragraphs.
She explicitly requested removing the former RBC, HSBC Canada, and SickKids/JWT
cards and replacing them with four sections. She then supplied the four category
titles and complete stories in successive messages.

This changes the experience presentation established in
[0006](0006-portfolio-and-local-publishing-framework.md) and
[0016](0016-video-inspired-editorial-motion.md). Preserve the separate expertise
offering cards, thought leadership pillars, and publishing framework.

## Decision

Use four full-width, numbered story sections with these categories:

1. Challenger Strategy: "Competing with giants. Without playing their game."
2. Enterprise Reinvention: "Challenging the playbook from within."
3. Customer-led Transformation: "From transactions to meaningful relationships."
4. Human Leadership: "Building teams that can move mountains."

Render Michelle's supplied copy verbatim, preserving paragraph breaks, bold leads,
bold "What it taught me:" prefixes, and italic closing themes. Encode straight
apostrophes and the ampersand in JSX without changing the displayed text.
All four stories are complete; remove temporary draft labels and their unused CSS.

Retain the #experience anchor and label its navigation link "Leadership in Action".
Use semantic headings with unique aria-labelledby targets and the existing reveal
behavior. Keep an 820px maximum story-copy width and reduce the number column and
spacing below 760px. The section retains its existing palette and Server Component.

Remove the unused experience data array and obsolete work-card/case-detail styles.
Preserve the shared POV experience disclosure styles, which are still used.
No new dependencies or runtime behavior.

## Alternatives and consequences

Keeping the three-card grid would conflict with Michelle's explicit replacement
request and leave little room for the longer stories. Expandable disclosures could
reduce page height but hide the newly supplied narratives. Full stories make all
four experiences readable without interaction, at the cost of a longer section.
Static JSX is sufficient for four fixed stories; a CMS or new data abstraction
is unnecessary for this change.

## Verification

- npm run lint: passed, including a final run after Human Leadership was added.
- npm run typecheck: passed, including Next route type generation.
- npm run build: passed, including TypeScript and static page generation.
- git diff --check: passed with existing Windows line-ending notices.
- Read back all four stories in source against the supplied copy; confirmed four
  unique story headings, four lesson prefixes, bold leads, italic theme lines,
  and no draft placeholders. Confirmed the retained navigation anchor.
- Source includes the narrower mobile number column; live responsive visual QA
  was not performed following the prior browser URL-policy block. No rendered
  screenshot or live browser verification is claimed.
- Checks used installed Windows npm with the documented OneDrive/Next sandbox
  restrictions accommodated. No behavior tests for these content/layout changes.
- No commit, push, or deployment.

## Files and future guidance

- [Homepage stories](../src/app/page.tsx)
- [Editorial layout](../src/app/editorial.css)
- [Shared styles](../src/app/globals.css)
- [Navigation](../src/components/site-shell.tsx)
- [Remaining offering data](../src/lib/portfolio.ts)

These four experiences are distinct from the four collaboration offering cards
and the three thought leadership pillars. Do not restore the removed company-card
copy or metrics when changing either of those other sections. Use this record to
recover why the experiences are presented as complete narratives.
