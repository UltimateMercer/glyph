import { z } from "zod";

export const SpeciesEnum = z.enum([
  "Human",
  "Turian",
  "Asari",
  "Salarian",
  "Krogan",
  "Quarian",
  "Geth",
  "Batarian",
  "Volus",
  "Elcor",
  "Hanar",
  "Drell",
  "Vorcha",
  "Yahg",
  "Prothean",
  "Reaper",
  "Collector",
  "Angara",
  "Kett",
  "Remnant",
]);
