import EmailFrame from "./EmailFrame";
import { emailDesigns } from "@/content/site";

/**
 * Single row of email designs sitting immediately under the hero, so the craft
 * is the first thing a visitor sees rather than something 3,000px down.
 */
export default function EmailStrip() {
  if (emailDesigns.items.length === 0) return null;

  // A curated handful up here; the Work section further down shows them all.
  const picks = emailDesigns.items.filter((i) => i.hero);
  const items = picks.length > 0 ? picks : emailDesigns.items;
  const row = [...items, ...items];

  return (
    <section
      aria-label="Recent email designs"
      className="relative border-y border-line bg-panel/30 py-10"
    >
      <div className="marquee-mask marquee-pausable overflow-hidden">
        <div className="marquee-track animate-marquee gap-5">
          {row.map((item, i) => (
            <EmailFrame
              key={`${item.src}-${i}`}
              item={item}
              index={i % items.length}
              cloned={i >= items.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
