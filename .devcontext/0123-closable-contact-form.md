# Work record 0123: Closable contact form

- Date: 2026-10-17
- Status at creation: Implemented and verified in the local preview

## Request and context

Michelle asked to close the expanded conversation form and return to the earlier
circular contact button. Reviewed [0120](0120-contact-conversation-pathway.md),
[0122](0122-contact-delivery-activated-locally.md), current contact components,
navigation, responsive styles and installed Next use-client guidance. This
supersedes only 0120's decision to permanently replace the circle with an inline
form. Keep its single contact destination, intent selection and secure delivery.

## Changes

- ContactForm now owns a small inline disclosure: the ink circular "Let’s start a
  conversation" button opens the existing form in its place. Close in the form's
  upper-right corner restores the circle. Phones use a clearly named 44px × button
  to leave space for the heading. Native buttons, expanded/controls attributes,
  visible focus and reduced-motion-compatible color transitions; no new dependency.
- Keep the form mounted with native hidden so drafts, conversation choice,
  validation state and retry identity survive closing without exposing hidden
  controls to keyboard or accessibility navigation. No dialog or focus trap is
  needed for this inline section. Opening focuses its heading; closing returns
  focus to the circle. Escape inside the form closes it. Closing is disabled during
  sending so the existing async feedback/focus behavior remains safe.
- Regular homepage visits show the circle. Initial #connect links open the form.
  Existing contact-intent events now also open it, preserving contextual type
  selection. Listen for hash changes/history and dispatch the same event from
  the main navigation's contact action so repeat clicks reopen a closed form even
  when #connect is unchanged. Footer and existing contextual links retain their
  existing behavior. No server, recipient, credential or form-delivery changes.
- Keep the circle centered in its desktop column and stack it on mobile. Preserve
  the full form card layout when expanded. At <=430px, a 24px heading and compact
  close icon avoid crowded or stacked header controls.

## Verification

- npm run lint and npm run typecheck passed. All 10 existing mocked contact tests
  passed, preserving validation, provider acknowledgment/failure, spam limits and
  idempotency behavior. No real message was sent in this task.
- Browser verified direct #connect opens the form; normal root visits show the
  circle. Close and Escape hide the form and focus the circle. Enter on the circle
  reopens it and focuses the heading. A typed name/message and selected conversation
  survived these transitions. Tab from the closed circle went to the footer link,
  skipping every hidden form control.
- Main navigation reopened after closing with unchanged #connect. Footer reopened
  the form. Discuss an executive opportunity reopened and selected Executive while
  preserving the draft. Invalid submit with blank email focused its specific error
  summary; closing/reopening retained the message and associated field error.
- Checked 320,375,390,430,768,1440px viewport widths: document scrollWidth equals
  clientWidth, close targets are >=44px high/wide, headings clear the close control,
  and the form fits its container. Visually reviewed narrow-phone header/focus and
  desktop open/closed treatments. Restored the viewport and closed the QA tab.
- git diff --check passed (existing Windows line-ending notices). Production build
  still fails before compilation on the existing EPERM rmdir for
  .next/static/FW8In346nDPl8ZWv96VE-. No deletion or infrastructure workaround.
- No new automated accessibility scan, screen-reader speech, physical-device test
  or reduced-motion emulation in this task. No movement/entrance animation added;
  existing global reduced-motion rules remove the new color transitions.

Evidence in the existing visualization directory: contact-circle-closed.jpg,
contact-close-mobile.jpg, contact-close-desktop.jpg and
contact-disclosure-responsive.json. The desktop image records the close control;
the closed-circle image shows the complete intended compact treatment. No commit,
push or deployment requested or performed. Earlier uncommitted work is preserved.
