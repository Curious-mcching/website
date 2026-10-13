# ADR 0009: Three pillars and lightweight writing

- Date: 2026-10-13
- Status at creation: Accepted

## Context

Michelle wants an evolving thought leadership section with three pillars,
allowing new POVs, ideas, and perspectives to grow organically and stretch her
thinking. Her supplied reference names The Challenger Mindset, Human × Machine,
and Leading Through Reinvention. No actual writing has been supplied.

## Decision

Expand the initial Challenger-only framework from [ADR 0006](0006-portfolio-and-local-publishing-framework.md)
to three public exploratory pillars. Store their titles, stable IDs, questions,
and descriptions in one shared module. Keep the existing #challenger anchor so
the hero's Explore my thinking link and previous links continue to work.

New pieces have a required pillar and one of four formats: Point of view, Paper,
Idea, or Perspective. The introduction can be the complete short piece. A PDF
is optional except for Paper; experience notes are optional but validated when
provided. The library filters by pillar and format and shows PDF links only
for entries with attachments. Preserve the local-only studio, production write
protection, size and PDF validation, and file-backed storage from ADR 0006.

Retain legacy topic metadata and support earlier records without rewriting:
Leadership/Transformation map to Reinvention; other original themes map to
Challenger. Missing hasPdf in original records means the original required PDF
is present. New records explicitly include pillar and hasPdf.

## Alternatives considered

- Three headings with the existing PDF-only studio: visually useful but leaves
  an unnecessary publishing barrier for questions and smaller observations.
- A hosted CMS or full article editor: adds infrastructure beyond this local
  framework. Longer pieces can continue to use PDFs.
- Separate libraries for each pillar: duplicates UI and obscures connections;
  one collection with two filters is sufficient.

## Consequences

Michelle can publish short ideas immediately without creating a document.
Longer writing can be attached later as new publications; editing/versioning
existing published entries is not part of this change. No sample opinions or
claims of AI expertise are invented. These pillars express inquiry rather than
completed writing or new professional credentials.

The studio is still local; live publishing requires the authentication and
durable storage discussed in ADR 0006. The 600-character introduction is for
short writing or introductions; longer pieces use PDFs.

## References

- [Shared pillars and formats](../src/lib/thought-leadership.ts)
- [Publishing API](../src/app/api/povs/route.ts)
- [Library](../src/components/pov-library.tsx)
- [Personal opening rationale](0008-personal-homepage-introduction.md)
