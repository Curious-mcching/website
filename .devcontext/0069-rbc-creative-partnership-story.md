# ADR and work record 0069: RBC creative partnership story

- Date: 2026-10-15
- Status at creation: Accepted and implemented; checks passed; live playback QA pending

## Request and evidence

Michelle requested featuring her RBC video 5uV9dMYaNcc in Enterprise Reinvention,
and revising Challenging the playbook from within to explain her creative and
partnership example. After the initial message omitted the strategy write-up,
she supplied the AdStasher article linked below.

The article describes Crochet, developed by Battery, and the strategic shift
toward everyday money decisions, hobbies and creative pursuits. Additional
campaign coverage on LBB describes RBC's Apple partnership and the iPad offer's
connection to creativity. Official YouTube oEmbed metadata returned the title
RBC "Crochet" + Apple, author Michelle Ching and its thumbnail.

Use these published campaign details with Michelle's own account of her role
and her previously supplied cross-functional leadership narrative. Do not invent
performance metrics, internal objections, negotiation ownership or sole authorship.
The film was not watched during this task; oEmbed does not verify playback or
embedding permission. The article's current banking offer is context for past work,
not a live offer promoted by this portfolio.

## Decision and changes

- Retain the story title, opening lead and first two contextual paragraphs. Replace
  the generic middle with the concrete campaign: customer insight, creative
  budgeting, the Apple partnership and connecting brand with a commercial objective.
  Update the lesson and themes to reflect fresh perspectives and partnerships.
- Feature the single full-width film before What it taught me, keeping the final
  lesson and theme paragraphs in place for existing nth-last-child CSS styling.
- Extend the existing ChallengerFilms component with explicit serializable props
  for its section ID, eyebrow, heading, introduction and film data. Reuse its poster,
  privacy-enhanced player, external fallback and close-listener behavior from
  [0068](0068-challenger-campaign-film-showcase.md). Each instance owns its selection
  and subscribes to its enclosing native disclosure. Unique heading IDs preserve
  each showcase's accessible label.
- Keep the three original HSBC films separate and in their original order. The
  first showcase's rendered wording and film presentation stay the same.
- No CSS, image configuration, dependency, accordion or navigation change for
  this task. Preserve the pending S-curve motion from
  [0067](0067-leadership-story-s-curve-motion.md).

## Alternatives and consequences

Duplicating a new player would repeat playback and cleanup logic. A single
configurable component supports both concrete showcases with the same behavior.
Adding this film to the first showcase would mix two distinct leadership stories.
Keeping the original generic narrative alone would miss Michelle's request for
a specific example. The updated first-person interpretation is portfolio copy
based on her account; published campaign coverage establishes the creative
strategy, not every detail of her internal decision-making.

## Verification and actual outcomes

- node --test scripts/test-challenger-films.mjs: six tests passed, including the
  separate RBC film ID, all four IDs clearing on story close and independent
  selection cleanup between the two story instances. These use the real helper
  and native EventTarget, not rendered React or live iframe playback.
- Node emitted the existing MODULE_TYPELESS_PACKAGE_JSON warning while detecting
  ESM syntax. Tests passed; no package-wide module change added.
- npm run lint, npm run typecheck and npm run build all passed using installed
  Windows npm with access to the project's OneDrive paths.
- Source comparison with HEAD confirmed four named disclosures and unchanged
  stories 01, 03 and 04, excluding the already-pending film insertion in story 01.
  Showcases appear only in stories 01 and 02.
- Inspected generated homepage HTML: four play buttons, unique showcase heading
  IDs, the supplied RBC YouTube fallback link and no initial iframe.
- git diff --check passed with existing Windows line-ending notices.
- No live browser layout, keyboard, embed playback or animation verification
  following the prior browser URL-policy block. Built HTML is not live visual QA.
- No commit, push or deployment. Prior uncommitted work remains included.

## Files and future guidance

- [Enterprise narrative and showcase placement](../src/app/page.tsx)
- [Shared film component](../src/components/challenger-films.tsx)
- [Separate campaign data and cleanup helper](../src/lib/challenger-films.ts)
- [Film tests](../scripts/test-challenger-films.mjs)
- [Original supplied stories](0033-leadership-in-action-stories.md)
- [Native disclosures](0036-leadership-story-accordion.md)

This request authorizes replacing the Enterprise Reinvention copy previously
preserved verbatim under record 0033. Do not restore that generic middle when
adjusting future layouts. Preserve Battery's creative attribution and distinguish
Michelle's leadership from sole creative authorship. When live QA is available,
check that switching stories stops playback, reopening restores the poster and
the longer narrative fits mobile without clipping.

Sources:

- https://www.adstasher.com/2026/06/rbc-brings-creative-budgeting-to-life.html
- https://lbbonline.com/news/RBC-Uses-Crochet-Filled-Fantasy-World-to-Make-Budgeting-More-Inspiring
- https://www.youtube.com/watch?v=5uV9dMYaNcc
- Local Next Server and Client Components guide read before editing.
