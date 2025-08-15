import { z } from "zod";

// Timeline entry schema
export const TimelineEntrySchema = z.object({
  id: z.number(),
  year: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  importance: z.enum(["Low", "Medium", "High", "Critical"]),
  relatedEntities: z.array(z.string()).optional(),
});
