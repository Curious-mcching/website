# Work record 0067: Leadership story S-curve motion

- Date: 2026-10-15
- Status at creation: Implemented; static checks passed; live motion QA pending

## Request and changes

Michelle requested S-curve timing for expanding and collapsing the four
Leadership in Action stories. Preserve the native disclosure architecture from
[0036](0036-leadership-accordion.md) and all supplied story copy.

In [editorial.css](../src/app/editorial.css), use a shared 450ms duration and
cubic-bezier(.65, 0, .35, 1) easing for the story body, summary treatment and
toggle icon. Animate native ::details-content from zero to its intrinsic height
with interpolate-size, and transition content-visibility with allow-discrete so
closing content remains rendered until the animation completes. Enable the body
animation only when the browser supports the required features and the visitor
has not requested reduced motion. Other browsers retain native instant toggles.

Hide the open-state Explore story label with visibility rather than display so
its reserved width prevents the summary heading shifting during a toggle.
Preserve the existing compact mobile display rule and reduced-motion override.
No JavaScript accordion controller, fixed maximum height or dependency added.
The named native details group still permits one open story at a time.

## Verification and actual outcomes

- Final npm run lint, npm run typecheck and npm run build passed, including the
  campaign-film content subsequently added in record 0068.
- Inspected final compiled CSS: the stable label space and closing
  content-visibility transition are present. An earlier build preceded the label
  correction; the final build includes it.
- Source verification confirmed four native disclosures sharing the existing
  group name. No change to their summary keyboard semantics or supplied copy.
- git diff --check passed with Windows line-ending notices.
- Live opening, closing, reduced-motion and browser fallback behavior were not
  visually verified following the prior browser URL-policy block. Compiled CSS
  inspection is not evidence of rendered animation or universal browser support.
- No commit, push or deployment.

## Lessons and references

Keep content-visibility in the closing transition; otherwise native details can
hide its contents before the height transition completes. Intrinsic sizing also
allows long copy and media to fit without arbitrary max-height limits.

Primary references consulted:

- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::details-content
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/interpolate-size
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition-behavior
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/content-visibility
