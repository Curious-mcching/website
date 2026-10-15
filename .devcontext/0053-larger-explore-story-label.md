# Work record 0053: Larger Explore story label

- Date: 2026-10-14
- Status at creation: Implemented and build-verified

## Request and changes

Michelle requested larger "Explore story" copy in Leadership in Action.

- Increase .leadership-toggle-label font-size from 11px to 15px in editorial.css.
- The shared rule applies to all four leadership story summaries. Keep its
  existing 500 weight, colour, nowrap setting and adjacent plus/minus icon.
- Keep the desktop grid's auto-sized action column and flexible title column.
- Preserve the mobile and expanded-story rules that hide the decorative label,
  as documented in [0036](0036-leadership-story-accordion.md).
- No copy, disclosure behavior, layout rules, dependencies or architecture changes.
- Preserve the later eucalyptus/mist palette from
  [0048](0048-eucalyptus-headlines-and-single-lime-action.md) and other pending work.

## Verification and limitations

- npm run build passed, including TypeScript and static generation.
- git diff --check passed before and after adding this record, with existing
  Windows line-ending notices.
- Source review confirms the shared 15px rule and existing responsive/open-state
  overrides. The action column remains auto-sized; titles retain minmax(0, 1fr).
- No live browser layout or responsive visual check following the previously
  documented browser policy block. Source review does not establish rendered fit.
- No separate lint/typecheck run for one CSS font-size declaration; production
  build includes TypeScript validation. No tests for this low-impact style edit.
- No commit or push.

## File

- [Leadership action-label styling](../src/app/editorial.css)
