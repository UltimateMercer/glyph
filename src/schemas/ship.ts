import { z } from "zod";

import { AffiliationEnum } from "@/enums/affiliation";
import { StatusEnum } from "@/enums/status";
import { ShipSpecsSchema } from "./ship-specs";

// Ship schema
export const ShipSchema = z.object({
  id: z.number(),
  name: z.string(),
  class: z.string(),
  affiliation: AffiliationEnum,
  status: StatusEnum,
  description: z.string(),
  image: z.string().url(),
  specifications: ShipSpecsSchema.optional(),
  history: z.string().optional(),
  notableEngagements: z.array(z.string()).optional(),
  currentLocation: z.string().optional(),
  commandingOfficer: z.string().optional(),
  combatRating: z.string().optional(),
});
