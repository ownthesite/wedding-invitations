/** Luxury cards for each wedding function. */

import { CalendarDays, Clock, MapPin } from "lucide-react";

import { Divider, Eyebrow } from "@/components/wedding/Ornaments";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";

export function Events() {
  return (
    <section id="events" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Eyebrow>Celebrations</Eyebrow>
          <h2 className="font-display mt-3 text-3xl font-light text-maroon sm:text-4xl">
            Wedding Events
          </h2>
          <Divider className="mt-6" />
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
          {wedding.events.map((event) => (
            <StaggerItem key={event.title}>
              <article className="group relative h-full overflow-hidden rounded-xs border border-gold/30 bg-ivory/80 p-7 transition-shadow duration-700 hover:shadow-[var(--shadow-lift)]">
                <span
                  aria-hidden="true"
                  className="rule-gold absolute inset-x-0 top-0 opacity-70"
                />
                <h3 className="font-display text-2xl font-light text-maroon">{event.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-cocoa">
                  <li className="flex items-center gap-2.5">
                    <CalendarDays className="size-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="min-w-0">{event.date}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock className="size-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="min-w-0">{event.time}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MapPin className="size-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="min-w-0">{event.location}</span>
                  </li>
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}