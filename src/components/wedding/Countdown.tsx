/** Countdown to the wedding moment. Hydration-safe (computed after mount). */

import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { Divider, Eyebrow } from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getRemaining(target: number): Remaining {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number | null; label: string }) {
  const text = value === null ? "––" : String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative grid h-20 w-16 place-items-center rounded-xs border border-gold/40 bg-ivory/70 sm:h-28 sm:w-24">
        <motion.span
          key={text}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl font-light text-maroon tabular-nums sm:text-5xl"
        >
          {text}
        </motion.span>
      </div>
      <span className="font-serif-caps mt-3 text-[0.55rem] tracking-luxe text-gold uppercase">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const target = new Date(wedding.date.iso).getTime();
  const [left, setLeft] = useState<Remaining | null>(null);

  useEffect(() => {
    setLeft(getRemaining(target));
    const id = setInterval(() => setLeft(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section id="countdown" className="px-6 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>Counting the days</Eyebrow>
        <h2 className="font-display mt-3 text-3xl font-light text-maroon sm:text-4xl">
          Until Our Nikah
        </h2>
        <Divider className="mt-6" />

        <div
          className="mt-10 flex items-start justify-center gap-3 sm:gap-6"
          aria-live="polite"
          aria-label="Time remaining until the wedding"
        >
          <Unit value={left?.days ?? null} label="Days" />
          <Unit value={left?.hours ?? null} label="Hours" />
          <Unit value={left?.minutes ?? null} label="Minutes" />
          <Unit value={left?.seconds ?? null} label="Seconds" />
        </div>

        <p className="mt-8 text-sm text-muted-foreground italic">{wedding.date.long}</p>
      </Reveal>
    </section>
  );
}
