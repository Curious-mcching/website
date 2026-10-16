# ADR and work record 0073: Dimensional experience artwork

- Date: 2026-10-15
- Status at creation: Accepted visual option implemented; checks passed; live visual QA pending

## Request and context

Michelle requested a more visually distinctive treatment for the experience
overview from [0072](0072-unified-experience-and-perspectives.md). She pictured
multi-dimensional imagery beside Many perspectives. One throughline., with her
name as the connecting thread, plus visuals signalling industries, marketing
disciplines and local/global perspective. Preserve all four dimensions, the
employer carousel and clearly labelled agency-client relationships.

## Decision and changes

Use native SVG artwork in a small Server Component module. The main graphic
combines four translucent rounded planes, quiet guide lines, a flowing eucalyptus
thread and connection points. Place Michelle Ching over the thread as live HTML
text, with a soft background halo. This keeps the name readable independently of
the SVG's scale. Use existing mist, iris, eucalyptus and paper colours; the image
blends into the section rather than acquiring a separate card frame.

Place the graphic to the right of the overview copy on desktop and below it on
mobile. Increase the subsection heading to fluid 32–48px and use the site's
existing serif italic treatment for One throughline. Keep the larger Throughline
section headline above it unchanged. The name uses fluid 18–27px typography.

Add three related illustrations above the corresponding dimension headings:

- Rounded modular structures connected by a thread for industries.
- Interlocking layers joined by a thread for marketing disciplines.
- A globe and connected nodes for local/global collaboration.

The globe is a conceptual connection graphic, not an exact geographic map or
representation of residence. All new artwork is decorative, aria-hidden and
non-focusable; the visible headings and original paragraphs carry the meaning.
The graphics are static. Preserve the existing logo carousel's motion and
reduced-motion fallback unchanged.

## Alternatives and consequences

A generated bitmap could offer photographic texture, but this conceptual
illustration benefits from crisp geometry, reliable name typography and direct
reuse of existing colour tokens. Native SVG avoids an extra image download,
image-generation service or client-side rendering library. Four asymmetric,
rounded layers support dimension without a radial floral composition or sharp
projecting facets. No new dependency, client boundary or interaction added.

## Verification and actual outcomes

- Read local Next CSS guidance and record 0072 before implementation.
- npm run lint, npm run typecheck and npm run build all passed.
- Final generated HTML contains one main perspective graphic and one gradient ID,
  Michelle Ching as live text, three decorative dimension illustrations, all four
  dimension headings, one carousel and the four existing film posters.
- git diff --exit-code -- src/components/logo-carousel.tsx passed; carousel source
  unchanged. Existing experience paragraphs and brand names retained.
- git diff --check passed with existing Windows line-ending notices.
- No new behavioral tests for this static visual option. No live browser,
  screenshot, responsive fit or visual balance inspection following the earlier
  browser URL-policy block; static generation is not rendered visual QA.
- No commit, push or deployment. Earlier pending work remains preserved.

## Files and future guidance

- [Server-rendered artwork](../src/components/experience-perspectives.tsx)
- [Artwork placement](../src/app/page.tsx)
- [Responsive layout and name treatment](../src/app/editorial.css)
- [Experience content and scope](0072-unified-experience-and-perspectives.md)

Keep the name as live text and the decorative artwork out of the accessibility
tree. The main SVG uses one fixed gradient ID because it appears once; give
instances unique IDs if the main artwork is ever reused more than once on a
page. Review the name/thread alignment and narrow-screen layout live when
available. Keep future visual refinements within Michelle's approved palette,
rounded dimensional language and clearly differentiated experience groups.
