import { z } from "zod";

import { AffiliationEnum } from "@/enums/affiliation";
import { SpeciesEnum } from "@/enums/species";
import { StatusEnum } from "@/enums/status";
import { ThreatLevelEnum } from "@/enums/threat-level";
import { TimelineEventSchema } from "./timeline-event";
import { PortraitSchema } from "./portrait";

// Person schema
export const PersonSchema = z.object({
  id: z.number(),
  name: z.string(),
  species: SpeciesEnum,
  affiliation: AffiliationEnum,
  status: StatusEnum,
  description: z.string(),
  image: z.string().url(),
  portraits: z.array(PortraitSchema).optional(),
  background: z.string().optional(),
  abilities: z.array(z.string()).optional(),
  equipment: z.array(z.string()).optional(),
  knownAssociates: z.array(z.string()).optional(),
  timeline: z.array(TimelineEventSchema).optional(),
  classifiedInfo: z.string().optional(),
  threatLevel: ThreatLevelEnum.optional(),
});
