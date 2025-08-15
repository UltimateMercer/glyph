import { z } from "zod";
import { AndromedaDataSchema } from "./andromeda";
import { PersonSchema } from "./persons";
import { ThreatSchema } from "./threat";
import { LocationSchema } from "./location";
import { TechnologySchema } from "./technology";
import { TimelineEntrySchema } from "./timeline-entry";
import { MilitaryUnitSchema } from "./military";
import { SpeciesDataSchema } from "./species";
import { ShipSchema } from "./ship";

// Collection schemas
export const PersonsDataSchema = z.array(PersonSchema);
export const ShipsDataSchema = z.array(ShipSchema);
export const ThreatsDataSchema = z.array(ThreatSchema);
export const LocationsDataSchema = z.array(LocationSchema);
export const SpeciesCollectionSchema = z.array(SpeciesDataSchema);
export const TechnologiesDataSchema = z.array(TechnologySchema);
export const MilitaryUnitsDataSchema = z.array(MilitaryUnitSchema);
export const AndromedaCollectionSchema = z.array(AndromedaDataSchema);
export const TimelineDataSchema = z.array(TimelineEntrySchema);
