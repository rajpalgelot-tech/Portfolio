"use client";

import { useEffect, useRef } from "react";

/**
 * Replaces the native cursor with a white dot (the reference site's
 * `.circle`). Over links/buttons it narrows into a thin I-beam caret.
 */
export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    el.style.transform = "translate(-60px, -60px)";

    let raf = 0;
    const move = (event: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const thin = (event.target as Element | null)?.closest("a, button");
        el.classList.toggle("circle-thin", Boolean(thin));
        const { clientX: x, clientY: y } = event;
        el.style.transform = thin
          ? `translate(${x - 1}px, ${y - 10}px)`
          : `translate(${x - 12}px, ${y - 12}px)`;
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="circle" ref={ref} aria-hidden="true" />;
}
