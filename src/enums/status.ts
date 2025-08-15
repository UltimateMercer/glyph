import { z } from "zod";

export const StatusEnum = z.enum([
  "Active",
  "Deceased",
  "Missing",
  "Unknown",
  "Retired",
  "KIA",
]);
