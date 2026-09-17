import Image from "next/image";
import { emailDesigns } from "@/content/site";

type Design = (typeof emailDesigns.items)[number];

/**
 * An email shown inside a phone frame.
 *
 * Emails are read on a phone ~70% of the time, so the frame is the honest
 * presentation — and it does useful work besides: a phone screen is naturally
 * ~250px wide, which is close to these images' true pixel width, so they are
 * displayed near 1:1 instead of being upscaled into mush.
 *
 * Hovering scrolls the design through the screen, the way you'd thumb it.
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
  const screen = size === "lg" ? "w-[236px] h-[472px]" : "w-[150px] h-[300px]";

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
        {/* phone body */}
        <span
          className={`relative block rounded-[26px] border border-white/12 bg-[#0d0f0c] p-[5px] shadow-[0_18px_50px_-20px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-lime/40 group-hover:shadow-[0_26px_64px_-22px_rgba(198,255,0,0.3)] ${
            size === "sm" ? "rounded-[18px] p-[4px]" : ""
          }`}
        >
          {/* screen */}
          <span
            className={`relative block overflow-hidden bg-white ${screen} ${
              size === "lg" ? "rounded-[21px]" : "rounded-[14px]"
            }`}
          >
            <Image
              src={item.src}
              alt={cloned ? "" : item.alt}
              width={item.w}
              height={item.h}
              /*
                unoptimized: Next's optimizer re-encodes these to JPEG and, because
                they are 2000px tall, halves them to 147px wide — worse than the
                source in both format and resolution. The files are already WebP
                and 48-192KB, so there is nothing to gain and detail to lose.
              */
              unoptimized
              className="email-scroll block h-auto w-full"
            />
          </span>

          {/* notch */}
          <span
            aria-hidden
            className={`absolute left-1/2 top-[9px] -translate-x-1/2 rounded-full bg-[#0d0f0c] ${
              size === "lg" ? "h-[5px] w-[54px]" : "h-[3px] w-[34px]"
            }`}
          />
        </span>

        {!cloned && (
          <figcaption
            className={`flex items-center justify-between gap-2 px-1 pt-3 ${
              size === "sm" ? "pt-2" : ""
            }`}
          >
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
