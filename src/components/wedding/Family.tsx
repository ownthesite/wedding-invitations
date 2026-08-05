/** Bride and groom family cards. */

import { Divider, Eyebrow } from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";
import type { FamilySide } from "@/types/wedding";

function SideCard({ side, delay }: { side: FamilySide; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full rounded-xs border border-gold/30 bg-ivory/80 p-8 text-center">
        <h3 className="font-display text-2xl font-light text-maroon">{side.title}</h3>
        <p className="font-serif-caps mt-2 text-[0.55rem] tracking-luxe text-gold uppercase">
          {side.house}
        </p>
        <Divider className="my-6" />
        <ul className="space-y-4">
          {side.members.map((m) => (
            <li key={m.name}>
              <p className="font-display text-lg text-cocoa">{m.name}</p>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                {m.relation}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Family() {
  return (
    <section id="family" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <Eyebrow>Two families, one home</Eyebrow>
          <h2 className="font-display mt-3 text-3xl font-light text-maroon sm:text-4xl">
            With Blessings From
          </h2>
          <Divider className="mt-6" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <SideCard side={wedding.family.groom} delay={0.1} />
          <SideCard side={wedding.family.bride} delay={0.2} />
        </div>
      </div>
    </section>
  );
}