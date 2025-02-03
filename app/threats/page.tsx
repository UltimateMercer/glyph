"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  Shield,
  Skull,
  Target,
  AlertCircle,
  Crosshair,
  Zap,
  Binary,
  Radar,
  Eye,
  Globe2,
} from "lucide-react";
import Image from "next/image";
import { threats as threatsData } from "./data";
import { useState } from "react";

type ThreatLevel = "Omega" | "Critical" | "High" | "Medium" | "Low";
type ThreatStatus = "Active" | "Contained" | "Defeated" | "Unknown";

interface ThreatDetails {
  name: string;
  type: string;
  level: ThreatLevel;
  status: ThreatStatus;
  image: string;
  description: string;
  firstContact: string;
  operationalArea: string;
  assets: string[];
  capabilities: string[];
  knownOperations: {
    name: string;
    date: string;
    outcome: string;
  }[];
  weaknesses: string[];
  countermeasures: string[];
  associatedThreats: string[];
  intelligence: string;
  recommendedAction: string;
}

// const threats: ThreatDetails[] = [
//   {
//     name: "The Reapers",
//     type: "Synthetic-Organic Hybrid",
//     level: "Omega",
//     status: "Active",
//     image: "/placeholder.svg?height=400&width=600",
//     description:
//       "Ancient sentient machines that harvest advanced organic civilizations every 50,000 years. Each Reaper is a nation unto itself, a gestalt of millions of harvested organic minds.",
//     firstContact: "2183 CE (Modern) - Eden Prime",
//     operationalArea: "Galaxy-wide",
//     assets: [
//       "Capital Ships",
//       "Destroyer-class vessels",
//       "Indoctrination capability",
//       "Harvesting technology",
//       "Ground forces (husks)",
//       "Mass Relay control",
//     ],
//     capabilities: [
//       "FTL Travel without Mass Relays",
//       "Advanced AI processing",
//       "Indoctrination of organic beings",
//       "Biological conversion technology",
//       "Superior firepower and defenses",
//       "Mass Effect field manipulation",
//     ],
//     knownOperations: [
//       {
//         name: "Battle of the Citadel",
//         date: "2183 CE",
//         outcome: "Sovereign destroyed, invasion delayed",
//       },
//       {
//         name: "Collector Operations",
//         date: "2185 CE",
//         outcome: "Multiple human colonies harvested",
//       },
//       {
//         name: "Earth Invasion",
//         date: "2186 CE",
//         outcome: "Full-scale galactic invasion",
//       },
//     ],
//     weaknesses: [
//       "Concentrated fire on main weapon",
//       "Possible vulnerability to Thanix weaponry",
//       "Dependence on mass relay network",
//     ],
//     countermeasures: ["Crucible superweapon", "Enhanced kinetic barriers", "Anti-indoctrination protocols"],
//     associatedThreats: ["Collectors", "Indoctrinated agents", "Heretic Geth"],
//     intelligence:
//       "Reapers possess intelligence far beyond current organic understanding. Each Reaper contains the processed consciousness of millions of harvested beings.",
//     recommendedAction:
//       "PRIORITY ALPHA: Coordinate all galactic forces. Complete Crucible construction. Maintain strict anti-indoctrination protocols.",
//   },
//   {
//     name: "Cerberus",
//     type: "Paramilitary Organization",
//     level: "Critical",
//     status: "Active",
//     image: "/placeholder.svg?height=400&width=600",
//     description:
//       "Pro-human terrorist organization with significant military and scientific capabilities. Known for extreme methods and human supremacist ideology.",
//     firstContact: "2165 CE",
//     operationalArea: "Throughout Council and Terminus space",
//     assets: [
//       "Advanced warships",
//       "Research facilities",
//       "Phantom troops",
//       "Atlas mechs",
//       "Infiltration units",
//       "Financial resources",
//     ],
//     capabilities: [
//       "Advanced genetic modification",
//       "AI research",
//       "Military operations",
//       "Deep cover infiltration",
//       "Advanced weapons development",
//       "Cyber warfare",
//     ],
//     knownOperations: [
//       {
//         name: "Project Lazarus",
//         date: "2183-2185 CE",
//         outcome: "Successfully reconstructed Commander Shepard",
//       },
//       {
//         name: "Collector Base Raid",
//         date: "2185 CE",
//         outcome: "Base acquired/destroyed (conflicting reports)",
//       },
//       {
//         name: "Mars Archives Attack",
//         date: "2186 CE",
//         outcome: "Prothean data partially acquired",
//       },
//     ],
//     weaknesses: [
//       "Centralized leadership",
//       "Resource limitations",
//       "Internal power struggles",
//       "Dependency on Reaper tech",
//     ],
//     countermeasures: ["Intelligence gathering", "Network infiltration", "Asset freezing", "Counter-propaganda"],
//     associatedThreats: ["Indoctrinated operatives", "Ex-Alliance personnel", "Corrupt corporations"],
//     intelligence:
//       "Current intelligence suggests widespread Reaper indoctrination among upper echelons. Organization showing signs of degrading operational security.",
//     recommendedAction:
//       "Continue monitoring. Prioritize elimination of key facilities and leadership. Counter recruitment efforts.",
//   },
//   {
//     name: "The Collectors",
//     type: "Modified Organic Species",
//     level: "High",
//     status: "Contained",
//     image: "/placeholder.svg?height=400&width=600",
//     description:
//       "Mysterious insectoid race serving the Reapers. Actually modified Protheans, transformed by Reaper technology into harvesting agents.",
//     firstContact: "Unknown",
//     operationalArea: "Terminus Systems, Human colonies",
//     assets: [
//       "Collector ships",
//       "Seeker swarms",
//       "Advanced bioweapons",
//       "Prothean-based technology",
//       "Reaper artifacts",
//     ],
//     capabilities: [
//       "Mass abduction operations",
//       "Advanced biotechnology",
//       "Directed energy weapons",
//       "Genetic modification",
//       "Swarm tactics",
//     ],
//     knownOperations: [
//       {
//         name: "Freedom's Progress Attack",
//         date: "2185 CE",
//         outcome: "Colony successfully abducted",
//       },
//       {
//         name: "Horizon Attack",
//         date: "2185 CE",
//         outcome: "Partial colony abduction",
//       },
//       {
//         name: "Normandy SR-1 Destruction",
//         date: "2183 CE",
//         outcome: "Successful ship destruction",
//       },
//     ],
//     weaknesses: [
//       "Centralized control system",
//       "Dependence on Reaper guidance",
//       "Limited numbers",
//       "Predictable attack patterns",
//     ],
//     countermeasures: ["Anti-seeker swarm countermeasures", "Enhanced kinetic barriers", "Early warning systems"],
//     associatedThreats: ["Reapers", "Husks", "Harbinger"],
//     intelligence:
//       "Base of operations confirmed beyond Omega 4 Relay. All specimens show signs of extensive genetic modification and cybernetic enhancement.",
//     recommendedAction:
//       "Monitor Omega 4 Relay activity. Maintain colony defense systems. Gather intelligence on remaining collector vessels.",
//   },
// ]

