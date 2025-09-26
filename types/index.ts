export interface Player {
  id: string
  name: string
  surname: string
  number: number
  position: "GK" | "D" | "F"
  age: number
  height: number
  weight: number
  photo: string
  bio: string
  stats: PlayerStats
  achievements: Achievement[]
  socialMedia: SocialMedia
  joinDate: Date
  nationality: string
  isActive: boolean
  isCaptain?: boolean
  isAssistantCaptain?: boolean
}

export interface PlayerStats {
  gamesPlayed: number
  goals: number
  assists: number
  points: number
  penaltyMinutes: number
  plusMinus: number
  shotsOnGoal?: number
  faceoffWinPercentage?: number
  saves?: number
  goalsAgainst?: number
  savePercentage?: number
  shutouts?: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: Date
  type: "individual" | "team"
  icon?: string
}

export interface SocialMedia {
  instagram?: string
  facebook?: string
  twitter?: string
  tiktok?: string
}

export interface Match {
  id: string
  date: Date
  homeTeam: string
  awayTeam: string
  homeScore?: number
  awayScore?: number
  venue: string
  status: "upcoming" | "live" | "finished" | "cancelled" | "postponed"
  competition: string
  tickets?: string
  stream?: string
  referee?: string
  attendance?: number
  highlights?: string
  matchReport?: string
  isHomeGame: boolean
}

export interface News {
  id: string
  title: string
  content: string
  excerpt: string
  image: string
  date: Date
  author: string
  category: string
  tags: string[]
  featured: boolean
  slug: string
  readTime: number
}

export interface TeamStats {
  season: string
  wins: number
  losses: number
  draws: number
  overtimeLosses: number
  goalsFor: number
  goalsAgainst: number
  points: number
  position: number
  gamesPlayed: number
  winPercentage: number
  powerPlayPercentage: number
  penaltyKillPercentage: number
}

export interface ContactInfo {
  address: string
  city: string
  postalCode: string
  phone: string
  email: string
  website: string
  socialMedia: SocialMedia
  arena: {
    name: string
    address: string
    capacity: number
    coordinates: {
      lat: number
      lng: number
    }
  }
}

export interface Staff {
  id: string
  name: string
  surname: string
  position: string
  photo: string
  bio: string
  experience: number
  achievements: string[]
}

export interface Season {
  id: string
  name: string
  startDate: Date
  endDate: Date
  isActive: boolean
  stats: TeamStats
}

export interface Gallery {
  id: string
  title: string
  description: string
  images: GalleryImage[]
  date: Date
  category: "match" | "training" | "event" | "behind-scenes"
}

export interface GalleryImage {
  id: string
  url: string
  alt: string
  caption?: string
  photographer?: string
}

export interface Sponsor {
  id: string
  name: string
  logo: string
  website?: string
  tier: "main" | "gold" | "silver" | "bronze"
  description?: string
}

export interface JuniorPlayer extends Omit<Player, "stats"> {
  birthDate: Date
  parentName: string
  parentPhone: string
  parentEmail: string
  school: string
  stats: JuniorPlayerStats
  development: DevelopmentStats
}

export interface JuniorPlayerStats {
  gamesPlayed: number
  goals: number
  assists: number
  points: number
  penaltyMinutes: number
  plusMinus: number
  averageIceTime: number
}

export interface DevelopmentStats {
  skillLevel: 1 | 2 | 3 | 4 | 5
  skating: number
  shooting: number
  passing: number
  defense: number
  gameIQ: number
  coachNotes: string
}

export interface JuniorMatch extends Omit<Match, "competition"> {
  competition: string
  ageGroup: string
  development: boolean
}
