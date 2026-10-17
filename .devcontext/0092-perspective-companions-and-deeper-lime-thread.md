# Work record 0092: Perspective companions and deeper lime thread

- Date: 2026-10-17
- Status at creation: Local preview implemented and visually verified

## Requests and resulting design

Following [0087](0087-distinct-shadow-shapes-and-selected-soft-object.md), remove
the live Michelle Ching caption below the approved soft-object artwork. A brief
headline-to-artwork connector was requested, then explicitly removed. Preserve
that removal; there is no connector to the headline in the final design.

The user clarified that the first two companion illustrations should echo the
flat colored shadow shapes in the main image. They now use native SVG oval,
rounded quadrilateral and rounded triangle silhouettes, with a connecting curve.
The third companion retains its globe and uses the same thread styling.
Superseded bitmap companions are retained under design-previews, outside public.

An electric-blue thread trial was reverted at the user's request. The main image
again uses perspective-one-object-many-views-soft.png with its original neon
green crochet thread. Latest request offered pink or a darker green to improve
visibility over the Across Industries background. Chose deeper lime #6f8f0b for
all three small SVG threads, retaining their 2.6px width and subtle shadow.
This keeps the green visual relationship while strengthening the small curves.
The large bitmap remains the approved original neon-green version.

Only the shared CSS stroke color changed for this latest request. Preserve the
industry copy and band changes documented in 0088–0091.

## Verification and limits

- Read relevant development records and installed Next.js CSS documentation.
- Live localhost preview reports rgb(111, 143, 11) strokes and 2.6px width on all
  three companion threads. Desktop screenshot confirms the deeper lime is visible
  across the mist background and colored shapes, with surrounding page context.
- Screenshot: deeper-lime-perspective-threads.jpg in this chat's visualization
  directory. Temporary QA tab closed; user's existing tab preserved.
- git diff --check passed with existing Windows line-ending notices.
- No new tests or full build for this single decorative CSS color change.
- Earlier companion work passed lint/typecheck; a subsequent build encountered
  an EPERM generated-output issue. A later combined verification attempt was not
  executed because automatic approval review was unavailable due an account usage
  limit. Do not treat those attempts as successful final build verification.
- No commit, push or deployment. Earlier artwork variants remain available for
  the user's requested reversibility.
