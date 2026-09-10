import { accent } from "@/lib/accent";
import { cta, finalCta, site } from "@/content/site";
import { Arrow } from "./Icons";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-line px-5 py-24 sm:px-8 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="bloom bottom-[-30%] left-1/2 h-[520px] w-[900px] -translate-x-1/2 opacity-[0.26]" />
        <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_50%_100%,transparent_25%,#000_80%)]" />
      </div>

      <div className="mx-auto w-full max-w-[900px] text-center">
        <h2
          data-reveal
          className="font-display text-[clamp(2rem,5.2vw,4rem)] text-balance text-white"
        >
          {accent(finalCta.headline)}
        </h2>
        <p
          data-reveal
          style={{ ["--reveal-delay" as string]: "80ms" }}
          className="t-lead mx-auto mt-6 max-w-[50ch]"
        >
          {finalCta.sub}
        </p>

        <div
          data-reveal
          style={{ ["--reveal-delay" as string]: "160ms" }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#book" className="btn btn-primary !px-8 !py-[1.1rem] !text-base">
            {cta.primary}
            <Arrow className="h-4 w-4" />
          </a>
          <a href={`mailto:${site.email}`} className="btn btn-ghost">
            Email us instead
          </a>
        </div>

        <p
          data-reveal
          className="mt-6 font-mono text-[11px] tracking-[0.14em] text-mute-2 uppercase"
        >
          Currently taking 2 new clients this month
        </p>
      </div>
    </section>
  );
}
