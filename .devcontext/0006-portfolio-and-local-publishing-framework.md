# ADR 0006: Expertise portfolio and local publishing framework

- Date: 2026-10-13
- Status at creation: Accepted

## Context

Michelle requested an expertise website, portfolio offerings, a strategic
Challenger Mindset project, and a place to upload papers/POVs with experience.
She clarified that the writing does not exist yet and wants the framework
first. The audience includes clients, hiring leaders, and like-minded
thinkers, dreamers, and leaders.

## Decision

Build an editorial personal site with expertise, proposed collaboration
offerings, selected experience, Challenger Mindset, an empty writing library,
and contact links. Ground career claims in the supplied October 9, 2026 résumé.
Preserve qualifiers such as "contributed to" and acknowledge team work.
Do not create sample papers, testimonials, or invented professional claims.

Use a warm neutral palette, serif display type, restrained lime accents, and
original code-native artwork. Keep navigation, offerings, and case details
accessible with native links/details. Retain npm and the existing stack.

Prepare a local-only /studio for future PDF publication. Save each PDF and its
title, type, topic, summary, and experience in a unique directory under
content/povs. No entries ship initially. Public API routes list writing and
serve PDFs; the studio and write endpoint are disabled in production.
Bind npm run dev to 127.0.0.1 and require a same-origin upload to keep the
unauthenticated authoring surface local. Validate text fields and PDF size,
extension, and magic header. Do not upload the supplied résumé itself.

## Alternatives considered

- Hosted CMS/storage/authentication: appropriate for editing a live site,
  but hosting has not been selected. The first request is for a framework.
- Browser-only storage: does not create deployable content files or provide
  durable publication beyond one browser.
- Fake example POVs: contradicts the clarification that nothing is written.

## Consequences

Uploaded pieces survive refreshes and dev-server restarts as project files.
Deploy them with the source to display them in the public library. A future
live editor requires authenticated administration and durable hosted storage;
filesystem authoring must not be enabled on ephemeral hosting. The upload
choice was requested in an optional clarification; absent a selection, the
first version assumes local authoring and states that assumption explicitly.

The development hostname change supersedes the scaffold's network-wide dev
listener. Tests must verify validation, persistence, PDF serving, production
write protection, and the empty-state experience without leaving test writing.

## References

- [npm decision](0004-switch-to-npm.md)
- [Agent instructions](../agents.md)
- [Résumé source](../../../Professional%20Development/Michelle%20Profile/Resumes/Michelle%20Ching%20-%20Resume%20-%20R14%20-%20Oct%209%202026.pdf)
