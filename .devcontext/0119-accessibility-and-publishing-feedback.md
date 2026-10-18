# ADR and work record 0119: Accessibility and publishing feedback

- Date: 2026-10-17
- Status at creation: Implemented; tested states have no automatic axe violations; manual and tooling limitations remain

## Request and context

Michelle requested an accessibility review and implementation covering keyboard
navigation, hidden menus, dialogs, contrast, image alternatives, existing forms,
semantics, narrow-screen/zoom usability and reduced motion. Preserve branding,
content and layout. Read the relevant development context and installed Next
guidance; preserve the uncommitted mobile and motion work in [0117](0117-mobile-design-and-navigation.md)
and [0118](0118-restrained-motion-and-menu-transitions.md).

## Decisions and changes

- Move the skip link into the shared root layout and label it “Skip to main
  content.” Both homepage and studio main landmarks have id=main and tabindex=-1.
  Homepage anchor sections are programmatically focusable. Activating a menu
  destination transfers focus there, instead of leaving focus on BODY after its
  menu link becomes inert. Programmatic section focus has no decorative outline;
  interactive controls retain visible focus. Keyboard focus reveals the fixed
  header immediately. Existing measured scroll margins remain intact.
- Keep the nonmodal mobile navigation, its inert/aria-hidden closed state and
  short transition. Menu names include their visible Menu/Close words. Escape
  returns focus to the menu button. Outside dismissal restores focus if it was
  still in the closing panel. No unnecessary focus trap was added to navigation.
- Keep native dialog/showModal/Escape semantics. Add explicit trigger focus
  restoration on close, a description, a visible associated email label, and
  hidden new-tab notices on webmail links. A live keyboard test found native Tab
  boundary traversal could put focus on BODY in this preview. A small dialog
  keydown handler now wraps only Tab/Shift+Tab at the first/last existing control;
  native handling covers intermediate controls and Escape. No dialog dependency.
- Repeated offering, film and PDF actions have descriptive accessible names that
  include their visible words plus specific context. New-tab LinkedIn and media
  links announce the new tab. Playing a film focuses its newly mounted, titled
  iframe instead of losing focus with the removed poster button. Existing story
  closure still resets that story's selected film.
- Add one persistent library status announcement for result counts/no matches.
  Remove the duplicate live role from the visible no-match message. Filters keep
  native buttons, pressed state and keyboard focus.
- Keep native form controls and visible labels. Required fields, character limits
  and conditional PDF requirements are explained visibly. Help and specific
  errors are associated with fields; invalid fields expose aria-invalid. On an
  invalid submit, focus a linked error summary. Error links focus their fields.
  Pending/success status remains mounted outside the disabled fieldset; success
  and global failures receive focus. No new form or external service was added.
- Extract the existing text/PDF policy into a small shared validation helper used
  by the form and API. Keep native required/min/max attributes but coordinate
  submission with noValidate so all errors are presented together. The API still
  checks origin, environment, actual format/pillar values, file signature and
  storage. Field-specific server errors use the same accessible presentation.
  This supersedes generic validation feedback, without changing accepted content.
- Retain the palette. Strengthen meaningful field/filter/menu/provider boundaries
  with #81768f. Keep pale decorative separators. Make placeholders explicit muted
  text, increase callout-number opacity, use ink for small Venn indexes and light
  focus outlines on dark sections. Deepen the existing hero backing where text
  overlays artwork. Errors use text plus a warm red boundary/background; they do
  not rely on colour alone. Contact underline/focus uses ink on eucalyptus.
- Image/heading audit: the portrait's “Michelle Ching” and employer logo names
  already describe their purpose. Decorative abstract art, duplicate hidden logos,
  button thumbnails with titled accessible actions and SVG ornaments appropriately
  retain empty alt/aria-hidden. No uncertain photographic details were invented.
  One h1 per page and ordered section/story/media headings remain in place.
- Preserve default-visible entrances and reduced-motion handling from 0118.
  No runtime audit code, dependency, content asset or publication was retained.

Alternatives: rely solely on native dialog boundary behavior (failed the live
preview check), add a focus-management package (unnecessary for seven known
controls), or duplicate validation rules in client/server (risk of inconsistent
error instructions). Prefer the existing native structures with small targeted
enhancements. Changes to visible copy are limited to accessible instructions,
labels and validation feedback.

## Verification and actual outcomes

- Final npm run lint and npm run typecheck exited 0 after removing audit code.
- node --test scripts/test-publishing-validation.mjs scripts/test-section-motion.mjs
  scripts/test-navigation.mjs scripts/test-challenger-films.mjs: 23 passed. Five new
  validation tests cover required fields, boundaries/overflow, trimming/optional
  notes, Paper-only PDF requirement, case-insensitive PDF name and size boundary.
  Existing MODULE_TYPELESS_PACKAGE_JSON notices remain; no package change.
- npm run test:publishing passed validation/origin/all pillars and formats,
  optional experience/PDF, persistence and serving. Its fixtures were removed and
  original records preserved. It ran after the API/helper changes.
