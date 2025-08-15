import { z } from "zod";

// Andromeda data schema
export const AndromedaDataSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  description: z.string(),
  image: z.string().url(),
  location: z.string().optional(),
  status: z.string().optional(),
  relatedFactions: z.array(z.string()).optional(),
});
