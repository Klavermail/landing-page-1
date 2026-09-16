import { results } from "@/content/site";

/**
 * Auto-scrolling strip of client outcomes, sitting where a client-logo bar
 * normally would. No brand is named, so it needs no permission to run.
 *
 * It reads from `results.items` — the same list the dashboard grid uses — so
 * updating a result in one place updates both, and the two can never disagree.
 */
export default function ResultsTicker() {
  const row = [...results.items, ...results.items];

  return (
    <div className="relative border-y border-line bg-panel/40 py-5">
      <div className="marquee-mask marquee-pausable overflow-hidden">
        <div className="marquee-track animate-marquee-logos">
          {row.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              aria-hidden={i >= results.items.length || undefined}
              className="flex shrink-0 items-center gap-3.5 border-l border-line px-8"
            >
              <span className="font-display text-[21px] leading-none text-lime">
                {item.metric}
              </span>
              <span className="text-[13.5px] whitespace-nowrap text-white/75">
                {item.caption}
              </span>
              <span className="font-mono text-[10px] tracking-[0.12em] whitespace-nowrap text-mute-2 uppercase">
                {item.niche}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
