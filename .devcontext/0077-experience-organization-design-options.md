# Work record 0077: Experience organization design options

- Date: 2026-10-16
- Status at creation: Two comparison previews prepared; homepage implementation unchanged by this task

## Request and direction

Michelle felt the overlapping planes and related mini graphics did not convey
different perspectives. During exploration she asked whether organizing by
industry, or another content structure, would be more visually appealing.
Read records 0072, 0073 and 0075 and the existing experience component, page
content and styles. Preserve the broader experience dimensions and employer
versus agency-client distinction established in 0072.

## Previews and recommendation

Created an in-conversation two-variant comparison using the visualize skill:

- Industry-led: eight industry groups with supplied brand names, explicitly
  marking RBC/HSBC as enterprise roles and other brands as agency work.
  Marketing disciplines and global collaboration support the industry grid.
- Three dimensions: an editorial layout with industry breadth, marketing
  disciplines and local/global collaboration as equally weighted sections.

Recommend the industry-led direction because brand-to-sector associations make
the breadth tangible. This is a design recommendation, not an accepted new
architecture or a shipped homepage change. Existing employer carousel remains
unchanged. A preliminary abstract-graphic comparison was discarded before
delivery when Michelle clarified the organizational direction.

Preview source:
`C:/Users/mcchi/.codex/visualizations/2026/10/13/01a136f3-66ac-7b12-978e-db906a233d75/experience-organization-directions.html`

## Verification and limitations

- Read the fragment back; literal markup and guarded optional Tweak control.
- Rendered with the skill's local preview wrapper. Browser screenshot inspection
  at 736px confirmed legible industry groups and supporting content.
- Switched the carousel to Three dimensions and verified its visible headings
  and content. At a 320px browser viewport its fragment was 274px wide with no
  root horizontal overflow.
- Industry-led initially had a 3px Telecommunications label overrun at 320px.
  Added responsive wrapping, rerendered and verified no overflowing descendants
  in the visible design at that viewport. Reset the viewport and closed QA tabs.
- No homepage application code changed; npm checks were not needed for this
  standalone design comparison. No commit, push or deployment.
- Existing editorial.css changes and records 0075/0076 belong to other work and
  were preserved. This preview uses Arial as a local sans-serif approximation;
  any implementation should retain the site's Rubik and Georgia italic fonts.

## Future guidance

Ask for direction only if needed after the reviewable comparison. Do not imply
global residence or employment in every collaboration market. Retain the five
employer logos and clear agency-client attribution if implementing an option.
