"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * A horizontal strip that scrolls itself, and that you can also scroll by hand.
 *
 * The CSS marquee this replaces could not do both: a running `transform`
 * animation has nowhere to put a drag offset. So this is a real scroll
 * container and the drift is applied to `scrollLeft` each frame, which means
 * touch swiping, trackpad gestures, keyboard focus and mouse dragging all work
 * for free, and the drift simply resumes when the hands come off.
 *
 * Children must be rendered twice by the caller; the scroll position wraps at
 * the halfway mark so the loop is seamless in both directions.
 */
export default function DragScroller({
  speed = 40,
  className = "",
  children,
}: {
  /** pixels per second of automatic drift */
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const idleAt = useRef(0);      // timestamp after which drift may resume
  const dragging = useRef(false);
  const moved = useRef(0);
  const lastX = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const half = () => el.scrollWidth / 2;

    /** keeps scrollLeft inside the first copy so the loop never ends */
    const wrap = () => {
      const h = half();
      if (h <= 0) return;
      if (el.scrollLeft >= h) el.scrollLeft -= h;
      else if (el.scrollLeft <= 0) el.scrollLeft += h;
    };

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 100) / 1000;
      last = now;
      if (!reduced && !dragging.current && now >= idleAt.current && !el.matches(":hover")) {
        el.scrollLeft += speed * dt;
      }
      wrap();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    /** any manual scroll — wheel, trackpad, touch — holds the drift off briefly */
    const hold = () => { idleAt.current = performance.now() + 1500; };
    el.addEventListener("wheel", hold, { passive: true });
    el.addEventListener("touchstart", hold, { passive: true });
    el.addEventListener("touchmove", hold, { passive: true });

    /**
     * Mouse only — touch already has native momentum scrolling and hijacking it
     * would feel worse than the browser's own.
     *
     * Deliberately plain mouse events on `window` rather than pointer events
     * with setPointerCapture: capture retargets the move stream, and an earlier
     * pointer-based version silently received no moves at all, so dragging did
     * nothing. Listening on window also keeps the drag alive when the cursor
     * leaves the strip mid-gesture.
     */
    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;
      moved.current += Math.abs(dx);
      el.scrollLeft -= dx;
      wrap();
    };
    const onMouseUp = () => {
      dragging.current = false;
      idleAt.current = performance.now() + 1500;
      el.style.cursor = "";
      document.body.style.userSelect = "";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      e.preventDefault();               // stop the browser's own image drag
      dragging.current = true;
      moved.current = 0;
      lastX.current = e.clientX;
      el.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };
    el.addEventListener("mousedown", onMouseDown);

    /** a drag that ends on a card must not also count as a click on it */
    const swallowClick = (e: MouseEvent) => {
      if (moved.current > 6) {
        e.preventDefault();
        e.stopPropagation();
        moved.current = 0;
      }
    };
    el.addEventListener("click", swallowClick, true);

    // start part-way in so there is content to the left immediately
    el.scrollLeft = 1;

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("wheel", hold);
      el.removeEventListener("touchstart", hold);
      el.removeEventListener("touchmove", hold);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("click", swallowClick, true);
      document.body.style.userSelect = "";
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`drag-scroller marquee-mask cursor-grab overflow-x-auto ${className}`}
      role="region"
      aria-label="Email designs — drag or swipe to browse"
    >
      {children}
    </div>
  );
}
