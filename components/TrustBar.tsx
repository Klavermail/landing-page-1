import Image from "next/image";
import { clients } from "@/content/site";

/**
 * Auto-scrolling client wordmark bar. The list is rendered twice so the
 * -50% translate loops seamlessly.
 */
export default function TrustBar() {
  const row = [...clients, ...clients];

  return (
    <div className="relative border-y border-line bg-panel/40 py-7">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track animate-marquee-logos gap-14 sm:gap-20">
          {row.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex h-8 shrink-0 items-center opacity-45 transition-opacity duration-500 hover:opacity-100"
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={132}
                height={30}
                className="h-[26px] w-auto"
                aria-hidden={i >= clients.length}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
