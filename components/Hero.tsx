import { accent } from "@/lib/accent";
import { cta, hero } from "@/content/site";
import { Check } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grain relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-8 md:pt-32"
    >
      {/* ── Atmosphere ─────────────────────────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 opacity-70" />
        {/* lime bloom behind the headline */}
        <div className="bloom left-1/2 top-[-18%] h-[520px] w-[820px] -translate-x-1/2 opacity-[0.32]" />
        <div className="bloom right-[-10%] top-[45%] h-[420px] w-[420px] opacity-[0.14]" />
        {/* vignette so the grid fades toward the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_20%,#000_78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="mx-auto w-full max-w-[1200px]">
        {/* ── Eyebrow pill ─────────────────────────────────────────────── */}
        <div data-reveal className="mb-8 flex">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-lime/25 bg-lime/[0.07] py-1.5 pr-4 pl-2.5 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
            </span>
            <span className="eyebrow !text-[10.5px]">{hero.eyebrow}</span>
          </div>
        </div>

        {/* ── Headline ─────────────────────────────────────────────────── */}
        <h1
          data-reveal
          style={{ ["--reveal-delay" as string]: "80ms" }}
          className="font-display t-display max-w-[19ch] text-balance text-white"
        >
          {accent(hero.headline)}
        </h1>

        <p
          data-reveal
          style={{ ["--reveal-delay" as string]: "170ms" }}
          className="t-lead mt-7 max-w-[58ch] text-pretty"
        >
          {hero.sub}
        </p>

        {/* ── Bullets ──────────────────────────────────────────────────── */}
        <ul
          data-reveal
          style={{ ["--reveal-delay" as string]: "240ms" }}
          className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-7"
        >
          {hero.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-[14.5px] text-white/72">
              <Check className="h-4 w-4 shrink-0 text-lime" />
              {b}
            </li>
          ))}
        </ul>

        {/* ── CTAs ─────────────────────────────────────────────────────── */}
        <div
          data-reveal
          style={{ ["--reveal-delay" as string]: "310ms" }}
          className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a href="#book" className="btn btn-primary">
            {cta.primary}
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
              <path
                d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#results" className="btn btn-ghost">
            {cta.secondary}
          </a>
        </div>

        <p
          data-reveal
          style={{ ["--reveal-delay" as string]: "370ms" }}
          className="mt-5 font-mono text-[11px] tracking-[0.14em] text-mute-2 uppercase"
        >
          Free · 30 minutes · No pitch deck
        </p>

        {/* ── Stat strip ───────────────────────────────────────────────── */}
        <div
          data-reveal
          style={{ ["--reveal-delay" as string]: "430ms" }}
          className="mt-16 border-t border-line pt-8 md:mt-20"
        >
          <p className="eyebrow mb-6 !text-white/35">{hero.socialProof}</p>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-none text-lime">
                  {s.value}
                </dt>
                <dd className="text-[13.5px] text-mute">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ── Scroll hint ────────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 hidden h-10 w-px -translate-x-1/2 overflow-hidden bg-white/10 lg:block"
      >
        <span className="block h-3 w-px bg-lime [animation:scroll-hint_2.4s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
