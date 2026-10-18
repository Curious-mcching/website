# ADR and work record 0120: Contact conversation pathway

- Date: 2026-10-17
- Status at creation: Implemented; interface, validation, local failure path and mocked delivery checks passed; real delivery awaits configuration

## Request and context

Michelle requested one useful contact destination for executive opportunities,
advisory work and speaking: navigation/footer entry points, contextual preselection,
four accessible conversation choices, a short form, specific feedback, secure
delivery when configured, and the existing LinkedIn alternative. Preserve branding,
desktop design and earlier accessibility/mobile/motion work. Reviewed 0114 and
[0119](0119-accessibility-and-publishing-feedback.md), current components, README,
package/configuration and installed Next route/form/environment/security guidance.
Existing 0117–0119 records and source changes remain intact and uncommitted.

Discovery: the site has only its local publishing backend and direct email chooser;
there was no configured sending service, relevant environment file or service
environment variable. The already-public contact address is mc.ching@gmail.com;
the existing LinkedIn profile is https://www.linkedin.com/in/chingmichelle/.
Neither recipient nor profile was invented or replaced.

## Decision and implementation

- Keep homepage #connect as the single destination. The main navigation already
  included Let’s connect; preserve it and add the footer link, including on studio.
  Use the exact requested headline and introduction. Preserve eucalyptus/mist/ink,
  serif emphasis, subtle outline art, existing layout elsewhere and reduced motion.
- Replace the contact circle with a readable form card alongside the introduction.
  Keep direct email as the existing accessible native chooser, plus the requested
  secondary LinkedIn wording and a new-tab notice. Consolidate public contact
  details in src/lib/contact.ts for the existing chooser/footer/form backend.
- Collaboration links now go to the form rather than opening separate dialogs.
  The first three preselect Advisory & collaboration; Challenger conversations
  selects Speaking & conversations. Start with a question also selects Advisory.
  Add one understated leadership-section link, Discuss an executive opportunity,
  selecting Executive. The writing question link goes to the same section without
  guessing intent. Leave content-discovery links (e.g. Explore my thinking) intact.
- Contextual URLs are /?conversation=executive|advisory|speaking#connect. Generic
  links use /#connect. Native/Next links remain meaningful without the event hook.
  Same-page links send a small contact-intent event, preserve existing draft
  fields, transfer focus to the section and scroll even when the hash is unchanged.
  Navigation preserves its menu dismissal/inert behavior. General links retain a
  visitor's selection within a session; a fresh general visit starts with Something
  else. Initial/deep-link and changed browser-history intent are read by the form.
  Error-anchor navigation does not reapply the URL's original selection. Guard the
  initial effect from overwriting a radio interaction during hydration.
- Use native radio inputs/fieldset/legend for one choice, 2×2 on desktop/tablet,
  one column on phones. No custom radio keyboard model or extra dependency.
  Keep Message visibly labelled and its requested prompt associated via describedby.
  Name/email/message are required; organization optional; no extra visible fields.
  Name <=100 characters, email <=254, organization <=150, message <=5,000.
  Required text is trimmed; Unicode names and multiline messages are allowed.
- Visible instructions, native autocomplete and associated field errors. Invalid
  submit focuses an error summary with field links. Sending disables the fieldset;
  a synchronous ref also blocks repeated submissions before React renders. Status
  lives outside the disabled fieldset. Only sent:true from an acknowledged server
  response permits the exact requested success copy and clears the form. All
  failures retain the draft, focus an alert and offer Try again. Unexpected/non-JSON
  responses use straightforward failure copy rather than parsing diagnostics.
- Add a same-origin JSON /api/contact handler. Public GET exposes only an available
  boolean; reading request headers keeps it at request time with Cache Components.
  POST validates origin, content type, declared/streamed 32KiB body cap, input types,
  text limits, allowed conversation and submission UUID. A nonempty offscreen,
  aria-hidden, tabindex=-1 honeypot is rejected with no fake success.
- Prepare Resend delivery via server fetch, without installing its SDK or creating
  an account. Require private RESEND_API_KEY and CONTACT_FROM_EMAIL; there are no
  default/fabricated credentials or sender. Recipient is fixed to the existing
  address; visitor email is Reply-To. Subject uses the fixed conversation label;
  body is plain text. No mailing list, auto reply, local message storage or logs of
  visitor messages. Timeout/provider rejection/missing ID returns failure. Only
  an OK provider response with a nonempty message ID yields sent:true.
- Use a stable per-draft UUID and server-generated hashed provider idempotency key
  so an identical retry can be acknowledged without another email. Editing the
  payload changes the key. Add process-local spam limits: six send attempts per
  address in ten minutes, twenty per process per minute, bounded expiring map.
  Store only email hashes for these limits. This is basic best-effort protection;
  a multi-instance public deployment needs a shared host/WAF rate limit.
- With configuration absent, show a visible unavailable notice; a valid submit
  returns 503 and explicitly says the message has not been sent. Email/LinkedIn
  work as alternatives. Document server-only activation and an actual inbox/Reply-To
  test in README. Do not ask for credentials in chat or represent mocks as delivery.

