/** Strict shape of the wedding configuration in `src/data/wedding.ts`. */

export interface Person {
  name: string;
  fullName: string;
  about: string;
  parents: string;
  address: string;
  instagram?: string;
}

export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
}

export interface FamilyMember {
  name: string;
  relation: string;
}

export interface FamilySide {
  title: string;
  house: string;
  members: FamilyMember[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span: "normal" | "tall" | "wide";
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Wedding {
  meta: { title: string; description: string; siteName: string };
  hero: {
    eyebrow: string;
    separator: string;
    occasion: string;
    dateText: string;
    scrollLabel: string;
  };
  nav: NavLink[];
  couple: {
    bride: Person;
    groom: Person;
    hashtag: string;
    photo: string;
  };
  date: { iso: string; long: string; short: string; islamic: string };
  quote: {
    arabic: string;
    translation: string;
    verse: string;
    reference: string;
  };
  invitation: {
    hostName: string;
    hostAddress: string;
    hostLine: string;
    message: string;
    weds: string;
    timeNote: string;
    closing: string;
  };
  events: WeddingEvent[];
  venue: {
    name: string;
    address: string;
    mapEmbed: string;
    mapLink: string;
    mapButtonLabel: string;
    parking: string;
    arrivalNote: string;
    note: string;
  };
  family: { bride: FamilySide; groom: FamilySide };
  timelineMeta: { eyebrow: string; title: string };
  timeline: TimelineItem[];
  gallery: GalleryImage[];
  rsvp: { deadline: string; foodOptions: string[] };
  footer: {
    thankYou: string;
    message: string;
    signOffLabel: string;
    signOff: string;
    credit: string;
  };
  music: { enabled: boolean; src: string; title: string };
  socials: { whatsapp: string; instagram: string; phone: string };
}
