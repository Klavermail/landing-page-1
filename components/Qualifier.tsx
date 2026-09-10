import { Section, SectionHeading } from "./Section";
import { qualifier } from "@/content/site";
import { Check, Cross } from "./Icons";

export default function Qualifier() {
  return (
    <Section id="fit" className="border-t border-line">
      <SectionHeading
        eyebrow={qualifier.eyebrow}
        headline={qualifier.headline}
        sub={qualifier.sub}
        align="center"
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        {/* ── Good fit ─────────────────────────────────────────────────── */}
        <div
          data-reveal
          className="relative overflow-hidden rounded-[18px] border border-lime/30 bg-lime/[0.045] p-8 sm:p-10"
        >
          <div aria-hidden className="bloom -left-20 -top-24 h-64 w-64 opacity-[0.18]" />
          <h3 className="font-display relative flex items-center gap-3 text-[22px] text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-black">
              <Check className="h-4 w-4" />
            </span>
            {qualifier.good.title}
          </h3>
          <ul className="relative mt-7 flex flex-col gap-4">
            {qualifier.good.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-white/90">
                <Check className="mt-1 h-4 w-4 shrink-0 text-lime" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Bad fit ──────────────────────────────────────────────────── */}
        <div data-reveal style={{ ["--reveal-delay" as string]: "90ms" }} className="panel p-8 sm:p-10">
          <h3 className="font-display flex items-center gap-3 text-[22px] text-white/55">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong text-white/40">
              <Cross className="h-4 w-4" />
            </span>
            {qualifier.bad.title}
          </h3>
          <ul className="mt-7 flex flex-col gap-4">
            {qualifier.bad.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-mute">
                <Cross className="mt-1 h-4 w-4 shrink-0 text-white/25" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
