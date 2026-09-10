import { Logo } from "./Logo";
import { footer, site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))_minmax(0,1fr)]">
          {/* ── Brand ────────────────────────────────────────────────── */}
          <div>
            <Logo />
            <p className="mt-5 max-w-[36ch] text-[13.5px] leading-relaxed text-mute">
              {footer.blurb}
            </p>
            <a
              href="#book"
              className="btn btn-primary mt-7 !px-5 !py-2.5 !text-[13.5px]"
            >
              Book a free audit call
            </a>
          </div>

          {/* ── Link columns ─────────────────────────────────────────── */}
          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-[10.5px] tracking-[0.16em] text-white/40 uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label + l.href}>
                    <a
                      href={l.href}
                      className="text-[13.5px] text-mute transition-colors duration-300 hover:text-lime"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* ── Contact ──────────────────────────────────────────────── */}
          <div>
            <h3 className="font-mono text-[10.5px] tracking-[0.16em] text-white/40 uppercase">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[13.5px] text-mute transition-colors duration-300 hover:text-lime"
                >
                  {site.email}
                </a>
              </li>
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13.5px] text-mute transition-colors duration-300 hover:text-lime"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" />

        <div className="flex flex-col-reverse items-start justify-between gap-5 pt-7 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-mute-2">
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {footer.legal.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[12.5px] text-mute-2 transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the viewport bottom */}
      <p
        aria-hidden
        className="font-display pointer-events-none mt-10 select-none text-center text-[clamp(3.5rem,15vw,13rem)] leading-[0.8] tracking-[-0.05em] text-white/[0.035]"
      >
        Klavermail
      </p>
    </footer>
  );
}
