# Work record 0026: Larger body and button text

- Date: 2026-10-13
- Status at creation: Completed

## Request and changes

Michelle requested body text one size larger, then also larger text for all
buttons. Interpret both as a modest 1px increase. Update existing sizing rules
in globals.css and editorial.css, including responsive overrides, without
changing the established Rubik/Georgia pairing from
[0025](0025-restore-original-georgia-italics.md).

- Base body: 15px to 16px. Increment explicit paragraph sizes across hero,
  introduction, collaboration, experience details, thought leadership, writing
  library, closing invitation, and explanatory studio copy.
- Increase the fluid introduction pull quote by exactly 1px using
  `calc(clamp(28px, 2.8vw, 42px) + 1px)`.
- Increase button, CTA link, contact action, collaboration action, writing
  filter, expandable summary, and mobile override text by 1px. File-selector
  button explicitly uses 12px rather than its previous inherited 11px.
- Keep heading sizes, numerical metrics, navigation links, metadata, pill tags,
  font families, colours, padding, and interactive behavior unchanged.
- No dependencies, new features, or architectural changes.

## Verification and outcomes

- Read the relevant development record and installed Next.js CSS guidance.
- npm run lint and npm run typecheck passed after the body text update.
- npm run build passed after the body update and again after the final button
  changes, including TypeScript and static page generation.
- Used ordinary installed Windows npm, with sandbox escalation for established
  OneDrive runtime restrictions; no PATH/toolchain changes.
- git diff --check passed; existing LF/CRLF notices only.
- Browser initially reported a frame-tree timeout, then recovered after the
  production build completed. Refreshed the existing user preview.
- At the current 556px viewport, computed sizes: body 16px, hero copy 14px,
  main button 13px, collaboration copy 14px, collaboration action 13px,
  closing circular button 13px. These are each 1px above their prior values.
- Browser confirmed Georgia remains on italic headline phrases.
- clientWidth and scrollWidth both 556px: no horizontal overflow at this width.
- Visually inspected hero and collaboration copy/actions. Returned the user
  preview to the homepage opening and saved larger-body-and-buttons.png in
  the chat visualization directory.
- No complete desktop/320px audit or studio visual pass; responsive sizes
  inspected in source and production CSS compiled successfully.
- No behavior tests added for this reversible typography-only change.
- No commit, push, or deployment.

## References and lesson

- [Shared styles](../src/app/globals.css)
- [Homepage overrides](../src/app/editorial.css)
- [Typography decision](0025-restore-original-georgia-italics.md)

Increasing only the body's base size misses the many explicitly sized
paragraphs and mobile overrides. Update their existing rules together so the
requested increase applies consistently.
