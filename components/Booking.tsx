"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { Section, SectionHeading } from "./Section";
import { booking, site } from "@/content/site";
import { Arrow, Check } from "./Icons";

/**
 * Calendly inline embed, themed to the brand via Calendly’s own URL params so
 * the widget doesn’t show up as a white box in the middle of a black page.
 *
 * Set your real link in content/site.ts → site.calendlyUrl
 */
const CALENDLY_PARAMS = new URLSearchParams({
  hide_gdpr_banner: "1",
  hide_landing_page_details: "1",
  background_color: "0a0b09",
  text_color: "ffffff",
  primary_color: "c6ff00",
}).toString();

const PLACEHOLDER = "your-handle";

export default function Booking() {
  const notConfigured = site.calendlyUrl.includes(PLACEHOLDER);
  const embedUrl = `${site.calendlyUrl}?${CALENDLY_PARAMS}`;

  // Calendly’s script only measures correctly once it’s actually visible.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /**
   * Ad blockers and privacy extensions routinely block assets.calendly.com, and
   * corporate networks sometimes do too. Without this the panel sits on
   * "Loading calendar…" forever and the prospect simply cannot book. Calendly
   * injects an <iframe> into the widget div once it runs, so if none has
   * appeared we swap in a direct link to the booking page.
   */
  const widgetRef = useRef<HTMLDivElement>(null);
  const [blocked, setBlocked] = useState(false);
  useEffect(() => {
    if (notConfigured) return;
    const timer = setTimeout(() => {
      if (!widgetRef.current?.querySelector("iframe")) setBlocked(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, [notConfigured]);

  return (
    <Section id="book" className="border-t border-line">
      <SectionHeading
        eyebrow={booking.eyebrow}
        headline={booking.headline}
        sub={booking.sub}
        align="center"
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
        {/* ── What happens on the call ─────────────────────────────────── */}
        <div data-reveal className="flex flex-col gap-4">
          <ol className="flex flex-col gap-4">
            {booking.steps.map((step, i) => (
              <li key={step.title} className="panel flex gap-4 p-6">
                <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lime/30 bg-lime/[0.08] text-[13px] text-lime">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-[16.5px] leading-snug text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <ul className="flex flex-col gap-2.5 px-1">
            {booking.reassurance.map((r) => (
              <li key={r} className="flex items-center gap-2.5 text-[13.5px] text-white/75">
                <Check className="h-3.5 w-3.5 shrink-0 text-lime" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Scheduler ────────────────────────────────────────────────── */}
        <div
          data-reveal
          style={{ ["--reveal-delay" as string]: "100ms" }}
          className="panel overflow-hidden p-1.5 sm:p-2"
        >
          {notConfigured ? (
            <div className="flex min-h-[620px] flex-col items-center justify-center gap-4 rounded-[14px] border border-dashed border-lime/25 bg-panel-2 p-10 text-center">
              <span className="eyebrow">Scheduler not connected yet</span>
              <p className="max-w-sm text-[14.5px] leading-relaxed text-mute">
                Open{" "}
                <code className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-[12.5px] text-lime">
                  content/site.ts
                </code>{" "}
                and replace{" "}
                <code className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-[12.5px] text-lime">
                  calendlyUrl
                </code>{" "}
                with your real Calendly event link. The embed and every button on
                the page will pick it up automatically.
              </p>
              <a
                href="https://calendly.com/event_types/user/me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !py-2.5 !text-[13.5px]"
              >
                Get your Calendly link
              </a>
            </div>
          ) : (
            <>
              <div
                ref={widgetRef}
                className="calendly-inline-widget rounded-[14px]"
                data-url={embedUrl}
                style={{ minWidth: 320, height: 700 }}
                aria-label="Booking calendar"
              >
                {/* Replaced by Calendly’s iframe, or by the fallback below */}
                <div className="flex h-full flex-col items-center justify-center gap-5 px-8 text-center">
                  {blocked ? (
                    <>
                      <p className="max-w-xs text-[14.5px] leading-relaxed text-mute">
                        The calendar couldn’t load — usually an ad blocker or a
                        privacy extension. You can still book in one click.
                      </p>
                      <a
                        href={site.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Open the booking page
                        <Arrow className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-[13px] text-mute-2 underline underline-offset-4 transition-colors hover:text-lime"
                      >
                        or email us instead
                      </a>
                    </>
                  ) : (
                    <span className="font-mono text-[11px] tracking-[0.16em] text-mute-2 uppercase">
                      Loading calendar…
                    </span>
                  )}
                </div>
              </div>
              {mounted && (
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              )}
              {/* Fallback for anyone with the embed blocked */}
              <noscript>
                <a href={site.calendlyUrl} className="btn btn-primary m-4">
                  Open the booking calendar
                </a>
              </noscript>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
