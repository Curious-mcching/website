# ADR 0029: Preserve faceted hero with gentler edges

- Date: 2026-10-13
- Status at creation: Accepted and implemented

## Context and final decision

Michelle liked the grey hues of [0028](0028-sharper-sci-fi-hero-artwork.md)
but wanted its angles to feel less sharp and more inviting. A rounded-frame
alternative was generated and briefly installed. She then supplied the previous
image and clarified that she preferred its original faceted composition.

Use built-in image_gen editing on that exact original image. Preserve the
arrangement, grey surfaces, nested iris geometry, fine eucalyptus lines, lime
nodes, aubergine background, and quiet left side. Soften projecting tips and
hard corners with modest rounding and bevels. Rounded portals changed more than
she wanted; a targeted edit preserves the preferred visual language.

Save [softened-facets-hero.png](../public/images/softened-facets-hero.png)
(2,040,152 bytes) and update the homepage's single image reference. Retain existing
next/image fill, sizes, preload, decorative alt, overlays, responsive crop,
animation, palette, typography, content, and navigation.

Remove unused angular-perspective-hero.png and open-perspective-hero.png project
copies. Their original outputs remain in Codex's generated_images directory.
This supersedes only the sharp hero asset choice in record 0028. No new dependency
or runtime architecture change; no existing development record was rewritten.

## Verification and limitations

- Final npm run lint, npm run typecheck, npm run build: passed.
- git diff --check: passed; existing line-ending notices only.
- Homepage HTTP 200; markup references softened-facets-hero.png.
- Image HTTP 200; 2,040,152 bytes.
- Checks used installed Windows npm outside the sandbox. Initial sandbox
  localhost socket access failed; the authorized read-only check succeeded
  outside the sandbox.
- Visually inspected the original and edited artwork directly.
- Live browser verification did not complete: operations timed out, a helper
  exited, and the later tab binding was refused under browser URL policy.
  Stopped browser actions; no browser screenshot or responsive visual pass is
  claimed. The already-started localhost check completed independently.
  No browser-policy workaround was attempted.
- No behavior tests added for this reversible image-reference change.
- No commit, push, or deployment.

## Image tool and edit prompt

Built-in image_gen edit mode; transparent_background false. Viewed the original
before supplying it through referenced_image_paths:
C:/Users/mcchi/.codex/generated_images/01a135cb-99ad-7e32-ae40-c6d880496eb0/exec-a3941be1-4828-405a-92cb-8e9cabeed8ba.png

Final original output:
C:/Users/mcchi/.codex/generated_images/01a135cb-99ad-7e32-ae40-c6d880496eb0/exec-ac1cad46-8c02-43ca-9588-58fd91b9dfb4.png

Use case: precise-object-edit. Edit the supplied image with a restrained, local change. The user prefers this original faceted sci-fi composition and its grey hues, and wants only a less sharp, less knife-like feeling. Preserve the overall right-hand faceted polyhedral structure, nested translucent iris geometry, delicate eucalyptus wireframe lines, tiny lime nodes, brushed grey surface texture, aubergine background, original lighting, perspective, scale, crop, and quiet left-hand space. Keep the same visual idea and arrangement. Change the projecting acute tips of the broad foreground triangular plates into modestly clipped polygonal tips with smoothly bevelled corners. Shorten the longest spear-like projections a little and soften the razor-thin edges into substantial gently rounded bevels, like carefully finished sculptural grey surfaces. Maintain broad planar facets and the geometric sci-fi character; do not turn the sculpture into rounded rectangles, portal frames, loops, spheres, petals, flowers, or a different object. The effect should be a calmer and more welcoming version of the same artwork, not a redesign. Keep the dominant grey hue and subtle original colours. No text, logos, UI, watermarks or new objects. Preserve the landscape aspect ratio.

Rejected rounded-frame alternative: exec-f4644de1-ea3e-49ca-82ba-09a42bd03f27.png
in the same original-output directory; it is not referenced by the website.

## References and lesson

- [Homepage](../src/app/page.tsx)
- [Final image](../public/images/softened-facets-hero.png)
- [Prior composition](0028-sharper-sci-fi-hero-artwork.md)

When feedback asks to soften a preferred image, edit that image and preserve
its composition. Introducing a new shape language can lose what the user likes.

