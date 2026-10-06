"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive hexagon background — a faithful port of the reference site's
 * `hex-canvas`: a flat-top honeycomb grid where tiles light up around the
 * mouse (fill + outline + soft halo) and fade out after it moves away.
 *
 * `RGB` is the accent color as "r,g,b" — keep in sync with --primary in
 * globals.css.
 */
const HEX_RADIUS = 40;
const HOVER_RADIUS = 280;
const DECAY_PER_FRAME = 0.92;
const RGB = "171, 108, 255";

type Hex = { cx: number; cy: number; glow: number };
type Point = [number, number];

function hexPoints(cx: number, cy: number, r: number): Point[] {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)] as Point;
  });
}

function traceHex(ctx: CanvasRenderingContext2D, points: Point[]) {
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1]);
  ctx.closePath();
}

export default function HexCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let hexes: Hex[] = [];
    const mouse = { x: -9999, y: -9999 };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      hexes = [];
      const stepX = HEX_RADIUS * Math.sqrt(3);
      const stepY = HEX_RADIUS * 1.5;
      const cols = Math.ceil(canvas.width / stepX) + 2;
      const rows = Math.ceil(canvas.height / stepY) + 2;
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          hexes.push({
            cx: col * stepX + (row % 2 !== 0 ? stepX / 2 : 0),
            cy: row * stepY,
            glow: 0,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const hex of hexes) {
        const dx = hex.cx - mouse.x;
        const dy = hex.cy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < HOVER_RADIUS) {
          hex.glow = Math.max(hex.glow, (1 - dist / HOVER_RADIUS) ** 1.6);
        }
        hex.glow *= DECAY_PER_FRAME;
        if (hex.glow < 0.004) continue;

        const points = hexPoints(hex.cx, hex.cy, HEX_RADIUS - 1.5);
        traceHex(ctx, points);
        ctx.fillStyle = `rgba(${RGB}, ${hex.glow * 0.11})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${RGB}, ${hex.glow * 0.7})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();

        if (hex.glow > 0.4) {
          const halo = ctx.createRadialGradient(
            hex.cx, hex.cy, 0, hex.cx, hex.cy, HEX_RADIUS * 0.8,
          );
          halo.addColorStop(0, `rgba(${RGB}, ${(hex.glow - 0.4) * 0.28})`);
          halo.addColorStop(1, `rgba(${RGB}, 0)`);
          traceHex(ctx, points);
          ctx.fillStyle = halo;
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    init();
    draw();
    window.addEventListener("resize", init);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas className="hex-canvas" ref={canvasRef} aria-hidden="true" />;
}