const threats = threatsData;

export default function ThreatsPage() {
  const [selectedThreat, setSelectedThreat] = useState<ThreatDetails | null>(
    null
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-cyan-400">
            <AlertTriangle className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Threat Analysis
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Known Threats
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            Classified intelligence on major threats to galactic stability.
            Access restricted to authorized agents only.
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
      </section>

      {/* Threat Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {threats.map((threat) => (
          <Card
            key={threat.name}
            className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-all duration-200 hover:bg-blue-950/30"
            onClick={() => setSelectedThreat(threat)}
            role="button"
            tabIndex={0}
          >
            <div className="relative h-48">
              <Image
                src={threat.image || "/placeholder.svg"}
                alt={threat.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-blue-100">
                    {threat.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className={cn(
                      "border-cyan-400/30 bg-blue-950/50",
                      threat.level === "Omega" &&
                        "border-red-500/50 text-red-400",
                      threat.level === "Critical" &&
                        "border-orange-500/50 text-orange-400",
                      threat.level === "High" &&
                        "border-yellow-500/50 text-yellow-400",
                      threat.level === "Medium" &&
                        "border-blue-500/50 text-blue-400",
                      threat.level === "Low" &&
                        "border-green-500/50 text-green-400"
                    )}
                  >
                    {threat.level} Level Threat
                  </Badge>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-blue-300">
                  <div className="flex items-center">
                    <Target className="mr-1 h-4 w-4" />
                    {threat.type}
                  </div>
                  <div className="h-1 w-1 rounded-full bg-blue-400" />
                  <Badge
                    variant="secondary"
                    className="text-white bg-blue-400/20"
                  >
                    {threat.status}
                  </Badge>
                </div>
              </div>
            </div>
            <CardContent className="space-y-4 p-4">
              <p className="text-sm text-blue-300">{threat.description}</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-medium text-blue-100">
                    Key Capabilities
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {threat.capabilities.slice(0, 3).map((capability) => (
                    <Badge
                      key={capability}
                      variant="secondary"
                      className="bg-blue-900/20 text-blue-300"
                    >
                      {capability}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-blue-900/50 pt-4">
                <div className="flex items-center space-x-2 text-sm text-cyan-400">
                  <Eye className="h-4 w-4" />
                  <span>View Full Analysis</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Threat Details Dialog */}
      <Dialog
        open={!!selectedThreat}
        onOpenChange={() => setSelectedThreat(null)}
      >
        {selectedThreat && (
          <DialogContent className="max-h-[90vh] max-w-4xl border-blue-900/50 bg-blue-950/90 backdrop-blur-md">
            <DialogHeader>
              <div className="flex items-center justify-between py-2">
                <DialogTitle className="text-2xl font-bold text-blue-100">
                  {selectedThreat.name}
                </DialogTitle>
                <Badge
                  variant="outline"
                  className={cn(
                    "border-cyan-400/30 bg-blue-950/50",
                    selectedThreat.level === "Omega" &&
                      "border-red-500/50 text-red-400",
                    selectedThreat.level === "Critical" &&
                      "border-orange-500/50 text-orange-400",
                    selectedThreat.level === "High" &&
                      "border-yellow-500/50 text-yellow-400",
                    selectedThreat.level === "Medium" &&
                      "border-blue-500/50 text-blue-400",
                    selectedThreat.level === "Low" &&
                      "border-green-500/50 text-green-400"
                  )}
                >
                  {selectedThreat.level} Level Threat
                </Badge>
              </div>
              <DialogDescription className="text-blue-300">
                {selectedThreat.description}
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-full max-h-[70vh] pr-4">
              <>
                <div className="mt-6 space-y-6 pb-4">
                  {/* Basic Info */}
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Type
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedThreat.type}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Radar className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          First Contact
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedThreat.firstContact}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Globe2 className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Operational Area
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedThreat.operationalArea}
                      </p>
                    </div>
                  </div>

                  <Separator className="border-blue-900/50" />

                  {/* Assets & Capabilities */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Known Assets
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-blue-300">
                        {selectedThreat.assets.map((asset) => (
                          <li
                            key={asset}
                            className="flex items-center space-x-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            <span>{asset}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Capabilities
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-blue-300">
                        {selectedThreat.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="flex items-center space-x-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Separator className="border-blue-900/50" />

                  {/* Known Operations */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Crosshair className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm font-medium text-blue-100">
                        Known Operations
                      </span>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {selectedThreat.knownOperations.map((operation) => (
                        <Card
                          key={operation.name}
                          className="border-blue-900/50 bg-blue-950/20"
                        >
                          <CardContent className="p-4">
                            <h4 className="font-medium text-blue-100">
                              {operation.name}
                            </h4>
                            <p className="mt-1 text-sm text-blue-300">
                              {operation.date}
                            </p>
                            <p className="mt-2 text-sm text-blue-300">
                              {operation.outcome}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator className="border-blue-900/50" />

                  {/* Weaknesses & Countermeasures */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Known Weaknesses
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-blue-300">
                        {selectedThreat.weaknesses.map((weakness) => (
                          <li
                            key={weakness}
                            className="flex items-center space-x-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Countermeasures
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-blue-300">
                        {selectedThreat.countermeasures.map((measure) => (
                          <li
                            key={measure}
                            className="flex items-center space-x-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            <span>{measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Separator className="border-blue-900/50" />

                  {/* Intelligence & Recommendations */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Binary className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Intelligence Assessment
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedThreat.intelligence}
                      </p>
                    </div>
                    <Separator className="border-blue-900/50" />
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Skull className="h-4 w-4 text-red-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Recommended Action
                        </span>
                      </div>
                      <p className="text-sm text-red-400">
                        {selectedThreat.recommendedAction}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
