import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Bismillah } from "@/components/wedding/Bismillah";
import { Countdown } from "@/components/wedding/Countdown";
import { CoupleSection } from "@/components/wedding/CoupleSection";
import { Events } from "@/components/wedding/Events";
import { Family } from "@/components/wedding/Family";
import { Footer } from "@/components/wedding/Footer";
import { Gallery } from "@/components/wedding/Gallery";
import { Hero } from "@/components/wedding/Hero";
import { InvitationCard } from "@/components/wedding/InvitationCard";
import { Loader } from "@/components/wedding/Loader";
import { MusicPlayer } from "@/components/wedding/MusicPlayer";
import { Nav } from "@/components/wedding/Nav";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Timeline } from "@/components/wedding/Timeline";
import { Venue } from "@/components/wedding/Venue";
import { wedding } from "@/data/wedding";

const { meta, couple, date, venue } = wedding;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: meta.title },
      { name: "twitter:description", content: meta.description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: `${couple.groom.fullName} & ${couple.bride.fullName} — ${wedding.hero.occasion}`,
          startDate: date.iso,
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          description: meta.description,
          location: {
            "@type": "Place",
            name: venue.name,
            address: { "@type": "PostalAddress", streetAddress: venue.address },
          },
          organizer: { "@type": "Person", name: wedding.invitation.hostName },
        }),
      },
    ],
  }),
});

function Index() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <Loader onEnter={() => setEntered(true)} />
      {entered && <Nav />}
      {entered && <MusicPlayer />}
      <main>
        <Hero />
        <Bismillah />
        <CoupleSection />
        <InvitationCard />
        <Countdown />
        <Events />
        <Venue />
        <Family />
        <Gallery />
        <Timeline />
        <Rsvp />
      </main>
      <Footer />
    </>
  );
}
