import { Section, SectionHeading } from "./Section";
import { faq } from "@/content/site";
import { Plus } from "./Icons";

export default function Faq() {
  // FAQPage structured data — lets these questions surface in search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <Section id="faq" className="border-t border-line">
      <SectionHeading eyebrow={faq.eyebrow} headline={faq.headline} align="center" />

      <div className="mx-auto mt-14 w-full max-w-[860px]">
        {faq.items.map((item, i) => (
          <details
            key={item.q}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${Math.min(i, 5) * 50}ms` }}
            className="group border-b border-line first:border-t"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 transition-colors duration-300 hover:text-lime [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[17.5px] leading-snug text-current sm:text-[19px]">
                {item.q}
              </h3>
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line-strong text-white/60 transition-all duration-300 group-hover:border-lime/50 group-hover:text-lime group-open:rotate-45 group-open:border-lime group-open:bg-lime group-open:text-black">
                <Plus className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="max-w-[70ch] pb-7 pr-10 text-[14.5px] leading-[1.72] text-mute text-pretty">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <p data-reveal className="mt-12 text-center text-[14.5px] text-mute">
        Still got a question?{" "}
        <a href="#book" className="font-medium text-lime underline decoration-lime/35 underline-offset-4 transition-colors hover:decoration-lime">
          Ask it on the call
        </a>
        .
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Section>
  );
}
