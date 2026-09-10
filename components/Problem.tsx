import { Section, SectionHeading } from "./Section";
import { problem } from "@/content/site";

export default function Problem() {
  return (
    <Section id="problem">
      <SectionHeading
        eyebrow={problem.eyebrow}
        headline={problem.headline}
        sub={problem.sub}
      />

      <ul className="mt-14 grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2">
        {problem.pains.map((p, i) => (
          <li
            key={p.title}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            className="group relative bg-black p-7 transition-colors duration-500 hover:bg-panel-2 sm:p-9"
          >
            <span className="font-mono text-[11px] tracking-[0.16em] text-lime/45">
              0{i + 1}
            </span>
            <h3 className="font-display mt-4 text-[21px] leading-tight text-white">
              {p.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-mute">{p.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
