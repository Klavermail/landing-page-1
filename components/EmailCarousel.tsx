import DragScroller from "./DragScroller";
import EmailFrame from "./EmailFrame";
import { SectionHeading } from "./Section";
import { emailDesigns } from "@/content/site";

type Design = (typeof emailDesigns.items)[number];

function Row({
  items,
  offset,
  speed,
}: {
  items: Design[];
  offset: number;
  speed: number;
}) {
  const doubled = [...items, ...items];
  return (
    <DragScroller speed={speed}>
      <div className="flex w-max gap-4 sm:gap-6">
        {doubled.map((item, i) => (
          <EmailFrame
            key={`${item.src}-${i}`}
            item={item}
            index={offset + (i % items.length)}
            cloned={i >= items.length}
          />
        ))}
      </div>
    </DragScroller>
  );
}

export default function EmailCarousel() {
  if (emailDesigns.items.length === 0) return null;

  const { items } = emailDesigns;
  const half = Math.ceil(items.length / 2);

  return (
    <section id="work" className="relative overflow-hidden border-t border-line py-20 md:py-24">
      <div
        aria-hidden
        className="bloom left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.09]"
      />

      <div className="mx-auto mb-14 w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow={emailDesigns.eyebrow}
          headline={emailDesigns.headline}
          sub={emailDesigns.sub}
        />
      </div>

      <div data-reveal className="flex flex-col gap-6 sm:gap-7">
        <Row items={items.slice(0, half)} offset={0} speed={46} />
        <Row items={items.slice(half)} offset={half} speed={32} />
      </div>

      <p className="mx-auto mt-12 w-full max-w-[1200px] px-5 font-mono text-[11px] tracking-[0.14em] text-mute-2 uppercase sm:px-8">
        Hover to preview · click to open full size
      </p>
    </section>
  );
}
