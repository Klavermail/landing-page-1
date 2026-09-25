"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Section, SectionHeading } from "./Section";
import { results } from "@/content/site";
import { Cross } from "./Icons";

export default function Results() {
  const [active, setActive] = useState<number | null>(null);
  const total = results.items.length;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + total) % total)),
    [total],
  );

  // Keyboard control + scroll lock while the lightbox is open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current = active === null ? null : results.items[active];

  return (
    <Section id="results" className="border-t border-line">
      <SectionHeading
        eyebrow={results.eyebrow}
        headline={results.headline}
        sub={results.sub}
      />

      {/* ── Aggregate metrics band ──────────────────────────────────────── */}
      <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-line bg-line lg:grid-cols-4">
        {results.band.map((s, i) => (
          <div
            key={s.label}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
            className="bg-black p-6 sm:p-7"
          >
            <dt className="font-display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-none text-lime">
              {s.value}
            </dt>
            <dd className="mt-2.5 text-[13px] leading-snug text-mute">{s.label}</dd>
          </div>
        ))}
      </dl>

      {/* ── Dashboard grid ─────────────────────────────────────────────── */}
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.items.map((item, i) => (
          <li
            key={item.src}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="panel panel-hover group block w-full overflow-hidden p-0 text-left"
              aria-label={`Expand result: ${item.metric} ${item.caption}`}
            >
              <span className="relative block overflow-hidden bg-panel-2">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1280}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/45 to-transparent"
                />
                <span className="absolute right-3 top-3 rounded-full border border-white/12 bg-black/65 px-2.5 py-1 font-mono text-[9.5px] tracking-[0.14em] text-white/60 uppercase backdrop-blur-sm transition-colors duration-500 group-hover:border-lime/50 group-hover:text-lime">
                  Expand
                </span>
              </span>

              <span className="flex items-end justify-between gap-4 p-5">
                <span className="block">
                  <span className="font-display block text-[clamp(1.5rem,2.6vw,2rem)] leading-none text-lime">
                    {item.metric}
                  </span>
                  <span className="mt-2 block text-[13.5px] text-white/80">{item.caption}</span>
                </span>
                <span className="shrink-0 text-right font-mono text-[10px] leading-relaxed tracking-[0.1em] text-mute-2 uppercase">
                  {item.niche}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-2xl text-[12.5px] leading-relaxed text-mute-2">
        Screenshots are attributed-revenue views taken from live client Klaviyo accounts.
        Brand names withheld where clients asked. Results vary with list size, margin and
        offer — we&rsquo;ll give you a forecast based on your own account on the call.
      </p>

      {/* ── Lightbox ───────────────────────────────────────────────────── */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.metric} ${current.caption}`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-black/60 text-white transition-colors hover:border-lime/50 hover:text-lime sm:right-7 sm:top-7"
          >
            <Cross className="h-4.5 w-4.5" />
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-[18px] border border-line-strong bg-panel-2">
              <Image
                src={current.src}
                alt={current.alt}
                width={1280}
                height={800}
                className="h-auto w-full"
                priority
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[15px] text-white">
                <span className="font-display mr-2 text-xl text-lime">{current.metric}</span>
                {current.caption}
                <span className="ml-2 font-mono text-[11px] tracking-[0.1em] text-mute-2 uppercase">
                  {current.niche}
                </span>
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous result"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-white transition-colors hover:border-lime/50 hover:text-lime"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
                    <path d="M10 3.5 5.5 8l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span className="font-mono text-[11px] tabular-nums text-mute-2">
                  {String(active! + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next result"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-white transition-colors hover:border-lime/50 hover:text-lime"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
                    <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
