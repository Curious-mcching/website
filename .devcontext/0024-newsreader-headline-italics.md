# ADR 0024: Newsreader headline italics with Rubik

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and request

Michelle disliked Rubik in italic headlines and preferred the character of the
original Georgia treatment. She requested a similar alternative that complements
Rubik and feels modern, sophisticated, and distinctive. This partially supersedes
the all-Rubik choice in [0022](0022-self-hosted-rubik-typography.md).
Preserve the eucalyptus palette and imagery from
[0023](0023-eucalyptus-palette-grounded-imagery.md).

## Decision and changes

Use Newsreader Italic for emphasized phrases inside h1, h2, and h3 headings;
keep Rubik for upright headlines, body copy, navigation, controls, metrics,
and ordinary body italics. This gives the editorial contrast requested without
changing every display element again. Newsreader's flowing serif italic was
chosen as a design judgment, rather than a claim of objectively greater originality.

Download Google's official Newsreader italic variable font (495,684 bytes) and
its SIL Open Font License into `src/app/fonts/newsreader/`. Load it with
`next/font/local`, weights 200–800, italic style, display swap, Georgia/Times
fallbacks, and adjusted Times New Roman metrics. Expose `--font-newsreader`
on the root HTML element. Apply optical sizing and -.025em spacing to headline
emphasis so serif details have more room than Rubik's inherited headline tracking.
No dependency changes; original Rubik italic remains used by body emphasis.

## Alternatives considered and consequences

- Restore Georgia exactly: closest to the original but the user also asked for
  another family. Georgia remains a fallback.
- Newsreader for all headings: broader than the emphasis-specific change and
  would replace upright Rubik the user wants on the rest of the site.
- Newsreader italic accents with Rubik upright: selected to balance expressive
  headline emphasis and contemporary sans-serif text.

Self-hosting preserves builds without remote font downloads. The new font adds
approximately 496 KB and may change headline width. Existing layout, sizes,
colours, text, and responsive rules were retained.

## Verification and outcomes

- Read installed Next.js local-font guidance and relevant development records.
- `npm run lint`: passed, exit 0.
- `npm run typecheck`: passed, exit 0, including route generation.
- `npm run build`: passed, exit 0, including homepage/studio static generation.
- Checks used installed Windows npm with sandbox escalation for known OneDrive
  restrictions; no toolchain, PATH, or package-manager changes.
- Generated production CSS contains regular and italic Rubik plus Newsreader
  italic, weights 200–800, locally served font URLs, and the h1/h2/h3 em rule.
- Local HTTP homepage returned 200 and included both font variable classes.
- The running dev server initially served stale shared CSS even after reload
  and a timestamp refresh. Restarted only this workspace's verified Next dev
  CLI and server processes, then launched `npm run dev` on port 3000.
- Confirmed restarted preview CSS includes the exact Newsreader headline rule,
  optical sizing, and -.025em spacing. Leave the dev server running for preview.
- `git diff --check`: passed; existing LF/CRLF notices only.
- Early screenshots and computed styles still showed the old Rubik headline.
  Subsequent browser automation calls repeatedly timed out, including a fresh
  QA tab attempt. Final visual desktop/mobile QA and a proof screenshot could
  not be completed; no claim of successful visual verification.
- No behavior tests added for this reversible typography change.
- No commit, push, or deployment.

## References and lessons

- [Root layout](../src/app/layout.tsx)
- [Headline styles](../src/app/globals.css)
- [Newsreader license](../src/app/fonts/newsreader/OFL.txt)
- [Production Type project](https://github.com/productiontype/Newsreader)
- [Official font metadata](https://raw.githubusercontent.com/google/fonts/main/ofl/newsreader/METADATA.pb)
- Font: https://raw.githubusercontent.com/google/fonts/main/ofl/newsreader/Newsreader-Italic%5Bopsz%2Cwght%5D.ttf
- License: https://raw.githubusercontent.com/google/fonts/main/ofl/newsreader/OFL.txt

When source/build CSS and the live preview disagree, inspect the served CSS.
For a stale OneDrive dev watcher, restarting the scoped development server can
restore the correct stylesheet without deleting caches or modifying configuration.
