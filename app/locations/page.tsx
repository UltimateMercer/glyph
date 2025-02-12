import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe2, MapPin, Users, Building2, Star, Rocket } from "lucide-react";
import Image from "next/image";
import { locations } from "./data";

export default function LocationsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-400">
            <Globe2 className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Locations Database
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Notable Locations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            Directory of significant locations throughout known space, from
            homeworlds to space stations.
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
      </section>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Globe2, label: "Homeworlds", value: "8" },
          { icon: Rocket, label: "Space Stations", value: "24" },
          { icon: Building2, label: "Major Cities", value: "156" },
          { icon: MapPin, label: "Points of Interest", value: "1000+" },
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

      {/* Locations Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((location) => (
          <Card
            key={location.name}
            className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm holo-card"
          >
            <CardHeader className="relative overflow-hidden pb-0">
              <Image
                src={location.image || "/placeholder.svg"}
                alt={location.name}
                width={600}
                height={400}
                className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-blue-100">
                    {location.name}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-blue-400 text-blue-400"
                  >
                    {location.status}
                  </Badge>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-blue-300">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {location.type}
                  </div>
                  <div className="h-1 w-1 rounded-full bg-blue-400" />
                  <div>{location.system}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              <p className="text-sm text-blue-300">{location.description}</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-100">
                    Key Features
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature) => (
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

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-100">
                    Population & Security
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Badge
                    variant="outline"
                    className="border-blue-900 bg-blue-950/50 text-blue-300"
                  >
                    Pop: {location.population}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-900 bg-blue-950/50 text-blue-300"
                  >
                    Security: {location.security}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-blue-900/50 pt-4">
                <div className="flex items-center space-x-2 text-sm text-blue-400">
                  <Globe2 className="h-4 w-4" />
                  <span>{location.significance}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
