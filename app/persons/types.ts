export interface PersonDetails {
  name: string
  role: string
  affiliation: string
  status: string
  description: string
  achievements: string[]
  image: string
  type: "military" | "intelligence" | "scientific" | "technical" | "political"
  details?: {
    biography: string
    specializations: string[]
    notableActions: string[]
    relationships: { name: string; relation: string }[]
    skills: { category: string; level: number }[]
  }
}

