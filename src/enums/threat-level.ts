import { z } from "zod";

export const ThreatLevelEnum = z.enum([
  "Low",
  "Medium",
  "High",
  "Critical",
  "Omega",
]);
