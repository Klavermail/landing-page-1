"use client";

import { useEffect, useRef, useState } from "react";
import { Section, SectionHeading } from "./Section";
import { booking, site } from "@/content/site";
import { Arrow, Check } from "./Icons";

/**
 * Calendly inline embed — as a plain iframe, deliberately.
 *
 * Calendly's own snippet loads assets.calendly.com/assets/external/widget.js,
 * which then builds exactly this iframe. Going straight to the iframe removes
 * every failure mode that script introduced, all of which we hit:
 *
 *   • widget.js is on common ad-block and privacy lists, so the script 404s or
 *     is cancelled and nothing is ever built.
 *   • window.Calendly can be missing even after the script "loads".
 *   • initInlineWidget has to run after the script and after mount — a race.
 *   • its auto-scan appends into `.calendly-inline-widget`, so that element had
 *     to ship empty; any placeholder inside pushed the iframe out of the box.
 *
 * An iframe has none of that. It also works without JavaScript beyond setting
 * the src, and the only thing that can stop it is calendly.com itself being
 * unreachable — in which case the fallback below is the honest answer anyway.
 *
 * Set your real link in content/site.ts → site.calendlyUrl
 */

/**
 * Colour params (background_color, text_color, primary_color) are a PAID
 * Calendly feature — ignored on a free plan. embed_domain / embed_type are what
 * tell Calendly it is framed, and are what widget.js sets itself.
 */
const THEME = false;

const PLACEHOLDER = "your-handle";

/** How long to wait for Calendly to announce itself before offering the fallback. */
const GIVE_UP_MS = 14000;

export default function Booking() {
  const notConfigured = site.calendlyUrl.includes(PLACEHOLDER);

  // Built on the client: embed_domain has to be the real host, which differs
  // between klavermail.com, Vercel previews and localhost.
  const [src, setSrc] = useState("");
  const [status, setStatus] = useState<"loading" | "ready" | "blocked">("loading");
  // surfaced on the page, not just the console: nobody debugs on a phone
  const [reason, setReason] = useState("");
  const settled = useRef(false);

  useEffect(() => {
    if (notConfigured) return;

    const params = new URLSearchParams({
      embed_domain: window.location.host,
      embed_type: "Inline",
      hide_gdpr_banner: "1",
      ...(THEME
        ? {
            hide_landing_page_details: "1",
            background_color: "0a0b09",
            text_color: "ffffff",
            primary_color: "c6ff00",
          }
        : {}),
    });
    setSrc(`${site.calendlyUrl}?${params}`);
  }, [notConfigured]);

  /**
   * Calendly posts messages to the parent once the booking page is really
   * rendered (calendly.event_type_viewed and friends, part of its public embed
   * events API). That is the ONLY trustworthy "it worked" signal here.
   *
   * iframe onload deliberately does NOT count, and is not listened for at all:
   * Chromium fires load on the error page it substitutes when the frame is
   * blocked — measured, not assumed — so treating load as success turns a
   * blocked embed into a blank white box with no fallback. For the same reason
   * it cannot tell "blocked" from "loaded but silent" either.
   */
  useEffect(() => {
    if (notConfigured || !src) return;

    const ready = () => {
      if (settled.current) return;
      settled.current = true;
      setStatus("ready");
    };

    const onMessage = (e: MessageEvent) => {
      if (!e.origin.endsWith("calendly.com")) return;
      const event = (e.data as { event?: string } | null)?.event;
      if (typeof event === "string" && event.startsWith("calendly.")) ready();
    };
    window.addEventListener("message", onMessage);

    const timer = setTimeout(() => {
      if (settled.current) return;
      settled.current = true;
      console.info("[Klavermail booking] no embed event from calendly.com in 14s");
      setReason("no response from calendly.com");
      setStatus("blocked");
    }, GIVE_UP_MS);

    return () => {
      window.removeEventListener("message", onMessage);
      clearTimeout(timer);
    };
  }, [notConfigured, src]);

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
            <div
              /* Stays dark until the calendar is really there. Painting it white
                 up front is what put the fallback's light text on a white card,
                 where it read as a big white box with a lone button. */
              className={`relative overflow-hidden rounded-[14px] transition-colors ${
                status === "ready" ? "bg-white" : "bg-panel-2"
              }`}
              style={{ minWidth: 320, height: 700 }}
            >
              {src && (
                <iframe
                  src={src}
                  title="Book a call with Klavermail"
                  loading="lazy"
                  className={`h-full w-full border-0 transition-opacity duration-300 ${
                    status === "ready" ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              {status !== "ready" && (
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center">
                  {status === "blocked" ? (
                    <div className="pointer-events-auto flex flex-col items-center gap-5">
                      <p className="max-w-xs text-[14.5px] leading-relaxed text-white/75">
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
                      {reason && (
                        <p className="font-mono text-[10px] tracking-[0.12em] text-white/35 uppercase">
                          {reason}
                        </p>
                      )}
                    </div>
                  ) : (
                    <span className="font-mono text-[11px] tracking-[0.16em] text-mute-2 uppercase">
                      Loading calendar&hellip;
                    </span>
                  )}
                </div>
              )}

              <noscript>
                <a
                  href={site.calendlyUrl}
                  className="btn btn-primary absolute inset-x-0 bottom-6 mx-auto w-max"
                >
                  Open the booking calendar
                </a>
              </noscript>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
