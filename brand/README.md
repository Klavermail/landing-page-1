# Klavermail — brand & design kit

Everything needed to design something new that looks like it belongs.
Values are taken from the live site, not invented — the source of truth is
`app/globals.css` and `content/site.ts`.

---

## Logo

The mark is a four-leaf clover pinwheel — *klaver* is Dutch for clover.

| File | Use |
|---|---|
| `logo/klavermail-logo-lime-on-black.svg` | Primary. Lime mark, white wordmark, dark background |
| `logo/klavermail-logo-all-lime.svg` | Lime mark and wordmark, for dark backgrounds where more colour is wanted |
| `logo/klavermail-logo-white.svg` | One-colour white, for photos and busy backgrounds |
| `logo/klavermail-logo-black.svg` | One-colour black, for light backgrounds and print |
| `logo/klavermail-mark-*.svg` | Mark only — avatars, favicons, app icons |
| `logo/*@4x.png` | Raster exports at 4x, for anywhere SVG isn't accepted |

**Rules**

- Clear space on every side: the height of the mark.
- Minimum width: 110px for the lockup, 16px for the mark alone.
- The lockup is set in **Inter Tight Semibold at −0.035em**. Don't retype it in
  another face — use the files.
- Never restretch, rotate, outline, add effects to, or recolour the mark outside
  the four supplied colourways.
- On a photo, use the solid white or solid black version. Never the two-tone one.

---

## Colour

Two brand colours. Everything else is a neutral.

| Token | Value | Use |
|---|---|---|
| **Ink** | `#000000` | The background. Not dark grey — true black |
| **Lime** | `#C6FF00` | The accent. Buttons, key numbers, one or two words in a headline |
| Lime dim | `#A8D900` | Hover and pressed states |
| Lime deep | `#6F8F00` | Rare — borders and dividers that need to read as lime without shouting |
| Panel | `#0A0B09` | Raised surfaces |
| Panel 2 | `#101210` | Cards on top of panels |
| Line | `rgba(255,255,255,0.09)` | Standard border |
| Line strong | `rgba(255,255,255,0.16)` | Emphasised border, inputs |
| Mute | `rgba(255,255,255,0.56)` | Body copy |
| Mute 2 | `rgba(255,255,255,0.38)` | Captions and labels only |

**The rule that matters: lime is an accent, never a field.** It earns attention
by being scarce. If more than about 5% of a screen is lime, the design has lost
its hierarchy. Large lime areas are for one thing only — a primary button.

**Measured contrast** (WCAG 2.1, against black):

| Pairing | Ratio | Verdict |
|---|---|---|
| Lime on black | 17.71:1 | Passes AAA |
| Black on lime (buttons) | 17.71:1 | Passes AAA |
| White on black | 21.00:1 | Passes AAA |
| Mute (56%) on black | 6.49:1 | Passes AA for body |
| **Mute 2 (38%) on black** | **3.39:1** | **Large text only — fails AA for body copy** |

Mute 2 is deliberately below the body threshold. Use it for mono labels and
captions at 10–12px uppercase, never for a sentence someone has to read.

---

## Typography

Three faces, each with one job.

| Role | Face | Where |
|---|---|---|
| Display | **Inter Tight**, 600, letter-spacing −0.03em, line-height 0.98 | Every headline |
| Body | **Inter**, 400 | Paragraphs, lists, UI |
| Label | **JetBrains Mono**, 400/500, uppercase, letter-spacing 0.18em, 11px | Eyebrows, metadata, small caps |

All three are free on Google Fonts. The variable Inter Tight file used by the
site is included as `logo/InterTight-variable.woff2`.

**Scale** — fluid, so it holds from phone to desktop:

```
display   clamp(2.5rem,  7.2vw, 5.75rem)
h2        clamp(2rem,    4.6vw, 3.5rem)
h3        clamp(1.375rem, 2.4vw, 1.875rem)
lead      clamp(1.0625rem, 1.5vw, 1.3125rem)   line-height 1.55
body      15px – 15.5px                        line-height 1.7
label     11px uppercase                       letter-spacing 0.18em
```

Headlines are tight and large. Body is generous and calm. The mono label is the
only thing that's ever letter-spaced wide. That contrast *is* the typography.

---

## Surfaces, depth and motion

- **Radius** — 18px cards, 12–14px inner elements, 9999px buttons.
- **Depth** comes from a 1px border and a soft gradient, never a hard drop shadow.
  Glow is reserved for lime elements: `0 10px 34px -8px rgba(198,255,0,0.5)`.
- **Grain and grid** — a faint noise overlay and a 72px grid keep large black
  areas from reading as flat.
- **Bloom** — a blurred lime radial behind hero and CTA sections. Opacity 0.1–0.3.
  Never more than one per viewport.
- **Motion** — enter with `cubic-bezier(0.16, 1, 0.3, 1)` over 0.85s. Continuous
  motion (marquees, scroll-throughs) is always **linear**; an eased curve barely
  moves for its first second and reads as broken.
- **Everything respects `prefers-reduced-motion`.** Non-negotiable.

---

## Imagery

**Email design exports** — the spec, learned the hard way:

- Export at **≥600px wide with no height cap.** A height cap is what silently
  destroys these: cap a 600×4000 email at 2000px tall and it becomes 300px wide.
- 600px wide is pixel-sharp up to a 300px-wide card on a retina screen. For
  anything larger, export at 2–3× device pixel ratio.
- Chrome → device toolbar → width 600, DPR 3 → *capture full size screenshot*.
- **Don't send them through a chat attachment** — most pipelines resize. Upload
  the files directly.
- Convert to **lossless WebP**, never lossy. Identical pixels, ~37% smaller.
  `node scripts/prepare-emails.mjs` does this and verifies it pixel by pixel.

**Dashboard screenshots** — landscape, ~1280×800, client names cropped out.

**Photography** — the founder portrait works because its background sits close to
the brand lime. Shot on anything else, it would need to be cut out.

---

## Voice

The page sells by being specific and slightly blunt. Some rules that fall out of it:

- **A precise number beats a big one.** "$845K" reads audited. "$10M+" reads like
  everyone else.
- **Say who it isn't for.** The fit-check section repels bad leads and makes good
  ones lean in.
- **Never claim what can't be defended on a call.** Every figure on the page has
  to survive a screen-share of the real account.
- Plain words. Short sentences. No "leverage", "unlock", "supercharge".
- Curly apostrophes and quotes throughout — `'` and `"`, never `'` and `"`.

---

## Files

```
brand/
  README.md            this document
  tokens.css           the colour and type tokens, ready to paste
  tokens.json          same values for design tools
  logo/                svg + 4x png in every colourway, plus the Inter Tight file
```
