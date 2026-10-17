# Work record 0113: Throughline alignment, wrapping and brand header bar

- Date: 2026-10-17
- Status at creation: Implemented; focused lint and responsive browser checks passed

## Requests and context

During one continuous refinement, Michelle requested several specific word-wrap
changes, a cleaner portrait/introduction alignment, relocation of Real-world impact
to the experience area, and a more designed Agency + Brand Leadership subhead.
She rejected the initial short-accent subhead as inconsistent, requested a centered
bar and then asked for the purple tint used by the Marketing Depth circle.

Read 0108 and the recent 0109-0112 records, current source and installed Next CSS
guidance. Preserve the authentic portrait, existing copy, three-line desktop
Throughline opening, larger Venn circles, restored thought-leadership graphics,
campaigns and concurrent dawn artwork. Both pre-existing 0112 records are immutable;
do not renumber either.

## Final changes

- Keep these phrases together with spans and scoped nowrap styling: commercial
  discipline; the courage; to bring people along.; that combination; angles,
  connect. This moves the requested first word onto the next line at the reviewed
  desktop width while allowing natural responsive wrapping. Text and punctuation
  are unchanged. Do not substitute hard line breaks that force the same layout
  at every viewport.
- Change the portrait/introduction grid from vertical centering to top alignment.
  Simplify the portrait caption to Curiosity is a strategy. Remove the small
  A different point of view label, Fresh perspective text and paired footer/divider.
  Remove the caption CSS made unused by those changes. Portrait pixels, dimensions,
  placement and strategy accent are unchanged.
- Place Real-world impact in a subtle eucalyptus badge beside 20+ years of
  experience. The flex row wraps at narrow widths, staying anchored to the headline.
- Move the Agency + Brand Leadership h4 inside the existing employer/client panel
  as a centered, full-width header strip. It retains its semantic heading/ID and
  the section's accessible relationship. No button or interactive affordance.
- The final bar uses color-mix(in srgb, var(--iris) 22%, var(--mist)), drawing from
  the Marketing Depth circle's iris palette, with dark text. Rounded top corners
  join it to the shared light panel. No short accent line remains.
- Define local evidence-panel padding variables so the header aligns with the
  panel edges on desktop and mobile. Use explicit 28px row spacing with the existing
  two-column employer/client evidence layout and existing stacked tablet layout.
  Original rotating logos, client names and attribution remain intact.

## Verification and evidence

- Focused npm run lint -- src/app/page.tsx exited 0 after final JSX changes.
- Earlier during this refinement, npm run typecheck exited 0. Later edits only
  added static spans and moved the existing h4; their rendering was browser verified.
- git diff --check exited 0 with existing Windows line-ending notices.
- At 1440px, portrait and introduction boxes share the same top coordinate (338px
  in the inspected view). The removed portrait footer is absent. No document overflow.
- Live DOM ranges confirmed all five kept-together phrases begin below their
  preceding word at 1440px. In particular commercial follows and, the courage
  follows accepted,, to bring people along. follows conviction, that combination
  follows markets,, and angles, connect follows different. Each phrase occupies
  one rendered inline rectangle.
- Desktop header is centered, inside the panel, and both widths measure 1280px.
  Computed iris background is color(srgb 0.797647 0.774196 0.88251), approximately
  #cbc5e1. Visually inspected the joined header, rotating employers and client list.
- At 390px, header/panel widths both 335px with no horizontal overflow; visually
  inspected the centered purple header and stacked evidence layout. At 320px,
  no document overflow, header remains centered, badge width 147px, and hero phrase
  widths 181/101/181px fit the narrow layout. Reset the viewport override.
- Screenshots in C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/:
  agency-brand-purple-header.jpg (final panel) and hero-phrase-wrapping.jpg (earlier
  wrapping preview before the final to bring people along. adjustment; final
  phrase placement was subsequently confirmed by live DOM ranges).
- No new behavioral tests for static typography/layout. No repeated production
  build; the previously recorded build failure remains unresolved. No commit,
  push or deployment. Existing records and other pending work were preserved.

## Files and future guidance

- [Copy wrapping and heading placement](../src/app/page.tsx)
- [Scoped layout and header styling](../src/app/editorial.css)

The final direction is the centered purple bar integrated into the employer/client
panel, replacing the transient short-accent and eucalyptus-bar treatments. Keep
the impact badge beside the tenure line. Future wording, fonts or column-width
changes may alter wrapping; recheck phrase fit at narrow widths before expanding
any nowrap group.
