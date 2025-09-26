export const TEAM_INFO = {
  name: "Cebularze Kalisz",
  fullName: "Hokejowy Klub Sportowy Cebularze Kalisz",
  city: "Kalisz",
  country: "Polska",
  founded: 2010,
  colors: {
    primary: "#a4c500",
    secondary: "#000000",
    accent: "#ffffff",
    gold: "#f59e0b",
  },
  logo: "/logo.png",
  motto: "Siła w jedności, zwycięstwo w determinacji",
} as const

export const JUNIOR_TEAM_INFO = {
  name: "Szczypiorki Kalisz",
  fullName: "Hokejowy Klub Sportowy Szczypiorki Kalisz",
  city: "Kalisz",
  country: "Polska",
  founded: 2015,
  ageGroup: "U16",
  colors: {
    primary: "#f97316", // Orange
    secondary: "#eab308", // Yellow
    accent: "#000000",
    green: "#22c55e", // Green accents
  },
  logo: "/szczypiorki-logo.png",
  motto: "Młodzi wojownicy na lodzie",
  parentClub: "Cebularze Kalisz",
} as const

export const CONTACT_INFO = {
  address: "ul. Sportowa 15",
  city: "Kalisz",
  postalCode: "62-800",
  phone: "+48 62 123 45 67",
  email: "kontakt@cebularze-kalisz.pl",
  website: "https://cebularze-kalisz.pl",
  socialMedia: {
    facebook: "https://facebook.com/cebularze.kalisz",
    instagram: "https://instagram.com/cebularze_kalisz",
    twitter: "https://twitter.com/cebularze_kalisz",
    tiktok: "https://tiktok.com/@cebularze_kalisz",
  },
  arena: {
    name: "Lodowisko Miejskie w Kaliszu",
    address: "ul. Poznańska 126, 62-800 Kalisz",
    capacity: 1200,
    coordinates: {
      lat: 51.7687,
      lng: 18.0814,
    },
  },
} as const

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Strona główna" },
  { href: "/roster", label: "Skład" },
  { href: "/schedule", label: "Terminarz" },
  { href: "/juniors", label: "Szczypiorki" },
  { href: "/apply", label: "Dołącz do nas" }, // Added application link to navigation
  { href: "/news", label: "Aktualności" },
  { href: "/gallery", label: "Galeria" },
  { href: "/about", label: "O klubie" },
  { href: "/contact", label: "Kontakt" },
] as const

export const POSITIONS = {
  GK: "Bramkarz",
  D: "Obrońca",
  F: "Napastnik",
} as const

export const MATCH_STATUSES = {
  upcoming: "Nadchodzący",
  live: "Na żywo",
  finished: "Zakończony",
  cancelled: "Odwołany",
  postponed: "Przełożony",
} as const

export const NEWS_CATEGORIES = ["Mecze", "Transfery", "Treningi", "Wydarzenia", "Wywiady", "Ogłoszenia"] as const

export const GALLERY_CATEGORIES = ["match", "training", "event", "behind-scenes"] as const

export const SPONSOR_TIERS = ["main", "gold", "silver", "bronze"] as const

export const ANIMATIONS = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
  },
  easing: {
    easeOut: [0.0, 0.0, 0.2, 1],
    easeIn: [0.4, 0.0, 1, 1],
    easeInOut: [0.4, 0.0, 0.2, 1],
  },
} as const
