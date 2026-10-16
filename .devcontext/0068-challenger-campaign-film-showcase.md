# ADR and work record 0068: Challenger campaign film showcase

- Date: 2026-10-15
- Status at creation: Accepted and implemented; checks passed; live playback QA pending

## Context and decision

Michelle supplied three YouTube films she led to demonstrate challenger thinking
and creative work that punches above its weight. Feature them inside the first
Leadership in Action story, after its strategy narrative and before What it
taught me. Preserve all four stories and their supplied language.

Use a small ChallengerFilms Client Component within the existing Server
Component page. Show a large lead film followed by two supporting films, stacking
all three on mobile. Each begins as an optimized thumbnail and accessible play
button. Create an iframe only after the visitor selects a film. A single selected
video ID means selecting another unmounts the previous player. Listen to the
enclosing native details toggle event and clear selection on close, including
when opening another story closes the first through the native group.

Use YouTube's privacy-enhanced embed host with standard controls, inline playback
and an origin-preserving referrer policy. Playback is requested after a click;
there is no initial video autoplay. Keep a direct Watch on YouTube link under
every film as a fallback. Privacy-enhanced playback does not mean no third-party
requests: thumbnail images are fetched from YouTube's image service.

Allow only HTTPS i.ytimg.com /vi/*/hqdefault.jpg images with no query parameters
in Next's image remotePatterns. No new package, API key, runtime metadata service,
video hosting service or player library is needed.

## Metadata and presentation

Official YouTube oEmbed responses confirmed all three supplied IDs, titles,
thumbnails and Michelle Ching as author. Shorten display titles without inventing
campaign claims:

- E--NWILp_nw: Don't let your banking become a tragedy / HSBC Canada.
- npL8TevDrv4: The World's Largest Welcome Mat / #HSBCWelcome, behind the scenes.
- LX-UL1Bl6QU: Meet 1on26 / 2019.

The films were not watched during this task; metadata availability does not
establish embed permission, actual playback or campaign results. Attribution of
leadership comes from Michelle's request. The presentation uses the existing
mist, aubergine and eucalyptus palette, rounded frames and restrained typography.

## Alternatives and consequences

- Loading three iframes immediately would add player work before interaction and
  allow competing audio. Click-to-play posters and one selected ID keep this
  smaller and more deliberate.
- A modal or carousel adds interaction and navigation complexity without need.
  Inline films preserve the story's reading order and expose all three choices.
- Image links alone would send visitors away to watch. Inline playback supports
  exploration while external links retain a fallback for unavailable embeds.
- Keep the native accordion rather than introducing a separate disclosure state.
  The toggle listener cleans up on unmount. The 200px minimum player height follows
  YouTube's viewport guidance, but rendered mobile fit remains unverified.
- Retain the lesson and theme paragraphs as the last two direct paragraph
  children: existing CSS uses nth-last-child(2) to style the lesson.

## Verification and actual outcomes

- node --test scripts/test-challenger-films.mjs: four tests passed. They check
  exact supplied IDs/order, no reset on open, reset on close for all IDs and
  listener cleanup. These exercise the actual helper with native EventTarget;
  they do not simulate React, iframe playback or the browser's details group.
- Node emitted MODULE_TYPELESS_PACKAGE_JSON when detecting ESM syntax, consistent
  with earlier helper tests. No package-wide module change made for this warning.
- npm run lint, npm run typecheck and npm run build all passed.
- Source comparison with HEAD confirmed all 73 existing heading and paragraph
  blocks unchanged and exactly one showcase inside story 01, before story 02.
- Final generated homepage HTML contains three play buttons and no initial video
  iframe. Final CSS includes the corrected label-space and closing animation rules
  documented in [0067](0067-leadership-story-s-curve-motion.md).
- git diff --check passed with Windows line-ending notices.
- No live rendered layout, playback, keyboard-focus transfer or animated open/close
  verification following the prior browser URL-policy block. No screen-reader,
  mobile, zoom or reduced-motion conformance claim.
- Publishing and navigation tests were not repeated: their implementation is
  unchanged. No commit, push or deployment.

## Files, related records and future guidance

- [Film component](../src/components/challenger-films.tsx)
- [Film data and close-listener helper](../src/lib/challenger-films.ts)
- [Behavior tests](../scripts/test-challenger-films.mjs)
- [Homepage placement](../src/app/page.tsx)
- [Scoped styling and animation](../src/app/editorial.css)
- [Remote thumbnail configuration](../next.config.ts)
- [Native accordion architecture](0036-leadership-story-accordion.md)
- [Animation work](0067-leadership-story-s-curve-motion.md)

The 0036 link in immutable record 0067 has an incorrect filename; the correct
target is 0036-leadership-story-accordion.md, linked above. No earlier record was
modified. When live browser QA is available, verify play/switch/close stops audio,
reopen restores posters, all external fallbacks work, focus remains understandable
after play, responsive fit and both motion preferences.

Primary references consulted:

- https://developers.google.com/youtube/player_parameters
- https://support.google.com/youtube/answer/171780?hl=en
- Official https://www.youtube.com/oembed responses for the supplied watch URLs.
- Local Next guides for CSS, Server/Client Components and next/image remotePatterns.
