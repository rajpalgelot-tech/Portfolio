"use client";

import { useEffect, useRef } from "react";

/**
 * The reference site's cursor: a snake of 40 white dots. The head sits
 * under the mouse and every following dot chases the one before it
 * (0.35 easing), shrinking along the chain — a smooth tapering trail.
 */
const COUNT = 40;

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const circles = Array.from(
      container.querySelectorAll<HTMLDivElement>(".circle"),
    );
    const trail = circles.map(() => ({ x: 0, y: 0 }));
    const target = { x: 0, y: 0 };

    const onMove = (event: MouseEvent) => {
      circles.forEach((circle) => circle.classList.remove("circle-hidden"));
      target.x = event.clientX;
      target.y = event.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      let x = target.x;
      let y = target.y;
      circles.forEach((circle, i) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.scale = `${(circles.length - i) / circles.length}`;
        trail[i] = { x, y };
        const next = trail[i + 1] ?? trail[0];
        x += (next.x - x) * 0.35;
        y += (next.y - y) * 0.35;
      });
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true" style={{ display: "contents" }}>
      {Array.from({ length: COUNT }).map((_, i) => (
        <div key={i} className="circle circle-hidden" />
      ))}
    </div>
  );
}
