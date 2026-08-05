/** The digital invitation card — pure HTML + CSS, no image. */

import { Divider, FloralCorner, Monogram } from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";

export function InvitationCard() {
  const { couple, date, invitation, venue, events } = wedding;
  const mainEvent = events[0];

  return (
    <section id="invitation" className="px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto w-full max-w-2xl">
        <article className="card-invitation paper-grain relative overflow-hidden rounded-xs border border-gold/40 px-5 py-12 sm:px-12 sm:py-16">
          {/* inner double rule */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-xs border border-gold/30 sm:inset-5"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 rounded-xs border border-gold/15 sm:inset-6.5"
          />

          <FloralCorner className="pointer-events-none absolute top-4 left-4 size-14 opacity-70 sm:size-20" />
          <FloralCorner className="pointer-events-none absolute top-4 right-4 size-14 -scale-x-100 opacity-70 sm:size-20" />
          <FloralCorner className="pointer-events-none absolute bottom-4 left-4 size-14 -scale-y-100 opacity-70 sm:size-20" />
          <FloralCorner className="pointer-events-none absolute right-4 bottom-4 size-14 rotate-180 opacity-70 sm:size-20" />

          <div className="relative z-10 text-center">
            <Monogram
              left={couple.groom.name.charAt(9)}
              right={couple.bride.name.charAt(0)}
              className="mx-auto size-20"
            />

            <p className="font-serif-caps mt-8 text-[0.7rem] tracking-luxe text-maroon uppercase">
              {invitation.hostName}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {invitation.hostAddress}
            </p>
            <p className="font-serif-caps mt-5 text-[0.6rem] tracking-luxe text-gold uppercase">
              {invitation.hostLine}
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {invitation.message}
            </p>

            <Divider className="my-8" />

            <p className="font-script text-4xl text-maroon sm:text-6xl">{couple.groom.name}</p>
            <p className="font-serif-caps my-3 text-[0.6rem] tracking-luxe text-gold uppercase">
              {couple.groom.parents}
            </p>
            <p className="font-serif-caps my-4 text-xs tracking-luxe text-wine uppercase">
              {invitation.weds}
            </p>
            <p className="font-script text-4xl text-maroon sm:text-6xl">{couple.bride.name}</p>
            <p className="font-serif-caps mt-3 text-[0.6rem] tracking-luxe text-gold uppercase">
              {couple.bride.parents}
            </p>

            <Divider className="my-8" />

            <dl className="mx-auto grid max-w-md gap-5 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-serif-caps text-[0.55rem] tracking-luxe text-gold uppercase">
                  Date
                </dt>
                <dd className="font-display mt-1 text-lg text-cocoa">{date.long}</dd>
                <dd className="mt-0.5 text-xs text-muted-foreground italic">{date.islamic}</dd>
              </div>
              <div>
                <dt className="font-serif-caps text-[0.55rem] tracking-luxe text-gold uppercase">
                  Time
                </dt>
                <dd className="font-display mt-1 text-lg text-cocoa">{mainEvent?.time}</dd>
                <dd className="mt-0.5 text-xs text-muted-foreground italic">
                  {invitation.timeNote}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-serif-caps text-[0.55rem] tracking-luxe text-gold uppercase">
                  Venue
                </dt>
                <dd className="font-display mt-1 text-lg text-cocoa">{venue.name}</dd>
                <dd className="mt-0.5 text-xs text-muted-foreground">{venue.address}</dd>
              </div>
            </dl>

            <Divider className="my-8" />

            <p className="mx-auto max-w-md text-sm leading-relaxed text-cocoa italic">
              {invitation.closing}
            </p>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
