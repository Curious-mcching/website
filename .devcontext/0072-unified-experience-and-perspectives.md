# Work record 0072: Unified experience and perspectives

- Date: 2026-10-15
- Status at creation: Implemented and checks passed; live visual QA pending

## Requests and context

Michelle found the agency-focused block in
[0071](0071-cross-category-brand-experience.md) incomplete: her perspective also
comes from enterprise leadership at HSBC and RBC. She approved unifying employer
and agency-client experience within The Throughline, explicitly retaining the
rotating RBC, HSBC, Publicis, JWT and FCB logos.

During implementation she clarified that the site also undersold her industry
breadth, marketing discipline depth and local/global perspective. Her supplied
disciplines include brand, integrated multi-channel marketing, CRM/NBA/customer
lifecycle and media. She described working with London, Asia, Europe and the US
through HSBC. Earlier messages also establish logistics and financial services.

## Changes and rationale

Replace the standalone employer strip beneath the hero and the agency-only
introduction with one experience overview inside The Throughline. Retain the
existing #agency-experience URL target for open tabs and links. Keep the tenure
line and Many perspectives. One throughline. heading, with broader framing that
connects customer insight, creativity and commercial priorities.

Present four visible dimensions:

1. Agency + enterprise: two clearly labelled groups for employers and agency
   clients. Move the existing LogoCarousel component here without modifying it;
   preserve all five assets, sizes, duplicated hidden set, 32-second loop and
   reduced-motion fallback. Keep the eight agency-client names as static text.
2. Across industries: financial services, automotive, technology, consumer packaged
   goods, telecommunications, logistics, gaming and non-profit.
3. Across marketing disciplines: brand strategy, integrated multi-channel
   marketing, CRM, next-best action (NBA), customer lifecycle and media.
4. Local + global perspectives: Canada-grounded experience shaped by collaboration
   with HSBC teams in London, Asia, Europe and the United States. This describes
   collaboration, not employment or residence in every geography.

Keep the main overview within a readable width, the employer/client evidence in
two columns on wide screens, and the three further dimensions in an open
three-column row with a fine divider. The evidence groups stack below 1050px;
the dimensions stack and the client names become two columns below 760px.
Explicit min-width: 0 and existing logo-window clipping retain the ticker's
contained layout. No fixed card heights, additional motion or dependencies.

Remove the now-unused experience-strip rules from both stylesheets, including
the mobile rule. Retain all logo-related global rules. This supersedes the
separate-strip and agency-only layout in records 0041 and 0071; earlier records
remain immutable. No new runtime architecture or client component.

## Verification and actual outcomes

- Read local Next CSS guidance and relevant records before implementation.
- Final npm run lint, npm run typecheck and npm run build all passed.
- An earlier verification chain was interrupted during lint when Michelle added
  the broader experience requirements; it is not counted as passing. The final
  chain above ran on the expanded implementation.
- git diff --exit-code -- src/components/logo-carousel.tsx passed: component
  unchanged. Compared globals.css against HEAD after removing only obsolete
  experience-strip lines; all other global CSS, including ticker and reduced-motion
  rules, matches.
- Source confirms one LogoCarousel instance and no separate employer strip.
- Final generated HTML contains the overview within The Throughline, one carousel
  with two five-logo sets, eight client-list items, all four dimensions and supplied
  geographic context. Four existing film posters remain.
- git diff --check passed with existing Windows line-ending notices.
- No new behavioral tests for static layout and copy; existing interactive
  components are unchanged. No live browser layout, motion, reduced-motion or
  mobile inspection following the earlier browser URL-policy block. Source and
  generated HTML checks do not establish rendered fit or visual balance.
- No commit, push or deployment. Earlier pending campaign and animation work
  from records 0067 through 0069 remains preserved.

## Files and future guidance

- [Unified overview](../src/app/page.tsx)
- [Overview layout and typography](../src/app/editorial.css)
- [Existing logo motion and fallback](../src/app/globals.css)
- [Unchanged rotating logos](../src/components/logo-carousel.tsx)
- [Original carousel behavior](0015-company-logo-carousel.md)
- [Cross-category recommendation](0070-cross-category-experience-recommendation.md)

Keep employers and agency clients labelled distinctly within one cohesive
overview. Future changes should preserve all four experience dimensions and
their connection to her perspective. Do not narrow this introduction to agency
work alone or imply global residence, sole campaign authorship or unprovided
performance results. Review the responsive layout live when available.
