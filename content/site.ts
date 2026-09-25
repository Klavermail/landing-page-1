/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  KLAVERMAIL — SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything you’ll want to change lives in this one file. Edit the text and
 *  image paths here and the whole page updates. No need to touch components.
 *
 *  Image paths point into /public. e.g. "/results/result-01.svg" is the file
 *  at public/results/result-01.svg. Drop a PNG/JPG in and update the path.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Klavermail",
  domain: "klavermail.com",
  email: "hello@klavermail.com",

  // ── YOUR CALENDLY LINK ────────────────────────────────────────────────────
  // Replace with your real scheduling link, e.g.
  //   "https://calendly.com/klavermail/audit-call"
  // Everything else on the page already points at it.
  calendlyUrl: "https://calendly.com/ibrahimmohameddalab/free-audit-klavermail",

  socials: [
    { label: "X / Twitter", href: "https://x.com/klavermail" },
    { label: "LinkedIn", href: "https://linkedin.com/company/klavermail" },
    { label: "Instagram", href: "https://instagram.com/klavermail" },
  ],
};

/* ── NAV ──────────────────────────────────────────────────────────────────── */
export const nav = [
  { label: "Results", href: "#results" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const cta = {
  primary: "Book a free audit call",
  secondary: "See the results",
};

/* ── HERO ─────────────────────────────────────────────────────────────────── */
export const hero = {
  eyebrow: "Done-for-you Klaviyo email marketing",
  // Words wrapped in *asterisks* render in the lime accent colour.
  headline: "We turn your email list into your *highest‑margin revenue channel*",
  sub: "Klavermail builds, writes, designs and manages every flow and campaign inside your Klaviyo account — so email goes from an afterthought to 30%+ of revenue. You approve. We do the rest.",
  bullets: [
    "Flows, campaigns, design & copy — fully managed",
    "Live in 30 days, no lift from your team",
    "You own every asset and the Klaviyo account",
  ],
  socialProof: "Trusted by 20 ecommerce brands",
  stats: [
    { value: "$845K", label: "in email revenue generated" },
    { value: "36%", label: "avg. revenue from email" },
    { value: "20", label: "ecommerce brands" },
  ],
};

/* ── PROBLEM ──────────────────────────────────────────────────────────────── */
export const problem = {
  eyebrow: "The gap",
  headline: "Your list is already worth six figures. It’s just not being worked.",
  sub: "Most 7-figure brands we audit are leaving 20–30% of revenue on the table inside Klaviyo. Not because email doesn’t work — because nobody owns it.",
  pains: [
    {
      title: "Three flows, switched on in 2022",
      body: "A welcome series, an abandoned cart, and a default Klaviyo template nobody has opened since. The other nine flows that actually print money were never built.",
    },
    {
      title: "Campaigns sent when someone remembers",
      body: "No calendar, no segmentation, no testing. One batch-and-blast to the entire list, which quietly torches your deliverability every month.",
    },
    {
      title: "Emails that look nothing like your brand",
      body: "You spent a fortune on your site and your packaging. Then your email shows up as stock template with a grey button and a broken logo.",
    },
    {
      title: "Nobody can tell you what email actually earns",
      body: "Attribution is a mess, flows and campaigns aren’t split out, and “email revenue” is one number in a dashboard that nobody trusts.",
    },
  ],
};

/* ── WHAT’S INCLUDED ──────────────────────────────────────────────────────── */
export const deliverables = {
  eyebrow: "The engagement",
  headline: "Complete done-for-you. Not a strategy deck.",
  sub: "One retainer covers strategy, copy, design, build, sending and reporting. There is nothing left over for you to assign to someone else.",
  items: [
    {
      title: "Full flow architecture",
      body: "Up to 12 revenue flows built end-to-end: welcome, abandoned cart, browse abandon, post-purchase, cross-sell, winback, sunset, back-in-stock, price drop, review request, VIP, birthday.",
    },
    {
      title: "Campaign calendar & sending",
      body: "8–16 campaigns a month, planned around your promos and product drops, segmented and scheduled. We hit send, you don’t.",
    },
    {
      title: "Copywriting",
      body: "Every subject line, preview text, body and CTA written in your brand voice by people who write ecommerce email for a living.",
    },
    {
      title: "Custom email design",
      body: "On-brand, mobile-first templates designed from scratch and built in Klaviyo’s editor — so your team can reuse them forever.",
    },
    {
      title: "Segmentation & list health",
      body: "Engagement tiers, RFM segments, sunset rules and suppression logic that lift open rates and protect the sender reputation you already have.",
    },
    {
      title: "Deliverability & compliance",
      body: "Authentication (SPF, DKIM, DMARC), dedicated sending domain, warm-up plans, plus GDPR/CAN-SPAM-safe capture.",
    },
    {
      title: "List growth",
      body: "On-site signup forms and popups designed and A/B tested to grow the list you’re monetising — not just harvest junk addresses.",
    },
    {
      title: "Reporting you can read",
      body: "A monthly dashboard splitting flow vs campaign revenue, per-email performance, and what we’re changing next month. Plus a call to walk it.",
    },
  ],
};

/* ── EMAIL DESIGN CAROUSEL ────────────────────────────────────────────────── */
// Tall email screenshots. Swap these for real exports — portrait, ~600px wide.
export const emailDesigns = {
  eyebrow: "Selected work",
  headline: "Email your customers actually want to open",
  sub: "Designed from scratch and built natively in Klaviyo. Click any one to see it full size.",
  /**
   * Empty until the re-exported designs land.
   *
   * Drop files into public/emails/ and add an entry each. `w` and `h` must be
   * the image's true pixel size — the carousel uses the real aspect ratio to
   * scroll the design on hover instead of cropping it.
   *
   * Export at 2-3x: Chrome devtools -> device toolbar -> width 600, DPR 3 ->
   * "capture full size screenshot". Aim for >=1200px wide, no height cap.
   *
   * If this list is emptied, the hero strip, the Work section and the Work
   * nav link all remove themselves.
   */
  // `hero: true` marks the six shown in the strip under the hero. Everything
  // here appears in the Work section further down regardless.
  items: [
    { src: "/emails/remobrush-launch.webp", w: 600, h: 4088, brand: "RemoBrush", alt: "RemoBrush — product launch announcement", blur: "data:image/webp;base64,UklGRu4AAABXRUJQVlA4IOIAAACwBgCdASoKAEQAPuVepk2pJSOiMygBIByJYwDKu32t5GHXQCjNXkhaEBGKR5oqbyzJJIHHpl/wk/eRdSDUAAD+7dEbJwAx6FLv4X0Ayb2+POQq6DjCotg+63nzEwm96xCY54M81McpPtdsqRr04OqHLFYJJ9R4EXIzkHIXvW7bBe4bBeYGZzFrYaQhWrzlfE8NJJvcZMWnIVxWIlltwbjeIFJOzuCENjcEw1BViyNqb7uVOQBbqNwsndG49dlNTpr5LmPof8wZdLEwTt9MwJxPs2TCfkGlXD2wK5OCdrHL3AAA" },
    { src: "/emails/yema-built-for-the-deep.webp", w: 800, h: 3566, brand: "YEMA", alt: "YEMA — dive watch collection feature", blur: "data:image/webp;base64,UklGRiABAABXRUJQVlA4WAoAAAAQAAAACQAALAAAQUxQSD4AAAABV6AokqQ2eTnBN/tBAxER3GWOoP/wQjVtW9HKIIYrkUIMIfQ7CiTxAJqObL8R/Y8yxggLSBvI/5hmFr0kB1ZQOCC8AAAAMAUAnQEqCgAtAD7ZXqVNqCWjojVIAQAbCWUAux/AKkAeh/u4rbZlpOquGu1FBoWlCAAA/vSdXRG4G1L1K2bvtGd1Me/TEfi6dVaMzHSH8Sqwh5t2hPo/QgGaGYV7PID4qlQhL2HhNhPinqU8EnH0XZ908ie5ARInkIl5eRO9gIhZR71mIshhIYGfs/amGQJOJOYMK8n3crb30h96J1sQ2DFUGx34R+ZwZbZNETlGQCwcGGVwwAJ2z/8gAAA=", hero: true },
    { src: "/emails/thirty4ers-awra-shorts.webp", w: 600, h: 4194, brand: "Thirty4ers", alt: "Thirty4ers — product launch written as breaking news", blur: "data:image/webp;base64,UklGRlYBAABXRUJQVlA4IEoBAAAQBwCdASoKAEYAPtlYpk2oJSOiMywBABsJZADC/AoZ9Hvae6EHJR+As4sIJyekf+s8cmEEIHz0gmlg7Ov/VaZ9AAD+9cmC/n9JfsA6Kty9fbv+q0qdEqru7SMJUDEf9y+QMfYJIYFCgHu1Yfu9D634EJ9FoCeI1Tw5X0L9Gzh8Ms4tgXQZoDXDGJ0V88q6u1ONgi9LckY6Wkg9sV9h6DyzYYOTj3j65OA+LxbtKwtIfRD4TZvtsRdouRlvyJvImAyX+gpdazX82j/fjRlObzHHl75ZOmXbqTDwrLzpFJxHxRfA/+uPZKbDypoW4TRzhbX6bxnHemKumK/wTTJ3uVy4AqXF+9+moEDWbdOJelTYPvKsVv9smCDzY6XWmUOYH+IHh6qPzfvOW/AfIfjKDFyQn7/kUOT1zm5Z/5JkvLzhXi1GmHHguSFzAAA=", hero: true },
    { src: "/emails/yippy-tropical-mango.webp", w: 600, h: 3012, brand: "Yippy", alt: "Yippy — new flavour launch", blur: "data:image/webp;base64,UklGRrwAAABXRUJQVlA4ILAAAABQBQCdASoKADIAPtVWoU2oJKMiN+gBABqJbAC7MxyEQr/S/4FmM5cERP/VmAOVWhpKB8AA/LTPq/sXlJqL4+PVLJmw4o4mEDxFsJ8e91zv6tvtM/vqXXonaiaiI01Ln11yqavfPce3Lh0Q85SB7R1FobNa8BwvxusPaIxcdjyX6TKmgr3uyD9J0h6J8bgQfgVEn+0M+EbBQKXcgOH7FwasbSRU3NYTMs4hPW7BE3AAAA==", hero: true },
    { src: "/emails/manime-welcome.webp", w: 600, h: 3197, brand: "MANIME", alt: "MANIME — welcome flow for a watch brand", blur: "data:image/webp;base64,UklGRq4AAABXRUJQVlA4IKIAAADQBACdASoKADUAPu1kqU2ppaQiMBgMATAdiWUAygAQ6KcEy35y6CuMsEvgHKA/gAD+hAHbPKGXIqWPhW6ZZDDvgS1eBCnjrZG8BykFl8s8yluEmvoeDrokUgjDtqHJsEsV7xH+Ql+BD78Eoxzjoq+66fru/5/vZb/R/EFlW11R34Qb/yZU0BbD8Ixd4RP01n2mcR2GpbtTTlfYTSbpAe4AAAA=", hero: true },
    { src: "/emails/remobrush-kids-microplastics.webp", w: 600, h: 4567, brand: "RemoBrush", alt: "RemoBrush — problem-led campaign for a kids product", blur: "data:image/webp;base64,UklGRjoBAABXRUJQVlA4IC4BAADwBgCdASoKAEwAPu1gqE2ppaQiMzqoATAdiWQAsPG2MZeS7tGCUHbjHvy1SNPKAj3ncIJsd3nZc0cibT6hTCIAAP49wPO0oLmN19ioNDO4EjJzsrM2HPojx0VVOf7bfTsX1Fx9vWb/dH72yTYKtG5pfXDdDobRnDhrflV/DVZov/hK51Dss2Ix+bdVKdGCGPnRwx6lS9wBn0lZ5xUnwN+ggaZ8SqXrPCNV6hTK+TFvXYSIWGkDdpM//qg4iazHlP7jLhFJ/eiIJTkYD9XhuwQFRFt43ljvBp3LJS/mXMieGHTSRZf4OnRVPhD+nS9lgr1y38KiJkdIS6vmWAVp3dZI2Ntl++/FzBZQyVe/8GaKh24X7NQum1qO+iIz7+VyQUpDu+FBPrPcp4ykaAAAAA==", hero: true },
    { src: "/emails/salaam-cola-yemonade.webp", w: 600, h: 2919, brand: "Salaam Cola", alt: "Salaam Cola — flavour launch campaign", blur: "data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAACQBACdASoKADEAPu1sq1EppaOiqAqpMB2JQBdgAefnh8SOSrD9WVenfQvfXwAAzJWC3G0dq8Pxu0n90ophH/x36VyawTA0Ow4NBm7/CdtkDPz0AMLKmB1WETiOvGSzUpCfKV8F3zK6t1wZUIB0+OTXp3eC+SOSElCQGgqQcBxBYukOmoD9iH52/IyKAA==", hero: true },
    { src: "/emails/thirty4ers-devotion-set.webp", w: 600, h: 4005, brand: "Thirty4ers", alt: "Thirty4ers — bundle promotion campaign", blur: "data:image/webp;base64,UklGRg4BAABXRUJQVlA4IAIBAACwBQCdASoKAEMAPs1SoE2npKMiOYgA8BmJYwC2FCuddOY6fu90mQJ19wKTvQWJVu7wfljXx4AA/un+i7BA8SydIR1zIAeYZSTk7nHIX9FsPv2d1vq6QwN/LSIQYTP6+YAw1RRw4CZXN7WulXNCu/+76QNX0MkWcaZtHGLD/Las2kYm1tb/VdFkJalesS6tkEGZQkdfRuORU6YrQ5rYShie4TrCHpVYWSbICIhMudVy6UkCruFna6Bu7yN/NW/ekIjBldd//zT4tzP9Okx3UyW/luZlohLK7ZBQnA5ixIw6L7+uC/EVnhN8A4Mu9YrgS8qM/remMSl7nV+PAb+heHEAAAA=" },
    { src: "/emails/arvella-welcome.webp", w: 600, h: 4157, brand: "Arvella", alt: "Arvella — welcome flow with discount code", blur: "data:image/webp;base64,UklGRgwBAABXRUJQVlA4IAABAACQBgCdASoKAEUAPt1apU2opSOiOZgIARAbiUAVgGWDDxNDHXf23BfP0CU7cbPSqI6q5sQQr1LtdPZeacQAAP71z5N+NmHhPRdspW0vVUca5+55oj5kBQm/CSOkm3WchPFIep94lOOCGjWd45+OumKhRig+Rhl6EMB/x2QQicZRu9mSzmQhlohcvyG9CAmCLaFOFDJ4Rm4Ek6+zzpJqOqbJ79p6b5rg1Rur29AUmxKKDjFPdLo63p21bDp1ZYdmwwkul+R8G+/84ZSn679nKbwmu7CGOY7kDTYHv+Kvm+vntUJbt0Ga2rCYnSNLe5lLxATJDHeT9gsnQUmjayQWTQAA" },
    { src: "/emails/remobrush-science.webp", w: 600, h: 4582, brand: "RemoBrush", alt: "RemoBrush — science-led education campaign", blur: "data:image/webp;base64,UklGRjABAABXRUJQVlA4ICQBAACQBwCdASoKAEwAPu1oq0+ppiOiLMgBMB2JYwC+e5a6Jn/bbM2apnYx2V729zuV3CIwMKkZGjUYhaO0PQOsPk1aXEGzsqAA/tXduhUlUo1cclrUYOpPGPUGALMI+jUMV/mt2qXz/bK/VW5wO4dWG75CaGjM+cuRQcJDrR0f1kmY3Q4tPfX476jATZbgpgB05aAlYeo2InsXU1Zhg/xn9gt5Zpc2I0JVDqKO1Ka9LeYZTaVMkze/J7dErc6xrBHyB1otddxMn432NCr34et79vCkH9mlNM8BXys0gVFsA5TiENrYMFbZ2oxLcEjpyT6VNp/rR4QPtcC+ZCA1Ie5/2rKD948oIE7WIlkcidFbDp08SjznsaIAqzbyd/cLU8h9eDyFfwAA" },
    { src: "/emails/ffected-winter-jacket.webp", w: 600, h: 2657, brand: "F/FECTED", alt: "F/FECTED — outerwear launch campaign", blur: "data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAABwBACdASoKACwAPt1apE2opSOiNUgBEBuJZwABP7cKy+l++0LclhZJcZC/YAD+/fVXtxI7zDI+o6BMZfmNjyuda8yqoBsrHpdBBvZVjbEC02RboNC1UJU+5AXlMBgQ5Qk7TKtEYgB5dq3sbazLIfzQJOZpS3TAtXLFwxPsWPxQtajFs/8NIw9Ed3gNpQAA" },
    { src: "/emails/yippy-wintergreen.webp", w: 600, h: 2990, brand: "Yippy", alt: "Yippy — ingredient education campaign", blur: "data:image/webp;base64,UklGRuAAAABXRUJQVlA4INQAAACQBQCdASoKADIAPt1YpE2opSOiN/qoARAbiUAXqzuAHkiLvLf2DF+6jt0vUCshTAMZ1sxaAAD+tC+W08lxIe93sWWgEai7ewNkorPY+//j9sbnirfWOxoXJNJ9eNUoMJiUyv48gEYSSx2mImsaABwRz+aNiv/jR4CSoYWV6R4borN1S6S0kr77bxsyBdUEVqcY2vbZWMN3i0gtGt87+u+OYeDLU/LFK9KPWQTLeNxgZgSJ3KEQMZcJ6vC9Mt7nuyJ55IsmSb4JwpSArvwjEh/6yAAAAA==" },
    { src: "/emails/thirty4ers-most-loved.webp", w: 600, h: 4047, brand: "Thirty4ers", alt: "Thirty4ers — monthly bestsellers campaign", blur: "data:image/webp;base64,UklGRjoBAABXRUJQVlA4IC4BAABQBwCdASoKAEMAPu1oqU2ppqQiLNgNUTAdiWUAw+9/H9kQR+teph5kqxrx1PV6svnVIIfYFNI7J3f/G8ymoDMGKzAgAP70Ek0rvFTe8Ww1s3Qkqn+FqQSKC0YiZ1lSE44dgaYK3ZpPdE5Xbg3xPdqlgxawAHMslhM1ULBpODfOFxo+aqK/f3hiCFxGgnJUQjqaLYnzkBWy2wbuLvl+dI3hhSxHzXAdGWvvgJfapuqskqjVcDplx3FhDd8UV3QQ2WXviVkarKeStlK5Gj7RWjd7C05wqZJ2PkbbtChRCe3OIYYNi8c0iQB02H6YHMqb7M3/HjeUXCd92R0GG5180Ums2HD2pFlvwbOt7iqs53FLMOYrGkMG/uCLeb4+qkJfhtT8dTDgs8QrFtfWqRaAAA==" },
    { src: "/emails/sunnamusk-new-chapter.webp", w: 600, h: 3606, brand: "Sunnamusk", alt: "Sunnamusk — fragrance launch campaign", blur: "data:image/webp;base64,UklGRiYBAABXRUJQVlA4IBoBAABQBgCdASoKADwAPu1orU6ppiSiMAgBMB2JZgCdM2S9jPaHof9siqkRGkEdceipquSkcYeeA0wlhh/qAAD+/MmMf5PwePCG8Mnrk42aF7oknmE8ttaJd2loe8aEfwbKhuhIbt2ItEbyIcYlqdSfhafAVBlIQhaR0Do1HXkjd7jszNGm/1Z+CPYoSxMRX3vsjhQJWkNhk/y2s9RigR27jOC+HURQJ94IQWn9b+592K6IFEXHSiToReiYP83yrsgPSdXoh8lhc+28IODOGu4GoXt2s22NUxyXz+c/d6WDjKVlzyfR9od7UK4nHJKB4wzpnDg3v0+OItSUSbsXyG6JtVZ9Krct4cBdmuKxLd9IFnSX8KGSSi6uWwnSAAA=" },
    { src: "/emails/remobrush-waitlist.webp", w: 600, h: 4088, brand: "RemoBrush", alt: "RemoBrush — pre-launch waitlist teaser", blur: "data:image/webp;base64,UklGRuoAAABXRUJQVlA4IN4AAACwBQCdASoKAEQAPtlco02oJaMiOZgIAQAbCWIAv+xTH7PTVOkyvGcI3kPgoKc6AMYFHQQb9WAA/ufXfY03rhoeqQevLjdueRqGVveZJK9DicgqESq+jb68lQJ+/bDCYv8zOvXYrhAqAlWC4DFnksrjIbjf6aF37g7i9NNSXWxXWKYcE0mQDT4Pbzu19X57Nhbs7nEiYNRbRZ68uNK651CWGpFTNCfrg9h3YZGAQlZB4L2xVERGy508OcOyqllVOQBbpuZWI4sGtrIFqNG5Wp730146OLaiYXpkyERAAAA=" },
    { src: "/emails/deenathletic-be-the-reason.webp", w: 600, h: 3290, brand: "Deenathletic", alt: "Deenathletic — collection launch campaign", blur: "data:image/webp;base64,UklGRtIAAABXRUJQVlA4IMYAAABQBQCdASoKADcAPu1mqU2ppiQiMBgMATAdiWUAA+cJDRP4pcF5aokVsyzkDyXoCliLMgAA/UPC8MseoORRRQxZTruHuP0C+V3UUJzd524ZrLv22Kj6GSncf/6a42pzh0EOVAnP4Fw1zumEju7u2nYLm2uMj7XmVLbu1nUF1rW59xZ1aP+WQXwCUnLE+ro5LJv5GSXzUhsaB4glET9EhcesuVq5OQ9m0NASWysAjs/0N5IfitKtK32N+bXwEgdJL1T1DmvIAAA=" },
  ],
};

/* ── RESULTS (Klaviyo dashboards) ─────────────────────────────────────────── */
// 10 dashboard screenshots. Landscape crops look best (~16:10).
export const results = {
  eyebrow: "Receipts",
  headline: "Straight out of the Klaviyo dashboard",
  sub: "No cherry-picked vanity metrics, no “results may vary” asterisk buried at the bottom. These are attributed revenue screenshots from live accounts.",
  band: [
    { value: "$845K", label: "Attributed email revenue generated" },
    { value: "36%", label: "Average share of total revenue from email" },
    { value: "20", label: "Ecommerce brands managed" },
    // TODO: pick a 4th — see the options Claude suggested. Placeholder is a
    // process commitment, not a results claim, so it is safe to ship as-is.
    { value: "30 days", label: "From kickoff to live revenue flows" },
  ],
  items: [
    // ⚠️ PLACEHOLDER RESULTS — invented, not real client outcomes.
    // Six, chosen to spread across metric types (% lift, dollars, share of
    // revenue, rate, multiplier) rather than repeat one shape. The dollar
    // figures total $166K, comfortably under the $845K lifetime number.
    // Replace all six with real Klaviyo screenshots and real numbers.
    { src: "/results/result-01.svg", alt: "Klaviyo dashboard showing attributed revenue growth", metric: "+312%", caption: "flow revenue in 90 days", niche: "Skincare" },
    { src: "/results/result-02.svg", alt: "Klaviyo flow performance dashboard", metric: "+$128K", caption: "from email in 6 months", niche: "Apparel" },
    { src: "/results/result-03.svg", alt: "Klaviyo campaign revenue dashboard", metric: "41%", caption: "of total revenue from email", niche: "Supplements" },
    { src: "/results/result-05.svg", alt: "Klaviyo Black Friday campaign results", metric: "$38K", caption: "in one BFCM weekend", niche: "Accessories" },
    { src: "/results/result-06.svg", alt: "Klaviyo deliverability and open rate dashboard", metric: "28% → 54%", caption: "open rate after list cleanup", niche: "Beauty" },
    { src: "/results/result-08.svg", alt: "Klaviyo year over year revenue comparison", metric: "2.7x", caption: "email revenue year on year", niche: "Pet" },
  ],
};

/* ── REVIEWS ──────────────────────────────────────────────────────────────── */
export const reviews = {
  eyebrow: "What clients say",
  headline: "The part where other people talk instead of us",
  /**
   * Empty on purpose. Video testimonials are being recorded; this section and
   * its nav link hide themselves while the list is empty and come back the
   * moment entries are added.
   */
  items: [] as {
    quote: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    result: string;
    featured?: boolean;
  }[],
};

/* ── PROCESS ──────────────────────────────────────────────────────────────── */
export const process = {
  eyebrow: "How it works",
  headline: "Live in 30 days. Compounding every month after.",
  sub: "No three-month discovery phase. Here is exactly what happens, week by week, from the day you sign.",
  phases: [
    {
      badge: "Days 1–7",
      title: "Audit & Strategy",
      body: "We get read access to Klaviyo and Shopify and pull the account apart before we touch anything.",
      items: [
        "Full Klaviyo account audit — flows, campaigns, segments, forms",
        "Deliverability & authentication check (SPF, DKIM, DMARC)",
        "List health and engagement analysis",
        "Brand voice and design deep-dive workshop (60 min, one call)",
        "Deliverable: a 90-day revenue roadmap with forecasted numbers",
      ],
    },
    {
      badge: "Days 8–18",
      title: "Foundation Build",
      body: "The heavy build. We design your template system and construct the flows that carry most of the revenue.",
      items: [
        "Custom, mobile-first email design system built in Klaviyo",
        "Core revenue flows built: welcome, abandoned cart, browse abandon, post-purchase, winback",
        "Segmentation architecture and suppression rules",
        "Signup forms and popups designed and installed",
        "Deliverable: everything staged in your account for approval",
      ],
    },
    {
      badge: "Days 19–24",
      title: "Launch",
      body: "Flows go live and the first campaigns ship. This is usually where the revenue line visibly bends.",
      items: [
        "Flows activated with tracking and attribution verified",
        "First month’s campaign calendar approved and scheduled",
        "A/B tests configured on subject lines and offers",
        "Deliverable: live flows earning inside the first week",
      ],
    },
    {
      badge: "Days 25–30",
      title: "Optimise",
      body: "First performance review against the roadmap. We iterate on real data instead of assumptions.",
      items: [
        "Flow-by-flow performance review vs. forecast",
        "Winning variants rolled out, losers rewritten",
        "Deliverability monitoring and inbox placement checks",
        "Deliverable: your reporting dashboard, plus a walkthrough call",
      ],
    },
    {
      badge: "Month 2 onward",
      title: "Retention Engine",
      body: "The ongoing engagement. Every month the account gets more valuable, not more work for you.",
      items: [
        "8–16 campaigns a month, planned, designed, written, sent",
        "Continuous flow testing and expansion (up to 12 flows)",
        "Quarterly design refresh so email never goes stale",
        "Monthly report and strategy call",
        "Deliverable: a compounding channel you own outright",
      ],
      ongoing: true,
    },
  ],
};

/* ── QUALIFIER ────────────────────────────────────────────────────────────── */
export const qualifier = {
  eyebrow: "Fit check",
  headline: "We’re deliberately not for everyone",
  sub: "Read both columns honestly. A bad fit wastes your time more than ours.",
  good: {
    title: "This is for you if",
    items: [
      "You’re an ecommerce brand doing $500K+ a year",
      "You’re on Klaviyo, or ready to move to it",
      "You have a list of 5,000+ and you know it’s underworked",
      "You want it handled, not another dashboard to check",
      "You can approve work inside 48 hours so we can move fast",
      "You’re thinking in quarters, not in single sends",
    ],
  },
  bad: {
    title: "This isn’t for you if",
    items: [
      "You’re pre-launch or under $500K — you need traffic before retention",
      "You want a freelancer to execute a plan you’ve already written",
      "You need someone to hand you emails you’ll send yourself",
      "You want to approve every subject line by committee",
      "You’re looking for the cheapest option on the market",
      "You expect email to fix a product or margin problem",
    ],
  },
};

/* ── FOUNDER ──────────────────────────────────────────────────────────────── */
export const founder = {
  eyebrow: "Who you’re working with",
  name: "Ibrahim Dallab",
  role: "Founder, Klavermail",
  photo: "/people/founder.webp",
  paragraphs: [
    "I’ve spent the last several years doing exactly one thing: making Klaviyo accounts earn more for ecommerce brands. Not paid ads, not funnels, not “growth”. Email and SMS retention, on one platform, done properly.",
    "I started Klavermail because I kept auditing accounts that had been handed to generalist agencies. Beautiful reports, three flows switched on, and a template that hadn’t been touched in two years. The brands were paying for activity, not revenue.",
    "So we built the opposite. A small team, a hard cap on clients, and one deliverable: email becomes your most profitable channel within 90 days. You keep the account, the templates and the strategy — even if you leave.",
  ],
  signature: "— Ibrahim",
  credentials: [
    "Klaviyo-only since day one",
    "20 ecom brands managed",
    "$845K attributed revenue",
    "Capped at 8 active clients",
  ],
};

/* ── GUARANTEE ────────────────────────────────────────────────────────────── */
// ⚠️  Only keep this if you will genuinely honour it. Edit the terms to match
//     what you actually offer, or set `enabled: false` to hide the section.
export const guarantee = {
  enabled: true,
  eyebrow: "Risk reversal",
  headline: "If email isn’t your best-performing channel in 90 days, month four is on us",
  body: "We take the risk because we’ve done this enough times to know how it goes. Work with us for 90 days. If attributed email revenue hasn’t grown by at least 2x what it was the month before we started, you don’t pay for month four — and you keep every flow, template and asset we built.",
  points: [
    "Measured on Klaviyo’s own attributed revenue, in your account",
    "Baseline agreed in writing before we start, so there’s nothing to argue about",
    "No lock-in — the agreement is month to month after the first 90 days",
  ],
};

/* ── FAQ ──────────────────────────────────────────────────────────────────── */
export const faq = {
  eyebrow: "Questions",
  headline: "The things people ask on the call",
  items: [
    {
      q: "We already have flows set up. Is there anything left to do?",
      a: "Almost always, yes. The typical account we audit has 3–4 flows live out of 12 that should be, and the ones running haven’t been tested or redesigned since launch. We’ll show you the specific gaps on the audit call, using your account — before you commit to anything.",
    },
    {
      q: "How quickly will we see results?",
      a: "Flows go live around day 19–24, and because they’re triggered by behaviour that’s already happening, they start earning immediately. Most clients see a measurable lift inside the first 30 days. The bigger compounding gains land in months 2–3 as testing accumulates.",
    },
    {
      q: "What do you need from us?",
      a: "Read/write access to Klaviyo, view access to Shopify analytics, your brand assets, and one 60-minute brand workshop call in week one. After that, roughly 30 minutes a week to approve work. That’s genuinely the whole ask.",
    },
    {
      q: "Do you write the copy and design the emails, or do we?",
      a: "We do both. Copy, design, build, segmentation and sending are all included. You review and approve — you never have to produce anything.",
    },
    {
      q: "Who owns the work?",
      a: "You do, entirely. It’s built inside your Klaviyo account, the templates are native and reusable, and the strategy doc is yours. If we part ways, you keep everything and your team can run it.",
    },
    {
      q: "Is there a long contract?",
      a: "We ask for an initial 90 days, because that’s the honest minimum to build, launch and optimise properly. After that it’s month to month with 30 days’ notice.",
    },
    {
      q: "Do you do SMS too?",
      a: "Yes — SMS runs on Klaviyo alongside email and we’ll build it into the flows where it lifts revenue rather than just adding cost. We’ll scope it on the call.",
    },
    {
      q: "How many clients do you take?",
      a: "Eight active accounts, maximum. Email done properly is hands-on work, and the moment we scale past that the quality drops. It also means there’s sometimes a waitlist.",
    },
    {
      q: "What does it cost?",
      a: "It’s a monthly retainer, scoped to your list size, send volume and how much needs rebuilding. We’ll give you an exact number on the audit call — and if we don’t think we can clear it several times over, we’ll tell you not to hire us.",
    },
    {
      q: "What actually happens on the audit call?",
      a: "We screen-share your Klaviyo account and walk through what’s missing, what’s leaking revenue, and what we’d build first. You leave with a prioritised list whether or not you work with us. 30 minutes, no deck, no pitch deck theatre.",
    },
  ],
};

/* ── BOOKING ──────────────────────────────────────────────────────────────── */
export const booking = {
  eyebrow: "Next step",
  headline: "Book your free Klaviyo audit call",
  sub: "30 minutes, screen-shared, on your actual account. You’ll leave knowing exactly where your email revenue is leaking — whether or not you hire us.",
  steps: [
    {
      title: "Before the call",
      body: "You’ll get a short form asking for your store URL and list size. We audit your account beforehand so we don’t waste the 30 minutes on discovery questions.",
    },
    {
      title: "On the call",
      body: "We screen-share your Klaviyo account and walk through the specific gaps, ranked by revenue impact. You get the list either way.",
    },
    {
      title: "After the call",
      body: "If it’s a fit, you get a scoped proposal with a forecast and a start date within 24 hours. If it isn’t, we’ll say so and point you somewhere better.",
    },
  ],
  reassurance: [
    "No deck, no pitch theatre",
    "You keep the audit findings regardless",
    "Straight answer on price on the call",
  ],
};

/* ── FINAL CTA BAND ───────────────────────────────────────────────────────── */
export const finalCta = {
  headline: "Your list is earning something right now. It should be earning more.",
  sub: "Find out exactly how much you’re leaving on the table. It takes 30 minutes.",
};

/* ── FOOTER ───────────────────────────────────────────────────────────────── */
export const footer = {
  blurb:
    "Klavermail is a done-for-you Klaviyo email marketing agency for ecommerce brands. Strategy, copy, design, build and sending — fully managed.",
  columns: [
    {
      title: "Sections",
      links: [
        { label: "Results", href: "#results" },
        { label: "Email design", href: "#work" },
        { label: "Process", href: "#process" },
        { label: "Reviews", href: "#reviews" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Klaviyo flow build", href: "#included" },
        { label: "Campaign management", href: "#included" },
        { label: "Email design", href: "#work" },
        { label: "Deliverability", href: "#included" },
        { label: "List growth", href: "#included" },
      ],
    },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
