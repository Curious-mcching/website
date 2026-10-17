# ADR and work record 0114: Contact options and editorial refinements

- Date: 2026-10-17
- Status at creation: Implemented; lint, typecheck and live checks passed; production build blocked

## Requests and context

Michelle requested moving “and” onto the next line of the experience introduction,
reported that the writing CTA, conversation CTA and email address did nothing,
requested thin curves beside the writing heading, then asked for those curves to
bleed off the page. She also requested a simpler, more elegant treatment for the
three experience lists. Read 0113 and 0099 and the installed Next CSS guidance.
Preserve approved copy, original portrait, employer/client band and earlier fixes.

## Decisions and implementation

- Extend 0113's phrase wrapping with a nowrap “and bring” span. No wording changes.
- Add a reusable client ContactLink using a native modal dialog. A visible chooser
  offers Outlook work/school, Outlook.com personal, Gmail, the default email app,
  and copying the public address. This avoids relying exclusively on a configured
  mailto protocol handler. No OS/browser settings, accounts or sending service change.
- Apply the component to the four offering CTAs and the contact circle/address.
  Preserve each offering's contextual subject and accessible label. Dialog titles
  use unique React IDs; native close/Escape behavior, readonly address and copy
  success/failure status are provided. Failed clipboard writes select the address.
- The writing empty-state CTA now navigates to #connect. Its arrow points right.
- Alternatives: retain mailto alone (does not address the reported experience),
  force Outlook for everyone (excludes other visitors), or build a sending form
  (requires a service and unnecessary infrastructure). The chooser adds a step but
  makes the next action explicit. Provider login may be necessary; no email was sent.
- Add two subtle iris ellipse outlines, noninteractive and behind the writing
  content. Move the wrap to an inner div: the section and clipped decoration now
  reach the viewport edge while headings/library retain the existing content grid.
  This supersedes the transient content-width clipping visible in Michelle's image.
- Replace bold green dot-separated experience labels with regular-weight 18px ink
  typography and a spaced grid. Industries/markets use two columns; capabilities
  use one. Stack at <=480px. Remove obsolete dot markup/styles. Long words can wrap
  within their cell, with automatic hyphenation where supported. Keep semantic lists,
  original labels, justified paragraphs and the four-child subgrid structure.
- Email provider options stack on narrow screens; dialog remains vertically
  scrollable with a nonwrapping close control.

## Verification and limitations

- npm run lint and npm run typecheck both exited 0 after JSX/component changes.
  Subsequent edits only refined CSS wrapping and narrow-screen layout.
- git diff --check passed; existing Windows line-ending notices remain.
- Live preview: writing CTA navigated to #connect, conversation button immediately
  opened the modal, address button opened it, Close dismissed it, Escape dismissed
  it and restored focus to the conversation trigger. Copy displayed “Email address
  copied.” Clipboard failure fallback exists but was not forced/tested.
- Inspected all four provider hrefs in an offering dialog: correct public recipient,
  encoded subject “Let's talk: Growth & customer strategy”, mailto fallback and
  webmail destinations. Authenticated composers/delivery were not tested. No send.
- A keyboard boundary probe did not establish a stable focused element; do not
  characterize this as a separately verified focus-trap test. The implementation
  uses the browser's native showModal behavior, without a custom trap.
- At normal desktop preview, writing section starts at x=0 and its width equals
  document client width (1265px), with no horizontal page overflow. Outlines have
  pointer-events:none and section overflow:clip. Visually inspected the page bleed.
- At 320px viewport, experience lists stack and fit (265px client/scroll widths).
  Contact provider options stack; dialog has equal client/scroll widths (246px),
  and vertical scrolling accommodates its content. Page client/scroll widths match.
- At 1051px, final list client/scroll widths all equal 276px; no list item overflows
  its cell after the final overflow-wrap rule. Reset temporary viewport and closed
  the temporary QA tab. An early screenshot captured unsettled smooth scrolling;
  later settled screenshots supplied the actual visual checks.
- Final screenshot: C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/writing-curves-page-bleed.png.
- npm run build failed before compilation: EPERM removing generated directory
  .next/static/FW8In346nDPl8ZWv96VE-. Existing generated-folder/OneDrive limitations
  remain unresolved; no production-build success is claimed. Did not remove dev
  preview files or broaden scope into environment repair.
- No commit, push or deployment. Preserve unrelated pending work and immutable records.

## References and future guidance

- Files: ../src/components/contact-link.tsx, ../src/components/pov-library.tsx,
  ../src/app/page.tsx, ../src/app/editorial.css.
- Outlook endpoint reference: https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/RegisteredProtocolHandlers
- Earlier checks opened Outlook/Outlook.com endpoints and Gmail's compose/sign-in
  route. Endpoint availability does not establish signed-in prefill or delivery.
- Keep decorative clipping on the full-width section, rather than its inner wrap.
  Do not replace the contact chooser with an inert anchor or assume every visitor
  has a desktop email handler. Recheck provider URLs before a future release.