- Ran installed axe-core 4.14.0 in the real browser using a temporary source-backed
  development component. Tags: wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa and
  best-practice. Initial findings included insufficient callout-number contrast
  and visible-label/accessibility-name mismatches. Fixed these and rescanned.
- Saved final scans of desktop home, populated library, open mobile menu, expanded
  first story, contact dialog and invalid studio form: each reports zero automatic
  violations. Automatic contrast remains incomplete over image/gradient artwork,
  a dialog-overlap detection and a decorative upload arrow. These are not automatic
  passes or evidence of full WCAG compliance. The temporary component/import/mount
  were removed before final lint/typecheck and do not ship.
- Manual keyboard: Enter on both skip links focuses MAIN#main. Mobile Enter opens
  the menu; Tab reaches Expertise; Escape returns to Menu; next Tab skips the
  closed/inert panel. Leadership link closes menu and focuses SECTION#experience.
  Focus indicators were visible and header-aware scroll margins retained.
- Contact: initial focus is Close. Reverse Tab wraps to Copy email; forward Tab
  wraps back to Close. Intermediate Tab reaches Outlook. Escape closes and restores
  the original conversation action. Copy email reports “Email address copied.”
  Retested focus cycling/return after removing the temporary audit component.
- Story summary Enter opens details; keyboard Play film mounts/focuses an iframe
  with the actual film title. External player internals are outside this audit.
- Studio: empty submit focuses the error summary with title/introduction errors;
  both inputs expose their specific help/error IDs. An error link focuses Title
  with visible focus. Paper without a PDF reports a specific PDF error. A valid
  temporary Idea submission displayed/focused the live success status. Keyboard
  filters announced one result and then no matches while retaining button focus.
  Removed exactly that temporary record after verifying its resolved path and
  unique title/id; confirmed its absence and restoration of the empty writing view.
- At 320/375/390/430/768/1024/1440px, home and studio errors have equal document
  client/scroll widths. Home phone body copy is 17px; studio fields are 16px. Error
  summaries/form contents fit their containers. Phone header is 68px, larger header
  86px. At 320px the dialog fits horizontally (288px border box) and remains vertically
  scrollable. No new horizontal overflow. Screenshot review retained the desktop
  hero's branding/layout and the mobile dialog's readable labels/focus treatment.
- Contrast calculations using sRGB relative luminance: muted/mist 5.20:1;
  iris/mist 4.68:1; control boundary/surface 3.87:1 and boundary/mist 3.41:1;
  error text/background 6.54:1; field error/surface 7.92:1. Hero mist text against
  even a white image behind the minimum 80% aubergine backing is 6.89:1; its large
  eucalyptus headline is 3.53:1. Ink on strategy highlight is 7.67:1. Eucalyptus
  over the subtle dark-section grid is 6.17:1. Venn fill-background sampling across
  actual desktop text rectangles is at least 5.00:1 (premultiplied sRGB gradients,
  1 SVG-unit steps, excluding strokes/antialiasing). These are targeted checks,
  not a claim about every image pixel or future content.
- Actual browser zoom shortcut did not change innerWidth/devicePixelRatio in the
  IAB. Report actual zoom as unverified; 320 CSS-pixel reflow was tested. No physical
  iOS/Android, text-only zoom, Safari/Firefox or NVDA/VoiceOver testing available.
  The accessibility tree/live-region attributes were inspected; that is not actual
  screen-reader announcement testing. YouTube captions/transcripts/audio description
  and published PDF internals were not evaluated. Live reduced-motion emulation is
  unavailable; preserve reviewed CSS and passing startup/live-change helper tests
  from 0118. Do not represent these limits as compliance passes.
- npm run build again failed before compilation on existing EPERM rmdir of
  .next/static/FW8In346nDPl8ZWv96VE-. Did not delete generated preview folders or
  alter infrastructure. Production build remains unverified.
- git diff --check passed, with existing Windows line-ending notices. Reset the
  viewport and closed the QA tab. No commit, push or deployment.

## Evidence and handoff

Evidence directory:
C:/Users/mcchi/.codex/visualizations/2026/10/13/01a135cb-99ad-7e32-ae40-c6d880496eb0/

- accessibility-contact-mobile.png
- accessibility-final-home-desktop.json, accessibility-final-library.json
- accessibility-final-mobile-menu.json, accessibility-final-expanded-story.json
- accessibility-final-dialog.json, accessibility-final-studio-errors.json
- accessibility-responsive-home.json, accessibility-responsive-studio-errors.json
- accessibility-contrast-checks.json, accessibility-venn-contrast.json

Primary files: src/app/layout.tsx, page.tsx, studio/page.tsx, editorial.css,
api/povs/route.ts; components/site-navigation.tsx, site-shell.tsx, contact-link.tsx,
challenger-films.tsx, pov-library.tsx, publish-form.tsx; lib/publishing-validation.ts;
scripts/test-publishing-validation.mjs. Prior mobile/motion changes remain alongside
this work; consult 0117/0118 before modifying them.

Future guidance: keep visible action words in accessible names, closed-panel inert
independent of animation, field errors aligned with server policy, and dialog
Tab boundaries/focus return intact. Recheck assistive technology, real zoom and
third-party media separately before making a broader accessibility claim.
