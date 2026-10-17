# Original experience section, saved 2026-10-16

Michelle asked to retain the original while trying the Three dimensions layout.
These are exact pre-edit copies. Their SHA-256 hashes were checked against the
source immediately after copying, before implementation began.

- `page.tsx.txt`: homepage with the original #agency-experience section.
- `editorial.css.txt`: original styling, including pending typography and
  borderless agency-brand changes at snapshot time.
- `experience-perspectives.tsx.txt`: original large and small SVG graphics.

To revert this experiment, restore only the #agency-experience section and its
artwork import from page.tsx.txt. Restore the SVG module to its original path,
src/components/experience-perspectives.tsx. Restore the experience-specific
desktop and responsive CSS from editorial.css.txt; remove the replacement
experience-dimensions, industry-grid, discipline-list and markets rules.
Keep LogoCarousel unchanged.

Do not overwrite the whole current homepage or stylesheet: unrelated work may
have continued since this snapshot. No restoration changes to globals.css are
needed; this experiment does not edit that file. The .txt extensions keep these
reference copies outside the application's TypeScript compilation.
