import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { site } from "@/content/site";

/**
 * Shared shell for the legal pages. Same palette and type as the landing page,
 * but a plain reading layout — no motion, no CTAs competing with the text.
 */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-line">
        <div className="mx-auto flex h-[68px] w-full max-w-[820px] items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Klavermail home">
            <Logo />
          </Link>
          <Link
            href="/"
            className="text-[13.5px] text-mute transition-colors hover:text-lime"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[820px] px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="font-display text-[clamp(2rem,5vw,3rem)] text-white">{title}</h1>
        <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-mute-2 uppercase">
          Last updated {updated}
        </p>

        <div className="legal mt-12">{children}</div>

        <div className="hairline my-14" />

        <p className="text-[13.5px] text-mute">
          Questions about this page?{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-lime underline decoration-lime/35 underline-offset-4 transition-colors hover:decoration-lime"
          >
            {site.email}
          </a>
        </p>
      </main>
    </div>
  );
}
