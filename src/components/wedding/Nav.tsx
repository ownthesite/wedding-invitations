/** Slim anchor navigation that appears after the hero. */

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

import { wedding } from "@/data/wedding";


export function Nav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setVisible(value > 600);
  });

  return (
    <motion.nav
      aria-label="Sections"
      initial={false}
      animate={{ y: visible ? 0 : -70, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-gold/20 bg-cream/85 backdrop-blur-md"
    >
      <ul className="mx-auto flex max-w-4xl items-center justify-center gap-4 overflow-x-auto px-4 py-3 sm:gap-8">
        {wedding.nav.map((link) => (
          <li key={link.href} className="shrink-0">
            <a
              href={link.href}
              className="font-serif-caps text-[0.55rem] tracking-luxe text-maroon/80 uppercase transition-colors duration-300 hover:text-gold focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-hidden sm:text-[0.62rem]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}