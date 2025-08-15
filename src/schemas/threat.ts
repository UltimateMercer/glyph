import { z } from "zod";

import { StatusEnum } from "@/enums/status";
import { ThreatLevelEnum } from "@/enums/threat-level";

// Threat schema
export const ThreatSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  threatLevel: ThreatLevelEnum,
  status: StatusEnum,
  description: z.string(),
  image: z.string().url(),
  origin: z.string(),
  capabilities: z.array(z.string()),
  knownWeaknesses: z.array(z.string()).optional(),
  lastKnownLocation: z.string().optional(),
  associatedThreats: z.array(z.string()).optional(),
  countermeasures: z.array(z.string()).optional(),
});
