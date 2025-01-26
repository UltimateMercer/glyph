import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Atom, Shield, Rocket, Zap, Database } from 'lucide-react'
import Image from "next/image"

const technologies = [
  {
    name: "Mass Effect Fields",
    category: "Fundamental Technology",
    origin: "Prothean Archives",
    status: "Widespread",
    image: "/placeholder.svg?height=400&width=600",
    description: "The manipulation of mass effect fields, created by running electrical current through element zero, forms the basis of modern galactic civilization and technology.",
    applications: ["FTL Travel", "Artificial Gravity", "Kinetic Barriers", "Weapons"],
    developmentStage: "Mature",
    restrictions: "None",
    details: "Mass effect fields can be used to manipulate the mass of objects, allowing for faster-than-light travel, artificial gravity generation, and powerful weapons systems."
  },
  {
    name: "Mass Relays",
    category: "Transportation",
    origin: "Reaper/Prothean",
    status: "Active Network",
    image: "/placeholder.svg?height=400&width=600",
    description: "Massive structures that create virtually mass-free corridors of space-time between each other, enabling rapid interstellar travel.",
    applications: ["Interstellar Travel", "Trade Routes", "Military Movement"],
    developmentStage: "Ancient Technology",
    restrictions: "Cannot be manufactured",
    details: "The mass relay network forms the backbone of galactic civilization, allowing ships to travel vast distances almost instantaneously."
  },
  {
    name: "Omni-Tool",
    category: "Personal Equipment",
    origin: "Multiple Species",
    status: "Universal",
    image: "/placeholder.svg?height=400&width=600",
    description: "Multipurpose diagnostic and manufacturing tool that combines a computer microframe, sensor analysis package, and manufacturing system.",
    applications: ["Manufacturing", "Diagnostics", "Combat", "Communication"],
    developmentStage: "Constantly Evolving",
    restrictions: "None",
    details: "Omni-tools are used by almost everyone in the galaxy, from soldiers and engineers to civilians and medical personnel."
  },
  {
    name: "Kinetic Barriers",
    category: "Defense Systems",
    origin: "Multiple Species",
    status: "Standard Equipment",
    image: "/placeholder.svg?height=400&width=600",
    description: "Defense systems that create mass effect fields to deflect high-velocity projectiles.",
    applications: ["Personal Shields", "Ship Defenses", "Installation Protection"],
    developmentStage: "Mature",
    restrictions: "Energy intensive",
    details: "Also known as shields, kinetic barriers are standard equipment on military vessels and personnel armor."
  },
  {
    name: "Medi-Gel",
    category: "Medical Technology",
    origin: "Human",
    status: "Universal",
    image: "/placeholder.svg?height=400&width=600",
    description: "All-purpose medicinal salve that combines healing properties with nanomachines for rapid wound treatment.",
    applications: ["Emergency Treatment", "Surgery", "Battlefield Medicine"],
    developmentStage: "Mature",
    restrictions: "Controlled Substance",
    details: "Medi-gel is a universal medical tool that has revolutionized emergency field treatment and surgery."
  },
  {
    name: "Thermal Clips",
    category: "Weapons Technology",
    origin: "Geth",
    status: "Standard Equipment",
    image: "/placeholder.svg?height=400&width=600",
    description: "Disposable heat sinks that allow for sustained weapon fire without overheating.",
    applications: ["Small Arms", "Heavy Weapons", "Ship-based Weapons"],
    developmentStage: "Modern Standard",
    restrictions: "Limited Capacity",
    details: "Thermal clips replaced older cooling systems in modern weapons, trading unlimited ammunition for higher firing rates."
  },
  {
    name: "Artificial Intelligence",
    category: "Computing",
    origin: "Multiple Species",
    status: "Restricted",
    image: "/placeholder.svg?height=400&width=600",
    description: "Advanced computer systems capable of self-aware behavior and learning.",
    applications: ["Research", "Cyber Warfare", "Ship Systems"],
    developmentStage: "Controversial",
    restrictions: "Heavily Regulated",
    details: "AI development is strictly controlled due to historical conflicts with synthetic life forms."
  },
  {
    name: "Biotics",
    category: "Biological Enhancement",
    origin: "Natural/Artificial",
    status: "Special Training Required",
    image: "/placeholder.svg?height=400&width=600",
    description: "The ability to create mass effect fields using element zero nodes in living tissue.",
    applications: ["Combat", "Utility", "Medical"],
    developmentStage: "Ongoing Research",
    restrictions: "Requires Exposure/Training",
    details: "Biotic abilities vary widely between species and individuals, requiring extensive training to master."
  },
  {
    name: "Quantum Entanglement Communicators",
    category: "Communications",
    origin: "Multiple Species",
    status: "Advanced Technology",
    image: "/placeholder.svg?height=400&width=600",
    description: "Instantaneous communication devices that utilize quantum entanglement principles for secure, uninterceptable transmissions.",
    applications: ["Military Command", "Diplomatic Channels", "Emergency Communications"],
    developmentStage: "Limited Availability",
    restrictions: "High Cost",
    details: "QEC systems are expensive but provide instantaneous, secure communication across any distance."
  },
  {
    name: "Thanix Weapons",
    category: "Weapons Systems",
    origin: "Turian/Reaper",
    status: "Military Grade",
    image: "/placeholder.svg?height=400&width=600",
    description: "Advanced weapons system based on Reaper technology, firing magnetically accelerated molten metal.",
    applications: ["Ship Weapons", "Vehicle Mounted", "Defense Systems"],
    developmentStage: "Advanced",
    restrictions: "Military Only",
    details: "Developed from salvaged Sovereign debris, Thanix weapons represent a significant advancement in ship-to-ship combat capability."
  },
  {
    name: "Silaris Armor",
    category: "Defense Systems",
    origin: "Asari",
    status: "Advanced Technology",
    image: "/placeholder.svg?height=400&width=600",
    description: "Advanced armor system using carbon nanotube sheets woven with diamond Chemical Vapor Deposition.",
    applications: ["Ship Armor", "Installation Defense", "Vehicle Protection"],
    developmentStage: "Production",
    restrictions: "Export Controlled",
    details: "Provides superior protection against both kinetic and energy weapons."
  }
]

export default function TechnologyPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-400">
            <Cpu className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Technology Database</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Galactic Technologies
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            Documentation of significant technological achievements and developments across known space.
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
          <Card key={label} className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
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
                  <Badge variant="outline" className="border-blue-400 text-blue-400">
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
                  <span className="text-sm font-medium text-blue-100">Applications</span>
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
  )
}

