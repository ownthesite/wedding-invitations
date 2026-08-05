/** Arabic invocation, translation and Qur'anic verse. */

import { Divider } from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";

export function Bismillah() {
  const { arabic, translation, verse, reference } = wedding.quote;

  return (
    <section id="bismillah" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p lang="ar" dir="rtl" className="font-display text-3xl text-maroon sm:text-4xl">
            {arabic}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 text-sm text-muted-foreground italic sm:text-base">{translation}</p>
        </Reveal>

        <Reveal delay={0.25}>
          <Divider className="my-10" />
        </Reveal>

        <Reveal delay={0.35}>
          <blockquote className="font-display text-xl leading-relaxed font-light text-cocoa sm:text-2xl md:text-3xl">
            &ldquo;{verse}&rdquo;
          </blockquote>
          <cite className="font-serif-caps mt-6 block text-[0.65rem] tracking-luxe text-gold uppercase not-italic">
            {reference}
          </cite>
        </Reveal>
      </div>
    </section>
  );
}