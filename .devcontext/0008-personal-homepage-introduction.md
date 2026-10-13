# Work record 0008: Personal homepage introduction

- Date: 2026-10-13
- Status at creation: Completed

## Request

Michelle felt the original hero sounded like a campaign and requested a more
personal opening using two supplied screenshots as creative inspiration.
The references connect challenger thinking to curiosity, courage, conviction,
commercial discipline, and human leadership.

## Changes and rationale

Replaced the hero headline with "Curious by nature. A challenger at heart."
Combined the personal introduction from the second reference with the mindset
principles from the first. The supporting paragraphs explain Michelle's approach
to transformation and growth and her belief in bringing people along.
Updated the hero links to "Explore my thinking" (#challenger) and "Let's connect"
(#connect). Added spacing between the two introductory paragraphs.

This is an editorial refinement of the initial framework described in
[ADR 0006](0006-portfolio-and-local-publishing-framework.md), not an architectural
change. Scope was limited to the opening marketing and growth leader section.

## Verification

- npm run lint: passed.
- npm run typecheck: passed.
- npm run build: passed, including TypeScript and static generation.
- Inspected the updated hero in the local browser at 1440px and 320px.
- At 320px, document clientWidth and scrollWidth both measured 305px; no
  horizontal overflow. Both action links have the intended existing targets.
- Saved a desktop preview as personal-hero.jpg in the chat visualization folder.
- Reset the temporary browser viewport and closed the dedicated QA tab.
- No new tests were added for this reversible copy and spacing update.
- Existing development context records were preserved. No deployment performed.

## Future guidance

Keep the opening personal and grounded in Michelle's approach. Avoid returning
to the superseded "Challenge the expected. Create what's next." campaign-style
headline without a new request. Published writing remains a future addition;
this copy does not imply that papers or POVs already exist.

## References

- [Homepage](../src/app/page.tsx)
- [Styles](../src/app/globals.css)
- [Initial verification](0007-portfolio-framework-verification.md)
