/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Atom,
  Globe2,
  Rocket,
  Shield,
  Users,
  Database,
  AlertTriangle,
  Crosshair,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-16 backdrop-blur-sm hex-border">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-blue-900/50 bg-blue-900/20 px-3 py-1 text-sm text-cyan-400">
            <Database className="mr-2 h-4 w-4" />
            Shadow Broker Terminal v2186.3
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tighter text-blue-100 sm:text-5xl xl:text-6xl">
            Shadow Network Database
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-blue-300">
            Access the galaxy's most comprehensive intelligence network.
            Contains classified information from across known space. Authorized
            agents only.
          </p>
          <div className="mt-8 flex items-center space-x-6">
            <Button
              className="relative overflow-hidden bg-blue-600 text-white hover:bg-blue-700"
              asChild
            >
              <Link href="/races">
                <span className="relative z-10 flex items-center">
                  Begin Research <ArrowRight className="ml-2 h-4 w-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity hover:opacity-100" />
              </Link>
            </Button>
            <Link
              href="/timeline"
              className="group flex items-center text-sm text-blue-400 hover:text-blue-300"
            >
              <span>View Timeline</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      </section>

      {/* Quick Access Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/races">
          <Card className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-colors hover:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Species Database</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-300">
                Comprehensive information about known sapient species in the
                galaxy.
              </p>
              <div className="mt-4 flex items-center text-sm text-blue-400">
                <Database className="mr-2 h-4 w-4" />
                42 Species documented
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/timeline">
          <Card className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-colors hover:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>Historical Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-300">
                Timeline of major galactic events and conflicts throughout
                history.
              </p>
              <div className="mt-4 flex items-center text-sm text-blue-400">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Recent conflict detected
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="#">
          <Card className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-colors hover:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Atom className="h-5 w-5 text-blue-400" />
                <span>Technology</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-300">
                Advanced technological developments and scientific research.
              </p>
              <div className="mt-4 flex items-center text-sm text-blue-400">
                <Rocket className="mr-2 h-4 w-4" />
                New discoveries available
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Featured Content */}
      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold tracking-tight text-blue-100">
            Featured Content
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </div>

        <Tabs defaultValue="species" className="space-y-4">
          <TabsList className="bg-blue-950/20">
            <TabsTrigger
              value="species"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Species
            </TabsTrigger>
            <TabsTrigger
              value="technology"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Technology
            </TabsTrigger>
            <TabsTrigger
              value="locations"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Locations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="species" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Asari",
                  description:
                    "Known for their long life span and natural biotic abilities.",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "Turian",
                  description:
                    "Highly disciplined species with a strong military doctrine.",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "Salarian",
                  description: "Masters of scientific research and espionage.",
                  image: "/placeholder.svg?height=200&width=400",
                },
              ].map((species) => (
                <Card
                  key={species.name}
                  className="group cursor-pointer border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-colors hover:bg-blue-950/30"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={species.image || "/placeholder.svg"}
                      alt={species.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-semibold text-blue-100">
                        {species.name}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-blue-300">
                      {species.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technology" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Mass Relays",
                  description:
                    "Ancient devices that enable rapid transit between distant star systems.",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "Omni-Tool",
                  description:
                    "Multipurpose diagnostic and manufacturing tool.",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "Kinetic Barriers",
                  description:
                    "Defense technology that repels high-velocity projectiles.",
                  image: "/placeholder.svg?height=200&width=400",
                },
              ].map((tech) => (
                <Card
                  key={tech.name}
                  className="group cursor-pointer border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-colors hover:bg-blue-950/30"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={tech.image || "/placeholder.svg"}
                      alt={tech.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-semibold text-blue-100">
                        {tech.name}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-blue-300">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="locations" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "The Citadel",
                  description:
                    "Massive space station that serves as the seat of the Citadel Council.",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "Omega",
                  description:
                    "Notorious space station and criminal haven in the Terminus Systems.",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "Thessia",
                  description:
                    "Homeworld of the Asari and center of their civilization.",
                  image: "/placeholder.svg?height=200&width=400",
                },
              ].map((location) => (
                <Card
                  key={location.name}
                  className="group cursor-pointer border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-colors hover:bg-blue-950/30"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-semibold text-blue-100">
                        {location.name}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-blue-300">
                      {location.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Recent Updates */}
      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold tracking-tight text-blue-100">
            Recent Updates
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Rocket className="h-5 w-5 text-cyan-400" />
                <span>Latest Intelligence</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-blue-300">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>New intel on Cerberus remnant activities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>Updated dossiers on key political figures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>Recent archaeological data from Ilos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Shield className="h-5 w-5 text-cyan-400" />
                <span>Priority Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-blue-300">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span>Multiple breaches detected in Terminus Systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span>Increased mercenary activity near Omega</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span>Agent status reports - Encrypted</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
