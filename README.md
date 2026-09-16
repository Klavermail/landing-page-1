# Klavermail — landing page

A CRO-focused, single-page site for a done-for-you Klaviyo email marketing agency.
Next.js 16 + Tailwind v4, statically rendered, black `#000000` / lime `#C6FF00`.

---

## ⚠️ Read this before you publish

Every number, testimonial and name on this page right now is **placeholder copy I
wrote to build the layout**. None of it is real. Publishing fabricated reviews or
revenue claims is deceptive advertising and, in most markets, illegal.

Replace all of the following in `content/site.ts` before the site goes live:

| What | Where |
|---|---|
| The 4th aggregate metric (placeholder) | `results.band` |
| All 10 result captions and niches | `results.items` |
| **All 5 reviews** — names, companies, quotes, results | `reviews.items` |
| Founder name, bio and credentials | `founder` |
| The guarantee terms | `guarantee` |
| `Currently taking 2 new clients this month` | `components/FinalCta.tsx` |

The founder name is set to **Ibrahim Dallab**. The bio, credentials and the
`REPLACE WITH PHOTO` portrait in `public/people/founder.svg` are still placeholders.

---

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
```

## Deploy

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new).
Framework preset is detected automatically; no environment variables are needed.
Add your domain under **Settings → Domains**.

---

## Editing the site

**Almost everything lives in one file: [`content/site.ts`](content/site.ts).**
Change the text there and the page updates — you shouldn't need to touch components.

A few conventions:

- Wrap words in `*asterisks*` inside a headline to colour them lime:
  `"We turn your list into *your best channel*"`
- In a process phase, any bullet starting with `Deliverable:` renders full-width
  in lime.
- Set `guarantee.enabled = false` to hide the guarantee section entirely.

### Connecting the calendar

1. Open `content/site.ts`
2. Set `site.calendlyUrl` to your real event link, e.g.
   `"https://calendly.com/klavermail/audit-call"`

That's the only step. The inline embed is themed to the brand automatically, and
every CTA on the page scrolls to it. Until you set it, the booking section shows a
setup note instead of a broken widget.

*(Google Calendar has no embeddable booking widget without OAuth and a backend —
Calendly, Cal.com or SavvyCal are all drop-in replacements here. For Cal.com,
swap the embed script in `components/Booking.tsx`.)*

---

## Swapping in your real images

Drop files into `public/` and update the matching path in `content/site.ts`.
PNG, JPG, WebP and SVG all work — just change the file extension in the path too.

| Folder | What goes here | Count | Recommended size |
|---|---|---|---|
| `public/emails/` | Email design screenshots, **portrait** | 10 | ~600 × 900+, tall crops look best |
| `public/results/` | Klaviyo dashboard screenshots, **landscape** | 10 | ~1280 × 800 |
| `public/people/` | `review-01..05` avatars + `founder` portrait | 6 | avatars square, founder ~720 × 880 |

The current files are generated placeholders — safe to delete once yours are in.

**Before you upload dashboard screenshots:** crop out client names, store URLs and
account identifiers unless you have written permission to show them.

---

## Structure

```
app/
  layout.tsx        fonts, SEO metadata, JSON-LD
  page.tsx          section order
  globals.css       design tokens, component classes, motion
components/         one file per section
content/site.ts     ← all copy and image paths
lib/accent.tsx      *asterisk* → lime highlight
public/             images
```

### Section order, and why

The page answers a buyer's questions in the order they actually ask them:

1. **Hero** — what is this, and what do I get
2. **Results ticker** — what you've actually done (reads from `results.items`)
3. **Problem** — do you understand my situation
4. **What's included** — what am I actually buying
5. **Email carousel** — can you actually design
6. **Results** — does it work (10 dashboards, click to expand)
7. **Reviews** — who says so
8. **Process** — how does this run, and how fast
9. **Fit check** — am I the right client
10. **Founder** — who am I dealing with
11. **Guarantee** — what's my risk
12. **FAQ** — the remaining objections
13. **Final CTA → Booking** — book

Moving a section is a one-line change in `app/page.tsx`.

---

## Notes

- Scroll animation is driven by one `IntersectionObserver` in
  `components/ScrollReveal.tsx`. Any element with `data-reveal` fades in; add
  `style={{ "--reveal-delay": "80ms" }}` to stagger.
- `prefers-reduced-motion` disables the marquees, reveals and timeline animation.
- Custom CSS classes live inside `@layer components` — this matters. Unlayered CSS
  beats every Tailwind utility regardless of specificity, which silently breaks
  things like `hidden sm:inline-flex` on a `.btn`.
- The FAQ ships `FAQPage` structured data, so questions can surface in Google.
