import { AlertTriangle, Rocket, Star, Users, Zap } from "lucide-react";

export const andromedaData = [
  {
    id: 1,
    name: "Andromeda Initiative",
    type: "Organization",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600&text=Andromeda+Initiative",
    description:
      "Massive multi-species colonization effort to establish a new home in the Andromeda Galaxy.",
    background:
      "The Andromeda Initiative was conceived as humanity's greatest adventure - a 600-year journey to the Andromeda Galaxy to establish new colonies. Led by Alec Ryder and later his children, the Initiative represents hope for a new beginning.",
    keyFigures: [
      "Alec Ryder",
      "Scott/Sara Ryder",
      "Cora Harper",
      "Liam Kosta",
      "Vetra Nyx",
    ],
    objectives: [
      "Establish viable colonies",
      "Find new homeworlds",
      "Ensure species survival",
      "Scientific discovery",
    ],
    challenges: [
      "Kett Empire",
      "Remnant Technology",
      "Scourge Phenomenon",
      "Resource Scarcity",
    ],
    icon: Rocket,
  },
  {
    id: 2,
    name: "Heleus Cluster",
    type: "Star Cluster",
    status: "Colonized",
    image: "/placeholder.svg?height=400&width=600&text=Heleus+Cluster",
    description:
      "Primary destination cluster in Andromeda, containing numerous potentially habitable worlds.",
    background:
      "The Heleus Cluster was chosen as the primary destination for the Andromeda Initiative due to its high concentration of potentially habitable worlds. However, the cluster is affected by the mysterious Scourge phenomenon.",
    keyFigures: ["Pathfinder Team", "Angaran Resistance", "Kett Archon"],
    objectives: [
      "Establish outposts",
      "Study the Scourge",
      "Make contact with native species",
      "Activate Remnant vaults",
    ],
    challenges: [
      "The Scourge",
      "Kett occupation",
      "Remnant technology",
      "Environmental hazards",
    ],
    icon: Star,
  },
  {
    id: 3,
    name: "The Kett",
    type: "Hostile Species",
    status: "Active Threat",
    image: "/placeholder.svg?height=400&width=600&text=Kett+Empire",
    description:
      "Aggressive alien species that converts other species into their own through exaltation.",
    background:
      "The Kett are a militaristic species that has conquered much of the Heleus Cluster. They believe in 'exaltation' - a process that converts other species into Kett, which they view as a gift rather than conquest.",
    keyFigures: ["The Archon", "Primus", "Cardinal", "Prefect"],
    objectives: [
      "Exalt all species",
      "Control Remnant technology",
      "Expand the empire",
      "Serve the Kett hierarchy",
    ],
    challenges: [
      "Angaran resistance",
      "Pathfinder interference",
      "Internal power struggles",
      "Remnant defenses",
    ],
    icon: AlertTriangle,
  },
  {
    id: 4,
    name: "The Angara",
    type: "Native Species",
    status: "Allied",
    image: "/placeholder.svg?height=400&width=600&text=Angaran+People",
    description:
      "Native species of the Heleus Cluster, fighting against Kett occupation and exaltation.",
    background:
      "The Angara are an emotionally expressive species native to the Heleus Cluster. They have been fighting the Kett for decades and initially view the Initiative with suspicion, but can become valuable allies.",
    keyFigures: [
      "Jaal Ama Darav",
      "Evfra de Tershaav",
      "Moshae Sjefa",
      "Governor Paaran Shie",
    ],
    objectives: [
      "Resist Kett occupation",
      "Protect their people",
      "Reclaim lost worlds",
      "Preserve their culture",
    ],
    challenges: [
      "Kett exaltation",
      "Limited resources",
      "Political divisions",
      "Trust issues with Initiative",
    ],
    icon: Users,
  },
  {
    id: 5,
    name: "Remnant Technology",
    type: "Ancient Technology",
    status: "Under Study",
    image: "/placeholder.svg?height=400&width=600&text=Remnant+Vault",
    description:
      "Advanced terraforming technology left behind by the mysterious Remnant civilization.",
    background:
      "The Remnant were an advanced civilization that built massive terraforming networks throughout the Heleus Cluster before mysteriously disappearing. Their technology is key to making worlds habitable.",
    keyFigures: ["SAM", "Peebee", "Remnant Architects", "The Remnant"],
    objectives: [
      "Activate vault networks",
      "Restore planetary atmospheres",
      "Understand Remnant purpose",
      "Combat the Scourge",
    ],
    challenges: [
      "Complex interfaces",
      "Hostile defenses",
      "Kett interference",
      "Unknown side effects",
    ],
    icon: Zap,
  },
  {
    id: 6,
    name: "The Scourge",
    type: "Phenomenon",
    status: "Active Threat",
    image: "/placeholder.svg?height=400&width=600&text=The+Scourge",
    description:
      "Mysterious dark energy phenomenon that devastates planets and makes them uninhabitable.",
    background:
      "The Scourge is a dark energy phenomenon that spreads across the Heleus Cluster, destroying ecosystems and making planets uninhabitable. Its origin and purpose remain largely unknown.",
    keyFigures: ["Research Teams", "Remnant Architects", "Pathfinder Ryder"],
    objectives: [
      "Understand its nature",
      "Find a way to stop it",
      "Protect colonies from its effects",
      "Study its connection to Remnant tech",
    ],
    challenges: [
      "Unpredictable spread",
      "Lethal to organic life",
      "Destroys technology",
      "Unknown origin",
    ],
    icon: AlertTriangle,
  },
];
