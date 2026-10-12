"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MotionProvider() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
    const progressTrigger = progress
      ? ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => progress.style.transform = `scaleX(${self.progress})`,
        })
      : undefined;

    return () => {
      progressTrigger?.kill();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
