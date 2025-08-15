import { z } from "zod";

// Portrait schema
export const PortraitSchema = z.object({
  url: z.string().url(),
  alt: z.string(),
  caption: z.string().optional(),
});
