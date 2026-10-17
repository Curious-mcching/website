# Work record 0093: Justified industry copy and accurate categories

- Date: 2026-10-17
- Status at creation: Implemented; focused lint and production build passed

## Requests and changes

Michelle clarified that box line format meant even left and right paragraph
edges. Add a class only to the Across Industries perspective paragraph, with
text-align: justify, normal left alignment on its final line and automatic
hyphenation. The document's existing lang=en enables English hyphenation where
supported. Industry names retain their flowing, left-aligned list treatment.
This resolves the pending alignment question in
[0091](0091-industry-perspective-copy-and-ribbon.md).

Michelle also requested Consumer Packaged Goods and Non-Profit capitalization,
confirmation of OLG's industry and classification of Canada Post and Purolator.
Use these eight labels: Financial services, Automotive, Technology, Consumer
Packaged Goods, Telecommunications, Postal & Logistics, Lottery & Gaming,
Non-Profit.

Official OLG information confirms lottery games and gaming operations, supporting
the more precise Lottery & Gaming label. Canada Post's official company page
describes letter/package delivery; Purolator describes integrated freight,
package and logistics services. Postal & Logistics is the portfolio's broad
shared category, not a claim of a formal industry classification code.

## Verification and actual outcomes

- Read record 0091 and installed Next CSS guidance before changes.
- npm run lint -- src/app/page.tsx passed.
- npm run build passed, including TypeScript and static page generation.
- Generated HTML contains all eight labels, correctly escaped ampersands and
  the scoped paragraph class. Compiled CSS contains justification, last-line
  alignment and hyphenation rules. git diff --check passed with existing
  Windows line-ending notices.
- No new tests for static labels and styling. No separate typecheck command,
  live browser, mobile fit or visual alignment review for this update.
- Other pending workspace work, including concurrent perspective artwork changes,
  was preserved. Verification describes the source when the checks ran.
- No commit, push or deployment.

## Files and sources

- [Paragraph and industry list](../src/app/page.tsx)
- [Scoped alignment](../src/app/editorial.css)
- https://about.olg.ca/
- https://www.canadapost-postescanada.ca/cpc/en/our-company/about-us.page
- https://www.purolator.com/en/about-purolator

Do not reintroduce the ambiguous Gaming-only label or shorten Consumer Packaged
Goods without a new request. Review word spacing and hyphenation live when
available; CSS verification alone does not establish readable justification.
