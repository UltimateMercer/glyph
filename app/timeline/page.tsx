"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Milestone,
  AlertTriangle,
  Star,
  Rocket,
  Crosshair,
  Atom,
  Globe2,
  Shield,
  Zap,
  MapPin,
  History,
  Users,
  FileText,
  Target,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  type: "major" | "conflict" | "discovery" | "contact";
  icon: any;
  details: {
    location: string;
    significance: string;
    casualties?: string;
    keyFigures: string[];
    aftermath: string;
    longTermEffects: string;
    relatedEvents?: string[];
    classifiedInfo?: string;
    sources?: string[];
    archivalNotes?: string;
    culturalImpact?: string;
    technologicalImpact?: string;
    politicalImpact?: string;
    economicImpact?: string;
    images?: string[];
  };
};

type TimelineEra = {
  era: string;
  description?: string;
  significance?: string;
  events: TimelineEvent[];
};

const timelineEvents: TimelineEra[] = [
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

export default function TimelinePage() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-400">
            <Clock className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Historical Records
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Galactic Timeline
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            A comprehensive chronicle of major galactic events from the rise of
            the Leviathans to the Reaper War.
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
      </section>

      {/* Timeline */}
      <div className="space-y-12">
        {timelineEvents.map((era, eraIndex) => (
          <div key={era.era} className="relative space-y-6">
            {/* Era Title */}
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-semibold tracking-tight text-blue-100">
                {era.era}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-900/50 to-transparent" />
            </div>

            {/* Events */}
            <div className="relative ml-3 space-y-6 border-l border-blue-900/50">
              {era.events.map((event, eventIndex) => (
                <div
                  key={event.title}
                  className={cn(
                    "relative ml-6 transition-opacity hover:opacity-80",
                    eventIndex === 0 && "pt-2"
                  )}
                >
                  {/* Event Connector */}
                  <div className="absolute -left-[1.875rem] h-4 w-4 rounded-full border-2 border-blue-900/50 bg-blue-950">
                    <div
                      className={cn(
                        "absolute inset-0.5 rounded-full transition-colors duration-200",
                        event.type === "conflict" &&
                          "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]",
                        event.type === "discovery" &&
                          "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]",
                        event.type === "major" &&
                          "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]",
                        event.type === "contact" &&
                          "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                      )}
                    />
                  </div>

                  <Card
                    className={cn(
                      "group border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-all duration-200 cursor-pointer",
                      event.type === "conflict" &&
                        "hover:border-red-500/50 hover:bg-red-950/10",
                      event.type === "discovery" &&
                        "hover:border-emerald-500/50 hover:bg-emerald-950/10",
                      event.type === "major" &&
                        "hover:border-blue-500/50 hover:bg-blue-950/10",
                      event.type === "contact" &&
                        "hover:border-purple-500/50 hover:bg-purple-950/10"
                    )}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle
                          className={cn(
                            "flex items-center space-x-3",
                            event.type === "conflict" && "text-red-100",
                            event.type === "discovery" && "text-emerald-100",
                            event.type === "major" && "text-blue-100",
                            event.type === "contact" && "text-purple-100"
                          )}
                        >
                          <event.icon
                            className={cn(
                              "h-5 w-5",
                              event.type === "conflict" && "text-red-400",
                              event.type === "discovery" && "text-green-400",
                              event.type === "major" && "text-blue-400",
                              event.type === "contact" && "text-purple-400"
                            )}
                          />
                          <span>{event.title}</span>
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className={cn(
                            "px-3 py-1 font-medium backdrop-blur-sm",
                            event.type === "conflict" &&
                              "border-red-800 text-red-400 bg-red-950/20",
                            event.type === "discovery" &&
                              "border-emerald-800 text-emerald-400 bg-emerald-950/20",
                            event.type === "major" &&
                              "border-blue-800 text-blue-400 bg-blue-950/20",
                            event.type === "contact" &&
                              "border-purple-800 text-purple-400 bg-purple-950/20"
                          )}
                        >
                          {event.year}
                        </Badge>
                      </div>
                      <CardDescription className="mt-2 text-blue-300">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-blue-400">
                        <Badge
                          variant="secondary"
                          className={cn(
                            "px-3 py-1 font-medium",
                            event.type === "conflict" &&
                              "bg-red-950/40 text-red-400 border border-red-800",
                            event.type === "discovery" &&
                              "bg-emerald-950/40 text-emerald-400 border border-emerald-800",
                            event.type === "major" &&
                              "bg-blue-950/40 text-blue-400 border border-blue-800",
                            event.type === "contact" &&
                              "bg-purple-950/40 text-purple-400 border border-purple-800"
                          )}
                        >
                          {event.type.charAt(0).toUpperCase() +
                            event.type.slice(1)}
                        </Badge>
                        {event.type === "conflict" && (
                          <span className="flex items-center">
                            <AlertTriangle className="mr-1 h-4 w-4 text-red-400" />
                            Significant casualties reported
                          </span>
                        )}
                      </div>

                      {/* Event Details */}
                      {event.details && (
                        <div className="mt-4 space-y-4 border-t border-blue-900/50 pt-4">
                          <div className="grid gap-4 text-sm md:grid-cols-2">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-blue-400" />
                                <span className="font-medium text-blue-100">
                                  Location
                                </span>
                              </div>
                              <p className="text-blue-300">
                                {event.details.location}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Star className="h-4 w-4 text-blue-400" />
                                <span className="font-medium text-blue-100">
                                  Significance
                                </span>
                              </div>
                              <p className="text-blue-300">
                                {event.details.significance}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-blue-400" />
                              <span className="font-medium text-blue-100">
                                Key Figures
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {event.details.keyFigures.map((figure) => (
                                <Badge
                                  key={figure}
                                  variant="outline"
                                  className="border-blue-900 bg-blue-950/50 text-blue-300"
                                >
                                  {figure}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {event.details.casualties && (
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <AlertTriangle className="h-4 w-4 text-red-400" />
                                <span className="font-medium text-blue-100">
                                  Casualties
                                </span>
                              </div>
                              <p className="text-blue-300">
                                {event.details.casualties}
                              </p>
                            </div>
                          )}

                          <div className="grid gap-4 text-sm md:grid-cols-2">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-blue-400" />
                                <span className="font-medium text-blue-100">
                                  Immediate Aftermath
                                </span>
                              </div>
                              <p className="text-blue-300">
                                {event.details.aftermath}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <History className="h-4 w-4 text-blue-400" />
                                <span className="font-medium text-blue-100">
                                  Long-term Effects
                                </span>
                              </div>
                              <p className="text-blue-300">
                                {event.details.longTermEffects}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">Event Classifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-6">
            {[
              { type: "major", label: "Major Event", color: "blue" },
              { type: "conflict", label: "Conflict", color: "red" },
              { type: "discovery", label: "Discovery", color: "emerald" },
              { type: "contact", label: "First Contact", color: "purple" },
            ].map(({ type, label, color }) => (
              <div key={type} className="flex items-center space-x-3">
                <div
                  className={`h-3 w-3 rounded-full bg-${color}-500 shadow-[0_0_10px_rgba(var(--${color}-rgb),0.3)]`}
                />
                <Badge
                  variant="outline"
                  className={`border-${color}-800 text-${color}-400 bg-${color}-950/20 px-3 py-1`}
                >
                  {label}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Event Details Dialog */}
      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <DialogContent className="max-h-[90vh] max-w-4xl border-blue-900/50 bg-blue-950/90 backdrop-blur-md">
          <ScrollArea className="h-full max-h-[80vh] pr-4">
            {selectedEvent && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-2xl font-bold text-blue-100">
                      {selectedEvent.title}
                    </DialogTitle>
                    <Badge
                      variant="outline"
                      className={cn(
                        "border-blue-400/30 bg-blue-950/50",
                        selectedEvent.type === "conflict" &&
                          "border-red-500/50 text-red-400",
                        selectedEvent.type === "discovery" &&
                          "border-emerald-500/50 text-emerald-400",
                        selectedEvent.type === "major" &&
                          "border-blue-500/50 text-blue-400",
                        selectedEvent.type === "contact" &&
                          "border-purple-500/50 text-purple-400"
                      )}
                    >
                      {selectedEvent.year}
                    </Badge>
                  </div>
                  <DialogDescription className="text-blue-300">
                    {selectedEvent.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 space-y-6">
                  {/* Basic Info */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Location
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedEvent.details.location}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Significance
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedEvent.details.significance}
                      </p>
                    </div>
                  </div>

                  <Separator className="border-blue-900/50" />

                  {/* Key Figures */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm font-medium text-blue-100">
                        Key Figures
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.details.keyFigures.map((figure) => (
                        <Badge
                          key={figure}
                          variant="outline"
                          className="border-blue-900 bg-blue-950/50 text-blue-300"
                        >
                          {figure}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedEvent.details.casualties && (
                    <>
                      <Separator className="border-blue-900/50" />
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-sm font-medium text-blue-100">
                            Casualties
                          </span>
                        </div>
                        <p className="text-sm text-red-400">
                          {selectedEvent.details.casualties}
                        </p>
                      </div>
                    </>
                  )}

                  <Separator className="border-blue-900/50" />

                  {/* Impact Analysis */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Immediate Aftermath
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedEvent.details.aftermath}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <History className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Long-term Effects
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedEvent.details.longTermEffects}
                      </p>
                    </div>
                  </div>

                  {/* Additional Impact Sections */}
                  {(selectedEvent.details.culturalImpact ||
                    selectedEvent.details.technologicalImpact ||
                    selectedEvent.details.politicalImpact ||
                    selectedEvent.details.economicImpact) && (
                    <>
                      <Separator className="border-blue-900/50" />
                      <div className="grid gap-4 md:grid-cols-2">
                        {selectedEvent.details.culturalImpact && (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Globe2 className="h-4 w-4 text-cyan-400" />
                              <span className="text-sm font-medium text-blue-100">
                                Cultural Impact
                              </span>
                            </div>
                            <p className="text-sm text-blue-300">
                              {selectedEvent.details.culturalImpact}
                            </p>
                          </div>
                        )}
                        {selectedEvent.details.technologicalImpact && (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Atom className="h-4 w-4 text-cyan-400" />
                              <span className="text-sm font-medium text-blue-100">
                                Technological Impact
                              </span>
                            </div>
                            <p className="text-sm text-blue-300">
                              {selectedEvent.details.technologicalImpact}
                            </p>
                          </div>
                        )}
                        {selectedEvent.details.politicalImpact && (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Shield className="h-4 w-4 text-cyan-400" />
                              <span className="text-sm font-medium text-blue-100">
                                Political Impact
                              </span>
                            </div>
                            <p className="text-sm text-blue-300">
                              {selectedEvent.details.politicalImpact}
                            </p>
                          </div>
                        )}
                        {selectedEvent.details.economicImpact && (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Target className="h-4 w-4 text-cyan-400" />
                              <span className="text-sm font-medium text-blue-100">
                                Economic Impact
                              </span>
                            </div>
                            <p className="text-sm text-blue-300">
                              {selectedEvent.details.economicImpact}
                            </p>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {/* Classified Information */}
                  {selectedEvent.details.classifiedInfo && (
                    <>
                      <Separator className="border-blue-900/50" />
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-red-400" />
                          <span className="text-sm font-medium text-blue-100">
                            Classified Information
                          </span>
                        </div>
                        <p className="text-sm text-red-400">
                          {selectedEvent.details.classifiedInfo}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
