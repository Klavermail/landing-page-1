/**
 * Klavermail mark — a four-leaf clover pinwheel ("klaver" = clover).
 * Pure SVG so it stays crisp at any size and inherits currentColor.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <g fill="currentColor">
        {[0, 90, 180, 270].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg} 12 12)`}
            d="M12 12C12 5.4 14.9 2.8 17.6 4.2C20.3 5.6 19.3 9.9 12 12Z"
          />
        ))}
      </g>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-[22px] w-[22px] text-lime" />
      <span className="font-display text-[19px] font-semibold tracking-[-0.035em] text-white">
        Klavermail
      </span>
    </span>
  );
}
