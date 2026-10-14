# Work record 0030: Throughline and transformation copy

- Date: 2026-10-13
- Status at creation: Completed

## Requests and changes

Michelle supplied four replacement paragraphs for the body beneath "Bold
thinking. Grounded in experience." Replace the three existing paragraphs with
her four paragraphs in src/app/page.tsx. Preserve the large opening quote and
italic question treatment, capitalizing "Is" as supplied. Escape straight
apostrophes in JSX with &apos;, which renders the supplied apostrophe character.
Keep "unlock growth" exactly as provided rather than silently editing wording.

She then supplied replacement copy and a screenshot for card 03, Marketing
transformation. Its existing headline already matches "Turn change into forward
momentum." Replace its description in src/lib/portfolio.ts with the supplied
two sentences, including the lowercase opening "rethink". Retain category,
number, outcomes, contact link, and existing card presentation.

No changes to headings, imagery, typography, palette, layout, or interactions.
No new architecture, dependency, or feature.

## Verification and outcomes

- Final npm run lint: passed after both copy changes.
- Production build after the throughline update: passed, including TypeScript
  and static generation. Card 03's string replacement was made after that build
  compiled; verified its final source and reran lint. No second full build for
  this plain string-only data change.
- Extracted the four intro paragraphs from JSX, removed inline formatting tags,
  and decoded HTML entities; all match the supplied wording and punctuation.
- Read back card 03's title and complete description; match the supplied copy.
- git diff --check: passed; existing line-ending conversion notices only.
- Checks used installed Windows npm outside the sandbox, consistent with the
  project's established OneDrive runtime restrictions.
- No browser check repeated because the preceding task encountered an explicit
  browser URL-policy block. No live screenshot or responsive check is claimed.
- No behavior tests added for these reversible content-only changes.
- No commit, push, or deployment.

## Relevant files and lesson

- [Throughline paragraphs](../src/app/page.tsx)
- [Card 03 data](../src/lib/portfolio.ts)
- [Collaboration card framework](0019-outcome-led-collaboration-cards.md)

Keep author-supplied replacement copy intact. JSX entity escaping must preserve
the displayed text, and existing emphasis can remain without altering wording.
