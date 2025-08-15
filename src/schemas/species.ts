import { z } from "zod";

// Species schema
export const SpeciesDataSchema = z.object({
  id: z.number(),
  name: z.string(),
  homeworld: z.string(),
  government: z.string(),
  traits: z.array(z.string()),
  description: z.string(),
  image: z.string().url(),
  biology: z.string().optional(),
  culture: z.string().optional(),
  history: z.string().optional(),
  relations: z.record(z.string(), z.string()).optional(),
});
