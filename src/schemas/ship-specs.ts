import { z } from "zod";

// Ship specifications schema
export const ShipSpecsSchema = z.object({
  length: z.string(),
  mass: z.string(),
  crew: z.string(),
  armament: z.array(z.string()),
  defenses: z.array(z.string()),
  propulsion: z.string(),
});
