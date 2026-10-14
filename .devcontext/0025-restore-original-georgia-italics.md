# ADR 0025: Restore original Georgia headline italics

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and decision

Michelle rejected Newsreader and clarified that she wants the original italic
headline font exactly, without the proposed rounding/weight adjustments.
Supersede [0024](0024-newsreader-headline-italics.md): restore Georgia italic,
weight 400, for emphasized text within h1, h2, and h3. Inherit each heading's
original letter spacing. Keep Rubik for the rest of the site, as documented in
[0022](0022-self-hosted-rubik-typography.md). Preserve the palette and artwork
from [0023](0023-eucalyptus-palette-grounded-imagery.md).

## Changes and alternatives

- Replace Newsreader's headline rule with Georgia, Times New Roman, serif;
  explicitly set italic style, weight 400, and inherited letter spacing.
- Remove Newsreader's loader and root variable class from the layout.
- Remove its now-unused variable TTF and license files. Keep Rubik assets.
- An initially proposed gentler spacing adjustment was removed following the
  user's clarification. No heavier weight, rounding effects, or replacement font.

Georgia uses the operating system's installed font and requires no download.
Platforms without Georgia use Times New Roman or their default serif.
No dependency, layout, content, colour, or interaction changes.

## Verification and outcomes

- npm run lint and npm run typecheck: passed after the font/loader changes.
- Final npm run build: passed, including TypeScript and static generation.
- git diff --check: passed, with existing LF/CRLF notices only.
- No Newsreader references remain in src (rg returned no matches).
- Checks used installed Windows npm with sandbox escalation for known OneDrive
  restrictions; no PATH or toolchain changes.
- Initial live preview retained the intermediate -.02em adjustment. Restarted
  only the verified Next.js processes for this workspace; the dev cache still
  showed that intermediate rule. An explicit inherit rule plus a normal
  filesystem write and reload refreshed the stylesheet successfully.
- Browser verified Georgia on h1 em, Rubik on body, weight 400, and identical
  parent/em letter spacing (-3.3301px at the current 556px viewport).
- clientWidth and scrollWidth both 556px; visually inspected the hero.
- Saved original-georgia-headline.png in this chat's visualization directory.
- No behavior tests added for this reversible font restoration. No complete
  desktop/mobile audit; current preview and production build were verified.
- Dev server remains running on port 3000. No commit, push, or deployment.

## References and lesson

- [Layout](../src/app/layout.tsx)
- [Headline styles](../src/app/globals.css)
- [Superseded Newsreader choice](0024-newsreader-headline-italics.md)

When the user asks for the original font, restore its actual family, weight,
and tracking rather than substituting a similar family or applying extra effects.
