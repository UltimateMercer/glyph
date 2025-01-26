"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Shield,
  Star,
  Medal,
  Award,
  MedalIcon as Military,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { persons } from "./data";
import { PersonDrawer } from "@/components/person-drawer";

// const persons = [
//   {
//     name: "Commander Shepard",
//     role: "Spectre",
//     affiliation: "Systems Alliance",
//     status: "Legend",
//     description:
//       "First human Spectre and commander of the SSV Normandy. Known for leading the fight against the Reapers.",
//     achievements: [
//       "Hero of the Citadel",
//       "Savior of the Galaxy",
//       "N7 Operative",
//     ],
//     image: "/placeholder.svg?height=400&width=400",
//     type: "military",
//     details: {
//       biography:
//         "Commander Shepard is a legendary figure in the galaxy, known for being the first human Spectre and the leader in the fight against the Reaper threat. Born on Earth or in space (depending on their background), Shepard rose through the Alliance military ranks to become one of humanity's most respected soldiers.",
//       specializations: [
//         "Combat Tactics",
//         "Leadership",
//         "Diplomacy",
//         "Special Operations",
//       ],
//       notableActions: [
//         "Led the mission to defeat Sovereign and the geth",
//         "Destroyed the Collector base beyond the Omega 4 Relay",
//         "United the galaxy against the Reaper threat",
//         "Activated the Crucible to end the Reaper War",
//       ],
//       relationships: [
//         { name: "Anderson", relation: "Mentor" },
//         { name: "Garrus Vakarian", relation: "Squad Member" },
//         { name: "Liara T'Soni", relation: "Squad Member" },
//         { name: "Tali'Zorah", relation: "Squad Member" },
//       ],
//       skills: [
//         { category: "Combat", level: 10 },
//         { category: "Leadership", level: 10 },
//         { category: "Tactics", level: 9 },
//         { category: "Diplomacy", level: 8 },
//       ],
//     },
//   },
//   {
//     name: "Liara T'Soni",
//     role: "Information Broker",
//     affiliation: "Independent",
//     status: "Active",
//     description:
//       "Prothean expert turned Shadow Broker. Key ally in the fight against the Reapers.",
//     achievements: ["Shadow Broker", "Prothean Expert", "Biotic Specialist"],
//     image: "/placeholder.svg?height=400&width=400",
//     type: "scientific",
//     details: {
//       biography:
//         "Dr. Liara T'Soni is a renowned Prothean expert and powerful biotic who later became the mysterious Shadow Broker. Initially a naive archaeologist, she evolved into one of the galaxy's most influential information brokers while maintaining her dedication to stopping the Reapers.",
//       specializations: [
//         "Archaeology",
//         "Information Network",
//         "Biotics",
//         "Research",
//       ],
//       notableActions: [
//         "Became the new Shadow Broker",
//         "Discovered crucial information about the Prothean extinction",
//         "Helped develop the Crucible project",
//         "Maintained the galaxy's most extensive intelligence network",
//       ],
//       relationships: [
//         { name: "Commander Shepard", relation: "Close Ally" },
//         { name: "Feron", relation: "Agent" },
//         { name: "Benezia", relation: "Mother" },
//       ],
//       skills: [
//         { category: "Biotics", level: 9 },
//         { category: "Research", level: 10 },
//         { category: "Intelligence", level: 10 },
//         { category: "Combat", level: 7 },
//       ],
//     },
//   },
//   {
//     name: "Garrus Vakarian",
//     role: "Vigilante",
//     affiliation: "Turian Hierarchy",
//     status: "Active",
//     description:
//       "Former C-Sec officer and expert marksman. Known as Archangel on Omega.",
//     achievements: ["C-Sec Officer", "Archangel", "Reaper Advisor"],
//     image: "/placeholder.svg?height=400&width=400",
//     type: "military",
//   },
//   {
//     name: "Tali'Zorah vas Normandy",
//     role: "Engineer",
//     affiliation: "Quarian Fleet",
//     status: "Active",
//     description:
//       "Quarian engineer and expert on geth technology. Admiral in the Quarian Fleet.",
//     achievements: ["Admiral", "Geth Expert", "Engineering Specialist"],
//     image: "/placeholder.svg?height=400&width=400",
//     type: "technical",
//   },
//   {
//     name: "Urdnot Wrex",
//     role: "Clan Leader",
//     affiliation: "Clan Urdnot",
//     status: "Active",
//     description:
//       "Leader of Clan Urdnot and key figure in uniting the krogan people.",
//     achievements: ["Clan Leader", "Krogan Unifier", "Battlemaster"],
//     image: "/placeholder.svg?height=400&width=400",
//     type: "political",
//   },
//   {
//     name: "Miranda Lawson",
//     role: "Operative",
//     affiliation: "Former Cerberus",
//     status: "Active",
//     description:
//       "Former Cerberus operative and biotic specialist. Key figure in the Lazarus Project.",
//     achievements: ["Cerberus Officer", "Lazarus Project Lead", "Biotic Expert"],
//     image: "/placeholder.svg?height=400&width=400",
//     type: "military",
//   },
// ];

export default function PersonsPage() {
  const [selectedPerson, setSelectedPerson] = useState<
    (typeof persons)[0] | null
  >(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-400">
            <Users className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Personnel Database
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Notable Individuals
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            Profiles of key figures who have shaped galactic history.
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
      </section>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Military", value: "43%", icon: Military },
          { label: "Political", value: "28%", icon: Shield },
          { label: "Scientific", value: "18%", icon: Star },
          { label: "Technical", value: "11%", icon: Medal },
        ].map((stat) => (
          <Card
            key={stat.label}
            className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div className="space-y-1">
                <p className="text-sm text-blue-400">{stat.label}</p>
                <p className="text-2xl font-bold text-blue-100">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-blue-400" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Person Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {persons.map((person) => (
          <Card
            key={person.name}
            className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-all duration-200 hover:bg-blue-950/30"
            onClick={() => setSelectedPerson(person)}
            role="button"
            tabIndex={0}
          >
            <div className="relative h-48">
              <Image
                src={person.image || "/placeholder.svg"}
                alt={person.name}
                fill
                className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-blue-100">
                    {person.name}
                  </h3>
                  <ChevronRight className="h-5 w-5 text-blue-400 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
                <div className="mt-1 flex items-center space-x-2">
                  <Badge
                    variant="outline"
                    className="border-blue-400/30 bg-blue-950/50 text-blue-400"
                  >
                    {person.role}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-400/30 bg-blue-950/50 text-blue-400"
                  >
                    {person.status}
                  </Badge>
                </div>
              </div>
            </div>
            <CardContent className="space-y-4 p-4">
              <div>
                <p className="text-sm text-blue-300">{person.description}</p>
                <p className="mt-2 text-sm text-blue-400">
                  {person.affiliation}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-blue-100">
                  Notable Achievements
                </p>
                <div className="flex flex-wrap gap-2">
                  {person.achievements.map((achievement) => (
                    <Badge
                      key={achievement}
                      className="bg-blue-900/20 text-blue-300"
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <PersonDrawer
        person={selectedPerson}
        open={!!selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </div>
  );
}