Alternatives considered: another contact page (unnecessary extra destination),
mailto-only (does not meet the form requirement), inventing a sender or using a
fake success (incorrect), installing an SDK/service infrastructure (unnecessary),
or replacing every content CTA (would disrupt discovery). The form + small route
fits the existing Next/React pattern and can be activated without changing its UI.
The old dialog remains solely as a useful direct-email alternative.

## Verification and evidence

- Final npm run lint and npm run typecheck passed. git diff --check passed with
  the repository's existing Windows line-ending notices.
- 33 tests passed: new 10-test contact suite plus existing publishing validation,
  navigation, video reset and section-motion tests. Contact tests import the actual
  route and validator using Node's alias hook; all provider fetches are mocked.
  Cover required/optional inputs, boundary lengths, CRLF/email/type rejection,
  malformed/nontext JSON, origins/content type, honeypot, declared and streamed
  size caps, missing/partial service configuration, provider acknowledgement,
  fixed recipient/plain text/Reply-To, stable/changed idempotency, provider errors,
  missing IDs/network failure, and sender/process limits/expiry. No real email sent.
  Existing MODULE_TYPELESS_PACKAGE_JSON warnings remain. npm run test:contact is
  available for repeat verification; no dependency or lockfile change required.
- Live browser: all four offering links, Start with a question and the executive
  link selected the intended type, updated URL and focused #connect. Writing,
  header and footer links reached that destination. A footer link from /studio
  returned to home with fresh Something else selection. Existing field values
  survived contextual same-page navigation.
- Native radio ArrowRight changed Executive to Advisory with visible keyboard
  focus; each of the four choices produced the exact requested visible prompt.
  Error links retained the visitor's changed choice. Empty/invalid submit exposed
  specific name/email/message errors, associated IDs and focused the summary.
  An error link focused its input below the fixed header. Tab from Message reached
  Send message, skipping the honeypot.
- Real local POST with valid disposable text returned unavailable, focused its
  failure alert and retained name/email/message. Try again followed the same honest
  failure path; success status stayed empty. Cleared these drafts by reloading the
  dedicated QA tab; no content record was created. Direct email opened its chooser;
  Escape restored its trigger. Inspected existing destination/provider links.
- Installed axe-core 4.14.0 scanned #connect using WCAG 2 A/AA, 2.1 A/AA, 2.2 AA
  and best-practice tags via a temporary development component. Stable normal,
  error and failure states reported zero violations and zero incomplete checks
  (24/26 passing rule groups). One transitional page navigation produced an
  incomplete heading-order check; settled scans were clean. Removed audit source,
  root import and mount before final lint/typecheck. This is not a full compliance
  or screen-reader testing claim.
- At 320/375/390/430/768/1024/1440px: document client/scroll widths match, form
  client/scroll widths match, fields are 16px, radio label targets >=58px high and
  Send message 52px high. Mobile header remains 68px. Final layout uses one radio
  column on phones and two on tablet/desktop. At 320px, reduced the new headline
  to 36.8px so it occupies two balanced lines (about79px high), avoiding a dangling
  “we”; rechecked no overflow. Desktop layout elsewhere is unchanged. Visually
  reviewed complete desktop form and phone viewport/controls. Existing CSS/JS
  reduced-motion handling and passing motion tests remain in place.
- Found and corrected a Next 16 preview compilation issue: explicit runtime export
  is rejected when cacheComponents is enabled. Removed it; default runtime is Node.
  This was not detected by typecheck, so retain live preview validation.
- npm run build remains blocked before compilation by existing Windows EPERM rmdir
  of .next/static/FW8In346nDPl8ZWv96VE-. Do not claim a successful production build.
  No generated preview deletion or infrastructure change attempted.
- No real delivery/inbox or authenticated Outlook/Gmail/LinkedIn action tested.
  The success branch is verified at route level with a mocked provider, not by a
  real browser send. Physical devices, Safari, actual screen-reader speech and
  OS reduced-motion emulation were not available. See 0119 for wider audit limits.
- No commit, push or deployment; preserve all earlier uncommitted work. Restore
  viewport and close the dedicated QA tab before finishing.

Evidence directory:
C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/

contact-pathway-desktop.jpg, contact-pathway-mobile.jpg,
contact-entry-checks.json, contact-responsive-checks.json,
contact-accessibility-audits.json, contact-final-mobile-error-audit.json,
contact-final-failure-audit.json. Desktop image captures the full contact section;
phone image shows the real viewport and its surrounding navigation/copy.

## Activation and future guidance

Set RESEND_API_KEY and CONTACT_FROM_EMAIL in the server environment, verify the
sender's own domain, restart/redeploy, and confirm a real message arrives at
mc.ching@gmail.com with correct Reply-To. README includes the steps. Never use
NEXT_PUBLIC_ for credentials or change the recipient from request data. Use a
shared deployment rate limiter for multi-instance traffic. Provider acceptance
does not prove inbox delivery; inspect delivery/bounce reports after activation.

References: [Resend send-email API](https://resend.com/docs/api-reference/emails/send-email),
[verified domains](https://resend.com/docs/dashboard/domains/introduction),
[idempotency](https://resend.com/docs/dashboard/emails/idempotency-keys).
Resend's idempotency window is 24 hours. Installed Next documentation confirms
request properties defer GET prerendering and private environment values stay
server-side. Keep the route import out of client code, preserve URL intent and
user-chosen radio state separately, and do not restore success-like spam responses.
