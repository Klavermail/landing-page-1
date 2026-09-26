"use client";

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
/**
 * Colour params (background_color, text_color, primary_color) are a PAID
 * Calendly feature. On a free plan they are at best ignored and can stop the
 * widget rendering at all — and they are the only thing here that Calendly's
 * own embed snippet does not include. Off by default so the embed is exactly
 * the snippet Calendly generates; flip THEME to true once the plan supports it.
 */
const THEME = false;
const CALENDLY_PARAMS = new URLSearchParams(
  THEME
    ? {
        hide_gdpr_banner: "1",
        hide_landing_page_details: "1",
        background_color: "0a0b09",
        text_color: "ffffff",
        primary_color: "c6ff00",
      }
    : { hide_gdpr_banner: "1" },
).toString();

const PLACEHOLDER = "your-handle";

export default function Booking() {
  const notConfigured = site.calendlyUrl.includes(PLACEHOLDER);
  const embedUrl = `${site.calendlyUrl}?${CALENDLY_PARAMS}`;

  const widgetRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "blocked">("loading");

  /**
   * Loads Calendly and initialises the widget explicitly.
   *
   * Two things matter here and both were previously wrong:
   *
   * 1. Calendly's auto-scan appends its iframe as a CHILD of any element with
   *    `.calendly-inline-widget`, so that element has to be EMPTY. Putting a
   *    full-height loading message inside it pushed the iframe out of the 700px
   *    box and the calendar rendered off-screen — which looks exactly like
   *    "the calendar isn't loading". The placeholder is now a sibling overlay.
   *
   * 2. `next/script` with `lazyOnload` waits on window.load, which may already
   *    have fired by the time this mounts. Injecting the script here and
   *    calling initInlineWidget on its load event removes that race, and gives
   *    a real onerror instead of guessing from a timeout.
   */
  useEffect(() => {
    if (notConfigured) return;
    let cancelled = false;

    const log = (msg: string, extra?: unknown) =>
      console.info(`[Klavermail booking] ${msg}`, extra ?? "");

    const init = () => {
      if (cancelled || !widgetRef.current) return;
      const Calendly = (window as unknown as { Calendly?: { initInlineWidget: (o: object) => void } }).Calendly;
      if (!Calendly) {
        log("script loaded but window.Calendly is missing — likely blocked or altered");
        return setStatus("blocked");
      }
      widgetRef.current.innerHTML = "";
      Calendly.initInlineWidget({ url: embedUrl, parentElement: widgetRef.current });
      log("widget initialised with", embedUrl);
      setStatus("ready");
      // an iframe that never appears means Calendly rejected the URL
      setTimeout(() => {
        if (!cancelled && !widgetRef.current?.querySelector("iframe")) {
          log("no iframe after init — Calendly likely rejected this event URL");
        }
      }, 4000);
    };

    // Calendly's stylesheet — without it the widget renders unstyled
    const CSS = "https://assets.calendly.com/assets/external/widget.css";
    if (!document.querySelector(`link[href="${CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS;
      document.head.appendChild(link);
    }

    const SRC = "https://assets.calendly.com/assets/external/widget.js";
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    if (existing) {
      if ((window as unknown as { Calendly?: unknown }).Calendly) init();
      else {
        existing.addEventListener("load", init);
        existing.addEventListener("error", () => setStatus("blocked"));
      }
    } else {
      const script = document.createElement("script");
      script.src = SRC;
      script.async = true;
      script.onload = init;
      script.onerror = () => {
        log("could not load assets.calendly.com — blocked by an extension or network");
        if (!cancelled) setStatus("blocked");
      };
      document.body.appendChild(script);
    }

    // Last resort: the request can hang rather than error outright
    const timer = setTimeout(() => {
      if (!cancelled && !widgetRef.current?.querySelector("iframe")) {
        log("timed out after 12s with no iframe");
        setStatus("blocked");
      }
    }, 12000);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [notConfigured, embedUrl]);

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
        {/* justify-between pulls the reassurance list down to meet the foot of
           the calendar, instead of leaving ~150px hanging beside it */}
        <div data-reveal className="flex flex-col justify-between gap-4">
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
              {/*
                This element must stay EMPTY — Calendly appends its iframe here.
                The placeholder is an overlay on top, not a child.
              */}
              <div className="relative">
                <div
                  ref={widgetRef}
                  className="calendly-inline-widget overflow-hidden rounded-[14px] bg-white"
                  style={{ minWidth: 320, height: 700 }}
                  aria-label="Booking calendar"
                />

                {status !== "ready" && (
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center">
                    {status === "blocked" ? (
                      <div className="pointer-events-auto flex flex-col items-center gap-5">
                        <p className="max-w-xs text-[14.5px] leading-relaxed text-mute">
                          The calendar couldn&rsquo;t load &mdash; usually an ad blocker or a
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
                      </div>
                    ) : (
                      <span className="font-mono text-[11px] tracking-[0.16em] text-mute-2 uppercase">
                        Loading calendar&hellip;
                      </span>
                    )}
                  </div>
                )}
              </div>

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
