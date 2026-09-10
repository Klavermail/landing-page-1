import type { ReactNode } from "react";

/**
 * Renders a headline string, turning *asterisk-wrapped* words into the lime
 * accent colour. Lets copy live as plain strings in content/site.ts.
 *
 *   "We turn email into *your best channel*"
 */
export function accent(text: string): ReactNode[] {
  return text.split(/(\*[^*]+\*)/g).filter(Boolean).map((chunk, i) => {
    if (chunk.startsWith("*") && chunk.endsWith("*")) {
      return (
        <span key={i} className="text-lime">
          {chunk.slice(1, -1)}
        </span>
      );
    }
    return <span key={i}>{chunk}</span>;
  });
}
