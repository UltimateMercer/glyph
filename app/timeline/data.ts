import {
  Milestone,
  AlertTriangle,
  Star,
  Rocket,
  Atom,
  Globe2,
  Eye,
} from "lucide-react";

import type { TimelineEra } from "./types";

export const timelineEvents: TimelineEra[] = [
  {
    era: "Ancient Era",
    events: [
      {
        year: "1,000,000,000 BCE",
        title: "Leviathan Dominance",
        description:
          "The Leviathans rule the galaxy as the apex species, creating the Intelligence that would later become the Catalyst.",
        type: "major",
        icon: Star,
        details: {
          location: "Unknown regions of the galaxy",
          significance: "Establishment of first known galactic civilization",
          casualties: "Unknown",
          keyFigures: ["Leviathan Leaders", "The Intelligence"],
          aftermath: "Creation of the first AI overseer",
          longTermEffects: "Set in motion events leading to the Reaper cycle",
        },
      },
      {
        year: "37,000,000 BCE",
        title: "First Harvest",
        description:
          "The Intelligence creates the first Reaper, Harbinger, from the harvested Leviathan species.",
        type: "conflict",
        icon: AlertTriangle,
        details: {
          location: "Multiple systems across the galaxy",
          significance:
            "Creation of the first Reaper and beginning of the cycle",
          casualties: "Billions of Leviathans",
          keyFigures: [
            "Harbinger",
            "The Intelligence",
            "Last Leviathan survivors",
          ],
          aftermath: "Near extinction of Leviathan species",
          longTermEffects: "Establishment of the cyclical harvest pattern",
        },
      },
    ],
  },
  {
    era: "Pre-Prothean Era",
    events: [
      {
        year: "Unknown BCE",
        title: "Inusannon Civilization",
        description:
          "The rise and fall of the Inusannon, who preceded the Protheans.",
        type: "major",
        icon: Globe2,
        details: {
          location: "Throughout known space",
          significance:
            "Advanced civilization that influenced Prothean development",
          casualties: "Entire species",
          keyFigures: ["Unknown Inusannon Leaders"],
          aftermath: "Complete extinction of species",
          longTermEffects: "Technology and artifacts discovered by Protheans",
        },
      },
      {
        year: "200,000 BCE",
        title: "Rise of the Prothean Empire",
        description:
          "Early Prothean civilization begins its expansion across the galaxy.",
        type: "major",
        icon: Star,
        details: {
          location: "Multiple star systems",
          significance: "Beginning of Prothean dominance",
          keyFigures: ["Early Prothean Leaders", "Pioneer Scientists"],
          aftermath: "Establishment of initial Prothean colonies",
          longTermEffects: "Foundation of galactic civilization",
          culturalImpact: "Shaped development of all subsequent civilizations",
          technologicalImpact: "Established basis for mass effect technology",
          politicalImpact: "Created model for galactic governance",
          economicImpact: "Established first interstellar trade routes",
        },
      },
      {
        year: "68,000 BCE",
        title: "Peak of Prothean Science",
        description:
          "Prothean research reaches its zenith, producing numerous technological breakthroughs.",
        type: "discovery",
        icon: Atom,
        details: {
          location: "Various research centers",
          significance: "Major technological advancement",
          keyFigures: ["Lead Researchers", "Project Directors"],
          aftermath: "Rapid technological progress",
          longTermEffects: "Technologies discovered by modern races",
          classifiedInfo: "Several discoveries remain sealed in secure vaults",
          technologicalImpact:
            "Created foundation for modern mass effect technology",
        },
      },
    ],
  },
  {
    era: "Prothean Era",
    events: [
      {
        year: "68,000 BCE",
        title: "Prothean Empire Rise",
        description:
          "The Prothean Empire reaches its height, dominating the galaxy through technological superiority.",
        type: "major",
        icon: Globe2,
        details: {
          location: "Entire known galaxy",
          significance: "Establishment of first unified galactic government",
          casualties: "Unknown",
          keyFigures: ["Prothean Empire Leadership", "Various subject races"],
          aftermath: "Galaxy-wide Prothean dominion",
          longTermEffects: "Development of mass effect technology foundation",
        },
      },
      {
        year: "48,000 BCE",
        title: "Prothean-Reaper War",
        description:
          "The Reapers emerge from dark space, beginning the systematic harvest of the Prothean Empire.",
        type: "conflict",
        icon: AlertTriangle,
        details: {
          location: "All Prothean systems",
          significance: "Fall of the most advanced known civilization",
          casualties: "Trillions of Protheans and subject species",
          keyFigures: [
            "Reaper forces",
            "Prothean military command",
            "Ilos scientists",
          ],
          aftermath: "Near-total extinction of Protheans",
          longTermEffects: "Loss of vast technological knowledge",
        },
      },
      {
        year: "48,000 BCE",
        title: "Conduit Construction",
        description:
          "Prothean scientists on Ilos construct the Conduit while in cryogenic stasis, hoping to break the cycle.",
        type: "discovery",
        icon: Atom,
        details: {
          location: "Ilos research facility",
          significance: "Creation of secret Mass Relay",
          casualties: "Most of the Ilos research team",
          keyFigures: ["Vigil VI", "Ilos Chief Scientist", "Research Team"],
          aftermath: "Successful creation of mini mass relay",
          longTermEffects: "Crucial to defeating Sovereign in modern era",
        },
      },
    ],
  },
  {
    era: "Council Formation",
    events: [
      {
        year: "580 BCE",
        title: "Citadel Discovery",
        description:
          "Asari explorers discover the Citadel and establish the first Citadel Council.",
        type: "discovery",
        icon: Milestone,
        details: {
          location: "Widow System",
          significance: "Foundation of modern galactic government",
          casualties: "None",
          keyFigures: ["Asari exploration team", "First Council members"],
          aftermath: "Establishment of Citadel as galactic capital",
          longTermEffects: "Creation of unified galactic community",
        },
      },
      {
        year: "520 BCE",
        title: "Salarian Contact",
        description:
          "The Asari make first contact with the Salarians. Together they establish the foundation of the Citadel Council.",
        type: "contact",
        icon: Star,
        details: {
          location: "Citadel Space",
          significance: "Formation of Citadel Council partnership",
          casualties: "None",
          keyFigures: ["Asari diplomats", "Salarian Union representatives"],
          aftermath: "Creation of two-species Council",
          longTermEffects: "Framework for modern galactic politics",
        },
      },
    ],
  },
  {
    era: "Rachni Wars",
    events: [
      {
        year: "1 CE",
        title: "Rachni Discovery",
        description:
          "Council explorers discover the Rachni after opening a dormant mass relay.",
        type: "discovery",
        icon: Rocket,
        details: {
          location: "Rachni space",
          significance: "First contact with hostile species",
          casualties: "Initial exploration team",
          keyFigures: ["Council expedition team", "First Rachni Queen"],
          aftermath: "Beginning of Rachni Wars",
          longTermEffects: "Council restrictions on relay activation",
        },
      },
      {
        year: "1 CE - 300 CE",
        title: "Rachni Wars",
        description:
          "The Rachni immediately begin attacking Council space, starting centuries of conflict.",
        type: "conflict",
        icon: AlertTriangle,
        details: {
          location: "Multiple systems across Council space",
          significance: "First major galactic war",
          casualties: "Millions of Council species citizens",
          keyFigures: ["Rachni Queens", "Council military leadership"],
          aftermath: "Decision to uplift the Krogan",
          longTermEffects: "Shaped future Council military policy",
        },
      },
    ],
  },
  {
    era: "Modern Era",
    events: [
      {
        year: "2148 CE",
        title: "Mars Discovery",
        description:
          "Humans discover Prothean ruins on Mars, leading to rapid technological advancement.",
        type: "discovery",
        icon: Rocket,
        details: {
          location: "Mars, Sol System",
          significance: "Human discovery of mass effect technology",
          casualties: "None",
          keyFigures: ["Dr. Matilda Warren", "Alliance Research Team"],
          aftermath: "Rapid human technological advancement",
          longTermEffects: "Humanity's emergence as galactic power",
        },
      },
      {
        year: "2157 CE",
        title: "First Contact War",
        description:
          "Humanity's first contact with an alien race (the Turians) leads to the First Contact War.",
        type: "conflict",
        icon: AlertTriangle,
        details: {
          location: "Shanxi colony",
          significance: "Humanity's introduction to galactic community",
          casualties: "623 humans, 1,200 turians",
          keyFigures: [
            "General Williams",
            "Admiral Drescher",
            "Turian Commander",
          ],
          aftermath: "Peace negotiations and diplomatic relations",
          longTermEffects: "Complex human-turian relationship",
        },
      },
      {
        year: "2183 CE",
        title: "Eden Prime Attack",
        description:
          "Saren and the geth attack Eden Prime, marking the return of the Reaper threat.",
        type: "conflict",
        icon: AlertTriangle,
        details: {
          location: "Eden Prime colony",
          significance: "First modern encounter with Reaper technology",
          casualties: "Thousands of colonists",
          keyFigures: ["Commander Shepard", "Saren", "Nihlus"],
          aftermath: "Investigation of Saren and discovery of Sovereign",
          longTermEffects: "Beginning of modern Reaper war",
        },
      },
      {
        year: "2183 CE",
        title: "Battle of the Citadel",
        description:
          "Sovereign attacks the Citadel, leading to a massive space battle.",
        type: "conflict",
        icon: AlertTriangle,
        details: {
          location: "Citadel",
          significance: "First major battle against a Reaper",
          casualties: "Thousands of military and civilian",
          keyFigures: [
            "Commander Shepard",
            "Sovereign",
            "Saren",
            "Admiral Hackett",
          ],
          aftermath: "Destruction of Sovereign",
          longTermEffects: "Proof of Reaper existence",
        },
      },
      {
        year: "2184 CE",
        title: "Collector Ship Encounters",
        description:
          "Multiple colonies report sightings of unknown vessels later identified as Collector ships.",
        type: "discovery",
        icon: Eye,
        details: {
          location: "Various human colonies",
          significance: "First confirmation of Collector presence",
          keyFigures: ["Colonial witnesses", "Alliance investigators"],
          aftermath: "Increased colony defenses",
          longTermEffects: "Led to investigation of Collector threat",
          classifiedInfo: "Early warning signs were initially dismissed",
        },
      },
      {
        year: "2185 CE",
        title: "Arrival DLC Events",
        description:
          "Dr. Amanda Kenson's discovery of Reaper arrival evidence and subsequent events.",
        type: "major",
        icon: AlertTriangle,
        details: {
          location: "Bahak System",
          significance: "Delayed Reaper invasion",
          casualties: "300,000+ Batarian colonists",
          keyFigures: ["Dr. Amanda Kenson", "Commander Shepard"],
          aftermath: "Destruction of Bahak System",
          longTermEffects: "Strained Human-Batarian relations",
          classifiedInfo: "Alliance black ops involvement",
        },
      },
      {
        year: "2185 CE",
        title: "Collector Attacks",
        description:
          "Human colonies begin disappearing due to Collector attacks.",
        type: "conflict",
        icon: AlertTriangle,
        details: {
          location: "Human colonies in Terminus Systems",
          significance: "Revelation of Collector threat",
          casualties: "Hundreds of thousands of colonists",
          keyFigures: [
            "Commander Shepard",
            "Illusive Man",
            "Collector General",
          ],
          aftermath: "Destruction of Collector base",
          longTermEffects: "Delayed Reaper invasion plans",
        },
      },
      {
        year: "2186 CE",
        title: "Reaper Invasion",
        description: "The Reapers launch a full-scale invasion of the galaxy.",
        type: "conflict",
        icon: AlertTriangle,
        details: {
          location: "Galaxy-wide",
          significance: "Culmination of Reaper harvest cycle",
          casualties: "Billions across all species",
          keyFigures: [
            "Commander Shepard",
            "Admiral Anderson",
            "Admiral Hackett",
            "Illusive Man",
          ],
          aftermath: "Activation of Crucible",
          longTermEffects: "End of Reaper threat and transformation of galaxy",
        },
      },
    ],
  },
];
