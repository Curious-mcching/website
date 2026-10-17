# Work record 0115: Soft experience labels

- Date: 2026-10-17
- Status at creation: Implemented; focused lint and responsive preview checks passed

## Request and context

Michelle rejected the plain two-column experience index from 0114 and requested
another simple, elegant treatment. Read 0114 and installed Next CSS guidance.
This supersedes only that record's experience-list presentation.

## Changes

- Replace rigid list grids with wrapping, naturally sized labels. Use regular
  18px ink typography, 8px gaps, 8px/12px padding, 6px corners and a subtle surface
  tint. No border, hover effect or interactive semantics on informational labels.
- Keep long labels together when they fit; allow wrapping within the available
  width on narrow screens. Remove obsolete capability and mobile grid rules and
  the capability-only class from page markup.
- Preserve all labels and their order, semantic lists, paragraph copy, shared
  list-row alignment, three-column section structure and unrelated pending work.

## Checks and outcomes

- npm run lint -- src/app/page.tsx exited 0.
- git diff --check passed with existing Windows line-ending notices.
- Live desktop preview: three list tops equal 352.35px in the inspected viewport;
  each client/scroll width equals 346px. Visually reviewed the treatment.
- At 320px viewport, all three lists have matching client/scroll widths of 265px;
  no individual label has horizontal overflow. Reset viewport and closed QA tab.
- Screenshot: C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/experience-soft-labels.png.
- No new behavior, dependencies, tests, commit or push. No repeated production
  build for this static styling change; 0114's build-folder permissions failure
  remains unresolved. Existing records remain immutable.

Files: ../src/app/editorial.css and ../src/app/page.tsx.
