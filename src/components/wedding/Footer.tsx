/** Closing thank-you, share links and copyright. */

import { Instagram, MessageCircle, Phone } from "lucide-react";

import { Divider, Monogram } from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import { wedding } from "@/data/wedding";

export function Footer() {
  const { couple, socials, date, footer } = wedding;
  const year = new Date(date.iso).getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gold/25 bg-ivory/60 px-6 py-20 text-center">
      <Reveal>
        <Monogram
          left={couple.groom.name.charAt(0)}
          right={couple.bride.name.charAt(0)}
          className="mx-auto size-20"
        />
        <p className="font-script mt-8 text-4xl text-maroon sm:text-5xl">{footer.thankYou}</p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          {footer.message}
        </p>

        <p className="font-serif-caps mt-8 text-[0.6rem] tracking-luxe text-gold uppercase">
          {footer.signOffLabel}
        </p>
        <p className="font-script mt-2 text-3xl text-maroon sm:text-4xl">{footer.signOff}</p>

        <Divider className="my-10" />

        <nav aria-label="Share and contact" className="flex items-center justify-center gap-4">
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Share on WhatsApp"
            className="grid size-11 place-items-center rounded-full border border-gold/40 text-maroon transition-colors duration-500 hover:bg-champagne/60 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Follow on Instagram"
            className="grid size-11 place-items-center rounded-full border border-gold/40 text-maroon transition-colors duration-500 hover:bg-champagne/60 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
          >
            <Instagram className="size-4" aria-hidden="true" />
          </a>
          <a
            href={`tel:${socials.phone.replace(/\s/g, "")}`}
            aria-label={`Call ${socials.phone}`}
            className="grid size-11 place-items-center rounded-full border border-gold/40 text-maroon transition-colors duration-500 hover:bg-champagne/60 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
          >
            <Phone className="size-4" aria-hidden="true" />
          </a>
        </nav>

        <p className="font-serif-caps mt-10 text-[0.55rem] tracking-luxe text-gold uppercase">
          {couple.groom.name} &amp; {couple.bride.name} &middot; {year}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          {footer.credit}
        </p>
      </Reveal>
    </footer>
  );
}