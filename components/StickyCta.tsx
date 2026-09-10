"use client";

import { useEffect, useState } from "react";
import { cta } from "@/content/site";
import { Arrow } from "./Icons";

/**
 * Mobile-only sticky bar. Appears once the hero is off screen and hides again
 * over the booking section so it never covers the calendar.
 */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9;
      const book = document.getElementById("book");
      const atBooking = book ? book.getBoundingClientRect().top < window.innerHeight * 0.85 : false;
      setShow(past && !atBooking);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-black/85 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-transform duration-500 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a href="#book" className="btn btn-primary w-full">
        {cta.primary}
        <Arrow className="h-4 w-4" />
      </a>
    </div>
  );
}
