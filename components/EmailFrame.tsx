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
  cloned = false,
}: {
  item: Design;
  index: number;
  cloned?: boolean;
}) {

  return (
    <figure className="email-card group shrink-0" aria-hidden={cloned || undefined}>
      <button
        type="button"
        data-email-open={cloned ? undefined : index}
        tabIndex={cloned ? -1 : undefined}
        aria-label={cloned ? undefined : `View ${item.brand} email design`}
        className="block cursor-pointer"
      >
        <span
          /* 300px is the retina ceiling for a 600px export: 600 / 300 is exactly 2x */
          className="relative block h-[560px] w-[300px] overflow-hidden rounded-[12px] border border-line bg-white transition-all duration-500 group-hover:border-lime/40 group-hover:shadow-[0_26px_64px_-22px_rgba(198,255,0,0.3)]"
        >
          <Image
            src={item.src}
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
            <span className="font-mono text-[10px] tracking-[0.14em] text-white/55 uppercase transition-colors duration-500 group-hover:text-lime">
              {item.brand}
            </span>
          </figcaption>
        )}
      </button>
    </figure>
  );
}
