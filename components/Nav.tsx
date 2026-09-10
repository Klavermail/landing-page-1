"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cta, nav, site } from "@/content/site";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-white/8 bg-black/72 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#hero" aria-label="Klavermail home" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-[14px] font-medium text-mute transition-colors duration-300 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a href="#book" className="btn btn-primary hidden !px-5 !py-2.5 !text-[14px] sm:inline-flex">
            {cta.primary}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-white transition-colors hover:bg-white/8 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-line bg-black/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-5">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3.5 font-display text-2xl text-white/85 transition-colors hover:text-lime"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-5 w-full"
          >
            {cta.primary}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 py-2 text-center font-mono text-xs tracking-widest text-mute-2 uppercase"
          >
            {site.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
