import { z } from "zod";
import { AndromedaDataSchema } from "./andromeda";
import { LocationSchema } from "./location";
import { MilitaryUnitSchema } from "./military";
import { PersonSchema } from "./persons";
import { PortraitSchema } from "./portrait";
import { ShipSchema } from "./ship";
import { ShipSpecsSchema } from "./ship-specs";
import { SpeciesDataSchema } from "./species";
import { TechnologySchema } from "./technology";
import { ThreatSchema } from "./threat";
import { TimelineEntrySchema } from "./timeline-entry";
import { TimelineEventSchema } from "./timeline-event";

// Export types
export type Person = z.infer<typeof PersonSchema>;
export type Ship = z.infer<typeof ShipSchema>;
export type Threat = z.infer<typeof ThreatSchema>;
export type Location = z.infer<typeof LocationSchema>;
export type SpeciesData = z.infer<typeof SpeciesDataSchema>;
export type Technology = z.infer<typeof TechnologySchema>;
export type MilitaryUnit = z.infer<typeof MilitaryUnitSchema>;
export type AndromedaData = z.infer<typeof AndromedaDataSchema>;
export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
export type Portrait = z.infer<typeof PortraitSchema>;
export type TimelineEvent = z.infer<typeof TimelineEventSchema>;
export type ShipSpecs = z.infer<typeof ShipSpecsSchema>;
