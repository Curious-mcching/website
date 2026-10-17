# Work record 0091: Industry perspective copy and flowing names

- Date: 2026-10-16
- Status at creation: Implemented; focused lint and production build passed

## Request and changes

Michelle wanted Across Industries to communicate the value of her breadth rather
than listing categories alone. After considering an industry/perspective table,
she preferred explanatory copy followed by an interesting flowing list, and
approved implementing that option.

Replace the original industry-only paragraph with the approved text:

Working across categories has taught me to look beyond familiar playbooks.
Different customer needs, competitive pressures and ways of creating value give
me more ways to frame a challenge—and more possibilities to draw from.

Follow it with a semantic list of eight industries: Financial services,
Automotive, Technology, Consumer goods, Telecommunications, Logistics, Gaming
and Non-profit. Style it as naturally wrapping eucalyptus text at the existing
18px body-text size and medium weight, with subtle decorative dot separators.
Hide the final separator. Add no boxes, borders, fixed columns or new animation.

Preserve Across Industries capitalization from
[0090](0090-industries-heading-capitalization.md), existing artwork, the shared
employer/client band and the other two experience dimensions. This is static
content and CSS only; no new architecture or dependency.

## Verification and actual outcomes

- Read relevant development records, including 0078's legibility requirements and
  0079's approved shared band, and the installed Next CSS guide before editing.
- npm run lint -- src/app/page.tsx passed.
- npm run build passed, including TypeScript and static page generation. No
  separate npm run typecheck executed for this static copy/presentation edit.
- Final generated HTML contains the approved paragraph, all eight semantic list
  items and retained heading capitalization. Compiled CSS contains the new ribbon
  rules. git diff --check passed with existing Windows line-ending notices.
- No new tests for reversible static copy and styling. No live browser or mobile
  visual inspection performed for this change. Existing browser verification in
  other records does not verify this update's rendered balance.
- Other pending workspace work was preserved. No commit, push or deployment.

## Follow-up and references

Michelle subsequently requested a box line format rather than left-justified
copy. Clarification of even paragraph edges versus centred text is pending at
this record's creation; no alignment change is included here. Record the resolved
follow-up in a new immutable record.

- [Industry paragraph and list](../src/app/page.tsx)
- [Ribbon styling](../src/app/editorial.css)
- [Supporting typography](0078-larger-supporting-text-legibility.md)
- [Capitalization](0090-industries-heading-capitalization.md)
