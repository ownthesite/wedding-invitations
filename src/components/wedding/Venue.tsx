/** Map embed, directions and parking information. */

import { CarFront, ExternalLink, MapPin } from "lucide-react";

import { Divider, Eyebrow } from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";

export function Venue() {
  const { venue } = wedding;

  return (
    <section id="venue" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Eyebrow>Where to find us</Eyebrow>
          <h2 className="font-display mt-3 text-3xl font-light text-maroon sm:text-4xl">
            The Venue
          </h2>
          <Divider className="mt-6" />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-xs border border-gold/30 bg-ivory shadow-[var(--shadow-card)]">
            <iframe
              src={venue.mapEmbed}
              title={`Map showing ${venue.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[300px] w-full border-0 sm:h-[420px]"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.15}>
            <div className="h-full rounded-xs border border-gold/30 bg-ivory/80 p-7">
              <h3 className="font-display flex items-center gap-2 text-xl text-maroon">
                <MapPin className="size-4 text-gold" aria-hidden="true" />
                {venue.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {venue.address}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{venue.note}</p>
              <a
                href={venue.mapLink}
                target="_blank"
                rel="noreferrer"
                className="font-serif-caps mt-6 inline-flex items-center gap-2 rounded-xs border border-gold/60 px-6 py-3 text-[0.65rem] tracking-luxe text-maroon uppercase transition-colors duration-500 hover:bg-champagne/60 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
              >
                {venue.mapButtonLabel}
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="h-full rounded-xs border border-gold/30 bg-ivory/80 p-7">
              <h3 className="font-display flex items-center gap-2 text-xl text-maroon">
                <CarFront className="size-4 text-gold" aria-hidden="true" />
                Parking &amp; Arrival
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {venue.parking}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {venue.arrivalNote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}