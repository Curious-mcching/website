# Work record 0049: Soft iris strategy highlight

- Date: 2026-10-14
- Status at creation: Implemented and build-verified

## Request and decision

Michelle found the highlight behind "strategy" in "Curiosity is a strategy"
too buried, and requested a complementary colour without overpowering the page.
Use a local soft iris tint mixed from 40% existing iris and 60% mist. This
supersedes only the mist highlight from
[0047](0047-selective-lime-and-calmer-supporting-colours.md). Keep the restrained
headline and primary-button palette from
[0048](0048-eucalyptus-headlines-and-single-lime-action.md).

## Changes

- Change only the background of .curiosity-copy h3 em::before to
  color-mix(in srgb, var(--iris) 40%, var(--mist)).
- Approximate solid colour: #B4ACD5. Use existing palette variables rather than
  introducing a new global accent.
- Keep the dark aubergine text, oval shape, size, tilt and all surrounding
  layout, graphics, motion and authored copy unchanged.
- No dependencies, assets or architecture changes.

## Verification and limitations

- npm run build passed on retry, including TypeScript and static generation.
- First build failed with EPERM unlinking .next/server/app/index.segments;
  rerunning the same command passed without source changes or deleting files.
  This was a generated-output file-lock issue rather than a CSS compile failure.
- git diff --check passed before and after adding this record, with existing
  Windows line-ending notices.
- Calculated using rounded sRGB mix: aubergine text/highlight 7.65:1;
  highlight/eucalyptus-tint panel 1.68:1 versus previous mist/panel 1.02:1.
  The decorative background distinction is not a text-contrast requirement.
  These are solid-colour calculations, not rendered-browser sampling.
- No live browser visual check following the previously documented browser
  policy block. Actual perceived emphasis remains to be reviewed by Michelle.
- Lint and standalone typecheck were not rerun for a single CSS background
  declaration; the production build includes TypeScript validation.
- No behavior tests for this reversible colour change. No commit or push.

## File and future guidance

- [Local highlight](../src/app/editorial.css)

Keep this tint local to the strategy oval. Do not spread it to other headings or
actions merely for consistency; the broader eucalyptus/mist palette remains.
