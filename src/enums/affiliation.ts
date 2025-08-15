import { z } from "zod";

export const AffiliationEnum = z.enum([
  "Systems Alliance",
  "Citadel Council",
  "Cerberus",
  "Normandy Crew",
  "Turian Hierarchy",
  "Asari Republics",
  "Salarian Union",
  "Krogan Clans",
  "Quarian Migrant Fleet",
  "Geth Collective",
  "Batarian Hegemony",
  "Shadow Broker",
  "Reapers",
  "Collectors",
  "Andromeda Initiative",
  "Kett Empire",
  "Angaran Resistance",
  "Independent",
  "Unknown",
]);
