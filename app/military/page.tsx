import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Crosshair, Target, Rocket, Star, Award } from "lucide-react";
import Image from "next/image";
import { militaryForces } from "./data";
export default function MilitaryPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-400">
            <Shield className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Military Database
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Military Forces
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            Analysis of major military organizations and their capabilities
            across known space.
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
      </section>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Shield, label: "Active Forces", value: "12+" },
          { icon: Crosshair, label: "Special Units", value: "32" },
          { icon: Target, label: "Major Conflicts", value: "15" },
          { icon: Star, label: "Elite Programs", value: "9" },
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

      {/* Military Forces Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {militaryForces.map((force) => (
          <Card
            key={force.name}
            className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm holo-card"
          >
            <CardHeader className="relative overflow-hidden pb-0">
              <Image
                src={force.image || "/placeholder.svg"}
                alt={force.name}
                width={600}
                height={400}
                className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-blue-100">
                    {force.name}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-blue-400 text-blue-400"
                  >
                    {force.status}
                  </Badge>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-blue-300">
                  <div className="flex items-center">
                    <Award className="mr-1 h-4 w-4" />
                    {force.type}
                  </div>
                  <div className="h-1 w-1 rounded-full bg-blue-400" />
                  <div>{force.headquarters}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              <p className="text-sm text-blue-300">{force.description}</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-100">
                    Strengths
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {force.strengths.map((strength) => (
                    <Badge
                      key={strength}
                      variant="secondary"
                      className="bg-blue-900/20 text-blue-300"
                    >
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-100">
                    Notable Units
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {force.notableUnits.map((unit) => (
                    <Badge
                      key={unit}
                      variant="outline"
                      className="border-blue-900 bg-blue-950/50 text-blue-300"
                    >
                      {unit}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-blue-900/50 pt-4">
                <div className="flex items-center space-x-2 text-sm text-blue-400">
                  <Rocket className="h-4 w-4" />
                  <span>{force.specialization}</span>
                </div>
                <Badge
                  variant="outline"
                  className="border-blue-400/30 text-blue-400"
                >
                  {force.commandStructure}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
