// import { z } from "zod";

// // Personal History Schema
// export const PersonalHistorySchema = z.object({
//   date: z.string(),
//   event: z.string(),
//   description: z.string(),
// });

// // Attributes Schema
// export const AttributesSchema = z.object({
//   rank: z.string(),
//   specialization: z.string(),
//   homeworld: z.string(),
//   birthYear: z.string(),
// });

// // Portrait Schema (para quando os portraits tiverem mais estrutura)
// export const PortraitSchema = z.object({
//   url: z.string(),
//   alt: z.string().optional(),
//   description: z.string().optional(),
// });

// // Species Enum (baseado nos dados)
// export const SpeciesEnum = z.enum([
//   "Human",
//   "Turian",
//   "Quarian",
//   "Asari",
//   "Krogan",
// ]);

// // Affiliation Enum (baseado nos dados)
// export const AffiliationEnum = z.enum([
//   "Systems Alliance",
//   "Normandy Crew",
//   "Quarian Migrant Fleet",
//   "Independent",
//   "Clan Urdnot",
// ]);

// // Status Enum (baseado nos dados)
// export const StatusEnum = z.enum(["Active", "Deceased", "Missing", "Retired"]);

// // Threat Level Enum (para uso futuro)
// export const ThreatLevelEnum = z.enum([
//   "Low",
//   "Medium",
//   "High",
//   "Critical",
//   "Omega",
//   "Allied",
// ]);

// // Person Schema Completo
// export const PersonSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   species: SpeciesEnum,
//   occupation: z.string(),
//   affiliation: AffiliationEnum,
//   status: StatusEnum,
//   location: z.string(),
//   origin: z.string(), // Campo usado no PersonDrawer
//   description: z.string(), // Campo usado no PersonDrawer
//   background: z.string(),
//   biography: z.string(),
//   image: z.string().url().optional(), // Campo usado no PersonDrawer
//   portraits: z.array(z.union([z.string(), PortraitSchema])).optional(), // Suporta ambos os formatos
//   timeline: z.array(PersonalHistorySchema).optional(),
//   attributes: AttributesSchema,
//   // Campos adicionais usados no PersonDrawer
//   notableAchievements: z.array(z.string()).optional(),
//   knownAssociates: z.array(z.string()).optional(),
//   classifiedInfo: z.string().optional(),
//   threatLevel: ThreatLevelEnum.optional(),
// });

// // Export types
// export type PersonalHistory = z.infer<typeof PersonalHistorySchema>;
// export type Attributes = z.infer<typeof AttributesSchema>;
// export type Portrait = z.infer<typeof PortraitSchema>;
// export type Species = z.infer<typeof SpeciesEnum>;
// export type Affiliation = z.infer<typeof AffiliationEnum>;
// export type Status = z.infer<typeof StatusEnum>;
// export type ThreatLevel = z.infer<typeof ThreatLevelEnum>;
// export type Person = z.infer<typeof PersonSchema>;

import { z } from "zod";

// Schema para os retratos/portraits
const PortraitSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  title: z.string(),
  description: z.string(),
  year: z.string(),
  context: z.string(),
});

// Schema para eventos da timeline
const TimelineEventSchema = z.object({
  id: z.string(),
  year: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.enum([
    "early_life",
    "career",
    "major_event",
    "transformation",
    "legacy",
  ]),
  importance: z.enum(["medium", "high", "critical"]),
  location: z.string(),
  portraitId: z.string().optional(),
});

// Schema para atributos do personagem
const AttributesSchema = z.object({
  rank: z.string(),
  specialization: z.string(),
  homeworld: z.string(),
  birthYear: z.string(),
});

// Schema principal para Person
const PersonSchema = z.object({
  id: z.string(),
  name: z.string(),
  species: z.string(),
  occupation: z.string(),
  affiliation: z.string(),
  status: z.string(),
  location: z.string(),
  origin: z.string(),
  description: z.string(),
  background: z.string(),
  biography: z.string(),
  portraits: z.array(PortraitSchema),
  timeline: z.array(TimelineEventSchema),
  attributes: AttributesSchema,
  notableAchievements: z.array(z.string()),
});

// Array de pessoas
const PersonsArraySchema = z.array(PersonSchema);

// Exportar os tipos TypeScript inferidos
export type Portrait = z.infer<typeof PortraitSchema>;
export type TimelineEvent = z.infer<typeof TimelineEventSchema>;
export type Attributes = z.infer<typeof AttributesSchema>;
export type Person = z.infer<typeof PersonSchema>;
export type PersonsArray = z.infer<typeof PersonsArraySchema>;
