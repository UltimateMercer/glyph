import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Navigation,
  Users,
  Rocket,
  Target,
  Clock,
  Database,
  Ship,
  Cpu,
  Brain,
  Star,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { arks, keyPersonnel, missionObjectives } from "./data";

export default function AndromedaPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-400">
            <Navigation className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Initiative Database
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Andromeda Initiative
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            Comprehensive data on the ambitious intergalactic colonization
            project to settle the Andromeda galaxy.
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
      </section>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Ship, label: "Ark Ships", value: "6" },
          { icon: Users, label: "Colonists", value: "100,000+" },
          { icon: Target, label: "Golden Worlds", value: "7" },
          { icon: Clock, label: "Journey Time", value: "600 Years" },
        ].map(({ icon: Icon, label, value }) => (
          <Card
            key={label}
            className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm"
          >
            <CardContent className="flex items-center space-x-4 p-6">
              <Icon className="h-8 w-8 text-blue-400" />
              <div>
                <p className="text-sm text-blue-300">{label}</p>
                <p className="text-2xl font-bold text-blue-100">{value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission Objectives */}
      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold tracking-tight text-blue-100">
            Mission Objectives
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {missionObjectives.map((objective) => (
            <Card
              key={objective.title}
              className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-blue-100">
                    {objective.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className={cn(
                      "border-blue-400/30",
                      objective.type === "Primary"
                        ? "text-cyan-400"
                        : "text-blue-400"
                    )}
                  >
                    {objective.type}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-blue-300">
                  {objective.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-blue-900/20 text-blue-300"
                  >
                    {objective.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ark Ships */}
      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold tracking-tight text-blue-100">
            Ark Ships
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {arks.map((ark) => (
            <Card
              key={ark.name}
              className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm"
            >
              <div className="relative h-48">
                <Image
                  src={ark.image || "/placeholder.svg"}
                  alt={ark.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-blue-100">
                      {ark.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="border-blue-400 text-blue-400"
                    >
                      {ark.status}
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-blue-300">
                    <div className="flex items-center">
                      <Rocket className="mr-1 h-4 w-4" />
                      {ark.type}
                    </div>
                    <div className="h-1 w-1 rounded-full bg-blue-400" />
                    <div>{ark.species}</div>
                  </div>
                </div>
              </div>
              <CardContent className="space-y-4 p-4">
                <p className="text-sm text-blue-300">{ark.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Database className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-100">
                      Specifications
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-blue-300">Length</p>
                      <p className="font-medium text-blue-100">
                        {ark.specifications.length}
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-300">Population</p>
                      <p className="font-medium text-blue-100">
                        {ark.specifications.population}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-100">
                      Key Features
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ark.specifications.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="bg-blue-900/20 text-blue-300"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-blue-900/50 pt-4">
                  <div className="flex items-center space-x-2 text-sm text-blue-400">
                    <Users className="h-4 w-4" />
                    <span>Leader: {ark.leader}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Personnel */}
      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold tracking-tight text-blue-100">
            Key Personnel
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {keyPersonnel.map((person) => (
            <Card
              key={person.name}
              className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-blue-100">{person.name}</h3>
                  <Badge
                    variant="outline"
                    className="border-blue-400/30 text-blue-400"
                  >
                    {person.status}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-cyan-400">{person.role}</p>
                <p className="mt-2 text-sm text-blue-300">
                  {person.description}
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-100">
                      Achievements
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {person.achievements.map((achievement) => (
                      <Badge
                        key={achievement}
                        variant="secondary"
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
      </section>

      {/* Technical Specifications */}
      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold tracking-tight text-blue-100">
            Technical Overview
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Brain className="h-5 w-5 text-cyan-400" />
                <span>SAM Integration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-300">
                Advanced AI system providing critical support for Pathfinders
                and Initiative operations. Each ark equipped with a unique SAM
                node.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-900/20 text-blue-300"
                >
                  Neural Link
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-900/20 text-blue-300"
                >
                  Environmental Analysis
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-900/20 text-blue-300"
                >
                  Tactical Support
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Rocket className="h-5 w-5 text-cyan-400" />
                <span>Propulsion Systems</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-300">
                Revolutionary ODSY drive system designed for intergalactic
                travel. Capable of maintaining FTL speeds for extended periods.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-900/20 text-blue-300"
                >
                  ODSY Drive
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-900/20 text-blue-300"
                >
                  Dark Energy Integration
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-900/20 text-blue-300"
                >
                  Extended FTL
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Shield className="h-5 w-5 text-cyan-400" />
                <span>Life Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-300">
                Advanced cryogenic and life support systems designed to sustain
                thousands of colonists during the 600-year journey.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-900/20 text-blue-300"
                >
                  Cryo Stasis
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-900/20 text-blue-300"
                >
                  Environmental Control
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-900/20 text-blue-300"
                >
                  Medical Systems
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
