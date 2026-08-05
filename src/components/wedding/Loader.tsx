/** Opening screen: monogram reveal + "Enter invitation" gate. */

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { Divider, FloralCorner, Monogram } from "@/components/wedding/Ornaments";
import { wedding } from "@/data/wedding";

export function Loader({ onEnter }: { onEnter: () => void }) {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1600);
    return () => clearTimeout(t);
  }, []);

  const enter = () => {
    setOpen(false);
    onEnter();
  };

  const { bride, groom } = wedding.couple;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-cream px-6"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <FloralCorner className="absolute top-4 left-4 opacity-60" />
          <FloralCorner className="absolute right-4 bottom-4 rotate-180 opacity-60" />

          <div className="flex max-w-md flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Monogram left={groom.name.charAt(9)} right={bride.name.charAt(0)} />
            </motion.div>

            <motion.p
              className="font-script mt-8 text-4xl text-maroon sm:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {groom.name} &amp; {bride.name}
            </motion.p>

            <Divider className="mt-6 w-full" />

            <motion.p
              className="font-serif-caps mt-6 text-[0.65rem] tracking-luxe text-muted-foreground uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {wedding.date.short}
            </motion.p>

            <AnimatePresence>
              {ready && (
                <motion.button
                  type="button"
                  onClick={enter}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif-caps mt-10 rounded-xs border border-gold/60 bg-ivory/60 px-8 py-3 text-[0.7rem] tracking-luxe text-maroon uppercase transition-colors duration-500 hover:bg-champagne/60 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:outline-hidden"
                >
                  Enter Invitation
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
