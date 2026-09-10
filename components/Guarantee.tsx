import { accent } from "@/lib/accent";
import { guarantee } from "@/content/site";
import { Check } from "./Icons";

export default function Guarantee() {
  if (!guarantee.enabled) return null;

  return (
    <section className="relative overflow-hidden border-t border-line px-5 py-24 sm:px-8 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 opacity-50" />
        <div className="bloom left-1/2 top-1/2 h-[440px] w-[820px] -translate-x-1/2 -translate-y-1/2 opacity-[0.2]" />
      </div>

      <div
        data-reveal
        className="relative mx-auto w-full max-w-[900px] overflow-hidden rounded-[22px] border border-lime/35 bg-black/70 p-9 backdrop-blur-sm sm:p-14"
      >
        <p className="eyebrow mb-6 flex items-center gap-2.5">
          <span aria-hidden className="h-px w-8 bg-lime/50" />
          {guarantee.eyebrow}
        </p>

        <h2 className="font-display text-[clamp(1.75rem,4vw,2.875rem)] text-balance text-white">
          {accent(guarantee.headline)}
        </h2>

        <p className="mt-6 max-w-[62ch] text-[15.5px] leading-[1.7] text-mute text-pretty">
          {guarantee.body}
        </p>

        <ul className="mt-8 flex flex-col gap-3 border-t border-line pt-8">
          {guarantee.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[14.5px] leading-snug text-white/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
