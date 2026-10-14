# Work record 0040: Thought leadership text hierarchy

- Date: 2026-10-14
- Status at creation: Completed

## Request and changes

Michelle requested stronger hierarchy in section 04 and suggested trying a
different colour for The Challenger Mindset, Human × Machine and Leading Through
Reinvention. She explicitly clarified that the question lines should stand out
more rather than match the descriptive body copy.

Add two homepage-scoped rules in editorial.css:

- Pillar titles use the existing lime #BFD86C accent against aubergine #221B38.
- Question paragraphs use fluid 18–23px Rubik, weight 500, line-height 1.45 and
  18px top spacing. Description text retains its existing 14px muted treatment.

This supersedes only the question sizing from
[0026](0026-larger-body-and-button-text.md). More-specific selectors override
the shared 17px desktop and 16px mobile question rules without changing other
pages. Keep all wording, title font/size, metadata, graphics from
[0013](0013-restore-thought-leadership-graphics.md), layout and motion unchanged.
No new dependencies or architecture.

## Verification and limitations

- npm run lint, npm run typecheck and npm run build passed after the final rules.
- git diff --check passed with the existing Windows line-ending notice.
- Reviewed desktop/mobile cascade: the homepage-specific question rule has
  higher specificity than both shared question selectors, with an 18px minimum.
- Calculated lime/aubergine contrast using sRGB relative luminance: 10.34:1.
- The existing variable Rubik font covers weight 500; no font asset changes.
- Source confirms description size/colour and all content remain unchanged.
- Live browser, computed-style and responsive visual checks were unavailable
  following the prior browser policy block; no rendered preview is claimed.
- No behavior tests for these reversible typography/colour changes.
- No commit, push or deployment.

## Files and future guidance

- [Homepage typography overrides](../src/app/editorial.css)
- [Shared pillar typography](../src/app/globals.css)
- [Pillar content](../src/lib/thought-leadership.ts)

Preserve three visual levels: large lime titles, brighter medium-weight questions,
and quieter descriptive copy. Use the existing palette rather than introducing
unrelated colours for each pillar.
