# Work record 0081: Three-viewpoint trial and softer graphic preview

- Date: 2026-10-16
- Status at creation: Three-viewpoint graphic applied; softer alternative previewed

## Requests and implemented trial

Michelle asked to try the three-angle glass form recommended in record 0080.
Copied the selected generated image into public/images/perspective-three-viewpoints.png.
Replace only the main SVG inside PerspectiveArtwork with next/image, maintaining
the existing wrapper and decorative accessibility treatment. Retain Michelle
Ching as live HTML below the graphic. Blend image edges into the mist page with
intersecting linear masks. Retain the three small ExperienceLensArt illustrations,
original experience copy and the final shared brand band from record 0079.

Original artwork and styles remain in the pre-trial source snapshots documented
in 0079. Restore only PerspectiveArtwork and its three CSS rules to revert this
image trial; do not undo the band's later improvements or typography changes.

## Verification

- Read relevant records and the installed Next CSS guide before editing.
- Desktop browser: image loaded at naturalWidth 640, artwork clientWidth and
  scrollWidth both 568px, height 366px. Inspected screenshot showing three glass
  forms beside the original heading, blended edges and live name beneath.
- Saved three-viewpoints-website-desktop.jpg in this chat's visualization directory.
- At 320px viewport: artwork clientWidth and scrollWidth both 265px, document
  clientWidth and scrollWidth both 305px, name width 130px. Responsive image
  finished loading with naturalWidth 320. Reset viewport and closed QA tab.
- Lint and typecheck completed before the build phase. Build output reports
  successful compilation, TypeScript and static generation of all five pages,
  followed by the route summary. The command session remained open and was
  interrupted after that output; it returned exit 1, so no clean build-process
  exit is claimed for this trial.
- git diff --check passed with existing Windows line-ending notices.
- No new behavior tests for this reversible decorative image substitution.
  No commit, push or deployment.

## Subsequent feedback and previews

Michelle felt the three forms looked like rings. Generated an alternative with
three open angular glass planes and a shared refracted view. She then said she
does not like sharp angles. Generated a second, softer alternative: broad open
translucent waves at different depths, eucalyptus and iris against mist,
connected by one aubergine thread. No rings, loops, corners or generated text.
Inspected both returned images. These two alternatives are previews only; the
three-viewpoint image remains applied until a new direction is chosen.

Built-in imagegen outputs under this chat's generated_images directory:

- Angular preview: exec-f124601e-5473-4213-b132-a85773fd72c5.png (rejected direction).
- Soft flowing preview: exec-c49f8ec7-9b54-4c13-a96b-fc4618f805c9.png.

Exact soft prompt is saved as soft-perspective-graphic-prompt.md in the chat's
visualization directory. No additional application change for either preview.
Future graphics should use soft open forms: closed rings and sharp facets have
both been explicitly rejected.
