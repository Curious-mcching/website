# Work record 0060: Larger centred dot signoff divider

- Date: 2026-10-14
- Status at creation: Implemented and build-verified

## Request and changes

Michelle approved using a centred dot between her name and "Always curious",
requesting a slightly larger treatment so it looks intentional rather than
like a mistake. Interpret the size request as applying to the separator.

- Replace the slash from [0059](0059-focused-hero-and-personal-signoff.md) with
  a centred dot in a dedicated hero-signoff-dot span.
- Use 20px type, 4px horizontal margins, inline-block display, line-height 1
  and middle vertical alignment for the dot.
- Hide the decorative separator from assistive technology; retain both text
  phrases and their separating whitespace.
- Keep the signoff's 12px desktop/11px mobile Rubik text, mixed case, colour,
  adjacent throughline link and existing responsive layout unchanged.
- No dependencies, assets, client behavior or architecture changes.

## Verification and limitations

- npm run build passed, including TypeScript and static generation.
- git diff --check passed before and after adding this record, with existing
  Windows line-ending notices.
- Source review confirms the centred-dot span and its dedicated rule; the
  mobile maximum-width selector still targets only the outer signoff span.
- No live browser visual fit check following the previous browser policy block;
  alignment and perceived emphasis have not been verified in rendered output.
- No standalone lint/typecheck rerun for this static separator and style change;
  production build includes TypeScript validation. No behavior tests.
- No commit, push or deployment.

## Files

- [Signoff separator](../src/app/page.tsx)
- [Divider size and spacing](../src/app/editorial.css)
