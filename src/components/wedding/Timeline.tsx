/** Vertical love-story timeline that draws itself on scroll. */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { Divider, Eyebrow } from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="story" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <Eyebrow>{wedding.timelineMeta.eyebrow}</Eyebrow>
          <h2 className="font-display mt-3 text-3xl font-light text-maroon sm:text-4xl">
            {wedding.timelineMeta.title}
          </h2>
          <Divider className="mt-6" />
        </Reveal>

        <ol ref={ref} className="relative mt-14 space-y-12 pl-10 sm:pl-16">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[7px] w-px bg-gold/20 sm:left-[23px]"
          />
          <motion.span
            aria-hidden="true"
            style={{ height }}
            className="absolute top-0 left-[7px] w-px bg-linear-to-b from-gold to-wine sm:left-[23px]"
          />

          {wedding.timeline.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.05} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-10 grid size-[15px] place-items-center rounded-full border border-gold bg-cream sm:-left-16"
              >
                <span className="size-1.5 rounded-full bg-wine" />
              </span>
              <p className="font-serif-caps text-[0.6rem] tracking-luxe text-gold uppercase">
                {step.year}
              </p>
              <h3 className="font-display mt-2 text-2xl font-light text-maroon">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}