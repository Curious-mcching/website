# Work record 0041: Balanced experience and section introductions

- Date: 2026-10-14
- Status at creation: Completed

## Requests and final changes

Michelle requested four related visual improvements in successive messages:

1. Enlarge and balance "20+ years of experience. Many perspectives. One throughline."
   against the company logos.
2. Integrate "Big ambitions. Complex questions. New possibilities..." with the
   expertise headline instead of leaving it floating on the right.
3. Better align the section 04 audience line and introductory paragraphs with
   "Questions I'm exploring. Thinking that keeps growing."
4. Integrate "From a first observation to a considered paper. A growing collection
   across three pillars." with the section 05 headline and writing area.

Keep all wording. Remove forced line breaks only where block styling or natural
wrapping now supplies the reading structure.

The experience strip now uses a two-column grid with a reserved text column and
flexible logo window. Its first line is 17px; the stronger throughline statement
uses fluid 21–26px Rubik, weight 500, with 8px separation. Desktop gap is 48px
and vertical padding 42px. Below 760px use one column, 26px gap and 32px padding.
Keep the carousel's motion, logo sizes, duplicate accessibility treatment and
reduced-motion fallback from [0015](0015-company-logo-carousel.md) unchanged.

Sections 02 and 05 share a stacked-intro heading pattern and section-intro-copy
style. Their supporting copy now sits inside the heading group, immediately
after the h2, aligned to the same left edge. Use a 760px maximum text width,
18px text and 24px top spacing; mobile uses 17px and 20px spacing. Keep the
four collaboration cards and writing library unchanged. This supersedes only
the side-by-side introduction layout in
[0019](0019-outcome-led-collaboration-cards.md).

Section 04 uses one vertically stacked introduction rather than two columns.
Keep the headline at its existing size, with a 1040px maximum width. Below it,
an 800px context block contains the audience lead, both paragraphs and writing
link. The lead uses fluid 20–26px medium-weight type and natural line wrapping;
body paragraphs are 16px with 1.75 line-height. Preserve the title colours and
question emphasis from [0040](0040-thought-leadership-text-hierarchy.md).

No new dependencies, assets, services, client behavior or runtime architecture.
Preserve the hero, bleeding leadership artwork, stories and native disclosures.

## Design rationale and alternatives

Apply the proximity principle: related headings and supporting text should be
near each other, and spacing should distinguish that group from the content below.
Read [NN/g's primary guidance](https://www.nngroup.com/articles/gestalt-proximity/).
The chosen layout is an application of that guidance, not a user-test finding for
this site. The repeated left alignment gives a reading sequence of headline,
introduction, then cards, pillars or writing.

Keeping the right column and changing only its padding would preserve the
separation Michelle reported. Adding decorative boxes around every introduction
would create more visual elements without improving the reading sequence.
Shared styling is appropriate for the two matching section-heading groups.

## Verification and limitations

- npm run lint passed. After the last section 05 edit, a final
  npm run lint -- src/app/page.tsx also passed.
- npm run typecheck and npm run build passed on the final page, including static
  generation of the homepage and studio.
- git diff --check passed with the existing Windows line-ending notice.
- Reviewed source: both stacked heading groups contain their supporting paragraph
  after the h2; section 04 context follows its headline; mobile strip is one column.
- Read back all supplied copy; words unchanged. Removed br elements are replaced
  by block styling or a separating space, preserving the reading order.
- No live browser, computed-size or responsive overflow test performed following
  the prior browser policy block. Source/build checks do not prove visual balance
  in a rendered viewport. No screenshot or user-test result is claimed.
- No implementation-mirroring tests for these reversible typography/layout changes.
- No commit, push or deployment.

## Files and future guidance

- [Homepage structure](../src/app/page.tsx)
- [Typography and responsive layouts](../src/app/editorial.css)

Do not reintroduce detached right-hand introduction paragraphs in sections 02,
04 or 05 without a new user request. Their supporting content belongs in the
same reading group as the headline, before the associated cards or writing.
