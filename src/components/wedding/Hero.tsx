/** Fullscreen cinematic hero with parallax photograph. */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { Petals } from "@/components/wedding/Petals";
import { Divider } from "@/components/wedding/Ornaments";
import { wedding } from "@/data/wedding";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { bride, groom, photo } = wedding.couple;
  const { hero } = wedding;

  return (
    <section ref={ref} className="relative h-dvh min-h-[620px] overflow-hidden" id="home">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={photo}
          alt={`${groom.fullName} and ${bride.fullName}`}
          width={1280}
          height={1600}
          fetchPriority="high"
          className="size-full object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-maroon/50 via-maroon/25 to-maroon/75" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-maroon/85 via-maroon/45 to-transparent" />
      </motion.div>

      <Petals />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-20 text-center sm:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-caps text-[0.6rem] tracking-luxe text-ivory/90 uppercase sm:text-xs"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-4 text-5xl leading-[1.05] font-light text-ivory sm:text-6xl md:text-7xl"
        >
          <span className="block">{groom.name}</span>
          <span className="font-script my-1 block text-3xl text-gold-soft sm:text-4xl">
            {hero.separator}
          </span>
          <span className="block">{bride.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-6 w-full max-w-sm"
        >
          <Divider />
          <p className="font-serif-caps mt-5 text-[0.7rem] tracking-luxe text-ivory/95 uppercase sm:text-sm">
            {hero.occasion}
          </p>
          <p className="font-serif-caps mt-2 text-[0.7rem] tracking-luxe text-ivory/85 uppercase sm:text-sm">
            {hero.dateText}
          </p>
          <p className="mt-2 text-xs text-ivory/75 italic sm:text-sm">{wedding.venue.name}</p>
        </motion.div>

        <motion.a
          href="#bismillah"
          aria-label="Scroll to the invitation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="group mt-10 flex flex-col items-center gap-2 focus-visible:outline-hidden"
        >
          <span className="font-serif-caps text-[0.55rem] tracking-luxe text-ivory/70 uppercase">
            {hero.scrollLabel}
          </span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="block h-10 w-px bg-linear-to-b from-gold-soft to-transparent"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}