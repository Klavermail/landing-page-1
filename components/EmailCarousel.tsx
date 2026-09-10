import Image from "next/image";
import { SectionHeading } from "./Section";
import { emailDesigns } from "@/content/site";

type Design = (typeof emailDesigns.items)[number];

function Card({ item, cloned }: { item: Design; cloned: boolean }) {
  return (
    <figure
      className="group relative w-[228px] shrink-0 sm:w-[268px]"
      aria-hidden={cloned || undefined}
    >
      <div className="relative overflow-hidden rounded-[14px] border border-line bg-panel-2 transition-all duration-500 group-hover:border-lime/40 group-hover:shadow-[0_24px_60px_-24px_rgba(198,255,0,0.35)]">
        <Image
          src={item.src}
          alt={cloned ? "" : item.alt}
          width={600}
          height={900}
          sizes="(max-width: 640px) 228px, 268px"
          className="h-auto w-full"
        />
        {/* fade the long tail of the email so cards end cleanly */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/75 to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-3.5">
          <span className="font-mono text-[10px] tracking-[0.14em] text-white/70 uppercase">
            {item.brand}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-lime opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </figcaption>
      </div>
    </figure>
  );
}

function Row({ items, speed }: { items: Design[]; speed: "normal" | "slow" }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask marquee-pausable overflow-hidden">
      <div
        className={`marquee-track gap-4 sm:gap-5 ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <Card key={`${item.src}-${i}`} item={item} cloned={i >= items.length} />
        ))}
      </div>
    </div>
  );
}

export default function EmailCarousel() {
  const { items } = emailDesigns;
  const half = Math.ceil(items.length / 2);

  return (
    <section id="work" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div aria-hidden className="bloom left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.09]" />

      <div className="mx-auto mb-14 w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow={emailDesigns.eyebrow}
          headline={emailDesigns.headline}
          sub={emailDesigns.sub}
        />
      </div>

      {/* Two rows, both drifting right → left, second one slower for depth */}
      <div data-reveal className="flex flex-col gap-4 sm:gap-5">
        <Row items={items.slice(0, half)} speed="normal" />
        <Row items={items.slice(half)} speed="slow" />
      </div>

      <p className="mx-auto mt-10 w-full max-w-[1200px] px-5 font-mono text-[11px] tracking-[0.14em] text-mute-2 uppercase sm:px-8">
        Hover to pause
      </p>
    </section>
  );
}
