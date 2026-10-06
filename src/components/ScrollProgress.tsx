"use client";

import { useEffect, useRef } from "react";

/**
 * The small accent dot pinned to the right edge with a line that grows
 * downward as you scroll (the reference site's `.scroll-bar`).
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      el.style.setProperty("--p", `${progress * 100}%`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className="scroll-bar" ref={ref} aria-hidden="true" />;
}
