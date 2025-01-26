import type { PersonDetails } from "./types";

export const persons: PersonDetails[] = [
  // Existing persons remain unchanged
  {
    name: "Commander Shepard",
    role: "Spectre",
    affiliation: "Systems Alliance",
    status: "Legend",
    description:
      "First human Spectre and commander of the SSV Normandy. Known for leading the fight against the Reapers.",
    achievements: [
      "Hero of the Citadel",
      "Savior of the Galaxy",
      "N7 Operative",
    ],
    image: "/placeholder.svg?height=400&width=400",
    type: "military",
    details: {
      biography:
        "Commander Shepard is a legendary figure in the galaxy, known for being the first human Spectre and the leader in the fight against the Reaper threat. Born on Earth or in space (depending on their background), Shepard rose through the Alliance military ranks to become one of humanity's most respected soldiers.",
      specializations: [
        "Combat Tactics",
        "Leadership",
        "Diplomacy",
        "Special Operations",
      ],
      notableActions: [
        "Led the mission to defeat Sovereign and the geth",
        "Destroyed the Collector base beyond the Omega 4 Relay",
        "United the galaxy against the Reaper threat",
        "Activated the Crucible to end the Reaper War",
      ],
      relationships: [
        { name: "Anderson", relation: "Mentor" },
        { name: "Garrus Vakarian", relation: "Squad Member" },
        { name: "Liara T'Soni", relation: "Squad Member" },
        { name: "Tali'Zorah", relation: "Squad Member" },
      ],
      skills: [
        { category: "Combat", level: 10 },
        { category: "Leadership", level: 10 },
        { category: "Tactics", level: 9 },
        { category: "Diplomacy", level: 8 },
      ],
    },
  },
  {
    name: "Garrus Vakarian",
    role: "Turian Spectre",
    affiliation: "Turian Hierarchy",
    status: "Active",
    description:
      "Former C-Sec officer turned vigilante. Expert marksman and tactical advisor. Now serves as a Spectre.",
    achievements: [
      "C-Sec Officer",
      "Archangel",
      "Spectre",
      "Reaper War Veteran",
    ],
    image: "/placeholder.svg?height=400&width=400",
    type: "military",
    details: {
      biography:
        "Garrus Vakarian began his career as a C-Sec officer following in his father's footsteps. After joining Commander Shepard's crew, he became a key figure in the fight against the Reapers and later achieved his dream of becoming a Spectre.",
      specializations: [
        "Sniper Combat",
        "Tactical Analysis",
        "Law Enforcement",
        "Calibrations",
      ],
      notableActions: [
        "Investigated Saren's activities on the Citadel",
        "Operated as Archangel on Omega",
        "Led Turian task force during Reaper War",
        "Coordinated Hierarchy defense strategies",
      ],
      relationships: [
        { name: "Commander Shepard", relation: "Close Friend" },
        { name: "Tali'Zorah", relation: "Squad Member" },
        { name: "Castis Vakarian", relation: "Father" },
        { name: "Solana Vakarian", relation: "Sister" },
      ],
      skills: [
        { category: "Marksmanship", level: 10 },
        { category: "Tactical Analysis", level: 9 },
        { category: "Leadership", level: 8 },
        { category: "Investigation", level: 8 },
      ],
    },
  },
  {
    name: "Tali'Zorah vas Normandy",
    role: "Admiral",
    affiliation: "Quarian Fleet",
    status: "Active",
    description:
      "Quarian admiral and technical expert. Instrumental in reclaiming Rannoch and achieving peace with the geth.",
    achievements: [
      "Admiral",
      "Geth Expert",
      "Engineering Specialist",
      "Normandy Crew Member",
    ],
    image: "/placeholder.svg?height=400&width=400",
    type: "technical",
    details: {
      biography:
        "Originally on her Pilgrimage, Tali'Zorah became a crucial member of Commander Shepard's team and later rose to become one of the youngest admirals in Quarian history. Her expertise with the geth proved invaluable in achieving peace between her people and the synthetic race.",
      specializations: [
        "Engineering",
        "Geth Technology",
        "Ship Systems",
        "Combat Tech",
      ],
      notableActions: [
        "Provided evidence of Saren's betrayal",
        "Helped retake Rannoch",
        "Negotiated peace with the geth",
        "Advanced Quarian-Geth relations",
      ],
      relationships: [
        { name: "Commander Shepard", relation: "Close Friend" },
        { name: "Garrus Vakarian", relation: "Squad Member" },
        { name: "Admiral Raan", relation: "Aunt Figure" },
        { name: "Legion", relation: "Former Enemy/Ally" },
      ],
      skills: [
        { category: "Engineering", level: 10 },
        { category: "Tech Combat", level: 9 },
        { category: "Hacking", level: 9 },
        { category: "Leadership", level: 7 },
      ],
    },
  },
  {
    name: "Liara T'Soni",
    role: "Shadow Broker",
    affiliation: "Independent",
    status: "Active",
    description:
      "Prothean expert turned information broker. Current Shadow Broker and key ally against the Reapers.",
    achievements: [
      "Shadow Broker",
      "Prothean Expert",
      "Information Network Leader",
    ],
    image: "/placeholder.svg?height=400&width=400",
    type: "intelligence",
    details: {
      biography:
        "Dr. Liara T'Soni began her career as a Prothean researcher before joining Commander Shepard's mission. After defeating the previous Shadow Broker, she assumed control of his vast intelligence network, becoming one of the most powerful information brokers in the galaxy.",
      specializations: [
        "Information Analysis",
        "Archaeology",
        "Biotics",
        "Network Management",
      ],
      notableActions: [
        "Discovered crucial Prothean data",
        "Defeated the former Shadow Broker",
        "Provided vital intelligence during Reaper War",
        "Developed the Crucible Project",
      ],
      relationships: [
        { name: "Commander Shepard", relation: "Close Ally" },
        { name: "Matriarch Benezia", relation: "Mother" },
        { name: "Feron", relation: "Agent" },
        { name: "Javik", relation: "Research Subject" },
      ],
      skills: [
        { category: "Information Analysis", level: 10 },
        { category: "Biotics", level: 9 },
        { category: "Research", level: 9 },
        { category: "Network Management", level: 8 },
      ],
    },
  },
  {
    name: "Miranda Lawson",
    role: "Former Cerberus Operative",
    affiliation: "Independent",
    status: "Active",
    description:
      "Ex-Cerberus operative and biotic specialist. Led the Lazarus Project to reconstruct Commander Shepard.",
    achievements: [
      "Lazarus Project Director",
      "Cerberus Officer",
      "Alliance Consultant",
    ],
    image: "/placeholder.svg?height=400&width=400",
    type: "intelligence",
    details: {
      biography:
        "Genetically engineered to be perfect, Miranda Lawson served as one of Cerberus's top operatives before defecting to help Commander Shepard. Her expertise in various fields and strategic mind make her a valuable ally.",
      specializations: [
        "Biotics",
        "Tactical Planning",
        "Genetic Engineering",
        "Leadership",
      ],
      notableActions: [
        "Led the Lazarus Project",
        "Defected from Cerberus",
        "Protected her sister from their father",
        "Assisted in the Reaper War effort",
      ],
      relationships: [
        { name: "Commander Shepard", relation: "Ally" },
        { name: "Oriana Lawson", relation: "Sister" },
        { name: "Jacob Taylor", relation: "Former Colleague" },
        { name: "Henry Lawson", relation: "Father/Enemy" },
      ],
      skills: [
        { category: "Biotics", level: 8 },
        { category: "Tactics", level: 9 },
        { category: "Science", level: 9 },
        { category: "Combat", level: 7 },
      ],
    },
  },
  {
    name: "Mordin Solus",
    role: "Scientist",
    affiliation: "STG (Former)",
    status: "Deceased",
    description:
      "Brilliant Salarian scientist and former STG operative. Modified the genophage and later developed its cure.",
    achievements: ["STG Operative", "Genophage Expert", "Omega Clinic Founder"],
    image: "/placeholder.svg?height=400&width=400",
    type: "scientific",
    details: {
      biography:
        "Professor Mordin Solus was a brilliant Salarian scientist who worked on the genophage modification project. Later in life, he joined Commander Shepard's mission and ultimately sacrificed himself to cure the genophage and give the Krogan a future.",
      specializations: ["Genetics", "Medicine", "Combat Tech", "Xenobiology"],
      notableActions: [
        "Modified the genophage",
        "Ran clinic on Omega",
        "Developed genophage cure",
        "Sacrificed self to save Krogan species",
      ],
      relationships: [
        { name: "Commander Shepard", relation: "Commander" },
        { name: "Maelon", relation: "Former Student" },
        { name: "Eve", relation: "Patient" },
        { name: "Wrex", relation: "Ally" },
      ],
      skills: [
        { category: "Science", level: 10 },
        { category: "Medicine", level: 10 },
        { category: "Combat", level: 7 },
        { category: "Tactics", level: 8 },
      ],
    },
  },
  // Adding new persons below
  {
    name: "Javik",
    role: "Prothean Warrior",
    affiliation: "Prothean Empire (Former)",
    status: "Active",
    description:
      "Last surviving Prothean. Ancient warrior awakened from stasis to fight the Reapers.",
    achievements: [
      "Last Prothean",
      "Avatar of Vengeance",
      "Reaper War Veteran",
    ],
    image: "/placeholder.svg?height=400&width=400",
    type: "military",
    details: {
      biography:
        "The last surviving member of the Prothean species, preserved for 50,000 years in stasis. Awakened during the Reaper War to provide crucial insight into the previous cycle and aid in the fight against the Reapers.",
      specializations: [
        "Prothean Combat",
        "Tactical Command",
        "Biological Reading",
        "Ancient Knowledge",
      ],
      notableActions: [
        "Survived Prothean extinction",
        "Provided crucial Prothean intelligence",
        "Fought in Reaper War",
        "Assisted with Crucible project",
      ],
      relationships: [
        { name: "Commander Shepard", relation: "Commander" },
        { name: "Liara T'Soni", relation: "Research Partner" },
        { name: "EDI", relation: "Synthetic Ally" },
        { name: "Victory VI", relation: "Prothean AI" },
      ],
      skills: [
        { category: "Combat", level: 9 },
        { category: "Biotics", level: 9 },
        { category: "Tactics", level: 10 },
        { category: "Leadership", level: 8 },
      ],
    },
  },
  {
    name: "Samara",
    role: "Justicar",
    affiliation: "Justicar Order",
    status: "Active",
    description:
      "Ancient Asari Justicar bound by a strict code of justice. Powerful biotic and skilled huntress.",
    achievements: ["Justicar", "Ardat-Yakshi Hunter", "Normandy Veteran"],
    image: "/placeholder.svg?height=400&width=400",
    type: "military",
    details: {
      biography:
        "A member of an ancient order of Asari warriors, Samara follows a strict code of justice. She joined Shepard's mission after centuries of hunting dangerous criminals, including her own daughter.",
      specializations: ["Biotics", "Investigation", "Combat", "Tracking"],
      notableActions: [
        "Tracked dangerous criminals across galaxy",
        "Helped stop Collector threat",
        "Protected monastery during Reaper War",
        "Confronted Morinth",
      ],
      relationships: [
        { name: "Commander Shepard", relation: "Commander" },
        { name: "Falere", relation: "Daughter" },
        { name: "Morinth", relation: "Daughter/Target" },
        { name: "Justicar Order", relation: "Member" },
      ],
      skills: [
        { category: "Biotics", level: 10 },
        { category: "Combat", level: 9 },
        { category: "Investigation", level: 8 },
        { category: "Tactics", level: 8 },
      ],
    },
  },
  {
    name: "Grunt",
    role: "Krogan Commander",
    affiliation: "Clan Urdnot",
    status: "Active",
    description:
      "Tank-bred perfect krogan. Leader of Aralakh Company and proud member of Clan Urdnot.",
    achievements: [
      "Aralakh Company Commander",
      "Collector Base Survivor",
      "Rachni War Hero",
    ],
    image: "/placeholder.svg?height=400&width=400",
    type: "military",
    details: {
      biography:
        "Created as a 'perfect' krogan by Warlord Okeer, Grunt was released from his tank by Commander Shepard. He grew from a confused youth into a respected leader among the krogan.",
      specializations: [
        "Heavy Combat",
        "Squad Tactics",
        "Krogan Warfare",
        "Leadership",
      ],
      notableActions: [
        "Survived Collector base mission",
        "Led Aralakh Company",
        "Fought Rachni on Utukku",
        "Defended Tuchankan borders",
      ],
      relationships: [
        { name: "Commander Shepard", relation: "Battlemaster" },
        { name: "Urdnot Wrex", relation: "Clan Leader" },
        { name: "Okeer", relation: "Creator" },
        { name: "Aralakh Company", relation: "Commander" },
      ],
      skills: [
        { category: "Combat", level: 10 },
        { category: "Strength", level: 10 },
        { category: "Tactics", level: 8 },
        { category: "Leadership", level: 7 },
      ],
    },
  },
  {
    name: "Kasumi Goto",
    role: "Master Thief",
    affiliation: "Independent",
    status: "Active",
    description:
      "The galaxy's greatest thief. Expert in stealth technology and infiltration.",
    achievements: [
      "Legendary Thief",
      "Normandy Crew Member",
      "Greybox Pioneer",
    ],
    image: "/placeholder.svg?height=400&width=400",
    type: "technical",
    details: {
      biography:
        "The most skilled thief in the galaxy, Kasumi Goto is known for her stealth technology and impossible heists. She joined Shepard's mission while seeking to recover her partner's greybox.",
      specializations: ["Infiltration", "Tech", "Stealth", "Hacking"],
      notableActions: [
        "Infiltrated Donovan Hock's vault",
        "Recovered Keiji's greybox",
        "Assisted in Collector base mission",
        "Supported Crucible project",
      ],
      relationships: [
        { name: "Commander Shepard", relation: "Commander" },
        { name: "Keiji Okuda", relation: "Deceased Partner" },
        { name: "Donovan Hock", relation: "Enemy" },
        { name: "Alliance Intelligence", relation: "Occasional Contractor" },
      ],
      skills: [
        { category: "Stealth", level: 10 },
        { category: "Tech", level: 9 },
        { category: "Combat", level: 7 },
        { category: "Hacking", level: 9 },
      ],
    },
  },
  {
    name: "David Anderson",
    role: "Admiral",
    affiliation: "Systems Alliance",
    status: "Deceased",
    description:
      "Former captain of the SSV Normandy and Earth resistance leader during the Reaper invasion.",
    achievements: ["N7 Operative", "Normandy Captain", "Earth Defense Leader"],
    image: "/placeholder.svg?height=400&width=400",
    type: "military",
    details: {
      biography:
        "A decorated Alliance officer who served as the first captain of the SSV Normandy and later as humanity's councilor. Led Earth's resistance during the Reaper War until his death in the final battle.",
      specializations: [
        "Military Command",
        "Tactical Operations",
        "Leadership",
        "Diplomacy",
      ],
      notableActions: [
        "Commanded SSV Normandy",
        "Led Earth resistance",
        "Mentored Commander Shepard",
        "Sacrificed self in final battle",
      ],
      relationships: [
        { name: "Commander Shepard", relation: "Protégé" },
        { name: "Kahlee Sanders", relation: "Partner" },
        { name: "Steven Hackett", relation: "Colleague" },
        { name: "Donnel Udina", relation: "Political Rival" },
      ],
      skills: [
        { category: "Leadership", level: 10 },
        { category: "Combat", level: 9 },
        { category: "Tactics", level: 9 },
        { category: "Diplomacy", level: 8 },
      ],
    },
  },
];
