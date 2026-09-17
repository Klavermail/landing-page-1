"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { emailDesigns } from "@/content/site";
import { Cross } from "./Icons";

/**
 * Mounted once per page. Any element carrying `data-email-open="<index>"`
 * opens it, so the strip and the carousel stay server components.
 *
 * The design is the point here, not the copy — so the email is shown at its
 * NATIVE pixel width (capped at 460px) and never upscaled. Upscaling is what
 * makes these look soft; at 1:1 they are as sharp as the source allows.
 */
export default function EmailLightbox() {
  const [index, setIndex] = useState<number | null>(null);
  const items = emailDesigns.items;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("[data-email-open]");
      if (!el) return;
      const i = Number(el.getAttribute("data-email-open"));
      if (Number.isInteger(i)) {
        e.preventDefault();
        setIndex(i);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: 1 | -1) =>
      setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
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
  }, [index, close, step]);

  if (index === null) return null;
  const item = items[index];
  const displayWidth = Math.min(item.w, 460);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.brand} email design`}
      onClick={close}
      className="fixed inset-0 z-[95] bg-black/94 backdrop-blur-md"
    >
      {/* header */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-10 flex items-center justify-between gap-4 bg-gradient-to-b from-black via-black/85 to-transparent px-4 pb-10 pt-4 sm:px-7 sm:pt-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-auto">
          <p className="font-display text-[17px] text-white">{item.brand}</p>
          <p className="font-mono text-[10px] tracking-[0.14em] text-mute-2 uppercase">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>
        </div>
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous design"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-black/60 text-white transition-colors hover:border-lime/50 hover:text-lime"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
              <path d="M10 3.5 5.5 8l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next design"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-black/60 text-white transition-colors hover:border-lime/50 hover:text-lime"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
              <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-black/60 text-white transition-colors hover:border-lime/50 hover:text-lime"
          >
            <Cross className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* the design, scrollable, never upscaled */}
      <div className="h-full overflow-y-auto overscroll-contain px-4 pb-16 pt-24">
        <div
          className="mx-auto overflow-hidden rounded-[14px] bg-white shadow-[0_30px_90px_-30px_rgba(0,0,0,1)]"
          style={{ width: displayWidth, maxWidth: "100%" }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={item.w}
            height={item.h}
            unoptimized
            priority
            className="block h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
