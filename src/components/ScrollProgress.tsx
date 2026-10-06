"use client";

import { useEffect, useState } from "react";

/**
 * The reference site's scroll indicator: a small accent dot that slides
 * down the right edge as you scroll, with a fading trail stretching
 * above it (exact port of the original's `.scroll-bar` behavior).
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min((scrolled / max) * 100, 98));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="scroll-bar"
      style={{ top: `${progress}%`, "--p": `${progress * 100}%` } as React.CSSProperties}
      aria-hidden="true"
    />
  );
}
