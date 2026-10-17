# Work record 0109: Visual polish with personal portrait preserved

- Date: 2026-10-17
- Status at creation: Implemented; lint/typecheck and responsive preview passed;
  production build blocked by generated-output permissions

## Request and protected work

Michelle authorized the refinements proposed in 0107 and emphasized that she had
just added her profile picture. Read 0108 before changing anything. Visually
confirmed the authentic portrait under Bold thinking. Grounded in experience.
Preserve its Image markup, placement, caption and styling exactly. Rechecked asset
SHA-256: 7F3E1E9022410724CA2CA4F687C7A02F9AF64969C9443F96E3B3C15F5630042F,
matching 0108. Final browser check confirms it remains loaded with alt Michelle
Ching. No portrait editing, retouching, recoloring, cropping or generation.

## Changes

### Thought leadership

Generate three related transparent sculptural illustrations with the built-in
image_gen tool: five slabs with one breaking the pattern (challenger), organic
and precise forms meeting (human/machine), and three related forms evolving
(reinvention). Use eucalyptus, iris and restrained lime accents. Project assets:

- public/images/pillar-challenger-modern.png
- public/images/pillar-human-machine-modern.png
- public/images/pillar-reinvention-modern.png

Each is 1254x1254 with alpha, confirmed via metadata. Exact prompts, built-in tool
mode and asset links are in design-previews/thought-leadership-2026-10-17/README.md.
Original generated files remain in this chat's generated_images folder.

Replace the old CSS/i-element boxed graphics with decorative Next Images, using
empty alt and aria-hidden wrappers. Unboxed artwork renders at 220px desktop and
180px mobile. Scope new layout/material styles to editorial-home in editorial.css;
remove the obsolete boxed art, rose variable, i-element shapes, mobile sizes and
hover transforms from source styles. Keep the original pillar copy intact.

### Collaboration cards

Reduce desktop numbers from 60px to 30px, mobile 48px to 26px. Tighten top-row
spacing and retain the existing title/body/list/action hierarchy. Add a subtle
eucalyptus edge and inner highlight for keyboard focus. Hover-capable users with
no reduced-motion preference receive a 2px lift (previously 4px), restrained
shadow and edge highlight. Existing links, focus outlines and destinations remain.

### Leadership stories

Make existing first paragraphs editorial opening statements at 24–32px with a
500 weight. Replace the nested tinted contribution box with an open two-column
summary between fine rules (single column mobile). Bring the unchanged existing
HSBC and RBC campaign modules directly after their contribution summaries.
Avoid duplicate film embeds and redundant adjacent divider rules. All story copy,
film IDs, credits, poster/button component, playback/reset behavior and native
details/summary interaction are preserved. No invented image proof for the other
two stories. Hero, new horizon, Venn, portrait, writing and contact preserved.

## Verification and actual outcomes

- Full npm run lint and npm run typecheck exited 0 for final application markup.
  Subsequent CSS-only adjustments were browser checked, without repeating those
  checks. No new tests for static art, spacing or reordered existing content.
- Production build failed before compilation: EPERM removing
  .next/static/FW8In346nDPl8ZWv96VE-. Known generated-output issue; no new cleanup
  attempted in this task. Build remains unsuccessful, not production-ready proof.
- First live check retained the old boxed/global art styling despite source edits
  and reload. Scoped the new homepage illustration rules in editorial.css, then
  confirmed transparent backgrounds, 220px art and correct grid in the live DOM.
- Desktop screenshot visually confirms the full three-illustration family.
  All images loaded. Cards show 30px numbers and retained clear content hierarchy.
- Expanded RBC story shows approximately 32px opening, open contribution summary,
  and exactly one campaign poster in the immediately following campaign section.
  No video playback was initiated during these checks.
- At 390px: no horizontal overflow (375px document client/scroll widths), 180px
  square unboxed illustrations, single-column readable text, 24px story opening,
  and story copy client/scroll widths both 334px.
- At 320px: document client/scroll widths both 305px; first pillar both 265px;
  first card both 263px; card numbers 26px. No horizontal overflow.
- Screenshots in this chat's visualization directory:
  thought-leadership-refined-desktop.jpg, thought-leadership-refined-mobile.jpg,
  collaboration-cards-refined.jpg, leadership-story-refined.jpg.
- Reset viewport and closed temporary QA tab. User tab preserved.
- git diff --check passed with existing Windows line-ending notices.
- No dependencies, runtime architecture, commit, push or deployment. Preserve all
  other pending workspace changes and immutable development records.
