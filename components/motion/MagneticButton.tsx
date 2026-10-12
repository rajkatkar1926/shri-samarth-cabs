"use client";

import { MouseEvent, ReactNode, useRef } from "react";

export function MagneticButton({ children, className = "", href, ...props }: {
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - box.left - box.width / 2;
    const dy = event.clientY - box.top - box.height / 2;
    event.currentTarget.style.transform = `translate(${dx * 0.12}px, ${dy * 0.12}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = "translate(0, 0)"; };
  return <a ref={ref} href={href} onMouseMove={move} onMouseLeave={reset} className={`magnetic ${className}`} {...props}>{children}</a>;
}
