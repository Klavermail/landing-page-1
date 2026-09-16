import Image from "next/image";
import { Section, SectionHeading } from "./Section";
import { reviews } from "@/content/site";
import { Quote, Star } from "./Icons";

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 text-lime" />
      ))}
    </div>
  );
}

type Review = (typeof reviews.items)[number];

function Person({ r, size = "sm" }: { r: Review; size?: "sm" | "lg" }) {
  const dim = size === "lg" ? 52 : 40;
  return (
    <div className="flex items-center gap-3">
      <Image
        src={r.avatar}
        alt=""
        width={dim}
        height={dim}
        className="rounded-full border border-line"
        style={{ width: dim, height: dim }}
      />
      <div className="min-w-0">
        <p className="truncate text-[14px] font-semibold text-white">{r.name}</p>
        <p className="truncate text-[12.5px] text-mute-2">
          {r.role}, {r.company}
        </p>
      </div>
    </div>
  );
}

function ResultChip({ children }: { children: string }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-lime/25 bg-lime/[0.08] px-3 py-1 font-mono text-[10px] tracking-[0.1em] text-lime uppercase">
      {children}
    </span>
  );
}

export default function Reviews() {
  const [featured, ...rest] = reviews.items;

  return (
    <Section id="reviews" className="border-t border-line">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow={reviews.eyebrow} headline={reviews.headline} />

      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {/* ── Featured ─────────────────────────────────────────────────── */}
        <figure
          data-reveal
          className="panel relative flex flex-col justify-between overflow-hidden p-8 sm:p-10 lg:col-span-2"
        >
          <div aria-hidden className="bloom -right-20 -top-24 h-64 w-64 opacity-[0.16]" />
          <Quote className="h-7 w-7 text-lime/30" />
          <blockquote className="font-display relative mt-6 text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.36] tracking-[-0.012em] text-white text-pretty">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <Person r={featured} size="lg" />
            <ResultChip>{featured.result}</ResultChip>
          </figcaption>
        </figure>

        {/* ── The rest ─────────────────────────────────────────────────── */}
        {rest.map((r, i) => (
          <figure
            key={r.name}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${(i + 1) * 70}ms` }}
            className="panel panel-hover flex flex-col justify-between p-7"
          >
            <div>
              <Stars />
              <blockquote className="mt-5 text-[14.5px] leading-relaxed text-white/82 text-pretty">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-7 border-t border-line pt-5">
              <Person r={r} />
              <div className="mt-4">
                <ResultChip>{r.result}</ResultChip>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
