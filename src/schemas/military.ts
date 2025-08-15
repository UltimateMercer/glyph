import { AffiliationEnum } from "@/enums/affiliation";
import { StatusEnum } from "@/enums/status";
import { z } from "zod";

// Military unit schema
export const MilitaryUnitSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  affiliation: AffiliationEnum,
  status: StatusEnum,
  description: z.string(),
  image: z.string().url(),
  commander: z.string().optional(),
  strength: z.string().optional(),
  equipment: z.array(z.string()).optional(),
  operations: z.array(z.string()).optional(),
  casualties: z.string().optional(),
});
