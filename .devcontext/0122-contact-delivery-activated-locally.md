# Work record 0122: Contact delivery activated locally

- Date: 2026-10-17
- Status at creation: Local form sends successfully; Resend reports Delivered; hosting configuration remains separate

## Request and context

Michelle requested help activating the unavailable contact form, then reported
needing help signing in. Continues [0121](0121-email-activation-signup-handoff.md)
and the existing implementation in [0120](0120-contact-conversation-pathway.md).
Preserve the form's truthful submission behavior and all earlier changes.

## Changes and decisions

- Helped navigate the existing Resend login to Google sign-in. The user completed
  authentication herself; no password, verification code, account terms or new
  authentication credential was entered by the agent. Subsequently verified the
  signed-in Resend onboarding page for mc.ching.
- Prepared the ignored .env.local with an empty key and Resend's documented
  onboarding@resend.dev test sender. This occurred after 0121's snapshot, which
  correctly recorded no environment file at its creation. No invented credential
  or fake available/success state was used.
- Asked action-time permission to create a sending-only key and save it privately
  in the website's local configuration. Michelle explicitly answered "Yes,
  connect the sending key." Used API keys management rather than the onboarding
  shortcut, chose Sending access (not Full access), and created the key named
  Michelle website contact. Domain scope is All domains because none is verified.
- Stored the real key only in ignored .env.local under RESEND_API_KEY. No public
  variable, application source, credential output, screenshot of the secret or
  Git tracking. Copy and masked-field reads initially returned redacted data;
  validated before saving, so these attempts wrote nothing. Used the visible
  one-time key field after its Show value control, saved privately without printing
  it, and closed the display. Runtime variables holding the secret were cleared.
- Kept the existing fixed recipient and visitor Reply-To behavior. The account
  owner's email matches the recipient, permitting Resend's own-address test sender.
  No domain purchase, DNS modification, deployment, subscription, provider switch
  or dependency was needed. README now distinguishes local testing from launch.

## Verification and outcomes

- Next's running preview picked up the private settings without a manual restart.
  A fresh browser visit to /#connect displayed the form without its unavailable
  notice. No application code change was required.
- Submitted one clearly labelled real setup test through the website UI, using
  Michelle's confirmed email, Something else, no organization and a message
  explicitly identifying itself as a delivery test, not a visitor enquiry.
- Observed disabled controls and Sending state, then the genuine success message
  "Thanks for reaching out. Your message has been sent." Fields cleared and the
  status received focus. This used the real provider, not mocked responses.
- Resend Emails showed one message to mc.ching@gmail.com, subject
  Website conversation: Something else, status Delivered. Opened its detail:
  onboarding@resend.dev sender, expected recipient and Reply-To, correct plain
  text test content, and both Sent and Delivered events. Provider message ID:
  01a14c40-b478-7342-b243-38987a24ef3a.
- Verified .env.local is ignored and git ls-files reports it untracked. A shell
  localhost GET was denied by socket restrictions; the browser's actual successful
  submission verified the service instead. No sandbox workaround was attempted.
- No application source changed, so did not repeat the previously passing lint,
  typecheck and mocked suites. No build was attempted; existing Windows EPERM
  build limitation from 0120 remains. git diff --check checked the documentation.
- Saved evidence in the existing visualization directory: resend-signed-in-setup.jpg,
  contact-real-send-success.jpg, resend-contact-test-delivered.jpg. The last image
  shows the provider's Delivered event. Closed the temporary website QA tab;
  preserved the signed-in Resend tab as a handoff.

## Remaining limitations and future work

Provider Delivered establishes receiving-server acceptance, not inbox placement.
No authenticated Gmail inbox inspection or actual Reply action was performed.
The user can find the labelled test in Gmail (including Spam if necessary).
Only the local website is configured: add the private settings on the hosting
service and retest when deploying. A verified domain sender is recommended for
launch and required to send beyond the Resend account owner's address; no owned
domain or deployment target has been confirmed. Local settings must never enter
Git, and a future commit/push alone will not activate production delivery.
No commit or push was requested or performed during this activation.

Official restriction verified directly:
https://resend.com/docs/api-reference/errors (own-address testing and sending-only
key permissions). Keep the sending key private and do not expand its permissions
to read email or administer the account without a specific need and authorization.
