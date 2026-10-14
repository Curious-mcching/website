# Work record 0043: Whole-page design and visitor flow

- Date: 2026-10-14
- Status at creation: Implemented and build-verified; live visual QA outstanding

## Request and review scope

Michelle approved the current direction and requested a review of the entire
website for modern, engaging, sophisticated structure, alignment, buttons and
visitor flow. Review the full public homepage, shared navigation/footer, writing
library and local studio context. Read the relevant development records and local
Next CSS documentation. The earlier browser policy block prevented a live UI
review; this pass reviews source, component behavior and compiled output.

Preserve the warm hero, approved companion artwork and background bleed,
unnumbered section labels, stacked introductions, native leadership disclosures,
original thought leadership graphics, typography pairing and supplied copy.
Relevant records: [0036](0036-leadership-story-accordion.md),
[0037](0037-warmer-layered-geometric-hero.md),
[0039](0039-leadership-artwork-background-bleed.md),
[0040](0040-thought-leadership-text-hierarchy.md),
[0041](0041-balanced-experience-and-section-introductions.md) and
[0042](0042-unnumbered-section-labels.md).

## Changes and rationale

- Readability: hero and collaboration descriptions use 16px type; contact copy
  uses 17px. Raise offering labels, topic tags and card actions modestly. Keep
  headline sizes unchanged. Bring the throughline's large vertical spacing into
  the page's existing 100px desktop section rhythm.
- Interactions: text links have persistent underlines, 14px text and a minimum
  44px hit height. Navigation, header contact and footer links also have a 44px
  minimum height. Hero primary action is 56px high with 15px text. Add subtle
  arrow movement only for hover-capable devices without reduced-motion preference.
- Direction: use right arrows for the hero and header's in-page destinations.
  Add a throughline-to-expertise link and a leadership-to-thinking link. Add a
  native same-page Back to top link to the footer; #top exists both on the homepage
  hero and on the studio header. Keep the header's hero-boundary visibility logic.
- Mobile: increase anchor offset to 156px to leave room for the larger navigation
  targets. Retain all one-column layouts, allow footer links to wrap, and prevent
  doubled top margins on the closing action group.
- Card finish: soften collaboration and future writing cards to 16px corner
  radii, while keeping the distinctive larger geometric artwork treatments.
- Writing: retain truthful unpublished content. Hide filters only while followed
  by the empty writing panel using :has; filter controls remain visible for
  published work, including a no-matches result. Enlarge empty-state text, centre
  the paper graphic and add a quiet eucalyptus glow. Keep existing error/status
  wording and roles; make the error panel one column. Give the loading message
  reserved vertical space. Publishing code and storage are unchanged.
- Closing: add two quiet overlapping decorative ellipses behind the contact
  section, echoing the site's orbital/geometric language. Keep them static,
  clipped and non-interactive. Group the circular action with Michelle's visible
  existing email address. Use an aubergine focus outline for both contact actions
  against the green background.
- Footer: use readable 12px text and wrap links without altering the LinkedIn
  destination or development-only publishing studio link.

The approach applies consistency, purposeful colour and typography described in
[NN/g's visual design guidance](https://www.nngroup.com/articles/good-visual-design/).
These are chosen design applications, not measured visitor-engagement results.
Existing native links, details and CSS motion are sufficient; no new animation
library, client interaction state, dependency, asset or runtime architecture.

## Verification and actual outcomes

- npm run lint and npm run typecheck passed after the final markup changes.
- npm run build passed, including TypeScript and static generation. A final build
  also passed after the contact-email focus-outline CSS correction.
- An initial lint run rejected a plain anchor with /#top as homepage navigation.
  Changed it to the native same-page #top anchor; the subsequent lint passed.
- git diff --check passed with existing Windows line-ending notices.
- Normalized SHA-256 of all homepage h1/h2/p blocks exactly matched the before
  snapshot: 2BA744C5CFE19AFB1F8375369D5890F76214034FCE207A576C6BDF4FD975F05F.
  Authored paragraphs and main headline markup are unchanged. New microcopy is
  limited to navigation/continuation actions and the existing email address.
- Source validation found eight unique fragment targets, zero missing targets
  and zero duplicate static homepage IDs. Confirmed the continuation link is
  after the four leadership stories rather than inside the throughline grid.
- Reviewed responsive overrides, focus treatments and reduced-motion rules.
- No live browser interaction, computed-style, screenshot, overflow or contrast
  sampling performed. The build does not establish actual visual balance or
  visitor engagement. A later live pass should inspect 320px/desktop navigation,
  anchor positioning, empty/published writing states and the closing action group.
- No implementation-mirroring tests for these reversible native-link and CSS
  presentation changes. API publishing tests were not rerun because API, storage,
  validation and production protection code are unchanged.
- No commit, push or deployment.

## Files and future guidance

- [Public homepage](../src/app/page.tsx)
- [Visitor design rules](../src/app/editorial.css)
- [Navigation and footer](../src/components/site-shell.tsx)

Preserve the writing filters/empty-panel sibling relationship used by the CSS
visibility rule, or update it intentionally if the component's markup changes.
Keep native same-page return-to-top behavior and the existing scroll-header fix
from [0020](0020-header-visibility-below-hero.md). Do not introduce fake writing,
testimonials or professional claims to make the page look populated.
