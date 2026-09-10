"use client";

import { useEffect, useRef, useState } from "react";
import { Section, SectionHeading } from "./Section";
import { process } from "@/content/site";
import { Check } from "./Icons";

export default function Process() {
  const trackRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  /**
   * Fills the vertical rail as the timeline scrolls past the middle of the
   * viewport, and lights up each phase marker it passes.
   */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.52;
      const raw = (anchor - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const count = process.phases.length;

  return (
    <Section id="process" className="border-t border-line">
      <SectionHeading
        eyebrow={process.eyebrow}
        headline={process.headline}
        sub={process.sub}
      />

      <ol ref={trackRef} className="relative mt-16 pl-11 sm:pl-16">
        {/* rail */}
        <div aria-hidden className="absolute bottom-0 left-3.5 top-0 w-px bg-white/10">
          <div
            className="w-px bg-gradient-to-b from-lime via-lime to-lime/40 shadow-[0_0_14px_rgba(198,255,0,0.55)]"
            style={{ height: `${progress * 100}%` }}
          />
        </div>

        {process.phases.map((phase, i) => {
          // marker sits at the centre of its own slice of the rail
          const reached = progress >= (i + 0.4) / count;
          return (
            <li key={phase.title} className="relative pb-14 last:pb-0">
              {/* marker */}
              <span
                aria-hidden
                className={`absolute -left-11 top-1 flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[10px] transition-all duration-500 sm:-left-16 ${
                  reached
                    ? "border-lime bg-lime text-black shadow-[0_0_0_5px_rgba(198,255,0,0.13)]"
                    : "border-white/25 bg-black text-white/55"
                }`}
              >
                {i + 1}
              </span>

              <div
                data-reveal
                className={`panel p-7 transition-colors duration-700 sm:p-8 ${
                  phase.ongoing ? "border-lime/25 bg-lime/[0.035]" : ""
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.14em] uppercase ${
                      phase.ongoing
                        ? "bg-lime text-black"
                        : "border border-lime/25 bg-lime/[0.08] text-lime"
                    }`}
                  >
                    {phase.badge}
                  </span>
                  {phase.ongoing && (
                    <span className="font-mono text-[10px] tracking-[0.14em] text-mute-2 uppercase">
                      Ongoing retainer
                    </span>
                  )}
                </div>

                <h3 className="font-display t-h3 mt-4 text-white">{phase.title}</h3>
                <p className="mt-3 max-w-[62ch] text-[14.5px] leading-relaxed text-mute">
                  {phase.body}
                </p>

                <ul className="mt-6 grid gap-2.5 border-t border-line pt-6 sm:grid-cols-2">
                  {phase.items.map((item) => {
                    const isDeliverable = item.startsWith("Deliverable:");
                    return (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 text-[13.5px] leading-relaxed ${
                          isDeliverable
                            ? "font-medium text-lime sm:col-span-2"
                            : "text-white/78"
                        }`}
                      >
                        <Check
                          className={`mt-[3px] h-3.5 w-3.5 shrink-0 ${
                            isDeliverable ? "text-lime" : "text-lime/55"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>

      <div data-reveal className="mt-12 flex flex-wrap items-center gap-4">
        <a href="#book" className="btn btn-primary">
          Start with the audit call
        </a>
        <span className="text-[13.5px] text-mute">
          We&rsquo;ll walk you through this on the call, mapped to your account.
        </span>
      </div>
    </Section>
  );
}
