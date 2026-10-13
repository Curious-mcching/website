# ADR 0002: Append-only development memory

- Date: 2026-10-13
- Status at creation: Accepted

## Context

Michelle requested agent instructions based on the supplied
`C:/Users/mcchi/Downloads/keyInstructions.md` sample and durable development
context to prevent repeated mistakes and regressions. Every architectural
decision must be documented in a new ADR; existing ADRs must never be rewritten.

## Decision

Keep project-wide instructions in root `agents.md`. Adapt the sample's
principles: think before coding, simplicity first, surgical changes,
goal-driven execution, and semantic contribution rules.

Store decisions and meaningful work, fixes, lessons, and verification in
`.devcontext/NNNN-description.md`. Allocate the next unused four-digit number.
Read relevant records before work. All records are immutable; corrections and
superseding decisions require new files referencing the prior records. Each
architectural decision receives its own ADR with context, decision,
alternatives, and consequences. Work records capture actual verification.

Preserve the official scaffold's managed Next.js instruction block, which
directs agents to the installed package's documentation. Next.js may maintain
that block when its development server starts.

## Alternatives considered

- A mutable work log: loses historical rationale and contradicts the request.
- Rewriting a prior ADR's status: violates the explicit append-only policy;
  new records instead explain which earlier decisions they supersede.

## Consequences

Agents must read existing context and add new records before completing
meaningful work. Historical records can contain superseded decisions; follow
the linked newer decisions without modifying the historical files.

## References

- [Agent instructions](../agents.md)
- [Foundation ADR](0001-website-foundation.md)
