import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Globe2, Shield, Dna, Brain, Heart } from "lucide-react";
import Image from "next/image";
import { races } from "./data";

export default function RacesPage() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-400">
            <Users className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Xenobiology Database
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Galactic Species Index
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            Comprehensive data on known sentient species in the Milky Way
            galaxy.
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
      </section>

      {/* Race Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {races.map((race) => (
          <Card
            key={race.name}
            className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm holo-card"
          >
            <CardHeader className="relative overflow-hidden pb-0">
              <Image
                src={race.image || "/placeholder.svg"}
                alt={race.name}
                width={600}
                height={400}
                className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-blue-100">
                    {race.name}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-blue-400 text-blue-400"
                  >
                    {race.status}
                  </Badge>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-blue-300">
                  <div className="flex items-center">
                    <Globe2 className="mr-1 h-4 w-4" />
                    {race.homeworld}
                  </div>
                  <div className="h-1 w-1 rounded-full bg-blue-400" />
                  <div>{race.lifespan}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              <p className="text-sm text-blue-300">{race.description}</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-100">
                    Specialization
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {race.specialization.split(", ").map((spec) => (
                    <Badge
                      key={spec}
                      variant="secondary"
                      className="bg-blue-900/20 text-blue-300"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Dna className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-100">
                    Notable Traits
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {race.traits.map((trait) => (
                    <Badge
                      key={trait}
                      variant="outline"
                      className="border-blue-900 bg-blue-950/50 text-blue-300"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-blue-900/50 pt-4">
                <div className="flex items-center space-x-2 text-sm text-blue-400">
                  <Brain className="h-4 w-4" />
                  <span>{race.governmentType}</span>
                </div>
                <Button
                  variant="ghost"
                  className="text-blue-400 hover:bg-blue-900/50 hover:text-blue-300"
                >
                  View Full Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics Section */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Users, label: "Known Species", value: "18" },
          { icon: Globe2, label: "Inhabited Worlds", value: "157" },
          { icon: Shield, label: "Council Races", value: "4" },
          { icon: Heart, label: "First Contact Events", value: "12" },
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
      </section>

      {/* Additional Information */}
      <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-blue-100">
                Research Notes
              </h2>
              <p className="text-sm text-blue-300">
                The galactic community continues to discover new species as
                exploration expands into unknown regions.
              </p>
            </div>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Submit Discovery
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
