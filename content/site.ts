/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  KLAVERMAIL — SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything you’ll want to change lives in this one file. Edit the text and
 *  image paths here and the whole page updates. No need to touch components.
 *
 *  Image paths point into /public. e.g. "/emails/email-01.svg" is the file at
 *  public/emails/email-01.svg. Drop a PNG/JPG in there and update the path.
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

/* ── TRUST BAR (client wordmarks) ─────────────────────────────────────────── */
export const clients = [
  { name: "NORDVELL", logo: "/logos/logo-01.svg" },
  { name: "Bloom & Bare", logo: "/logos/logo-02.svg" },
  { name: "ATLAS SUPPLY", logo: "/logos/logo-03.svg" },
  { name: "Hydra Skin", logo: "/logos/logo-04.svg" },
  { name: "KIN + CO", logo: "/logos/logo-05.svg" },
  { name: "Wilder Goods", logo: "/logos/logo-06.svg" },
  { name: "SOLSTICE", logo: "/logos/logo-07.svg" },
  { name: "Verdant Tea", logo: "/logos/logo-08.svg" },
];

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
  sub: "Designed from scratch, built natively in Klaviyo, and tested on every major client.",
  items: [
    { src: "/emails/email-01.svg", alt: "Skincare brand welcome email design", brand: "Hydra Skin" },
    { src: "/emails/email-02.svg", alt: "Apparel launch campaign email design", brand: "Nordvell" },
    { src: "/emails/email-03.svg", alt: "Abandoned cart email design", brand: "Atlas Supply" },
    { src: "/emails/email-04.svg", alt: "Black Friday campaign email design", brand: "Kin + Co" },
    { src: "/emails/email-05.svg", alt: "Post-purchase education email design", brand: "Verdant Tea" },
    { src: "/emails/email-06.svg", alt: "Product drop announcement email design", brand: "Solstice" },
    { src: "/emails/email-07.svg", alt: "Winback offer email design", brand: "Wilder Goods" },
    { src: "/emails/email-08.svg", alt: "VIP early access email design", brand: "Bloom & Bare" },
    { src: "/emails/email-09.svg", alt: "Back in stock email design", brand: "Hydra Skin" },
    { src: "/emails/email-10.svg", alt: "Review request email design", brand: "Nordvell" },
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
    { src: "/results/result-01.svg", alt: "Klaviyo dashboard showing attributed revenue growth", metric: "+312%", caption: "flow revenue in 90 days", niche: "Skincare · $2.4M/yr" },
    { src: "/results/result-02.svg", alt: "Klaviyo flow performance dashboard", metric: "$486K", caption: "from email in 6 months", niche: "Apparel · $5M/yr" },
    { src: "/results/result-03.svg", alt: "Klaviyo campaign revenue dashboard", metric: "41%", caption: "of total revenue from email", niche: "Supplements · $3.2M/yr" },
    { src: "/results/result-04.svg", alt: "Klaviyo abandoned cart flow dashboard", metric: "+$74K/mo", caption: "added from 4 new flows", niche: "Home goods · $1.8M/yr" },
    { src: "/results/result-05.svg", alt: "Klaviyo Black Friday campaign results", metric: "$212K", caption: "in one BFCM weekend", niche: "Accessories · $4M/yr" },
    { src: "/results/result-06.svg", alt: "Klaviyo deliverability and open rate dashboard", metric: "28% → 54%", caption: "open rate after list cleanup", niche: "Beauty · $2.1M/yr" },
    { src: "/results/result-07.svg", alt: "Klaviyo welcome flow revenue dashboard", metric: "$38 EPS", caption: "on the welcome series", niche: "Coffee · $900K/yr" },
    { src: "/results/result-08.svg", alt: "Klaviyo year over year revenue comparison", metric: "2.7x", caption: "email revenue year on year", niche: "Pet · $6M/yr" },
    { src: "/results/result-09.svg", alt: "Klaviyo segmentation performance dashboard", metric: "+$1.1M", caption: "in 12 months", niche: "Footwear · $8M/yr" },
    { src: "/results/result-10.svg", alt: "Klaviyo winback flow dashboard", metric: "19%", caption: "of churned customers reactivated", niche: "Fitness · $2.6M/yr" },
  ],
};

/* ── REVIEWS ──────────────────────────────────────────────────────────────── */
export const reviews = {
  eyebrow: "What clients say",
  headline: "The part where other people talk instead of us",
  items: [
    {
      quote:
        "We’d been through two agencies who sent us decks. Klavermail sent us live flows in week two. Email went from 11% to 38% of revenue in one quarter and I genuinely stopped thinking about it — which was the whole point.",
      name: "Sarah Whitmore",
      role: "Founder",
      company: "Hydra Skin",
      avatar: "/people/review-01.svg",
      result: "11% → 38% of revenue",
      featured: true,
    },
    {
      quote:
        "The design work is what sold my team. Our emails finally look like our brand instead of a template with our logo dropped in the corner.",
      name: "Daniel Osei",
      role: "Head of Ecommerce",
      company: "Nordvell",
      avatar: "/people/review-02.svg",
      result: "+$486K in 6 months",
    },
    {
      quote:
        "Our deliverability was wrecked before they came in. They rebuilt authentication, cleaned the list, and our open rate almost doubled inside six weeks.",
      name: "Priya Raman",
      role: "Marketing Director",
      company: "Atlas Supply",
      avatar: "/people/review-03.svg",
      result: "28% → 54% open rate",
    },
    {
      quote:
        "Best BFCM we’ve ever run, and I didn’t write a single email. The campaign calendar landed three weeks early with everything already built.",
      name: "Marcus Feld",
      role: "Co-founder",
      company: "Kin + Co",
      avatar: "/people/review-04.svg",
      result: "$212K in one weekend",
    },
    {
      quote:
        "What I actually pay for is not thinking about email. It shows up, it converts, and the monthly report tells me exactly what earned what.",
      name: "Elena Kowalski",
      role: "Owner",
      company: "Verdant Tea",
      avatar: "/people/review-05.svg",
      result: "41% of total revenue",
    },
  ],
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
  photo: "/people/founder.svg",
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
