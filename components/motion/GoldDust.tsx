"use client";

import { useEffect, useRef } from "react";

type Speck = { x: number; y: number; r: number; vy: number; vx: number; phase: number };

export function GoldDust({ count = 36 }: { count?: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const el = canvas.current;
    const ctx = el?.getContext("2d");
    if (!el || !ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const specks: Speck[] = [];
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = el.clientWidth;
      height = el.clientHeight;
      el.width = width * ratio;
      el.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const sprite = document.createElement("canvas");
    sprite.width = sprite.height = 32;
    const sctx = sprite.getContext("2d");
    if (sctx) {
      const g = sctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, "rgba(255,225,150,1)");
      g.addColorStop(.35, "rgba(255,170,60,.55)");
      g.addColorStop(1, "rgba(255,150,40,0)");
      sctx.fillStyle = g;
      sctx.fillRect(0, 0, 32, 32);
    }
    const seed = (): Speck => ({ x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.8 + .6, vy: Math.random() * .35 + .12, vx: (Math.random() - .5) * .18, phase: Math.random() * Math.PI * 2 });
    resize();
    for (let i = 0; i < count; i++) specks.push(seed());
    const draw = (time: number) => {
      frame = requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, width, height);
      for (const s of specks) {
        s.y -= s.vy;
        s.x += s.vx + Math.sin(time / 1800 + s.phase) * .15;
        if (s.y < -8) { s.y = height + 8; s.x = Math.random() * width; }
        ctx.globalAlpha = .35 + Math.sin(time / 700 + s.phase) * .25;
        const size = s.r * 8;
        ctx.drawImage(sprite, s.x - size / 2, s.y - size / 2, size, size);
      }
    };
    frame = requestAnimationFrame(draw);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(el);
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("resize", resize); };
  }, [count]);
  return <canvas ref={canvas} className="gold-dust" aria-hidden="true" />;
}
