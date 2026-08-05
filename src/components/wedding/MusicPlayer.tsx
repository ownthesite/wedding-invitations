/** Optional ambient background music, configured from `data/wedding.ts`. */

import { Music, VolumeX } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { wedding } from "@/data/wedding";

export function MusicPlayer() {
  const { music } = wedding;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!music.enabled) return;
    audioRef.current?.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, [music.enabled]);

  if (!music.enabled) return null;

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play().then(() => setPlaying(true));
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music.src} loop preload="none" />
      <motion.button
        type="button"
        onClick={toggle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        aria-label={playing ? `Pause ${music.title}` : `Play ${music.title}`}
        aria-pressed={playing}
        className="fixed right-4 bottom-4 z-40 grid size-11 place-items-center rounded-full border border-gold/50 bg-cream/90 text-maroon shadow-[var(--shadow-lift)] backdrop-blur-md transition-colors duration-500 hover:bg-champagne/70 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
      >
        {playing ? (
          <Music className="size-4" aria-hidden="true" />
        ) : (
          <VolumeX className="size-4" aria-hidden="true" />
        )}
      </motion.button>
    </>
  );
}
