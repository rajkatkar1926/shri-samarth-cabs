"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}>{children}</motion.div>;
}
