/** Masonry gallery with an accessible lightbox. */

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Divider, Eyebrow } from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";
import { cn } from "@/lib/utils";

const SPAN_CLASS = {
  normal: "",
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
} as const;

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close]);

  const current = active === null ? null : wedding.gallery[active];

  return (
    <section id="gallery" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Eyebrow>Moments</Eyebrow>
          <h2 className="font-display mt-3 text-3xl font-light text-maroon sm:text-4xl">
            Our Gallery
          </h2>
          <Divider className="mt-6" />
        </Reveal>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3">
          {wedding.gallery.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 0.06}
              className={cn("min-h-0", SPAN_CLASS[image.span])}
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View photo: ${image.alt}`}
                className="group size-full overflow-hidden rounded-xs border border-gold/25 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-50 grid place-items-center bg-maroon/85 p-4 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close photo"
              autoFocus
              className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-gold/50 text-ivory focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <motion.img
              src={current.src}
              alt={current.alt}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[85dvh] max-w-full rounded-xs border border-gold/30 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}