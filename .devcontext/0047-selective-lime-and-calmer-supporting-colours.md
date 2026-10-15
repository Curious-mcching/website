# Work record 0047: Selective lime and calmer supporting colours

- Date: 2026-10-14
- Status at creation: Implemented and build-verified

## Request and decision

Michelle approved the recommendation to use lime selectively, with eucalyptus
and mist supporting a warm, curious and modern site. Restore --accent to #BFD86C
but reduce its use across smaller labels and repeated supporting text. This
supersedes the apricot trial in
[0046](0046-muted-apricot-accent-trial.md) and the pillar title colour choice in
[0040](0040-thought-leadership-text-hierarchy.md). Preserve the unnumbered pillars
from [0045](0045-unnumbered-thought-leadership-pillars.md).

## Changes

- Keep lime on the hero emphasized headline, primary button and keyboard focus,
  the first collaboration card headline and action highlight, and the main
  thought leadership headline emphasis.
- Retain small lime accents in the original three CSS pillar graphics.
- Use eucalyptus for the three pillar titles, the project tag, the writing-space
  link and open leadership story metadata and controls.
- Use mist for the curiosity panel's highlight and the thought leadership
  section-label gradient endpoint. Use dark eucalyptus for the curiosity satellite.
- Use eucalyptus tint with aubergine text for text selection.
- Retain the semantic --accent token introduced by the trial. No additional
  colours, dependencies, assets, client state or architecture.
- No content, layout, motion or imagery changes in this task. The preceding
  unnumbered-pillar changes remain in the working tree.

## Verification and limitations

- npm run lint, npm run typecheck and npm run build passed.
- git diff --check passed before this record was added, with existing Windows
  line-ending notices; final record-inclusive check also passed.
- Calculated solid-colour sRGB contrast: lime/aubergine 10.34:1,
  eucalyptus/aubergine 6.70:1, aubergine/mist 13.10:1 and text selection 12.86:1.
  These calculations do not measure text over the rendered hero image.
- Source check confirms the apricot hex and obsolete --lime token are absent
  from both runtime stylesheets; ten --accent references remain, down from
  nineteen in the trial, excluding the token definition.
- Reviewed stylesheet diff: changes are colour substitutions only, alongside
  the earlier pillar-label work. Existing focus, responsive and question
  hierarchy rules are retained.
- No live browser visual check following the previously documented browser
  policy block. Actual appearance across screens remains unverified.
- No behaviour tests for this reversible colour-only change. No commit or push.

## Files and future guidance

- [Palette and shared styles](../src/app/globals.css)
- [Homepage colour roles](../src/app/editorial.css)

Keep lime concentrated at attention points rather than restoring it to every
supporting label. The pillar titles retain a distinct eucalyptus colour and
their existing size; question lines remain brighter and larger than descriptions.
