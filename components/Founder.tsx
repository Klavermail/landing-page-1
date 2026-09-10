import Image from "next/image";
import { Section } from "./Section";
import { founder } from "@/content/site";
import { LogoMark } from "./Logo";

export default function Founder() {
  return (
    <Section id="founder" className="border-t border-line">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* ── Portrait ─────────────────────────────────────────────────── */}
        <div data-reveal className="relative">
          <div className="relative overflow-hidden rounded-[18px] border border-line bg-panel-2">
            <Image
              src={founder.photo}
              alt={`${founder.name}, ${founder.role}`}
              width={720}
              height={880}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="h-auto w-full"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-6">
              <LogoMark className="h-4 w-4 text-lime" />
              <span className="font-mono text-[10.5px] tracking-[0.16em] text-white/75 uppercase">
                {founder.role}
              </span>
            </div>
          </div>

          <ul className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-line bg-line">
            {founder.credentials.map((c) => (
              <li key={c} className="bg-black p-4 text-[12px] leading-snug text-mute">
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Story ────────────────────────────────────────────────────── */}
        <div>
          <p data-reveal className="eyebrow mb-5 flex items-center gap-2.5">
            <span aria-hidden className="h-px w-8 bg-lime/50" />
            {founder.eyebrow}
          </p>
          <h2
            data-reveal
            style={{ ["--reveal-delay" as string]: "70ms" }}
            className="font-display t-h2 text-white"
          >
            {founder.name}
          </h2>

          <div className="mt-7 flex flex-col gap-5">
            {founder.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${120 + i * 70}ms` }}
                className="text-[15.5px] leading-[1.72] text-mute text-pretty"
              >
                {p}
              </p>
            ))}
          </div>

          <p
            data-reveal
            className="font-display mt-8 text-[22px] text-lime"
          >
            {founder.signature}
          </p>
        </div>
      </div>
    </Section>
  );
}
