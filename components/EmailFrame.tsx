import Image from "next/image";
import { emailDesigns } from "@/content/site";

type Design = (typeof emailDesigns.items)[number];

/**
 * A single email design card — flat, no device chrome.
 *
 * Images are served unoptimized: Next's optimizer re-encodes them to JPEG and
 * halves their width, which is worse than the source in both format and
 * resolution.
 */
export default function EmailFrame({
  item,
  index,
  size = "lg",
  cloned = false,
}: {
  item: Design;
  index: number;
  size?: "sm" | "lg";
  cloned?: boolean;
}) {
  // 300px is the retina threshold for a 600px-wide export: 600 / 300 = exactly
  // 2x. Wider than this and the source can no longer cover a retina screen.
  const screen = size === "lg" ? "w-[300px] h-[560px]" : "w-[172px] h-[320px]";

  return (
    <figure
      className={`email-card group shrink-0 ${size === "lg" ? "email-card-lg" : "email-card-sm"}`}
      aria-hidden={cloned || undefined}
    >
      <button
        type="button"
        data-email-open={cloned ? undefined : index}
        tabIndex={cloned ? -1 : undefined}
        aria-label={cloned ? undefined : `View ${item.brand} email design`}
        className="block cursor-pointer"
      >
        <span
          className={`relative block overflow-hidden border border-line bg-white transition-all duration-500 group-hover:border-lime/40 group-hover:shadow-[0_26px_64px_-22px_rgba(198,255,0,0.3)] ${screen} ${
            size === "lg" ? "rounded-[12px]" : "rounded-[10px]"
          }`}
        >
          <Image
            /*
              The strip card is 172px wide, so it gets a 344px file — exactly 2x
              for a retina screen. Serving the full 600px export there costs 3.4x
              the bytes and shows nothing extra.
            */
            src={size === "lg" ? item.src : item.srcSm}
            alt={cloned ? "" : item.alt}
            width={item.w}
            height={item.h}
            unoptimized
            loading="lazy"
            placeholder="blur"
            blurDataURL={item.blur}
            className="email-scroll block h-auto w-full"
          />
        </span>

        {!cloned && (
          <figcaption className="flex items-center justify-between gap-2 px-0.5 pt-3">
            <span
              className={`font-mono tracking-[0.14em] text-white/55 uppercase transition-colors duration-500 group-hover:text-lime ${
                size === "lg" ? "text-[10px]" : "text-[9px]"
              }`}
            >
              {item.brand}
            </span>
          </figcaption>
        )}
      </button>
    </figure>
  );
}
