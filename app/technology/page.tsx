import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Atom, Shield, Rocket, Zap, Database } from "lucide-react";
import Image from "next/image";
import { technologies } from "./data";

export default function TechnologyPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-400">
            <Cpu className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Technology Database
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Galactic Technologies
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            Documentation of significant technological achievements and
            developments across known space.
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
      </section>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Atom, label: "Fundamental", value: "12" },
          { icon: Shield, label: "Military", value: "48" },
          { icon: Rocket, label: "Transportation", value: "23" },
          { icon: Zap, label: "Energy", value: "31" },
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

      {/* Technology Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {technologies.map((tech) => (
          <Card
            key={tech.name}
            className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm holo-card"
          >
            <CardHeader className="relative overflow-hidden pb-0">
              <Image
                src={tech.image || "/placeholder.svg"}
                alt={tech.name}
                width={600}
                height={400}
                className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-blue-100">
                    {tech.name}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-blue-400 text-blue-400"
                  >
                    {tech.status}
                  </Badge>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-blue-300">
                  <div className="flex items-center">
                    <Database className="mr-1 h-4 w-4" />
                    {tech.category}
                  </div>
                  <div className="h-1 w-1 rounded-full bg-blue-400" />
                  <div>{tech.origin}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              <p className="text-sm text-blue-300">{tech.description}</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Atom className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-100">
                    Applications
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.applications.map((app) => (
                    <Badge
                      key={app}
                      variant="secondary"
                      className="bg-blue-900/20 text-blue-300"
                    >
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-blue-900/50 pt-4">
                <Badge
                  variant="outline"
                  className="border-blue-900 bg-blue-950/50 text-blue-300"
                >
                  {tech.developmentStage}
                </Badge>
                <p className="text-sm text-red-400">{tech.restrictions}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
