# Work record 0125: Brighter hero artwork on the right

- Date: 2026-10-17
- Status at creation: Implemented; live responsive and contrast checks passed

## Request and changes

Michelle noticed that the original geometric hero image looked dim. Explained
that 0119's readability pass strengthened its aubergine overlay. She approved
lightening the right-hand artwork while retaining shading behind text.

Change only two hero overlay declarations in editorial.css. On desktop, retain
80–82% aubergine over the left 55%, fading to 18% at 82% and clear at the far
right. Concentrate the vertical shading within the bottom 28%, with 96% at the
bottom and 80% at 9%, instead of spreading it across the lower 65%. This keeps
the bottom links readable while revealing substantially more image color/detail.
At tablet sizes retain the original horizontal text backing through 80%, applying
the same narrower bottom fade. Preserve the existing mobile overlay unchanged,
because the phone text spans most of the artwork width.

Keep the original bitmap, crop, typography, copy, CTAs, layout, portrait and all
other recent work intact. This selectively supersedes the desktop/tablet hero
backing in 0119 without rolling back other accessibility fixes.

## Verification and evidence

- Read relevant records, current source and installed Next CSS guide.
- Visually inspected the updated hero; screenshot shows clearly brighter artwork
  on the right with shaded text on the left and bottom. Saved
  hero-right-side-lightened.jpg in this chat's visualization directory.
- Measured actual live text-node line rectangles and computed text colors/sizes.
  Calculated a conservative contrast bound using a white underlying image pixel,
  the declared sRGB overlay gradients and their combined opacity at the brightest
  corner of each text rectangle. This is not a complete accessibility audit or
  a pixel-by-pixel screenshot analysis. Decorative SVG arrows were not evaluated.
- At default document width 1265px, minimum ratios: headline 3.58, body 6.98,
  footer 8.22. At 1440px viewport (1425px document): 3.58, 7.01, 8.73.
- At 1051px viewport (1036px document): 3.58, 6.79, 8.63. At 900px viewport
  (885px document): 3.63, 7.00, 9.76. All measured headline text met the 3:1
  large-text threshold; body/footer text met 4.5:1.
- At 390px viewport (375px document), original mobile overlay remains active;
  corresponding minima 4.40, 8.15, 11.15. Document client/scroll widths both 375px.
- Reset temporary viewport override and closed QA tab. User tab preserved.
- git diff --check exited 0 with existing Windows line-ending notices.
- No lint/typecheck/build or new tests for this two-declaration decorative CSS
  adjustment; actual rendered appearance and contrast were checked directly.
- No new assets, dependencies, architecture, commit, push or deployment. Existing
  development records and unrelated pending changes preserved.
