# Work record 0110: Restore original thought-leadership graphics

- Date: 2026-10-17
- Status at creation: Implemented; focused lint and responsive checks passed

## Request and changes

Michelle rejected the new sculptural illustrations from 0109 and supplied a
screenshot of the original boxed square, overlapping circles and doorway designs.
Restore only those three graphics and their original proportions, leaving the
other refinements and the newly added authentic portrait intact.

Restore the three decorative i-elements and variant classes per pillar. Restore
the prior 150px desktop graphics, 150px/35px column-gap arrangement, 120x130px mobile
graphics, eucalyptus square, circle outlines/dot, doorway outlines and local dusty
rose details from 0063. Restore their original hover transforms, which remain
limited to hover-capable users without reduced-motion preference. Put the graphic
rules in editorial.css scoped to editorial-home; source global boxed-art rules
were removed in 0109, and stale global CSS in the live preview initially gave the
restored i-elements a zero-height transparent wrapper. Explicit scoped homepage
rules corrected this, and both actual render and future source use the same CSS.

Move the unused three generated PNG trials out of public into
design-previews/thought-leadership-2026-10-17/. Update its README's links and status
to identify them as superseded. No runtime source references those PNGs now.
Do not revert all of 0109: retain quieter collaboration numbers/spacing, hover
and focus treatment, editorial story openings, contribution summaries and earlier
campaign placement. Preserve 0108's portrait, its caption and image styling.

## Verification and actual outcomes

- Read relevant immutable records, current source, original Git CSS and installed
  Next CSS guidance. No whole-file Git checkout/reset was used.
- npm run lint -- src/app/page.tsx exited 0 for restored markup. Subsequent
  CSS scoping adjustments were browser checked without repeating lint.
- Desktop live preview: each restored graphic has three i-elements, no img,
  150x150px dimensions and the original #342947 box background. Screenshot
  confirms all three designs and their corresponding copy.
- At 320px: artwork 120x130px; document client/scroll widths both 305px.
  Reset viewport and closed temporary QA tab.
- Saved original-thought-leadership-restored.jpg in the chat visualization folder.
- git diff --check passed with existing Windows line-ending notices. The combined
  readback exited 1 solely because rg found no obsolete generated-image references
  in src, the intended result.
- No new tests, separate typecheck or production build for this static restoration.
  The earlier production build limitation from 0109 remains unresolved.
- No commit, push, deployment, new architecture or dependencies. Existing records
  and unrelated pending work preserved.
