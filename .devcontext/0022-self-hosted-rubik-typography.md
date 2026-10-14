# ADR 0022: Self-hosted Rubik typography

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and request

Michelle requested Rubik across the website, referencing the
[Google Fonts specimen](https://fonts.google.com/specimen/Rubik).
The site previously combined Arial body text with Georgia display text.
This supersedes the system-font choice in
[0001](0001-website-foundation.md) while retaining its goal of avoiding
build-time font downloads. Preserve the existing layout, imagery, palette,
motion, and header behavior documented in
[0021](0021-radical-perspective-palette-and-imagery.md).

## Decision and changes

Load official regular and italic Rubik variable TTFs through `next/font/local`
in the root layout, using weights 300–900, `display: swap`, and sans-serif
fallbacks. Store the original files and SIL Open Font License together in
`src/app/fonts/`. Assets came from Google's `google/fonts` repository:

- https://raw.githubusercontent.com/google/fonts/main/ofl/rubik/Rubik%5Bwght%5D.ttf
- https://raw.githubusercontent.com/google/fonts/main/ofl/rubik/Rubik-Italic%5Bwght%5D.ttf
- https://raw.githubusercontent.com/google/fonts/main/ofl/rubik/OFL.txt

Expose `--font-rubik` on the root HTML element and use `--font-site` for the
body, Tailwind sans token, and every former serif rule in both stylesheets.
Headings, metrics, monogram, navigation, forms, cards, and emphasis now share
Rubik; existing italic emphasis retains an actual italic face.
No dependency or package-lock changes.

## Alternatives considered and consequences

- `next/font/google`: convenient but requires fetching fonts during builds.
- External Google Fonts CSS: introduces visitor requests to Google.
- Retain Georgia headings: would only partially apply the requested family.
- Self-host official variable fonts: selected for reproducible offline builds
  after this one-time download, full supplied character coverage, and all weights.

The two source fonts total 714,788 bytes, larger than a Latin-only WOFF2 subset.
They retain upstream coverage and avoid adding font-processing dependencies.
Next.js generates font preloads and an adjusted Arial fallback automatically.
Typography may wrap differently because Rubik has different letter widths;
existing font sizes, spacing, colours, and responsive rules were preserved.

## Verification and outcomes

- Read installed Next.js font guide and font API reference before implementation.
- `npm run lint`: passed, exit 0.
- `npm run typecheck`: passed, exit 0.
- `npm run build`: passed, exit 0; homepage and studio prerendered successfully.
- Checks used the ordinary installed Windows Node/npm runtime, with sandbox
  escalation consistent with earlier OneDrive path restrictions. PATH already
  resolved Node and npm at `C:/Program Files/nodejs`; no refresh was required.
- Inspected generated CSS: regular and italic `@font-face` rules have weights
  300–900, `font-display: swap`, and local `../media/` URLs. Both font files
  appear in `.next/static/media/` with their original sizes.
- `git diff --check`: passed, with existing LF/CRLF conversion notices only.
- Browser inventory calls timed out twice; desktop/mobile visual QA was not
  completed. No new tests were added for this presentation-only change.
- An initial generated HTML inspection ran before static generation finished
  and found no index.html; the completed build subsequently created it.
- No commit, push, or deployment.

## Lessons and file references

Keep font assets and their license together. Use one shared family token so
editorial styles cannot silently restore the former serif. Inspect generated
HTML after the production build finishes, not concurrently with generation.

- [Root layout](../src/app/layout.tsx)
- [Shared styles](../src/app/globals.css)
- [Editorial styles](../src/app/editorial.css)
- [Font license](../src/app/fonts/OFL.txt)
