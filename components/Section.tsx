import type { ReactNode } from "react";
import { accent } from "@/lib/accent";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  headline,
  sub,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  headline: string;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <p
          data-reveal
          className={`eyebrow mb-5 flex items-center gap-2.5 ${centered ? "justify-center" : ""}`}
        >
          <span aria-hidden className="h-px w-8 bg-lime/50" />
          {eyebrow}
          {centered && <span aria-hidden className="h-px w-8 bg-lime/50" />}
        </p>
      )}
      <h2
        data-reveal
        style={{ ["--reveal-delay" as string]: "70ms" }}
        className="font-display t-h2 text-balance text-white"
      >
        {accent(headline)}
      </h2>
      {sub && (
        <p
          data-reveal
          style={{ ["--reveal-delay" as string]: "140ms" }}
          className="t-lead mt-6 text-pretty"
        >
          {sub}
        </p>
      )}
    </div>
  );
}
