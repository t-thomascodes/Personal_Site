export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: any[] // Portable Text
  publishedAt: string
  coverImage?: string
  tags?: string[]
}

export interface TravelEntry {
  _id: string
  title: string
  location: string
  coordinates: { lat: number; lng: number }
  date: string
  story: string
  photos?: string[]
  tags?: string[]
}

export interface Inspiration {
  _id: string
  title: string
  type: 'art' | 'quote' | 'book' | 'film' | 'philosophy'
  attribution: string
  personalNote?: string
  image?: string
  tags?: string[]
}
