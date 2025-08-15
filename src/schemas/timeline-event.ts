import { z } from "zod";

// Timeline event schema
export const TimelineEventSchema = z.object({
  year: z.number(),
  event: z.string(),
  description: z.string(),
  classification: z
    .enum(["Public", "Restricted", "Classified"])
    .default("Public"),
});
