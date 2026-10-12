"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollPin({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const trigger = ScrollTrigger.create({ trigger: element, start: "top top", end: "+=110%", pin: true, pinSpacing: true, anticipatePin: 1 });
    return () => trigger.kill();
  }, []);
  return <section ref={ref} id={id} className={className}>{children}</section>;
}
