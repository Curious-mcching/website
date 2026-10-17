# Work record 0097: Building Brands. Modernizing Marketing.

- Date: 2026-10-17
- Status at creation: Implemented and desktop browser verified

## Request and changes

Following the research in [0095](0095-research-led-marketing-experience-story.md),
Michelle wanted emerging-media experience and marketing modernization to be
explicit. She accepted the revised two-paragraph draft, requested the capitalized
heading Building Brands. Modernizing Marketing., and capitalized capability labels,
specifically including Integrated Go-to-Market Strategy.

Replace only the middle experience column's heading, paragraph and channel list
in src/app/page.tsx. Apply the approved two paragraphs connecting brand foundations,
customer discovery and lifecycle with creator partnerships, AI discoverability,
agency/enterprise experience and modernization judgment. Use these labels:

- Brand & Positioning
- Integrated Go-to-Market Strategy
- Customer Lifecycle
- Emerging Media & Discovery

Place a line break between the heading's two sentences for a balanced desktop
heading. Keep existing semantic list, shared styling, justification, companion
artwork and surrounding copy. Preserve concurrent Financial Services capitalization
and Local + Global Perspectives changes. No new architecture or dependencies.

## Verification and limits

- Read relevant development context and installed Next Server Component guidance.
- Focused npm run lint -- src/app/page.tsx exited 0. A subsequent static heading
  line break was visually verified without rerunning lint.
- Live browser text confirms both complete paragraphs, requested capitalization
  and all four labels. Desktop screenshot confirms balanced two-line heading and
  complete labels in their surrounding three-column context.
- Screenshot: modernizing-marketing-capitalized.jpg in this chat's visualization
  directory. Temporary viewport override reset and QA tab closed.
- git diff --check passed with existing Windows line-ending notices.
- No full build, separate typecheck or new tests for this static copy-only edit.
  Mobile rendering was not separately inspected.
- No commit, push or deployment. Existing records remain immutable, including
  both records numbered 0095 that predated this task's final record.
