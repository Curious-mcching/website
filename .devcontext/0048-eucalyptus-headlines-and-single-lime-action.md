# Work record 0048: Eucalyptus headlines and a single lime action

- Date: 2026-10-14
- Status at creation: Implemented and build-verified

## Request and decision

Michelle liked the calmer eucalyptus and mist treatment and asked to apply the
recommendation consistently: eucalyptus for emphasized headlines and subheads,
mist for text on dark backgrounds, and lime reserved for the primary action.
This supersedes the remaining lime headline, secondary interaction and graphic
accents retained by [0047](0047-selective-lime-and-calmer-supporting-colours.md).
No new architecture or palette colours.

## Changes

- Change the hero italic headline, first collaboration card headline and thought
  leadership italic headline from lime to eucalyptus #80AFA5.
- Use eucalyptus for hero focus outlines and the first collaboration card's
  hover/focus action fill. Keep their existing outline sizes and interactions.
- Recolour the small CSS pillar graphics with eucalyptus and mist, retaining
  all original shapes, dimensions and motion. The Human x Machine graphic uses
  a mist second circle and central dot; the reinvention graphic uses a mist
  inner plane, preserving distinction between overlapping elements.
- Keep lime #BFD86C only on the hero's primary action button. Retain its existing
  mist hover state and dark text. --accent remains a semantic palette token.
- Preserve existing mist text, eucalyptus pillar titles and metadata, all copy,
  raster artwork, layout, unnumbered exploratory pillars and navigation behavior.

## Verification and limitations

- npm run lint, npm run typecheck and npm run build passed. The lint step was
  slow but completed successfully; production compilation and static generation
  also completed successfully.
- git diff --check passed with existing Windows line-ending notices, including
  the final record-inclusive check.
- Source search found exactly one var(--accent) use in src: the hero primary
  button background. No runtime lime headline or decorative accent remains.
- Existing solid-colour contrast calculation from 0047 applies unchanged:
  eucalyptus/aubergine 6.70:1; lime/aubergine button text 10.34:1. Hero imagery
  has not been sampled, so these are not rendered-text contrast measurements.
- No live browser visual check following the prior documented browser policy
  block. Visual appearance across screen sizes remains unverified.
- No behavior tests for these reversible CSS colour substitutions. No commit,
  push or deployment.

## Files and future guidance

- [Shared headline and graphic styles](../src/app/globals.css)
- [Homepage headline, action and focus colours](../src/app/editorial.css)

Use eucalyptus consistently for headline emphasis. Keep lime concentrated on
the primary action rather than reintroducing it across headings, graphics and
secondary controls. Approved raster artwork may contain subtle lime mixtures;
it was not regenerated or recoloured for this interface palette refinement.
