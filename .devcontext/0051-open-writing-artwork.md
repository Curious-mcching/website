# Work record 0051: Open artwork for the writing space

- Date: 2026-10-14
- Status at creation: Implemented; lint and typecheck verified; full build and live visual QA limited

## Request and changes

Michelle requested a more modern and polished replacement for the small tilted
POV-paper graphic in the empty writing library. After seeing an intermediate
open-book/cube interpretation, she clarified that this feels confined and the
visual should express openness, room for ideas, and space for what is next.

Replace the paper graphic with an original inline SVG of open curves that fan
out from a small starting point. Use translucent eucalyptus/iris strokes, fine
curves extending into negative space, a soft light field, and small accents.
Remove the book planes, closed geometry, paper label, mock text lines, sheet
shadow, and obsolete empty-paper styles. Preserve the current muted palette and
reserve the lime accent for its existing primary action, consistent with
[0048](0048-eucalyptus-headlines-and-single-lime-action.md).

The SVG stays decorative, aria-hidden, and unfocusable. It scales to the
existing responsive column and uses native SVG gradients with no image request,
new dependency, animation, or client behavior. Existing library content,
truthful unpublished wording, filters, fetch/error/loading handling, and contact
link remain unchanged. Preserve the empty-panel/filter sibling relationship
documented in [0043](0043-whole-page-design-and-visitor-flow.md).

## Verification and limitations

- npm run lint: passed.
- npm run typecheck: passed, including Next route generation.
- Initial production build compiled successfully, but its TypeScript worker
  failed with a JavaScript heap/commit-memory allocation error. No successful
  full build is claimed.
- Two subsequent build attempts stopped on the same OneDrive EPERM unlink of
  .next/static/B8FRke0WbzShiqM7p5TkH. No generated output was deleted for this task.
- Checks used installed Windows npm in cmd.exe, with process-only Node memory
  options. PowerShell initially failed to start CoreCLR due to low memory.
  No persistent system or project runtime settings were changed.
- git diff --check: passed, with existing line-ending conversion notices.
- Rendered the actual SVG markup and CSS using the already installed sharp
  dependency. Inspected the resulting 600 x 520 PNG on the section's surface
  colour. Saved open-writing-artwork.png and the renderer in the chat
  visualization folder, outside application source.
- Browser inventory succeeded, but the attempted QA tab failed with "Browser
  Use could not read requirements." No live screenshot, mobile/desktop layout
  measurement, or browser visual pass is claimed.
- An attempted dev-server restoration discovered an existing server at port
  3000 and exited without replacing it. The existing process was preserved.
- Responsive width rules were inspected in source. No behavioral tests were
  added or publishing tests rerun for this decorative replacement.
- No commit, push, or deployment.

## Files and future guidance

- [Writing library](../src/components/pov-library.tsx)
- [Shared artwork styles](../src/app/globals.css)
- [Removed obsolete homepage override](../src/app/editorial.css)

Keep this visual open and expansive. The intermediate book/cube direction was
explicitly rejected; avoid returning to a bounded object as the central metaphor
for this section. A full build and live layout check remain to be rerun when
machine memory and OneDrive output locks allow them.
