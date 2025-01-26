export const threats = [
  // Existing threats remain unchanged
  {
    name: "The Reapers",
    type: "Synthetic-Organic Hybrid",
    level: "Omega",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Ancient sentient machines that harvest advanced organic civilizations every 50,000 years. Each Reaper is a nation unto itself, a gestalt of millions of harvested organic minds.",
    firstContact: "2183 CE (Modern) - Eden Prime",
    operationalArea: "Galaxy-wide",
    assets: [
      "Capital Ships",
      "Destroyer-class vessels",
      "Indoctrination capability",
      "Harvesting technology",
      "Ground forces (husks)",
      "Mass Relay control",
    ],
    capabilities: [
      "FTL Travel without Mass Relays",
      "Advanced AI processing",
      "Indoctrination of organic beings",
      "Biological conversion technology",
      "Superior firepower and defenses",
      "Mass Effect field manipulation",
    ],
    knownOperations: [
      {
        name: "Battle of the Citadel",
        date: "2183 CE",
        outcome: "Sovereign destroyed, invasion delayed",
      },
      {
        name: "Collector Operations",
        date: "2185 CE",
        outcome: "Multiple human colonies harvested",
      },
      {
        name: "Earth Invasion",
        date: "2186 CE",
        outcome: "Full-scale galactic invasion",
      },
    ],
    weaknesses: [
      "Concentrated fire on main weapon",
      "Possible vulnerability to Thanix weaponry",
      "Dependence on mass relay network",
    ],
    countermeasures: [
      "Crucible superweapon",
      "Enhanced kinetic barriers",
      "Anti-indoctrination protocols",
    ],
    associatedThreats: ["Collectors", "Indoctrinated agents", "Heretic Geth"],
    intelligence:
      "Reapers possess intelligence far beyond current organic understanding. Each Reaper contains the processed consciousness of millions of harvested beings.",
    recommendedAction:
      "PRIORITY ALPHA: Coordinate all galactic forces. Complete Crucible construction. Maintain strict anti-indoctrination protocols.",
  },
  {
    name: "Cerberus",
    type: "Paramilitary Organization",
    level: "Critical",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Pro-human terrorist organization with significant military and scientific capabilities. Known for extreme methods and human supremacist ideology.",
    firstContact: "2165 CE",
    operationalArea: "Throughout Council and Terminus space",
    assets: [
      "Advanced warships",
      "Research facilities",
      "Phantom troops",
      "Atlas mechs",
      "Infiltration units",
      "Financial resources",
    ],
    capabilities: [
      "Advanced genetic modification",
      "AI research",
      "Military operations",
      "Deep cover infiltration",
      "Advanced weapons development",
      "Cyber warfare",
    ],
    knownOperations: [
      {
        name: "Project Lazarus",
        date: "2183-2185 CE",
        outcome: "Successfully reconstructed Commander Shepard",
      },
      {
        name: "Collector Base Raid",
        date: "2185 CE",
        outcome: "Base acquired/destroyed (conflicting reports)",
      },
      {
        name: "Mars Archives Attack",
        date: "2186 CE",
        outcome: "Prothean data partially acquired",
      },
    ],
    weaknesses: [
      "Centralized leadership",
      "Resource limitations",
      "Internal power struggles",
      "Dependency on Reaper tech",
    ],
    countermeasures: [
      "Intelligence gathering",
      "Network infiltration",
      "Asset freezing",
      "Counter-propaganda",
    ],
    associatedThreats: [
      "Indoctrinated operatives",
      "Ex-Alliance personnel",
      "Corrupt corporations",
    ],
    intelligence:
      "Current intelligence suggests widespread Reaper indoctrination among upper echelons. Organization showing signs of degrading operational security.",
    recommendedAction:
      "Continue monitoring. Prioritize elimination of key facilities and leadership. Counter recruitment efforts.",
  },
  {
    name: "The Collectors",
    type: "Modified Organic Species",
    level: "High",
    status: "Contained",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Mysterious insectoid race serving the Reapers. Actually modified Protheans, transformed by Reaper technology into harvesting agents.",
    firstContact: "Unknown",
    operationalArea: "Terminus Systems, Human colonies",
    assets: [
      "Collector ships",
      "Seeker swarms",
      "Advanced bioweapons",
      "Prothean-based technology",
      "Reaper artifacts",
    ],
    capabilities: [
      "Mass abduction operations",
      "Advanced biotechnology",
      "Directed energy weapons",
      "Genetic modification",
      "Swarm tactics",
    ],
    knownOperations: [
      {
        name: "Freedom's Progress Attack",
        date: "2185 CE",
        outcome: "Colony successfully abducted",
      },
      {
        name: "Horizon Attack",
        date: "2185 CE",
        outcome: "Partial colony abduction",
      },
      {
        name: "Normandy SR-1 Destruction",
        date: "2183 CE",
        outcome: "Successful ship destruction",
      },
    ],
    weaknesses: [
      "Centralized control system",
      "Dependence on Reaper guidance",
      "Limited numbers",
      "Predictable attack patterns",
    ],
    countermeasures: [
      "Anti-seeker swarm countermeasures",
      "Enhanced kinetic barriers",
      "Early warning systems",
    ],
    associatedThreats: ["Reapers", "Husks", "Harbinger"],
    intelligence:
      "Base of operations confirmed beyond Omega 4 Relay. All specimens show signs of extensive genetic modification and cybernetic enhancement.",
    recommendedAction:
      "Monitor Omega 4 Relay activity. Maintain colony defense systems. Gather intelligence on remaining collector vessels.",
  },
  // Adding new threats below
  {
    name: "Shadow Broker Network",
    type: "Intelligence Organization",
    level: "High",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Vast intelligence network trading in information and secrets. Maintains extensive influence across the galaxy through blackmail and manipulation.",
    firstContact: "Unknown",
    operationalArea: "Galaxy-wide",
    assets: [
      "Private army",
      "Advanced surveillance systems",
      "Extensive agent network",
      "Massive data archives",
      "Private fleet",
      "Financial resources",
    ],
    capabilities: [
      "Information gathering",
      "Blackmail operations",
      "Assassination",
      "Economic manipulation",
      "Political influence",
      "Deep cover operations",
    ],
    knownOperations: [
      {
        name: "Commander Shepard's Body Recovery",
        date: "2183 CE",
        outcome: "Failed - Body acquired by Cerberus",
      },
      {
        name: "Spectre Status Manipulation",
        date: "Various",
        outcome: "Multiple successful interventions",
      },
      {
        name: "Council Intelligence Breach",
        date: "2185 CE",
        outcome: "Successfully acquired classified data",
      },
    ],
    weaknesses: [
      "Centralized leadership",
      "Vulnerable to counter-intelligence",
      "Agent loyalty issues",
      "Communication bottlenecks",
    ],
    countermeasures: [
      "Information compartmentalization",
      "Counter-surveillance",
      "Secure communications",
      "Agent verification protocols",
    ],
    associatedThreats: [
      "Rogue Spectres",
      "Mercenary groups",
      "Corrupt officials",
    ],
    intelligence:
      "Organization recently underwent significant leadership change. Current Shadow Broker's identity unknown but maintains same operational efficiency.",
    recommendedAction:
      "Maintain operational security. Monitor information leaks. Establish counter-intelligence measures.",
  },
  {
    name: "Geth Heretics",
    type: "Synthetic Collective",
    level: "High",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Faction of geth who chose to follow the Reapers, separated from the main geth consensus. Actively hostile to organic life.",
    firstContact: "2183 CE",
    operationalArea: "Perseus Veil, Various Systems",
    assets: [
      "Advanced platforms",
      "Reaper-enhanced technology",
      "Networked intelligence",
      "Orbital stations",
      "Combat drones",
      "Manufacturing facilities",
    ],
    capabilities: [
      "Rapid platform production",
      "Advanced cyber warfare",
      "Coordinated combat tactics",
      "Self-repair systems",
      "Space combat operations",
      "Infiltration units",
    ],
    knownOperations: [
      {
        name: "Eden Prime Attack",
        date: "2183 CE",
        outcome: "Colony attacked, Prothean beacon secured",
      },
      {
        name: "Citadel Infiltration",
        date: "2183 CE",
        outcome: "Successfully breached Citadel defenses",
      },
      {
        name: "Armstrong Nebula Bases",
        date: "2183 CE",
        outcome: "Established multiple forward bases",
      },
    ],
    weaknesses: [
      "Dependency on network consensus",
      "Vulnerability to electronic warfare",
      "Limited organic understanding",
      "Predictable combat patterns",
    ],
    countermeasures: [
      "Electronic warfare suites",
      "Anti-synthetic weapons",
      "Communication jamming",
      "Platform destruction protocols",
    ],
    associatedThreats: ["Reapers", "Sovereign", "Hostile AI"],
    intelligence:
      "Heretics maintain separate networks from main geth collective. Show signs of direct Reaper code integration.",
    recommendedAction:
      "Deploy anti-synthetic countermeasures. Disrupt network communications. Target command and control nodes.",
  },
  {
    name: "Blood Pack",
    type: "Mercenary Organization",
    level: "Medium",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Notorious mercenary group known for brutal tactics and overwhelming force. Primarily composed of krogan and vorcha.",
    firstContact: "Unknown",
    operationalArea: "Terminus Systems, Omega",
    assets: [
      "Krogan warriors",
      "Vorcha shock troops",
      "Heavy weapons",
      "Territory control",
      "Training facilities",
      "Biological weapons",
    ],
    capabilities: [
      "Shock tactics",
      "Territory control",
      "Biological warfare",
      "Urban combat",
      "Siege operations",
      "Regenerative troops",
    ],
    knownOperations: [
      {
        name: "Omega Territory Wars",
        date: "2185 CE",
        outcome: "Partial territory control established",
      },
      {
        name: "Plague Distribution",
        date: "2185 CE",
        outcome: "Successfully deployed biological weapons",
      },
      {
        name: "Corporate Raids",
        date: "Various",
        outcome: "Multiple successful operations",
      },
    ],
    weaknesses: [
      "Lack of subtlety",
      "Poor organization",
      "Internal rivalries",
      "Limited technical expertise",
    ],
    countermeasures: [
      "Superior firepower",
      "Tactical planning",
      "Environmental hazards",
      "Divide and conquer",
    ],
    associatedThreats: ["Eclipse", "Blue Suns", "Omega Gangs"],
    intelligence:
      "Organization maintains strong presence on Omega. Recent leadership changes have led to more aggressive expansion.",
    recommendedAction:
      "Monitor territory expansion. Maintain heavy weapons readiness. Prepare for biological warfare.",
  },
  {
    name: "Eclipse",
    type: "Mercenary Organization",
    level: "Medium",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Professional mercenary corporation specializing in technical expertise and biotic combat. Known for sophisticated operations and advanced equipment.",
    firstContact: "Unknown",
    operationalArea: "Terminus Systems, Illium",
    assets: [
      "YMIR Mechs",
      "Asari commandos",
      "Advanced weaponry",
      "Tech specialists",
      "Research facilities",
      "Corporate fronts",
    ],
    capabilities: [
      "Technical warfare",
      "Biotic operations",
      "Corporate infiltration",
      "Advanced tactics",
      "Mechanical warfare",
      "Research and development",
    ],
    knownOperations: [
      {
        name: "Illium Market Control",
        date: "2185 CE",
        outcome: "Established market dominance",
      },
      {
        name: "Corporate Espionage",
        date: "Various",
        outcome: "Multiple successful data thefts",
      },
      {
        name: "Mech Production",
        date: "Ongoing",
        outcome: "Successful weapons manufacturing",
      },
    ],
    weaknesses: [
      "High operational costs",
      "Complex command structure",
      "Reliance on technology",
      "Mercenary loyalty",
    ],
    countermeasures: [
      "Electronic warfare",
      "Anti-biotic tactics",
      "Financial disruption",
      "Tech countermeasures",
    ],
    associatedThreats: ["Blue Suns", "Blood Pack", "Corporate Security"],
    intelligence:
      "Organization expanding into new territories. Increasing focus on technical warfare and corporate contracts.",
    recommendedAction:
      "Monitor tech development. Prepare EMP countermeasures. Track corporate infiltration.",
  },
  {
    name: "Batarian Hegemony",
    type: "State Actor",
    level: "High",
    status: "Severely Weakened",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Hostile state actor known for aggressive expansion, slavery, and state-sponsored terrorism. Severely impacted by Reaper invasion.",
    firstContact: "Early Council Era",
    operationalArea: "Skyllian Verge, Terminus Systems",
    assets: [
      "Military fleet",
      "Slave armies",
      "Terrorist cells",
      "Pirate affiliates",
      "State intelligence",
      "WMD stockpiles",
    ],
    capabilities: [
      "State terrorism",
      "Slave operations",
      "Military strikes",
      "Piracy support",
      "Chemical warfare",
      "Infiltration operations",
    ],
    knownOperations: [
      {
        name: "Skyllian Blitz",
        date: "2176 CE",
        outcome: "Failed attack on human colony",
      },
      {
        name: "Mindoir Raid",
        date: "2170 CE",
        outcome: "Successful slave capture operation",
      },
      {
        name: "Elysium Attack",
        date: "2176 CE",
        outcome: "Failed colonial assault",
      },
    ],
    weaknesses: [
      "Rigid hierarchy",
      "Technological limitations",
      "Diplomatic isolation",
      "Resource constraints",
    ],
    countermeasures: [
      "Military deterrence",
      "Colony defenses",
      "Intelligence operations",
      "Diplomatic pressure",
    ],
    associatedThreats: ["Batarian terrorists", "Slave traders", "Pirates"],
    intelligence:
      "State infrastructure severely damaged by Reapers. Remaining elements focusing on survival and revenge against humanity.",
    recommendedAction:
      "Monitor surviving elements. Protect colonial borders. Prepare for terrorist activities.",
  },
];
