# Work record 0010: Three-pillar framework verification

- Date: 2026-10-13
- Status at creation: Completed

## Request and changes

Michelle requested three evolving thought leadership pillars based on her
reference, allowing POVs, ideas, and perspectives to develop organically.
Implemented [ADR 0009](0009-three-pillar-thought-leadership.md).

The homepage now presents The Challenger Mindset, Human × Machine, and Leading
Through Reinvention as exploratory questions, with original CSS artwork.
Preserved the personal hero from record 0008 and the existing #challenger anchor.
Updated navigation to Thought leadership. The library filters by pillar and
format; the studio offers Point of view, Paper, Idea, and Perspective.

Short pieces can publish without PDFs or experience notes. Papers require PDFs.
Optional experience notes still have length validation; attached files retain
PDF signature, extension, size, and origin validation. Records explicitly store
pillar and hasPdf; older theme-based records remain supported without rewriting.
Updated README and meaningful integration tests for the publishing changes.

## Checks and outcomes

- npm run lint: passed.
- npm run typecheck: passed.
- npm run test:publishing: passed against the development server. Covered
  validation and origin protection, all three pillars and four formats,
  optional notes/PDFs, required paper PDF, persistence, PDF bytes/headers, and
  404 for PDF requests for pieces without attachments.
- Tests removed only their marked disposable records after verifying their
  resolved directories stayed inside the content root.
- npm run build: passed. Rebuilt after the final mobile-only CSS adjustment;
  final build also passed TypeScript and static generation.
- Production test on temporary 127.0.0.1:3001: passed; the library was readable,
  /studio and POST /api/povs returned 404. Stopped that server afterwards.
- Desktop visual inspection verified styled pillar rows and the compiled
  production output. Saved three-pillars.jpg in the chat visualization folder.
- At 320px, library and studio had clientWidth/scrollWidth of 305px each.
  Verified the pillar filter updates the empty-state message and pressed state.
- Browser studio test: selected Paper and verified the file input became
  required, then published a clearly marked temporary Idea under Human × Machine
  without a PDF or experience notes. Success appeared, the form reset, and the
  library showed the idea without an attachment link or experience detail.
- Browser filters: matching pillar/Idea showed the record; Paper and another
  pillar each hid it and displayed the no-match message.
- Removed the browser fixture with native PowerShell after verifying its exact
  marker, metadata, UUID directory, and workspace path. Final content/povs
  contains only .gitkeep; no actual writing was invented or retained.
- Stacked the studio selectors on mobile so long pillar names are easier to
  read. Final browser computed grid had one 227.2px column, without overflow.
- Reset responsive overrides and closed all temporary QA tabs. Refreshed the
  user's existing homepage tab. The local dev server remains running at port
  3000 with the configured loopback hostname. No deployment, commit, or push.

## Lessons and limitations

The development server served an older compiled stylesheet even after source
edits, timestamp refresh, and restart. Direct local HTTP inspection confirmed
the stale CSS came from the server rather than the browser. The production
build already contained the updated styles.

Resolved this by stopping the dev server, resolving the exact generated
.next/dev/cache/turbopack path with Node realpath, verifying it stayed within
the workspace, removing only that generated cache using native PowerShell, and
restarting npm run dev. The final browser showed the updated one-column mobile
selector layout. Do not clear generated caches while the dev server is running,
and do not delete the full .next tree when only the development cache is stale.

Legacy metadata support was inspected in code; no existing user entries were
present for a live migration test. PDF tests use a synthetic header fixture to
verify the API contract, not actual PDF viewer rendering. Local publication and
the future hosting/authentication requirements from ADR 0006 remain applicable.

## References

- [Architecture decision](0009-three-pillar-thought-leadership.md)
- [Personal introduction](0008-personal-homepage-introduction.md)
- [Publishing tests](../scripts/test-publishing.mjs)
- [README](../README.md)
