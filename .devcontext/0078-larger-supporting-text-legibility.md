# Work record 0078: Larger supporting text for legibility

- Date: 2026-10-16
- Status at creation: Completed

## Request and changes

Michelle requested larger text throughout the website, except the main headline
fonts. Preserve the established Rubik text and Georgia italic headline pairing.
Read the recent typography, navigation, preview, and experience-design records,
and the installed Next.js CSS guide before editing.

Update the existing declarations in globals.css and editorial.css:

- Main body and homepage paragraph copy increase from 16px to 18px.
- Supporting text generally increases by 2px, with a 12px floor for small labels
  and a 16px floor for navigation, primary links, buttons, and studio controls.
- Hero button: 15px to 17px. Collaboration actions: 14px to 16px.
- Closing circle: 18px to 20px desktop, 16px to 18px mobile.
- Include responsive overrides, signoff, captions, tags, writing metadata,
  leadership/story text, campaign captions, footer, and studio help text.
- Preserve the larger question/description hierarchy from record 0040. Apply
  the same 2px increment to fluid supporting-copy sizes using calc/clamp.
- Keep display headings, monogram, decorative numbers, and icon glyph sizes.
  Restore the intro-heading and the inline large-screen hero rule after the
  initial selector pass identified them as display text.

Retain existing line-height ratios so line boxes grow with the larger text.
No new dependencies, features, content, or architecture. Preserve the pending
borderless, naturally wrapping agency brand list from record 0076.

## Verification and outcomes

- npm run lint: passed.
- Initial concurrent typecheck/build conflicted over generated .next/types
  files; typecheck reported TS6053. The initial build also hit the known
  OneDrive EPERM error unlinking .next/server/app/index.segments, which had
  ReadOnly, Directory, Archive, ReparsePoint attributes.
- Verified the absolute generated .next/server and .next/static paths were
  inside this workspace, removed only those production output directories,
  and reran the build. The separate .next/dev cache and server were preserved.
- Final npm run build: passed, including TypeScript and static generation.
- Subsequent npm run typecheck: passed when run sequentially after the build.
- Checks used installed Windows npm; no PATH or package-manager changes.
- git diff --check: passed, with an existing Windows line-ending notice.
- Browser confirmed body/hero/card text at 18px, navigation at 16px,
  hero button at 17px, and desktop closing button at 20px.
- At the original 524px browser width, all 33 measured h1-h5 font sizes and
  families matched the pre-edit browser snapshot after display-rule correction.
- At a 320px viewport: document clientWidth and scrollWidth both 305px.
  Hero copy/button fit, complete SickKids Foundation name measured about 189px,
  navigation labels wrapped in their columns and retained at least 44px height.
- At a 1280px viewport: clientWidth and scrollWidth both 1265px. Visually
  inspected the hero/throughline, experience text, navigation, and closing CTA.
- Closing button client and scroll dimensions both 190x190px: enlarged label
  fits the existing circular frame without overflow.
- Saved legibility-desktop.png in this chat's visualization directory.
- Restored the default viewport and returned the preview toward the homepage.
- No full accessibility/zoom audit, studio visual pass, or new behavior tests
  for this reversible presentation-only change.
- Concurrent source edits appeared during final review in page.tsx, removal of
  experience-perspectives.tsx, new .devcontext/snapshots, and the experience
  group-label styling. These are outside this task and were preserved. The
  successful checks and browser comparison describe the source at their run,
  rather than claiming verification of subsequent concurrent work.
- No commit, push, or deployment.

## References and lessons

- [Shared typography](../src/app/globals.css)
- [Homepage typography](../src/app/editorial.css)
- [Original headline restoration](0025-restore-original-georgia-italics.md)
- [Previous size increase](0026-larger-body-and-button-text.md)
- [Question hierarchy](0040-thought-leadership-text-hierarchy.md)
- [Responsive navigation](0065-readable-navigation-and-current-section.md)
- [Wrapping brand list and OneDrive build cleanup](0076-borderless-flowing-agency-brands.md)

Run next typegen/typecheck and next build sequentially because they share
.next/types. For broad sizing changes, inspect class-named headings and inline
media rules as well as selectors containing h1-h6. Compare rendered heading
sizes before and after to verify the user's headline exception.
