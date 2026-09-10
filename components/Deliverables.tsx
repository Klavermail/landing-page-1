import { Section, SectionHeading } from "./Section";
import { deliverables } from "@/content/site";
import { deliverableIcons } from "./Icons";

export default function Deliverables() {
  return (
    <Section id="included" className="border-t border-line">
      <SectionHeading
        eyebrow={deliverables.eyebrow}
        headline={deliverables.headline}
        sub={deliverables.sub}
        align="center"
      />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {deliverables.items.map((item, i) => {
          const Icon = deliverableIcons[i % deliverableIcons.length];
          return (
            <li
              key={item.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 4) * 70}ms` }}
              className="panel panel-hover flex flex-col p-6"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-lime/20 bg-lime/[0.08] text-lime">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-[17.5px] leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-mute">{item.body}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
