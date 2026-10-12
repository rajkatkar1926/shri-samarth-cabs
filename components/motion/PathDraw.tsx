"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PathDraw() {
  const paths = useRef<SVGPathElement[]>([]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tweens = paths.current.map((path) => {
      if (!path) return undefined;
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      return gsap.to(path, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: "#circuit", start: "top top", end: "bottom bottom", scrub: 1 } });
    });
    return () => tweens.forEach((tween) => { tween?.scrollTrigger?.kill(); tween?.kill(); });
  }, []);
  const add = (path: SVGPathElement | null) => { if (path && !paths.current.includes(path)) paths.current.push(path); };
  return <svg className="circuit-svg" viewBox="0 0 600 520" aria-label="Route diagram from Solapur to four pilgrimage destinations" role="img">
    <circle cx="285" cy="276" r="34" className="map-center" />
    <text x="285" y="281" textAnchor="middle" className="map-label center-label">SOLAPUR</text>
    <path ref={add} d="M285 276 C220 236 188 198 134 119" className="map-path" />
    <path ref={add} d="M285 276 C345 222 391 174 455 142" className="map-path" />
    <path ref={add} d="M285 276 C230 326 180 361 119 411" className="map-path" />
    <path ref={add} d="M285 276 C354 326 397 370 474 420" className="map-path" />
    {[ [134,119,"TULJAPUR"], [455,142,"AKKALKOT"], [119,411,"PANDHARPUR"], [474,420,"GANGAPUR"] ].map(([x,y,label]) => <g key={String(label)}><circle cx={Number(x)} cy={Number(y)} r="8" className="map-stop"/><text x={Number(x)} y={Number(y) - 18} textAnchor="middle" className="map-label">{label}</text></g>)}
  </svg>;
}
