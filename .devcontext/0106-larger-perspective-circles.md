# Work record 0106: Larger perspective circles

- Date: 2026-10-17
- Status at creation: Implemented; focused lint and browser checks passed

Michelle requested larger circles in the Many perspectives. One throughline.
Venn diagram so the text has more breathing room. Read the original diagram
record 0098, current component/styles and installed Next CSS guidance.

Increase all three SVG circle radii from 150 to 170 (about 13%). Preserve their
centers, gradients, typography, callout positions, center caption and figure grid.
The larger outlines provide the desired room without making the text larger or
requiring label repositioning. All geometry remains inside the 600x520 viewBox:
horizontal bounds 50-550, vertical bounds 15-495. Only three SVG attributes changed.
The mobile numbered-circle and separate-label arrangement remains intact.

Verification:
- npm run lint -- src/components/experience-perspectives.tsx exited 0.
- git diff --check passed with existing Windows line-ending notices.
- At 1440px, visually inspected the larger circles and readable text beside the
  experience introduction; live DOM confirmed all three radii are 170. No document
  horizontal overflow.
- At 320px, figure client/scroll widths both 265px and no document overflow. All
  three mobile labels remained static and readable below the circles. The circle
  bounds ended 4px before the first label row's box, with its existing inner
  padding adding text separation. Inspected the mobile diagram and label rows.
- Reset the temporary viewport override. Desktop screenshot:
  C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/larger-perspective-circles.jpg.
- No new tests, separate typecheck or production build for this SVG-attribute-only
  adjustment. The CSS worker/build failure in 0103 remains unresolved; this task
  does not establish production build success.
- No commit, push or deployment. All existing pending changes and immutable
  development-context records were preserved.

File: [Perspective diagram](../src/components/experience-perspectives.tsx).
