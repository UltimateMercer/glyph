import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe2, MapPin, Users, Building2, Star, Rocket } from 'lucide-react'
import Image from "next/image"

const locations = [
  {
    name: "The Citadel",
    type: "Space Station",
    system: "Widow System",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description: "The massive space station serves as the capital of the Citadel Council and the hub of galactic civilization.",
    features: ["Council Chambers", "Presidium", "Wards", "C-Sec Academy"],
    population: "13.2 million",
    security: "C-Sec",
    significance: "Political, Economic, Cultural Center"
  },
  {
    name: "Thessia",
    type: "Homeworld",
    system: "Parnitha",
    status: "Inhabited",
    image: "/placeholder.svg?height=400&width=600",
    description: "Homeworld of the asari and the most advanced civilization in the known galaxy.",
    features: ["Ancient Temples", "Research Centers", "Biotic Academies", "Crystal Spires"],
    population: "5.5 billion",
    security: "Asari Military",
    significance: "Asari Homeworld, Cultural Center"
  },
  {
    name: "Palaven",
    type: "Homeworld",
    system: "Trebia",
    status: "Inhabited",
    image: "/placeholder.svg?height=400&width=600",
    description: "Homeworld of the turians, known for its strong military presence and strategic importance.",
    features: ["Military Bases", "Defense Grid", "Training Facilities", "Government Centers"],
    population: "6.1 billion",
    security: "Turian Military",
    significance: "Turian Homeworld, Military Hub"
  },
  {
    name: "Sur'Kesh",
    type: "Homeworld",
    system: "Pranas",
    status: "Inhabited",
    image: "/placeholder.svg?height=400&width=600",
    description: "Homeworld of the salarians, characterized by its advanced research facilities and technological developments.",
    features: ["Research Labs", "Tech Centers", "STG Facilities", "Universities"],
    population: "3.2 billion",
    security: "Salarian Union",
    significance: "Salarian Homeworld, Research Hub"
  },
  {
    name: "Tuchanka",
    type: "Homeworld",
    system: "Aralakh",
    status: "Inhabited",
    image: "/placeholder.svg?height=400&width=600",
    description: "The irradiated and hostile homeworld of the krogan, bearing the scars of nuclear war.",
    features: ["Ancient Ruins", "Clan Grounds", "Sacred Sites", "Radiation Zones"],
    population: "2.1 billion",
    security: "Clan Forces",
    significance: "Krogan Homeworld, Historical Site"
  },
  {
    name: "Omega",
    type: "Space Station",
    system: "Sahrabarik",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description: "A lawless space station in the Terminus Systems, known as a haven for criminals and mercenaries.",
    features: ["Afterlife Club", "Slums", "Markets", "Mining Operations"],
    population: "7.8 million",
    security: "Mercenary Groups",
    significance: "Criminal Hub, Strategic Location"
  },
  {
    name: "Illium",
    type: "Colony World",
    system: "Tasale",
    status: "Inhabited",
    image: "/placeholder.svg?height=400&width=600",
    description: "A corporate world known for its luxury, trading, and legally questionable business practices.",
    features: ["Trading Floor", "Corporate Towers", "Luxury Districts", "Spaceports"],
    population: "85 million",
    security: "Corporate Security",
    significance: "Trade Hub, Corporate Center"
  },
  {
    name: "Rannoch",
    type: "Homeworld",
    system: "Tikkun",
    status: "Disputed",
    image: "/placeholder.svg?height=400&width=600",
    description: "The quarian homeworld, contested between its original inhabitants and the geth.",
    features: ["Ancient Cities", "Geth Structures", "Arid Landscapes", "Clean Environment"],
    population: "Disputed",
    security: "Geth/Quarian Forces",
    significance: "Quarian Homeworld, Geth Hub"
  },
  {
    name: "Noveria",
    type: "Corporate World",
    system: "Pax",
    status: "Restricted Access",
    image: "/placeholder.svg?height=400&width=600",
    description: "A corporate world known for its controversial private research labs and extreme weather conditions.",
    features: ["Research Labs", "Corporate Offices", "Port Hanshan", "Peak 15"],
    population: "400,000",
    security: "ERCS",
    significance: "Research Hub, Corporate Haven"
  },
  {
    name: "Feros",
    type: "Colony World",
    system: "Theseus",
    status: "Recovering",
    image: "/placeholder.svg?height=400&width=600",
    description: "A human colony built on ancient Prothean ruins, known for its massive skyscrapers and historical significance.",
    features: ["Prothean Ruins", "ExoGeni Facility", "Skyway", "Zhu's Hope"],
    population: "300,000",
    security: "Colonial Militia",
    significance: "Archaeological Site, Human Colony"
  },
  {
    name: "Eden Prime",
    type: "Colony World",
    system: "Utopia",
    status: "Recovering",
    image: "/placeholder.svg?height=400&width=600",
    description: "A pristine human colony world and agricultural center, site of the first Reaper attack on humanity.",
    features: ["Agricultural Centers", "Research Outposts", "Prothean Ruins", "Defense Towers"],
    population: "3.7 million",
    security: "Alliance Military",
    significance: "Human Colony, Historical Site"
  },
  {
    name: "Bekenstein",
    type: "Colony World",
    system: "Boltzmann",
    status: "Affluent",
    image: "/placeholder.svg?height=400&width=600",
    description: "Known as the 'human Illium,' Bekenstein is a wealthy human colony and cultural center.",
    features: ["Luxury Districts", "Financial Centers", "Entertainment Venues", "Mansions"],
    population: "5.4 million",
    security: "Private Security",
    significance: "Economic Hub, Cultural Center"
  },
  {
    name: "Kahje",
    type: "Homeworld",
    system: "Zaherin",
    status: "Inhabited",
    image: "/placeholder.svg?height=400&width=600",
    description: "The ocean world home to both the hanar and the drell, known for its vast underwater cities.",
    features: ["Underwater Cities", "Surface Domes", "Prothean Ruins", "Environmental Shields"],
    population: "1.8 billion",
    security: "Illuminated Primacy",
    significance: "Hanar Homeworld, Drell Refuge"
  }
]

export default function LocationsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-12 backdrop-blur-sm hex-border">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-400">
            <Globe2 className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Locations Database</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter text-blue-100">
            Notable Locations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-300">
            Directory of significant locations throughout known space, from homeworlds to space stations.
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
                  <Badge variant="outline" className="border-blue-400 text-blue-400">
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
                  <span className="text-sm font-medium text-blue-100">Key Features</span>
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
                  <span className="text-sm font-medium text-blue-100">Population & Security</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Badge variant="outline" className="border-blue-900 bg-blue-950/50 text-blue-300">
                    Pop: {location.population}
                  </Badge>
                  <Badge variant="outline" className="border-blue-900 bg-blue-950/50 text-blue-300">
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
  )
}

