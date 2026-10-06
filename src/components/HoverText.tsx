import type { CSSProperties } from "react";

/**
 * Splits text into per-character spans with a staggered roll-up hover
 * animation (pure CSS — see .hover-text in globals.css).
 */
export default function HoverText({ text }: { text: string }) {
  return (
    <span className="hover-text" aria-label={text}>
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          aria-hidden="true"
          data-char={char}
          style={{ "--delay": `${i * 0.02}s` } as CSSProperties}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
