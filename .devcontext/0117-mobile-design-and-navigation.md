# ADR and work record 0117: Mobile design and navigation

- Date: 2026-10-17
- Status at creation: Implemented; responsive, interaction and application checks passed; production build blocked

## Request, context and success criteria

Michelle requested a polished mobile layout while preserving branding, content and
desktop design. Verify 320, 375, 390 and 430px phones, tablet and desktop; review
navigation, reading, touch targets, imagery, motion, links and forms.

Read recent 0114-0116 records, existing components/styles, campaign/navigation
records and installed Next CSS, image, linking and Client Component guides.
Baseline mobile header measured 230.2px at 320px and 154.6px at the other phone
widths. Desktop phrase nowrap rules constrained phone wrapping. Mobile accordion
titles were squeezed between their number and toggle; 200px minimum poster
heights distorted small video previews. The mobile Human x Machine decorative
frame clipped the second circle. Preserve original text, photos, palette, the
desktop carousel, four native accordion stories and campaign/publishing behavior.

## Decision and implementation

- Extend the existing SiteNavigation client component with a labelled Menu/Close
  disclosure, unique aria-controls ID and aria-expanded state. Keep ordinary
  navigation links rather than application-menu roles. Close on link selection,
  outside pointer, Escape (return focus to trigger), and switching to desktop.
- Use a 68px mobile header visible from the start. Menu links are vertically
  stacked 48px targets, with a distinct contact action. Panel can scroll in short
  viewports. Retain measured header offsets so anchors clear the fixed header.
  Above 760px, hide the trigger and use display:contents on the panel to preserve
  the original desktop flex layout and scroll-revealed header.
- Alternative: keep the wrapped mobile row, which caused excessive header height.
  A modal/focus-trapped drawer adds unnecessary state; a normal disclosure makes
  these four destinations accessible without new dependencies or a menu library.
- Put shared navigation and targeted responsive overrides in editorial.css.
  During QA, globals.css changes were not being rebuilt into the running preview,
  while editorial.css refreshed correctly. Restore globals.css exactly, rather
  than restart the user's server or change the Turbopack build configuration.
- Mobile hero: 42px minimum fluid headline, 17px/1.7 copy, natural phrase wrapping,
  sufficient top clearance and a stacked signoff. Visually place the primary
  action after the headline on phones; desktop ordering remains unchanged.
- Adjust section spacing separately. Keep one-column phone layouts, readable
  17px prose and 16px experience labels; use left-aligned mobile experience copy
  to avoid large justified gaps. Desktop justification remains unchanged.
- Keep portrait proportions/focal point. Show all five employer logos in a static
  mobile grid, with the accessible duplicate hidden; desktop keeps its carousel.
  Let offscreen logos use Next Image's default lazy loading.
- Give leadership titles their own full row beneath the number and 44px toggle.
  Whole native summaries remain tappable. Adjust expanded copy spacing, stack
  contribution details and films, and retain native grouped expansion/closure.
- Use proportional 16:9 phone posters, a 48px play icon and separated play label.
  Retain a 200px minimum height for actual YouTube embeds. Refine poster sizes
  hints for their available phone width; players still mount only after selection.
- Restore 150px mobile thought graphics so their original geometry is visible.
  Reduce writing artwork's phone height proportionally without changing its crop
  focal point. Use a wide rounded mobile contact CTA and readable email options;
  override the native dialog max-width so it uses the available space.
- Improve mobile studio helper text, full-width submit button, stacked form
  headings and 44px controls. Enlarge file chooser targets through tablet widths.
- Keep existing prefers-reduced-motion rules and PageMotion preference handling;
  the mobile logo treatment has no automatic motion even without that preference.

## Verification and actual outcomes

- Full npm run lint and npm run typecheck exited 0 after component changes.
  Later edits only refined CSS typography, play-label spacing and graphic width.
- node --test scripts/test-navigation.mjs scripts/test-challenger-films.mjs:
  14 tests passed. Existing Node MODULE_TYPELESS_PACKAGE_JSON notices remain.
- npm run test:publishing initially could not connect through the restricted
  local network. Authorized execution outside that restriction exited 0: invalid
  inputs/origins rejected; all three pillars/four formats, optional PDF/experience,
  persistence and PDF serving passed. Temporary records were removed successfully.
- git diff --check passed; existing Windows line-ending notices remain.
- Live browser matrices at 320/375/390/430/768/1024/1440px: document scroll/client
  widths matched at every size; inspected visible headings, paragraphs, lists and
  open story text had no horizontal overflow. Windows scrollbar reduced client
  width by 15px, providing a slightly narrower content area than viewport width.
- Phone header is 68px at all four widths. Visible phone links/buttons/summaries
  met 44px minimum width/height; all menu destinations were 48px high. Menu open,
  Close, Escape/focus return, outside dismissal and desktop resize reset passed.
  All four links reached the intended fragment and closed the panel. Anchor
  headings cleared the header (section top approximately 112px, header bottom 68px).
  All local fragment targets exist. Main phone action ends at y=318-362px.
- At 768/1024/1440px, header height (86px), hero type (65.28/87.04/109.44px) and
  portrait widths matched the baseline exactly. Desktop trigger is display:none,
  panel display:contents and original action order retained. Visually inspected
  the 1440px desktop hero and representative phone sections.
- All four leadership stories opened, native group allowed one open, and closure
  worked. A film click mounted the expected privacy-enhanced iframe; browser DOM
  exposed the YouTube player. Switching stories removed the iframe. Actual video
  streaming/audio was not established. At 320px, posters measured 226x127px; final
  play icon ends before the label starts, with no overlap. Thought-circle bounds
  fit their 150px frame (furthest right edge 135px).
- Contact panel opened from both CTA and email address. Copy reported success;
  Close and Escape dismissed it. All four phone dialog widths had equal client/
  scroll widths, no overflowing controls, and usable vertical scrolling. Provider
  links retain the public recipient and appropriate subject. No email was sent;
  authenticated Outlook/Gmail composition was not tested.
- Studio checked at all seven widths: no form/document horizontal overflow,
  field type 16px, and phone controls at least 44px. Browser empty submit focused
  missing Title; Paper required a PDF; valid Idea fields reported valid. No valid
  browser submission was left behind. Final file chooser checks at 768/1024px
  measured 44px high; desktop retains its existing upload zone.
- All five mobile employer images loaded, duplicate set hidden, logo animation
  none. Portrait rendered at its 4:3 proportion. No console errors in QA tab.
- Current browser reduced-motion preference was false. Reviewed existing CSS/JS
  preference handling; available browser controls cannot force the preference.
  No physical iOS/Android, touch hardware, Safari or network/performance benchmark
  testing; viewport QA does not establish those results.
- npm run build failed before compilation with existing EPERM removing generated
  .next/static/FW8In346nDPl8ZWv96VE-. No build success or release readiness claim;
  did not delete preview files or change build infrastructure to work around it.
- Reset viewport and closed temporary QA tabs. No commit, push or deployment.

## Evidence and files

Screenshots/results under
C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/:
mobile-polish-375-hero.png, mobile-polish-375-menu.png,
mobile-polish-375-story.png, mobile-polish-390-contact.png,
mobile-polish-1440-desktop.png and mobile-polish-responsive-checks.json.
The JSON retains the initial studio matrix plus final tablet file-target rechecks.

Files: ../src/app/editorial.css, ../src/components/site-navigation.tsx,
../src/components/logo-carousel.tsx and ../src/components/challenger-films.tsx.
No content, image files, package dependencies or earlier records were changed.
