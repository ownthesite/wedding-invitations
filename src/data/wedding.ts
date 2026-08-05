/**
 * Single source of truth for the entire invitation.
 * Change ONLY this file to generate a completely different wedding website.
 */

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import heroCouple from "@/assets/hero-couple.jpg";
import type { Wedding } from "@/types/wedding";

export const wedding: Wedding = {
  meta: {
    title: "Mohammad Aslam & Sumayya M.A | Wedding Reception",
    description:
      "Join us in celebrating the wedding reception of Mohammad Aslam and Sumayya M.A on Sunday, 06 September 2026.",
    siteName: "Mohammad Aslam & Sumayya M.A",
  },

  hero: {
    eyebrow: "You are cordially invited to the",
    separator: "♥",
    occasion: "Wedding Reception",
    dateText: "06 . 09 . 2026",
    scrollLabel: "Scroll",
  },

  nav: [
    { href: "#home", label: "Home" },
    { href: "#invitation", label: "Invitation" },
    { href: "#couple", label: "Couple" },
    { href: "#events", label: "Events" },
    { href: "#venue", label: "Venue" },
    { href: "#gallery", label: "Gallery" },
    { href: "#rsvp", label: "RSVP" },
  ],

  couple: {
    groom: {
      name: "Mohammad Aslam",
      fullName: "Mohammad Aslam",
      about: "Beloved Son of",
      parents: "Mr. Ashraf N.A & Mrs. Misiriya Ashraf",
      address: "Nettaveli Parambu House, Elamakkara, Kaloor",
    },
    bride: {
      name: "Sumayya M.A",
      fullName: "Sumayya M.A",
      about: "Beloved Daughter of",
      parents: "Mr. Ansar M.A & Mrs. Sulfath Ansar",
      address: "Mannamkuzhi House, East Veliyathunadu, U C College (P.O.), Aluva",
    },
    hashtag: "#AslamWedsSumayya",
    photo: heroCouple,
  },

  date: {
    // ISO string used by the countdown
    iso: "2026-09-06T18:30:00+05:30",
    long: "Sunday, 06 September 2026",
    short: "06 . 09 . 2026",
    islamic: "23 Rabi' Ul-Awwal 1448 AH",
  },

  quote: {
    arabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
    verse:
      "And of His signs is that He created for you mates from among yourselves, that you may find tranquillity in them; and He placed between you affection and mercy.",
    reference: "Surah Ar-Rum, 30:21",
  },

  invitation: {
    hostName: "Mr. Ashraf N.A & Mrs. Misiriya Ashraf",
    hostAddress: "Nettaveli Parambu House, Elamakkara, Kaloor",
    hostLine: "Cordially invite your esteemed presence with family",
    message:
      "on the auspicious occasion of the Wedding Reception of our beloved son",
    weds: "weds",
    timeNote: "Wedding Reception · Dinner served",
    closing: "Your presence and prayers are requested.",
  },

  events: [
    {
      title: "Wedding Reception",
      date: "Sunday, 06 September 2026",
      time: "6:30 PM – 9:30 PM",
      description:
        "An evening of blessings, dinner and celebration with family and friends.",
      location: "Little Flower Church Hall, Pottakkuzhy, Kaloor",
    },
  ],

  venue: {
    name: "Little Flower Church Hall",
    address: "Pottakkuzhy, Kaloor",
    mapEmbed: "https://www.google.com/maps?q=Little+Flower+Church+Hall+Kaloor&output=embed",
    mapLink: "https://maps.google.com/",
    mapButtonLabel: "Open in Google Maps",
    parking: "Parking is available within the hall premises.",
    arrivalNote:
      "Kaloor Junction is a short drive away; the hall is signposted from Pottakkuzhy Road.",
    note: "The hall is on the ground floor with step-free access for elders and guests.",
  },

  family: {
    groom: {
      title: "The Groom's Family",
      house: "Nettaveli Parambu House, Elamakkara, Kaloor",
      members: [
        { name: "Mr. Ashraf N.A", relation: "Father" },
        { name: "Mrs. Misiriya Ashraf", relation: "Mother" },
      ],
    },
    bride: {
      title: "The Bride's Family",
      house: "Mannamkuzhi House, East Veliyathunadu, U C College (P.O.), Aluva",
      members: [
        { name: "Mr. Ansar M.A", relation: "Father" },
        { name: "Mrs. Sulfath Ansar", relation: "Mother" },
      ],
    },
  },

  timelineMeta: { eyebrow: "The evening", title: "Reception Timeline" },

  timeline: [
    {
      year: "6:30 PM",
      title: "Guests Arrive",
      description: "Welcome drinks and greetings as the evening begins.",
    },
    {
      year: "7:00 PM",
      title: "The Couple Arrives",
      description: "Mohammad Aslam and Sumayya M.A join the celebration.",
    },
    {
      year: "7:30 PM",
      title: "Blessings & Photographs",
      description: "Duas, wishes and portraits with family and friends.",
    },
    {
      year: "8:00 PM",
      title: "Dinner",
      description: "Dinner is served, followed by the evening's farewell at 9:30 PM.",
    },
  ],

  gallery: [
    { src: gallery1, alt: "Henna-adorned hands holding ivory roses", span: "tall" },
    { src: gallery2, alt: "The decorated reception hall with drapes and florals", span: "wide" },
    { src: gallery3, alt: "A bride laughing beneath her veil", span: "tall" },
    { src: gallery4, alt: "Gold wedding rings resting on ivory silk with jasmine", span: "normal" },
    { src: gallery5, alt: "A groom in a cream sherwani by the window", span: "tall" },
    { src: gallery6, alt: "A traditional Kerala sadya served on a banana leaf", span: "wide" },
  ],

  rsvp: {
    deadline: "Kindly respond before 25 August 2026",
    foodOptions: ["Non-vegetarian", "Vegetarian", "Jain / No onion-garlic"],
  },

  footer: {
    thankYou: "Thank You",
    message:
      "For your love, your prayers and for being part of our story. We cannot wait to celebrate with you.",
    signOffLabel: "With Love,",
    signOff: "Ashi & Akku",
    credit: "Made with love in Kerala. All rights reserved.",
  },

  music: {
    enabled: true,
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    title: "Ambient wedding melody",
  },

  socials: {
    whatsapp: "https://wa.me/919000000000",
    instagram: "https://instagram.com",
    phone: "+91 90000 00000",
  },
};
