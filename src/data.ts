// ---------------------------------------------------------------------------
// Static content for the page, kept out of the components so copy is easy to
// edit. Every `icon` value references a <symbol> id defined in IconSprite.tsx.
// ---------------------------------------------------------------------------

import { SITE } from "./config";

export type NavLink = {
    href: string;
    title: string;
};

export const NAV_LINKS: NavLink[] = [
    { href: "#historia", title: "Nasza historia" },
    { href: "#miejsca", title: "Miejsca" },
    { href: "#agenda", title: "Plan dnia" },
    { href: "#galeria", title: "Galeria" },
    { href: "#informacje", title: "Informacje praktyczne" },
];

export type AgendaItem = {
    icon: string;
    title: string;
    desc: string;
    finale?: boolean;
};

// Plan dnia - the timeline. `finale: true` gives the last card the deeper
// shadow used on the dark end of the section's gradient.
export const AGENDA: AgendaItem[] = [
    {
        icon: "ic-church",
        title: "Ceremonia w kościele",
        desc: "Rozpoczęcie uroczystości w kościele.",
    },
    {
        icon: "ic-heart",
        title: "Życzenia i gratulacje",
        desc: "Pierwsze życzenia dla Pary Młodej przed kościołem.",
    },
    {
        icon: "ic-car",
        title: "Przejazd na miejsce przyjęcia",
        desc: "Wspólny przejazd na miejsce przyjęcia.",
    },
    {
        icon: "ic-bread",
        title: "Powitanie chlebem i solą",
        desc: "Tradycyjne powitanie Pary Młodej.",
    },
    { icon: "ic-dine", title: "Obiad", desc: "Uroczysty obiad weselny." },
    {
        icon: "ic-cocktail",
        title: "Koktajl w ogrodzie",
        desc: "Powitalny drink i chwila oddechu w ogrodzie.",
    },
    {
        icon: "ic-camera",
        title: "Zdjęcia",
        desc: "Wspólna sesja i pamiątkowe kadry z Gośćmi.",
    },
    {
        icon: "ic-note",
        title: "Pierwszy taniec",
        desc: "Otwarcie parkietu przez Parę Młodą.",
    },
    {
        icon: "ic-sparkle",
        title: "Zabawa i muzyka",
        desc: "Dobra muzyka i pełny parkiet.",
    },
    { icon: "ic-cake", title: "Tort", desc: "Wjazd weselnego tortu." },
    {
        icon: "ic-moon",
        title: "Podziękowania i pożegnanie",
        desc: "Ostatni wspólny toast, podziękowania dla Gości i pożegnanie.",
        finale: true,
    },
];

export type InfoCard = {
    icon: string;
    title: string;
    desc: string;
    html?: boolean;
};

const RSVP_DATE = import.meta.env.VITE_RSVP_DATE || "[data]";

// Contact card reuses the couple's names (SITE.name1/name2) - only the phone
// numbers are distinct pieces of data.
const CONTACT_1 = import.meta.env.VITE_CONTACT_1 || "[telefon]";
const CONTACT_2 = import.meta.env.VITE_CONTACT_2 || "[telefon]";

// Informacje praktyczne - six cards. `html: true` marks copy that contains
// inline <br> markup.
export const INFO_CARDS: InfoCard[] = [
    // {
    //     icon: "ic-hanger",
    //     title: "Strój",
    //     desc: "Strój wieczorowy / formalny. Panie prosimy o unikanie odcieni bieli, ten kolor zostawmy Pannie Młodej.",
    // },
    {
        icon: "ic-envelope",
        title: "Potwierdzenie obecności",
        desc: `Prosimy o potwierdzenie przybycia do ${RSVP_DATE}. Dajcie nam też znać o preferencjach dietetycznych.`,
    },
    {
        icon: "ic-phone",
        title: "Kontakt",
        desc: `W razie pytań jesteśmy do dyspozycji:<br>${SITE.name1}: ${CONTACT_1}<br>${SITE.name2}: ${CONTACT_2}`,
        html: true,
    },
    {
        icon: "ic-car",
        title: "Dojazd i parking",
        desc: "Na miejscu na Gości czeka bezpłatny parking. Auta można bezpiecznie zostawić na noc.",
    },
    // {
    //   icon: 'ic-bed',
    //   title: 'Noclegi',
    //   desc: 'Dla Gości spoza okolicy zarezerwowaliśmy pokoje w [miejsce noclegu]. Prosimy o kontakt w sprawie rezerwacji.',
    // },
    {
        icon: "ic-gift",
        title: "Prezenty",
        desc: "Największym prezentem jest dla nas Wasza obecność. Zamiast kwiatów i tradycyjnych upominków prosimy o kopertę.",
    },
];

export type Venue = {
    id: string;
    eyebrow: string;
    title: string;
    desc: string;
    address: string;
    map: string;
    placeholder: string;
    reversed: boolean;
};

// Builds a Google Maps search link from whatever name/address is supplied -
// keeps the two things that actually name a real place (name, address) in
// one env-driven spot instead of a third hardcoded URL.
function mapUrl(query: string) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const VENUE_1_NAME = import.meta.env.VITE_VENUE_1_NAME || "Miejsce przyjęcia";
const VENUE_1_ADDRESS =
    import.meta.env.VITE_VENUE_1_ADDRESS || "Adres zostanie podany wkrótce";
const VENUE_1_DESC =
    import.meta.env.VITE_VENUE_1_DESC ||
    "To tutaj spędzimy razem weselny wieczór - w gronie najbliższych osób, wśród muzyki, tańca i wspólnych wspomnień.";
const VENUE_2_NAME = import.meta.env.VITE_VENUE_2_NAME || "Miejsce ceremonii";
const VENUE_2_ADDRESS =
    import.meta.env.VITE_VENUE_2_ADDRESS || "Adres zostanie podany wkrótce";
const VENUE_2_DESC =
    import.meta.env.VITE_VENUE_2_DESC ||
    "To tutaj rozpocznie się nasz wspólny dzień - w gronie najbliższych osób, w wyjątkowej i pełnej wzruszeń atmosferze.";

// Miejsca - the two venues. `reversed` renders the image on the right.
export const VENUES: Venue[] = [
    {
        id: "venue-1",
        eyebrow: "Przyjęcie weselne",
        title: VENUE_1_NAME,
        desc: VENUE_1_DESC,
        address: VENUE_1_ADDRESS,
        map: mapUrl(`${VENUE_1_NAME} ${VENUE_1_ADDRESS}`),
        placeholder: `Zdjęcie: ${VENUE_1_NAME}`,
        reversed: false,
    },
    {
        id: "venue-2",
        eyebrow: "Ceremonia",
        title: VENUE_2_NAME,
        desc: VENUE_2_DESC,
        address: VENUE_2_ADDRESS,
        map: mapUrl(`${VENUE_2_NAME} ${VENUE_2_ADDRESS}`),
        placeholder: `Zdjęcie: ${VENUE_2_NAME}`,
        reversed: true,
    },
];

// Galeria - six drag-and-drop slots.
export const GALLERY_IDS: string[] = [
    "gal1",
    "gal2",
    "gal3",
    "gal4",
    "gal5",
    "gal6",
];
