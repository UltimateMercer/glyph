import { z } from "zod";

// Location schema
export const LocationSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  system: z.string(),
  cluster: z.string(),
  classification: z.string(),
  description: z.string(),
  image: z.string().url(),
  population: z.string().optional(),
  government: z.string().optional(),
  economy: z.string().optional(),
  notableFeatures: z.array(z.string()).optional(),
  strategicImportance: z.string().optional(),
});
