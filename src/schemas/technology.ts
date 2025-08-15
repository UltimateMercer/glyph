import { z } from "zod";

// Technology schema
export const TechnologySchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  description: z.string(),
  image: z.string().url(),
  applications: z.array(z.string()),
  limitations: z.array(z.string()).optional(),
  developers: z.array(z.string()).optional(),
  relatedTechnologies: z.array(z.string()).optional(),
});
