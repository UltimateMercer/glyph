import type { ShipDetails } from "./types";

export const ships: ShipDetails[] = [
  {
    name: "SSV Normandy SR-1",
    class: "Frigate",
    affiliation: "Systems Alliance Navy",
    status: "Destroyed",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The SSV Normandy SR-1 was a Systems Alliance starship. She is famous for being the first human vessel to incorporate state-of-the-art stealth technology.",
    specifications: {
      length: "155 meters",
      width: "Unknown",
      height: "Unknown",
      mass: "Unknown",
      crew: "50 including crew and ground team",
      maxSpeed: "Unknown",
      armament: [
        {
          name: "Main Gun",
          type: "Javelin Disruptor Torpedoes",
          damage: "High",
          description:
            "Specialized torpedoes designed to bypass kinetic barriers",
        },
        {
          name: "GARDIAN System",
          type: "Point Defense Lasers",
          damage: "Variable",
          description:
            "Close-in weapon system for defense against fighter craft and missiles",
        },
      ],
      defenses: ["Kinetic Barriers", "Ablative Armor", "Stealth Systems"],
      powerCore: "Tantalus Drive Core",
      propulsion: "Antiproton Thrusters",
    },
    systems: [
      {
        name: "IES Stealth System",
        status: "Operational",
        description:
          "Advanced heat-sink system that completely masks the ship's emissions",
      },
      {
        name: "Tantalus Drive Core",
        status: "Operational",
        description:
          "Experimental drive core that enables silent running and advanced maneuverability",
      },
      {
        name: "VI System",
        status: "Operational",
        description: "Advanced virtual intelligence system for ship operations",
      },
    ],
    history: {
      commissioned: "2183",
      notableActions: [
        "Eden Prime Mission",
        "Battle of the Citadel",
        "Collector Ambush",
      ],
      commanders: ["Captain David Anderson", "Commander Shepard"],
      battles: ["Battle of the Citadel", "Collector Ambush (Destroyed)"],
    },
    capabilities: [
      "Advanced Stealth System",
      "Superior Maneuverability",
      "Ground Vehicle Deployment",
      "Extended FTL Travel",
    ],
    specialFeatures: [
      "IES (Internal Emission Sink) Stealth System",
      "Tantalus Drive Core",
      "Mako Drop Bay",
      "State-of-the-art Sensors",
    ],
  },
  {
    name: "Normandy SR-2",
    class: "Frigate",
    affiliation: "Cerberus (Former) / Systems Alliance",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Normandy SR-2 is a upgraded version of the SR-1, initially built by Cerberus and later retrofitted for Alliance use. It features significant improvements over its predecessor.",
    specifications: {
      length: "216 meters",
      width: "Unknown",
      height: "Unknown",
      mass: "Unknown",
      crew: "Approximately 40 to 50",
      maxSpeed: "Unknown",
      armament: [
        {
          name: "Thanix Cannon",
          type: "Magnetic-hydromagnetic weapon",
          damage: "Extreme",
          description:
            "Based on Reaper technology, fires molten metal at a fraction of light speed",
        },
        {
          name: "GARDIAN System",
          type: "Point Defense Lasers",
          damage: "Variable",
          description: "Upgraded close-in weapon system",
        },
      ],
      defenses: [
        "Silaris Heavy Ship Armor",
        "Multicore Shielding",
        "Cyclonic Barrier Technology",
      ],
      powerCore: "Antiproton Core",
      propulsion: "Antiproton Thrusters",
    },
    systems: [
      {
        name: "Enhanced IES Stealth System",
        status: "Operational",
        description: "Improved version of the SR-1's stealth system",
      },
      {
        name: "AI Core (EDI)",
        status: "Operational",
        description:
          "Advanced artificial intelligence system integrated into ship operations",
      },
      {
        name: "Quantum Entanglement Communications",
        status: "Operational",
        description: "Secure, instantaneous communication system",
      },
    ],
    history: {
      commissioned: "2185",
      notableActions: [
        "Collector Base Mission",
        "Reaper War Operations",
        "Crucible Project Support",
      ],
      commanders: ["Commander Shepard"],
      battles: [
        "Suicide Mission",
        "Battle for Earth",
        "Multiple Reaper Engagements",
      ],
    },
    capabilities: [
      "Enhanced Stealth System",
      "Improved Maneuverability",
      "Extended Range",
      "Advanced Weapons Systems",
    ],
    specialFeatures: [
      "War Room",
      "Enhanced Medical Bay",
      "Armory",
      "Multiple Laboratories",
      "Enhanced Crew Quarters",
    ],
  },
  {
    name: "Destiny Ascension",
    class: "Asari Dreadnought",
    affiliation: "Asari Republics / Citadel Fleet",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The Destiny Ascension is the flagship of the Citadel Fleet and the most powerful ship in the Asari navy. It serves as a symbol of Citadel authority.",
    specifications: {
      length: "1.9 kilometers",
      width: "Unknown",
      height: "Unknown",
      mass: "Unknown",
      crew: "10,000",
      maxSpeed: "Unknown",
      armament: [
        {
          name: "Main Gun",
          type: "Mass Accelerator Cannon",
          damage: "Extreme",
          description: "Capable of destroying most ships with a single shot",
        },
        {
          name: "Broadside Batteries",
          type: "Heavy Mass Accelerator Cannons",
          damage: "High",
          description: "Multiple weapon systems for engaging multiple targets",
        },
      ],
      defenses: [
        "Advanced Kinetic Barriers",
        "Heavy Armor Plating",
        "Multiple Barrier Systems",
      ],
      powerCore: "Antimatter Core",
      propulsion: "Multiple Drive Cores",
    },
    systems: [
      {
        name: "Main Weapons System",
        status: "Operational",
        description: "Most powerful mass accelerator weapons in Citadel space",
      },
      {
        name: "Defense Grid",
        status: "Operational",
        description:
          "Multilayered defense system including kinetic barriers and point defense",
      },
      {
        name: "Command and Control",
        status: "Operational",
        description:
          "Advanced command center capable of coordinating fleet operations",
      },
    ],
    history: {
      commissioned: "Unknown",
      notableActions: [
        "Defense of the Citadel",
        "Multiple Diplomatic Missions",
        "Reaper War Operations",
      ],
      commanders: ["Matriarch Lidanya"],
      battles: ["Battle of the Citadel", "Reaper War Engagements"],
    },
    capabilities: [
      "Superior Firepower",
      "Advanced Defense Systems",
      "Fleet Command Operations",
      "Extended Deployment Capability",
    ],
    specialFeatures: [
      "Council Chambers",
      "Advanced Medical Facilities",
      "Diplomatic Quarters",
      "Fleet Command Center",
    ],
  },
  {
    name: "Sovereign",
    class: "Reaper Capital Ship",
    affiliation: "Reapers",
    status: "Destroyed",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A Reaper vanguard left behind to initiate the cycle of harvest. Initially posed as a Geth dreadnought under Saren's control.",
    specifications: {
      length: "2 kilometers",
      width: "Unknown",
      height: "Unknown",
      mass: "Unknown",
      crew: "None (AI Controlled)",
      maxSpeed: "Unknown",
      armament: [
        {
          name: "Magnetohydrodynamic Weapon",
          type: "Directed Energy Weapon",
          damage: "Extreme",
          description:
            "Powerful molten metal stream accelerated to a fraction of light speed",
        },
        {
          name: "Tentacle Arms",
          type: "Physical Weapon",
          damage: "High",
          description: "Powerful appendages capable of tearing through ships",
        },
      ],
      defenses: [
        "Advanced Kinetic Barriers",
        "Ultra-heavy Armor",
        "Self-repair Systems",
      ],
      powerCore: "Unknown Type",
      propulsion: "Unknown Type",
    },
    systems: [
      {
        name: "Indoctrination Field",
        status: "Operational",
        description: "Subtle field that slowly corrupts organic minds",
      },
      {
        name: "Self-Repair",
        status: "Operational",
        description:
          "Advanced systems capable of repairing damage during combat",
      },
      {
        name: "AI Core",
        status: "Operational",
        description: "Houses Sovereign's consciousness and control systems",
      },
    ],
    history: {
      commissioned: "Unknown",
      notableActions: [
        "Manipulation of Saren",
        "Attack on Eden Prime",
        "Battle of the Citadel",
      ],
      commanders: ["Self-Aware AI"],
      battles: ["Battle of the Citadel (Destroyed)"],
    },
    capabilities: [
      "Advanced AI",
      "Indoctrination",
      "Superior Firepower",
      "Self-Repair",
    ],
    specialFeatures: [
      "Indoctrination Field",
      "Self-Repair Systems",
      "Advanced AI",
      "Ancient Technology",
    ],
  },
  {
    name: "Shadow of Justice",
    class: "Turian Cruiser",
    affiliation: "Turian Hierarchy",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A state-of-the-art Turian cruiser known for its exceptional combat record and advanced weapons systems.",
    specifications: {
      length: "500 meters",
      width: "Unknown",
      height: "Unknown",
      mass: "Unknown",
      crew: "78",
      maxSpeed: "Unknown",
      armament: [
        {
          name: "Thanix Cannon",
          type: "Magnetic-hydromagnetic weapon",
          damage: "High",
          description:
            "Based on Reaper technology, fires molten metal at relativistic speeds",
        },
        {
          name: "Disruptor Torpedoes",
          type: "Guided Projectile",
          damage: "Medium",
          description:
            "Anti-ship torpedoes designed to penetrate kinetic barriers",
        },
      ],
      defenses: [
        "Multilayer Kinetic Barriers",
        "Silaris Heavy Armor",
        "GARDIAN System",
      ],
      powerCore: "Tantalus Drive Core",
      propulsion: "Antiproton Thrusters",
    },
    systems: [
      {
        name: "Combat VI",
        status: "Operational",
        description: "Advanced virtual intelligence for combat coordination",
      },
      {
        name: "Electronic Warfare Suite",
        status: "Upgraded",
        description:
          "State-of-the-art electronic warfare and countermeasure systems",
      },
      {
        name: "Targeting Systems",
        status: "Operational",
        description: "High-precision targeting computers for weapon accuracy",
      },
    ],
    history: {
      commissioned: "2183 CE",
      notableActions: [
        "Battle of Palaven",
        "Multiple Reaper Engagements",
        "Relief of Thessia",
      ],
      commanders: ["Captain Septimus Oraka", "Commander Varius"],
      battles: ["Defense of Palaven", "Battle for Thessia", "Battle for Earth"],
    },
    capabilities: [
      "Advanced Weapons",
      "Electronic Warfare",
      "Rapid Response",
      "Extended Patrol",
    ],
    specialFeatures: [
      "Advanced Combat VI",
      "Enhanced Sensor Suite",
      "Stealth Systems",
      "Command Center",
    ],
  },
  {
    name: "Ascension's Dawn",
    class: "Asari Science Vessel",
    affiliation: "Asari Republics",
    status: "Active",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A cutting-edge Asari research vessel equipped with advanced laboratories and exploration equipment.",
    specifications: {
      length: "400 meters",
      width: "Unknown",
      height: "Unknown",
      mass: "Unknown",
      crew: "200",
      maxSpeed: "Unknown",
      armament: [
        {
          name: "Mass Accelerator Cannon",
          type: "Kinetic Weapon",
          damage: "Medium",
          description: "Standard defensive weapon system",
        },
        {
          name: "GARDIAN Lasers",
          type: "Point Defense System",
          damage: "Variable",
          description: "Close-range defense against fighters and projectiles",
        },
      ],
      defenses: ["Standard Kinetic Barriers", "Ablative Armor", "ECM Suite"],
      powerCore: "Eezo Core Type-7",
      propulsion: "Standard FTL Drive",
    },
    systems: [
      {
        name: "Research Labs",
        status: "Operational",
        description: "State-of-the-art scientific research facilities",
      },
      {
        name: "Sensor Array",
        status: "Upgraded",
        description: "Advanced long-range sensors for research and exploration",
      },
      {
        name: "Containment Systems",
        status: "Operational",
        description: "Secure containment for hazardous materials and specimens",
      },
    ],
    history: {
      commissioned: "2180 CE",
      notableActions: [
        "Deep Space Exploration",
        "Prothean Artifact Recovery",
        "Thessia Evacuation Support",
      ],
      commanders: ["Dr. Liara T'Soni (temporary)", "Captain T'Lora"],
      battles: ["Evacuation of Thessia", "Recovery Mission at Ilos"],
    },
    capabilities: [
      "Scientific Research",
      "Deep Space Exploration",
      "Artifact Recovery",
      "Medical Research",
    ],
    specialFeatures: [
      "Advanced Laboratories",
      "Specimen Containment",
      "Archaeological Equipment",
      "Medical Bay",
    ],
  },
  {
    name: "Harbinger",
    class: "Reaper Sovereign-class",
    affiliation: "Reapers",
    status: "Unknown",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The first Reaper ever created and leader of the Reaper fleet. One of the most powerful known vessels in the galaxy.",
    specifications: {
      length: "2.5 kilometers",
      width: "Unknown",
      height: "Unknown",
      mass: "Unknown",
      crew: "None (AI Controlled)",
      maxSpeed: "Unknown",
      armament: [
        {
          name: "Magnetohydrodynamic Cannon",
          type: "Main Weapon",
          damage: "Extreme",
          description:
            "Devastating main weapon capable of destroying capital ships in single hits",
        },
        {
          name: "Multiple Weapon Systems",
          type: "Various",
          damage: "High",
          description:
            "Array of secondary weapons for multiple target engagement",
        },
      ],
      defenses: [
        "Superior Kinetic Barriers",
        "Ultra-heavy Hull Armor",
        "Advanced Self-repair",
      ],
      powerCore: "Unknown Type",
      propulsion: "Unknown Type",
    },
    systems: [
      {
        name: "Indoctrination Field",
        status: "Operational",
        description: "Powerful mind control and corruption field",
      },
      {
        name: "Processing Core",
        status: "Operational",
        description: "Central processing system for harvested species",
      },
      {
        name: "Command Systems",
        status: "Operational",
        description: "Advanced control systems for coordinating Reaper forces",
      },
    ],
    history: {
      commissioned: "Unknown (Millions of years ago)",
      notableActions: [
        "First Harvest of Leviathans",
        "Countless Cycles of Harvest",
        "Earth Invasion Command",
      ],
      commanders: ["Self-Aware AI", "Catalyst Control"],
      battles: [
        "Multiple Extinction Cycles",
        "Earth Invasion",
        "Final Battle for Earth",
      ],
    },
    capabilities: [
      "Supreme Firepower",
      "Advanced AI Control",
      "Direct Reaper Forces",
      "Process Organic Life",
    ],
    specialFeatures: [
      "First Reaper Created",
      "Command Authority",
      "Advanced Processing",
      "Direct Communication",
    ],
  },
];
