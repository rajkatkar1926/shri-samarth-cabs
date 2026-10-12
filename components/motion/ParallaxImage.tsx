"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxImage({ src, alt, className = "", priority = false, sizes = "(max-width: 768px) 100vw, 50vw", quality = 90 }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string; quality?: number }) {
  const image = useRef<HTMLImageElement>(null);
  const isTemplePhoto = src.startsWith("/temples/");
  const [available, setAvailable] = useState(isTemplePhoto);
  useEffect(() => {
    if (isTemplePhoto) return;
    const controller = new AbortController();
    fetch(src, { method: "HEAD", signal: controller.signal }).then((response) => setAvailable(response.ok)).catch(() => setAvailable(false));
    return () => controller.abort();
  }, [isTemplePhoto, src]);
  useEffect(() => {
    const target = image.current;
    if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (className.includes("temple-still-image") && window.matchMedia("(max-width: 760px)").matches) return;
    const tween = gsap.fromTo(target, { yPercent: -15 }, { yPercent: 15, ease: "none", scrollTrigger: { trigger: target, scrub: 1 } });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [className]);
  return available ? <Image ref={image} src={src} alt={alt} fill sizes={sizes} quality={quality} priority={priority} className={className} onError={() => setAvailable(false)} /> : null;
}
