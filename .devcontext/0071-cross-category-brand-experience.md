# Work record 0071: Cross-category brand experience

- Date: 2026-10-15
- Status at creation: Implemented and checks passed; live visual QA pending

## Request and changes

Michelle approved the recommendation in
[0070](0070-cross-category-experience-recommendation.md) and requested seeing it
on her site. Add a compact brand-experience block within The Throughline, beneath
the existing personal narrative and before the expertise section.

The new heading is A perspective shaped across industries. Supporting copy
names her agency experience in technology, automotive, consumer goods,
telecommunications, logistics and non-profit. The label Selected brand experience
through agency roles identifies the relationship accurately. The static semantic
list includes IBM, BMW, Kraft Foods, Rogers, Canada Post, Purolator, OLG and
SickKids Foundation. These are typographic brand names, not logo reproductions
or links. No claim of current client relationships or leadership of every
account was added.

Use a fine dividing rule, aubergine typography and eucalyptus label. On larger
screens, explanatory text sits beside a four-column brand grid. At 1050px and
below the groups stack; at 760px and below the brands become two columns. No
fixed cell heights or additional animation. The heading remains subordinate to
Bold thinking. Grounded in experience. The existing employer logo carousel,
personal introduction and expertise link remain unchanged.

Add the approved sentence to the first Leadership in Action introduction
paragraph: My perspective has been shaped by both agency and executive
leadership—across categories, business models and very different customer needs.

## Verification and actual outcomes

- Read local Next CSS guidance before implementation.
- npm run lint, npm run typecheck and npm run build passed.
- Inspected final generated HTML: exactly eight names in the new section,
  placed inside The Throughline before expertise; the leadership bridge sentence
  is present. All four existing campaign-film posters remain.
- git diff --check passed with existing Windows line-ending notices.
- No additional tests for this reversible static copy/layout change; no new
  runtime behavior, dependencies, assets or architecture.
- Requested opening http://localhost:3000/#agency-experience in the app's browser
  panel; the UI tool returned queued. That is not confirmation of a visible tab,
  live rendering, mobile fit or visual balance. No live browser inspection
  performed following the prior browser URL-policy block.
- No commit, push or deployment. Preserve earlier pending film and S-curve work
  from records 0067 through 0069.

## Files and future guidance

- [Homepage content and section anchor](../src/app/page.tsx)
- [Responsive presentation](../src/app/editorial.css)
- [Recommendation and relationship wording](0070-cross-category-experience-recommendation.md)

Keep agency client experience distinct from the employer carousel and the four
leadership pillars. Preserve readable brand names rather than using tiny logos
or an additional moving ticker. Review narrow screens and enlarged text when
live visual QA becomes available.
