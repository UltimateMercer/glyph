"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Anchor,
  Shield,
  Rocket,
  History,
  Users,
  Swords,
  Cpu,
  Target,
  Gauge,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ships } from "./data";
import type { ShipDetails } from "./types";
import { cn } from "@/lib/utils";

export default function ShipsPage() {
  const [selectedShip, setSelectedShip] = useState<ShipDetails | null>(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-400">
            <Anchor className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Ship Database
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Notable Vessels
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            Technical specifications and historical data on significant ships
            across known space.
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
      </section>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Anchor, label: "Known Ships", value: "157" },
          { icon: Shield, label: "Military Vessels", value: "89" },
          { icon: Rocket, label: "Civilian Ships", value: "45" },
          { icon: Target, label: "Special Class", value: "23" },
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

      {/* Ships Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ships.map((ship) => (
          <Card
            key={ship.name}
            className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-all duration-200 hover:bg-blue-950/30"
            onClick={() => setSelectedShip(ship)}
            role="button"
            tabIndex={0}
          >
            <div className="relative h-48">
              <Image
                src={ship.image || "/placeholder.svg"}
                alt={ship.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-blue-100">
                    {ship.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className="border-blue-400 text-blue-400"
                  >
                    {ship.status}
                  </Badge>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-blue-300">
                  <div className="flex items-center">
                    <Anchor className="mr-1 h-4 w-4" />
                    {ship.class}
                  </div>
                  <div className="h-1 w-1 rounded-full bg-blue-400" />
                  <div>{ship.affiliation}</div>
                </div>
              </div>
            </div>
            <CardContent className="space-y-4 p-4">
              <p className="text-sm text-blue-300">{ship.description}</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-100">
                    Capabilities
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ship.capabilities.slice(0, 3).map((capability) => (
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
                <div className="flex items-center space-x-2 text-sm text-blue-400">
                  <Users className="h-4 w-4" />
                  <span>Crew: {ship.specifications.crew}</span>
                </div>
                <Badge
                  variant="outline"
                  className="border-blue-400/30 text-blue-400"
                >
                  View Details
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Ship Details Dialog */}
      <Dialog open={!!selectedShip} onOpenChange={() => setSelectedShip(null)}>
        <DialogContent className="max-h-[90vh] max-w-4xl border-blue-900/50 bg-blue-950/90 backdrop-blur-md">
          <ScrollArea className="h-full max-h-[80vh] pr-4">
            {selectedShip && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-2xl font-bold text-blue-100">
                      {selectedShip.name}
                    </DialogTitle>
                    <Badge
                      variant="outline"
                      className="border-blue-400 text-blue-400"
                    >
                      {selectedShip.status}
                    </Badge>
                  </div>
                </DialogHeader>

                <div className="mt-6 space-y-6">
                  {/* Hero Image */}
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <Image
                      src={selectedShip.image || "/placeholder.svg"}
                      alt={selectedShip.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent" />
                  </div>

                  {/* Basic Info */}
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Anchor className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Class
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedShip.class}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Affiliation
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedShip.affiliation}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-blue-100">
                          Crew
                        </span>
                      </div>
                      <p className="text-sm text-blue-300">
                        {selectedShip.specifications.crew}
                      </p>
                    </div>
                  </div>

                  <Separator className="border-blue-900/50" />

                  {/* Specifications */}
                  <div className="space-y-4">
                    <h3 className="flex items-center space-x-2 text-lg font-semibold text-blue-100">
                      <Gauge className="h-5 w-5 text-cyan-400" />
                      <span>Specifications</span>
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <p className="text-sm text-blue-300">
                          <span className="font-medium text-blue-100">
                            Length:
                          </span>{" "}
                          {selectedShip.specifications.length}
                        </p>
                        <p className="text-sm text-blue-300">
                          <span className="font-medium text-blue-100">
                            Power Core:
                          </span>{" "}
                          {selectedShip.specifications.powerCore}
                        </p>
                        <p className="text-sm text-blue-300">
                          <span className="font-medium text-blue-100">
                            Propulsion:
                          </span>{" "}
                          {selectedShip.specifications.propulsion}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator className="border-blue-900/50" />

                  {/* Armament */}
                  <div className="space-y-4">
                    <h3 className="flex items-center space-x-2 text-lg font-semibold text-blue-100">
                      <Swords className="h-5 w-5 text-cyan-400" />
                      <span>Armament</span>
                    </h3>
                    <div className="grid gap-4">
                      {selectedShip.specifications.armament.map((weapon) => (
                        <Card
                          key={weapon.name}
                          className="border-blue-900/50 bg-blue-950/20"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-blue-100">
                                {weapon.name}
                              </h4>
                              <Badge
                                variant="outline"
                                className="border-blue-400/30 text-blue-400"
                              >
                                {weapon.type}
                              </Badge>
                            </div>
                            <p className="mt-2 text-sm text-blue-300">
                              {weapon.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator className="border-blue-900/50" />

                  {/* Systems */}
                  <div className="space-y-4">
                    <h3 className="flex items-center space-x-2 text-lg font-semibold text-blue-100">
                      <Cpu className="h-5 w-5 text-cyan-400" />
                      <span>Ship Systems</span>
                    </h3>
                    <div className="grid gap-4">
                      {selectedShip.systems.map((system) => (
                        <Card
                          key={system.name}
                          className="border-blue-900/50 bg-blue-950/20"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-blue-100">
                                {system.name}
                              </h4>
                              <Badge
                                variant="outline"
                                className={cn(
                                  "border-blue-400/30",
                                  system.status === "Operational" &&
                                    "border-green-400/30 text-green-400",
                                  system.status === "Damaged" &&
                                    "border-red-400/30 text-red-400",
                                  system.status === "Upgraded" &&
                                    "border-cyan-400/30 text-cyan-400"
                                )}
                              >
                                {system.status}
                              </Badge>
                            </div>
                            <p className="mt-2 text-sm text-blue-300">
                              {system.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator className="border-blue-900/50" />

                  {/* History */}
                  <div className="space-y-4">
                    <h3 className="flex items-center space-x-2 text-lg font-semibold text-blue-100">
                      <History className="h-5 w-5 text-cyan-400" />
                      <span>Service History</span>
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <p className="text-sm text-blue-300">
                          <span className="font-medium text-blue-100">
                            Commissioned:
                          </span>{" "}
                          {selectedShip.history.commissioned}
                        </p>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-blue-100">
                            Notable Actions:
                          </p>
                          <ul className="space-y-1 text-sm text-blue-300">
                            {selectedShip.history.notableActions.map(
                              (action) => (
                                <li
                                  key={action}
                                  className="flex items-center space-x-2"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                  <span>{action}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-blue-100">
                            Commanders:
                          </p>
                          <ul className="space-y-1 text-sm text-blue-300">
                            {selectedShip.history.commanders.map(
                              (commander) => (
                                <li
                                  key={commander}
                                  className="flex items-center space-x-2"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                  <span>{commander}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-blue-100">
                            Major Battles:
                          </p>
                          <ul className="space-y-1 text-sm text-blue-300">
                            {selectedShip.history.battles.map((battle) => (
                              <li
                                key={battle}
                                className="flex items-center space-x-2"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                <span>{battle}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="border-blue-900/50" />

                  {/* Special Features */}
                  <div className="space-y-4">
                    <h3 className="flex items-center space-x-2 text-lg font-semibold text-blue-100">
                      <Star className="h-5 w-5 text-cyan-400" />
                      <span>Special Features</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedShip.specialFeatures.map((feature) => (
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
                </div>
              </>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
