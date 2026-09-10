type P = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const Check = ({ className }: P) => (
  <svg {...base} strokeWidth={2} className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Cross = ({ className }: P) => (
  <svg {...base} strokeWidth={2} className={className}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Arrow = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5" />
  </svg>
);

export const Plus = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Star = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M12 2.4l2.9 5.9 6.5.95-4.7 4.6 1.11 6.47L12 17.27l-5.81 3.05L7.3 13.85 2.6 9.25l6.5-.95L12 2.4z" />
  </svg>
);

export const Quote = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M9.5 5.5c-3.6 1.5-5.5 4.4-5.5 8.2 0 3.1 1.7 5 4.2 5 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.3 0-.6 0-.8.1.3-1.7 1.6-3.2 3.4-4.2l-1.7-2.1zm9.3 0c-3.6 1.5-5.5 4.4-5.5 8.2 0 3.1 1.7 5 4.2 5 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.3 0-.6 0-.8.1.3-1.7 1.6-3.2 3.4-4.2l-1.7-2.1z" />
  </svg>
);

/* ── Deliverable icons, in content order ──────────────────────────────── */

export const IconFlow = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="3" width="6" height="5" rx="1.5" />
    <rect x="15" y="9.5" width="6" height="5" rx="1.5" />
    <rect x="3" y="16" width="6" height="5" rx="1.5" />
    <path d="M9 5.5h3a2 2 0 0 1 2 2v4.5M9 18.5h3a2 2 0 0 0 2-2V12" />
  </svg>
);

export const IconCalendar = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 10h18M8 3v4M16 3v4" />
    <path d="M8 14.5h2M14 14.5h2M8 18h2" />
  </svg>
);

export const IconPen = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7.5 18.5l-4 1 1-4 12-12z" />
    <path d="M14.5 5.5l3 3" />
  </svg>
);

export const IconDesign = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M3 8.5h18M8.5 8.5V21" />
    <path d="M12.5 12.5h5M12.5 16h3" />
  </svg>
);

export const IconSegment = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v9l7.5 4.5" />
  </svg>
);

export const IconShield = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3l7.5 3v5.5c0 4.5-3 8-7.5 9.5-4.5-1.5-7.5-5-7.5-9.5V6L12 3z" />
    <path d="M9 12l2.2 2.2L15.5 10" />
  </svg>
);

export const IconGrowth = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 20h18" />
    <path d="M6.5 20v-5.5M11.5 20V9M16.5 20V13" />
    <path d="M14.5 4.5h5v5" />
    <path d="M19.5 4.5 12 12" />
  </svg>
);

export const IconReport = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="4" y="3" width="16" height="18" rx="2.5" />
    <path d="M8 8h8M8 12h8M8 16h4" />
  </svg>
);

export const deliverableIcons = [
  IconFlow,
  IconCalendar,
  IconPen,
  IconDesign,
  IconSegment,
  IconShield,
  IconGrowth,
  IconReport,
];
