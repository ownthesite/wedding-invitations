/** Bride & groom introductions with parents and addresses. */

import { Heart } from "lucide-react";

import { Divider, Eyebrow, FloralCorner } from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";
import type { Person } from "@/types/wedding";

function Profile({ person, role, delay }: { person: Person; role: string; delay: number }) {
  return (
    <Reveal delay={delay} className="relative flex-1 px-2 text-center">
      <Eyebrow>{role}</Eyebrow>
      <h3 className="font-script mt-3 text-4xl text-maroon sm:text-5xl">{person.name}</h3>
      {person.fullName !== person.name && (
        <p className="font-serif-caps mt-2 text-[0.6rem] tracking-luxe text-gold uppercase">
          {person.fullName}
        </p>
      )}
      <p className="font-serif-caps mx-auto mt-5 text-[0.6rem] tracking-luxe text-gold uppercase">
        {person.about}
      </p>
      <p className="mt-3 text-sm text-cocoa">{person.parents}</p>
      <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
        {person.address}
      </p>
    </Reveal>
  );
}

export function CoupleSection() {
  const { bride, groom, hashtag } = wedding.couple;

  return (
    <section id="couple" className="relative overflow-hidden px-6 py-24 sm:py-28">
      <FloralCorner className="pointer-events-none absolute -top-2 -left-4 opacity-40 sm:size-32" />
      <FloralCorner className="pointer-events-none absolute -right-4 -bottom-2 rotate-180 opacity-40 sm:size-32" />

      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Eyebrow>With joy in our hearts</Eyebrow>
          <h2 className="font-display mt-3 text-3xl font-light text-maroon sm:text-4xl">
            The Groom &amp; The Bride
          </h2>
          <Divider className="mt-6" />
        </Reveal>

        <div className="mt-14 flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-6">
          <Profile person={groom} role="The Groom" delay={0.1} />

          <Reveal delay={0.2} className="flex shrink-0 items-center justify-center md:pt-16">
            <span className="grid size-14 place-items-center rounded-full border border-gold/40 bg-ivory/70">
              <Heart className="size-5 text-wine" aria-hidden="true" />
            </span>
          </Reveal>

          <Profile person={bride} role="The Bride" delay={0.3} />
        </div>

        <Reveal delay={0.2} className="mt-16 text-center">
          <p className="font-serif-caps text-[0.65rem] tracking-luxe text-gold uppercase">
            {hashtag}
          </p>
        </Reveal>
      </div>
    </section>
  );
}