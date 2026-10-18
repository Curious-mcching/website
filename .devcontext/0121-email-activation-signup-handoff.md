# Work record 0121: Email activation signup handoff

- Date: 2026-10-17
- Status at creation: Awaiting the user's account sign-in; sending remains inactive

## Request and context

Michelle asked Codex to fix the unavailable contact form because she does not
know how to configure it. Reviewed [0120](0120-contact-conversation-pathway.md),
README and the existing contact route. The sending implementation is prepared,
but there is no configured Resend key/sender or authenticated service tab.
Preserve the existing form, honest unavailable state and all previous work.

## Actions and present state

- Read-only browser inventory found only the website home and studio tabs.
- Opened https://resend.com/signup visibly in the in-app browser, tab 13.
  The screen offers Google/GitHub sign-in or email/password registration. It
  explicitly states that signing up agrees to Terms, Acceptable Use and Privacy.
- Initial email prefill was rejected by automatic approval review because exact
  authorization for disclosure to Resend/account setup was missing. Did not bypass
  the rejection. Explained it and asked permission for the exact address/action.
- Michelle explicitly answered “Yes, prepare the Resend signup” to the question
  authorizing entry of mc.ching@gmail.com on Resend's signup page, with the user
  completing sign-in/account creation and accepting terms herself.
- Retried the exact approved prefill successfully. Confirmed the Email field value
  in the browser; marketing opt-in remains unchecked. No password was entered and
  no signup, OAuth approval, API-key creation or service agreement was submitted.
- Asked Michelle to click Log in with Google, use her Gmail account and report
  when the Resend dashboard opens. That is the present required user step. Do not
  assume an account exists, that a domain is owned, or that email delivery works.
- No application source, environment file, credential, recipient or delivery
  provider was changed. No real message was sent. No commit/push/deployment.

## Verification and continuation

Browser confirmed https://resend.com/signup with the approved email prefilled.
Screenshot: C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/resend-account-setup.jpg.
Keep tab 13 open as a user handoff. Resume from the actual dashboard once she
reports sign-in, then inspect verified sending-domain/account settings and finish
the server configuration. Respect action-time approval for creating credentials;
never print a key or ask her to paste secrets into chat. Do not remove the
unavailable notice merely to make the form appear active. The current code's
configuration/tests/build limitation are in 0120; no source checks repeated for
this browser-only handoff.

Investigated Formspree documentation as an alternative, but did not switch provider
or create an account. Changing providers would still require recipient ownership
verification; keep the prepared Resend route until an actual need is established.
Official setup references remain https://resend.com/docs/dashboard/domains/introduction
and https://resend.com/docs/api-reference/emails/send-email.
