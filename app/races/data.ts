export const races = [
  {
    name: "Asari",
    type: "Major Race",
    homeworld: "Thessia",
    lifespan: "~1000 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Asari, native to the planet Thessia, are distinguished by their natural biotic abilities and long lifespan. They are known for their diplomatic prowess and cultural influence throughout the galaxy.",
    traits: ["Natural Biotics", "Mono-gender", "Long-lived", "Diplomatic"],
    specialization: "Biotics, Diplomacy",
    governmentType: "Asari Republics",
    status: "Council Race",
  },
  {
    name: "Turian",
    type: "Major Race",
    homeworld: "Palaven",
    lifespan: "~150 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Turians are known for their military discipline and rigid societal hierarchy. Their contributions to galactic civilization include significant military and peacekeeping forces.",
    traits: [
      "Military Discipline",
      "Dextro-amino based",
      "Metallic Carapace",
      "Strict Hierarchy",
    ],
    specialization: "Military, Strategy",
    governmentType: "Turian Hierarchy",
    status: "Council Race",
  },
  {
    name: "Salarian",
    type: "Major Race",
    homeworld: "Sur'Kesh",
    lifespan: "~40 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Salarians are known for their hyperactive metabolism and exceptional intelligence. They excel in scientific research and espionage, preferring to use wit and strategy over brute force.",
    traits: [
      "Rapid Metabolism",
      "High Intelligence",
      "Short Lifespan",
      "Photographic Memory",
    ],
    specialization: "Science, Intelligence",
    governmentType: "Salarian Union",
    status: "Council Race",
  },
  {
    name: "Human",
    type: "Major Race",
    homeworld: "Earth",
    lifespan: "~150 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Humans are the newest species to join the galactic community. Known for their adaptability, ambition, and diversity, they've quickly established themselves as a significant force in the galaxy.",
    traits: ["Adaptable", "Ambitious", "Diverse", "Resourceful"],
    specialization: "Versatility, Innovation",
    governmentType: "Systems Alliance",
    status: "Council Race",
  },
  {
    name: "Krogan",
    type: "Major Race",
    homeworld: "Tuchanka",
    lifespan: "~1000+ years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Krogan are a species of large, reptilian bipeds native to the planet Tuchanka. Known for their natural resilience and warrior culture, they face the challenges of the genophage.",
    traits: [
      "Natural Armor",
      "Regeneration",
      "Physical Strength",
      "Redundant Systems",
    ],
    specialization: "Combat, Survival",
    governmentType: "Clan System",
    status: "Non-Council Race",
  },
  {
    name: "Quarian",
    type: "Major Race",
    homeworld: "Rannoch (Former)",
    lifespan: "~150 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Quarians created the Geth, synthetic workers who gained consciousness and drove them from their homeworld. They now live aboard the Migrant Fleet, wearing environmental suits due to their weakened immune systems.",
    traits: [
      "Technical Expertise",
      "Weak Immune System",
      "Environmental Suits",
      "Nomadic",
    ],
    specialization: "Engineering, Technology",
    governmentType: "Admiralty Board",
    status: "Non-Council Race",
  },
  {
    name: "Geth",
    type: "Synthetic Race",
    homeworld: "Rannoch",
    lifespan: "Indefinite",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Geth are a race of networked artificial intelligences created by the Quarians. They operate by consensus and seek to build their own future.",
    traits: [
      "Networked Intelligence",
      "Synthetic",
      "Consensus-driven",
      "Adaptive Platform",
    ],
    specialization: "Computing, Engineering",
    governmentType: "Consensus Democracy",
    status: "Non-Council Race",
  },
  {
    name: "Drell",
    type: "Minor Race",
    homeworld: "Rakhana (Former)",
    lifespan: "~85 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Drell are a reptilian species rescued from their dying homeworld by the Hanar. They possess eidetic memory and are known for their martial arts and assassin training.",
    traits: ["Eidetic Memory", "Agile", "Desert-adapted", "Spiritual"],
    specialization: "Covert Operations, Combat",
    governmentType: "Hanar Protectorate",
    status: "Non-Council Race",
  },
  {
    name: "Hanar",
    type: "Minor Race",
    homeworld: "Kahje",
    lifespan: "~120 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Hanar are a species of aquatic creatures known for their extreme politeness and religious devotion to the Protheans, whom they call the 'Enkindlers'.",
    traits: ["Bioluminescent", "Aquatic", "Extremely Polite", "Religious"],
    specialization: "Diplomacy, Trade",
    governmentType: "Illuminated Primacy",
    status: "Non-Council Race",
  },
  {
    name: "Volus",
    type: "Minor Race",
    homeworld: "Irune",
    lifespan: "~60 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Volus are an ammonia-based species who require pressure suits to survive in normal atmospheric conditions. They are known for their financial and trading expertise.",
    traits: [
      "Ammonia-based",
      "Pressure Suit Dependent",
      "Business Acumen",
      "Mathematical",
    ],
    specialization: "Commerce, Finance",
    governmentType: "Vol Protectorate",
    status: "Non-Council Race",
  },
  {
    name: "Elcor",
    type: "Minor Race",
    homeworld: "Dekuuna",
    lifespan: "~300 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Elcor are a species known for their deliberate speech and conservative approach to problems. They evolved in a high-gravity environment and are physically powerful despite their slow movement.",
    traits: [
      "High-Gravity Adapted",
      "Methodical",
      "Emotionally Explicit",
      "Strong",
    ],
    specialization: "Diplomacy, Heavy Labor",
    governmentType: "Courts of Dekuuna",
    status: "Non-Council Race",
  },
  {
    name: "Batarian",
    type: "Minor Race",
    homeworld: "Khar'shan",
    lifespan: "~130 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Batarians are a four-eyed species known for their antagonistic relationship with humanity and their cultural acceptance of slavery.",
    traits: ["Four Eyes", "Hierarchical", "Aggressive", "Isolationist"],
    specialization: "Military, Piracy",
    governmentType: "Batarian Hegemony",
    status: "Non-Council Race",
  },
  {
    name: "Vorcha",
    type: "Minor Race",
    homeworld: "Heshtok",
    lifespan: "~20 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Vorcha are known for their aggressive nature and ability to adapt quickly to environmental changes. They have extremely short lifespans but reproduce and mature quickly.",
    traits: ["Rapid Adaptation", "Short-lived", "Aggressive", "Regenerative"],
    specialization: "Survival, Combat",
    governmentType: "Tribal Groups",
    status: "Non-Council Race",
  },
  {
    name: "Yahg",
    type: "Emerging Race",
    homeworld: "Parnack",
    lifespan: "Unknown",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Yahg are a pre-spaceflight species known for their aggressive and predatory nature. They are currently quarantined due to their violent interactions with Council representatives.",
    traits: [
      "Multiple Eyes",
      "Apex Predator",
      "Highly Intelligent",
      "Aggressive",
    ],
    specialization: "Hunting, Combat",
    governmentType: "Tribal Dominance",
    status: "Quarantined Species",
  },
  {
    name: "Prothean",
    type: "Ancient Race",
    homeworld: "Unknown",
    lifespan: "Unknown",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "An ancient species that ruled the galaxy 50,000 years ago before being wiped out by the Reapers. Known for their advanced technology and ability to share memories through touch.",
    traits: [
      "Memory Transfer",
      "Four Eyes",
      "Advanced Technology",
      "Militant Empire",
    ],
    specialization: "Technology, Warfare",
    governmentType: "Imperial",
    status: "Extinct (One Known Survivor)",
  },
  {
    name: "Collector",
    type: "Modified Race",
    homeworld: "Unknown",
    lifespan: "Unknown",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Mysterious insectoid race that serves the Reapers. Actually modified Protheans, transformed by Reaper technology into mindless slaves.",
    traits: [
      "Hive Mind",
      "Genetic Modification",
      "Reaper Technology",
      "Metamorphosis",
    ],
    specialization: "Genetic Engineering, Abduction",
    governmentType: "Reaper Control",
    status: "Hostile Species",
  },
  {
    name: "Rachni",
    type: "Insectoid Race",
    homeworld: "Unknown",
    lifespan: "Unknown",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "An intelligent insectoid species that nearly conquered the galaxy before being defeated by the krogan. Known for their hive mind and ability to survive in extreme conditions.",
    traits: ["Hive Mind", "Extreme Durability", "Acid Weapons", "Queens"],
    specialization: "Biological Weapons",
    governmentType: "Hive Structure",
    status: "Nearly Extinct",
  },
  {
    name: "Keeper",
    type: "Engineered Race",
    homeworld: "Unknown",
    lifespan: "Unknown",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Mysterious insectoid race that maintains the Citadel. Created by the Reapers to maintain and repair the station.",
    traits: [
      "Bio-engineered",
      "Single-minded",
      "Non-communicative",
      "Self-destructing",
    ],
    specialization: "Maintenance",
    governmentType: "None",
    status: "Citadel Caretakers",
  },
  {
    name: "Leviathan",
    type: "Ancient Race",
    homeworld: "Unknown",
    lifespan: "Millions of Years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Ancient aquatic race that once ruled the galaxy. Created the Intelligence that would become the Catalyst and eventually the Reapers.",
    traits: ["Mind Control", "Aquatic", "Ancient", "Telepathic"],
    specialization: "Mental Domination",
    governmentType: "Unknown",
    status: "In Hiding",
  },
  {
    name: "Raloi",
    type: "Emerging Race",
    homeworld: "Turvess",
    lifespan: "~60 years",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "An avian species that made first contact with the Citadel races shortly before the Reaper invasion. Chose to isolate themselves during the war.",
    traits: ["Avian", "Flight Capable", "Technological", "Isolationist"],
    specialization: "Atmospheric Flight",
    governmentType: "Tribal Confederation",
    status: "Self-Isolated",
  },
];
