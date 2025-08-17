import type { Person } from "@/schemas/persons";

export const persons: Person[] = [
  {
    id: "shepard",
    name: "Commander Shepard",
    species: "Human",
    occupation: "N7 Special Forces Commander",
    affiliation: "Systems Alliance",
    status: "Active",
    location: "SSV Normandy SR-2",
    origin: "Earth",
    description:
      "First human Spectre and hero of the galaxy. Led the fight against the Reapers and saved all organic life.",
    background:
      "Commander Shepard is the first human Spectre and the commanding officer of the SSV Normandy. Born on Earth in 2154, Shepard has become a legendary figure in the fight against galactic threats.",
    biography:
      "Commander Shepard's military career began with the Systems Alliance Navy, where they quickly distinguished themselves through exceptional leadership and combat prowess. After surviving the attack on Eden Prime and discovering the threat of the Reapers, Shepard was inducted into the Spectres, an elite group of agents who operate above the law to preserve galactic stability.",
    portraits: [
      {
        id: "shepard-1",
        url: "/placeholder.svg?height=400&width=300&text=Shepard+Portrait+1",
        title: "Official Spectre Portrait",
        description: "Commander Shepard in official Spectre uniform",
        year: "2183",
        context: "Taken after becoming the first human Spectre",
      },
      {
        id: "shepard-2",
        url: "/placeholder.svg?height=400&width=300&text=Shepard+Portrait+2",
        title: "N7 Combat Gear",
        description: "Shepard in full N7 armor during the Reaper War",
        year: "2186",
        context: "During the final assault on Earth",
      },
      {
        id: "shepard-3",
        url: "/placeholder.svg?height=400&width=300&text=Shepard+Portrait+3",
        title: "Ceremonial Dress",
        description: "Shepard at a diplomatic function",
        year: "2185",
        context: "Alliance ceremony honoring fallen heroes",
      },
    ],
    timeline: [
      {
        id: "shepard-birth",
        year: "2154",
        title: "Born on Earth",
        description:
          "Commander Shepard was born on Earth during a time of rapid human expansion into the galaxy.",
        category: "early_life",
        importance: "medium",
        location: "Earth",
      },
      {
        id: "shepard-enlist",
        year: "2176",
        title: "Enlisted in Systems Alliance",
        description:
          "Joined the Systems Alliance military and began training as a marine, showing exceptional aptitude for leadership and combat.",
        category: "career",
        importance: "high",
        location: "Alliance Training Facility",
      },
      {
        id: "shepard-eden-prime",
        year: "2183",
        title: "Eden Prime Mission",
        description:
          "Led the mission to Eden Prime, discovering the Prothean beacon and the threat of the Reapers. This mission changed the course of galactic history.",
        category: "major_event",
        importance: "critical",
        location: "Eden Prime",
        portraitId: "shepard-1",
      },
      {
        id: "shepard-spectre",
        year: "2183",
        title: "Became First Human Spectre",
        description:
          "Inducted into the Spectres by the Citadel Council, becoming the first human to achieve this honor and gaining unprecedented authority to act in the galaxy's interests.",
        category: "transformation",
        importance: "critical",
        location: "Citadel",
        portraitId: "shepard-1",
      },
      {
        id: "shepard-citadel-battle",
        year: "2183",
        title: "Battle of the Citadel",
        description:
          "Led the final assault against Sovereign and Saren, saving the Citadel and the Council. Proved the Reaper threat was real.",
        category: "major_event",
        importance: "critical",
        location: "Citadel",
      },
      {
        id: "shepard-resurrection",
        year: "2185",
        title: "Resurrection by Cerberus",
        description:
          "After being killed in action, Shepard was brought back to life by Cerberus through the Lazarus Project, emerging stronger but changed.",
        category: "transformation",
        importance: "critical",
        location: "Cerberus Facility",
      },
      {
        id: "shepard-suicide-mission",
        year: "2185",
        title: "Suicide Mission",
        description:
          "Led a diverse team through the Omega-4 Relay to destroy the Collector base and stop their human harvesting operations.",
        category: "major_event",
        importance: "critical",
        location: "Collector Base",
      },
      {
        id: "shepard-reaper-war",
        year: "2186",
        title: "Led Final Assault Against Reapers",
        description:
          "Commanded the united forces of the galaxy in the final battle against the Reapers, ultimately activating the Crucible to end the war.",
        category: "legacy",
        importance: "critical",
        location: "Earth",
        portraitId: "shepard-2",
      },
    ],
    attributes: {
      rank: "Commander",
      specialization: "N7",
      homeworld: "Earth",
      birthYear: "2154",
    },
    notableAchievements: [
      "First human Spectre",
      "Defeated Sovereign",
      "Survived the Suicide Mission",
      "United the galaxy against the Reapers",
      "Ended the Reaper War",
    ],
  },
  {
    id: "garrus",
    name: "Garrus Vakarian",
    species: "Turian",
    occupation: "Former C-Sec Officer / Vigilante",
    affiliation: "Normandy Crew",
    status: "Active",
    location: "SSV Normandy SR-2",
    origin: "Palaven",
    description:
      "Former C-Sec officer turned vigilante, then Normandy crew member. Shepard's most trusted ally and friend.",
    background:
      "Garrus Vakarian is a former C-Sec officer turned vigilante, known for his exceptional marksmanship and unwavering sense of justice. He serves as one of Commander Shepard's most trusted allies.",
    biography:
      "Born into a military family on Palaven, Garrus initially followed in his father's footsteps by joining C-Sec. However, frustrated by bureaucratic red tape and corruption, he eventually left to pursue justice on his own terms. His partnership with Commander Shepard has made him one of the most effective operatives in the galaxy.",
    portraits: [
      {
        id: "garrus-1",
        url: "/placeholder.svg?height=400&width=300&text=Garrus+Portrait+1",
        title: "C-Sec Officer",
        description: "Garrus during his time with Citadel Security",
        year: "2183",
        context: "Official C-Sec personnel file",
      },
      {
        id: "garrus-2",
        url: "/placeholder.svg?height=400&width=300&text=Garrus+Portrait+2",
        title: "Archangel",
        description: "Garrus as the vigilante Archangel on Omega",
        year: "2185",
        context: "Surveillance footage from Omega",
      },
      {
        id: "garrus-3",
        url: "/placeholder.svg?height=400&width=300&text=Garrus+Portrait+3",
        title: "Normandy Crew",
        description: "Garrus aboard the Normandy SR-2",
        year: "2186",
        context: "Crew photo during the Reaper War",
      },
    ],
    timeline: [
      {
        id: "garrus-birth",
        year: "2156",
        title: "Born on Palaven",
        description:
          "Garrus Vakarian was born into a military family on the turian homeworld.",
        category: "early_life",
        importance: "medium",
        location: "Palaven",
      },
      {
        id: "garrus-csec",
        year: "2180",
        title: "Joined C-Sec",
        description:
          "Began his career as an officer with Citadel Security Services, following family tradition.",
        category: "career",
        importance: "medium",
        location: "Citadel",
        portraitId: "garrus-1",
      },
      {
        id: "garrus-shepard",
        year: "2183",
        title: "Met Commander Shepard",
        description:
          "First encountered Shepard during the investigation of Saren Arterius, beginning a legendary partnership.",
        category: "major_event",
        importance: "high",
        location: "Citadel",
      },
      {
        id: "garrus-archangel",
        year: "2185",
        title: "Became Archangel",
        description:
          "Operated as a vigilante on Omega under the codename 'Archangel', cleaning up the station's criminal elements.",
        category: "transformation",
        importance: "high",
        location: "Omega",
        portraitId: "garrus-2",
      },
      {
        id: "garrus-advisor",
        year: "2186",
        title: "Primarch Advisor",
        description:
          "Served as advisor to Primarch Victus during the Reaper War, helping coordinate turian military efforts.",
        category: "career",
        importance: "high",
        location: "Palaven",
      },
      {
        id: "garrus-legacy",
        year: "2186",
        title: "Hero of the Reaper War",
        description:
          "Fought alongside Shepard in the final battle, cementing his legacy as one of the galaxy's greatest heroes.",
        category: "legacy",
        importance: "critical",
        location: "Earth",
        portraitId: "garrus-3",
      },
    ],
    attributes: {
      rank: "Former Officer",
      specialization: "Sniper",
      homeworld: "Palaven",
      birthYear: "2156",
    },
    notableAchievements: [
      "Archangel of Omega",
      "Advisor to Primarch Victus",
      "Veteran of the Reaper War",
      "Shepard's most trusted ally",
    ],
  },
  {
    id: "tali",
    name: "Tali'Zorah vas Normandy",
    species: "Quarian",
    occupation: "Engineer / Admiral",
    affiliation: "Quarian Migrant Fleet",
    status: "Active",
    location: "Migrant Fleet",
    origin: "Migrant Fleet",
    description:
      "Quarian engineer and Admiral. Played crucial role in ending the Geth-Quarian conflict and reclaiming Rannoch.",
    background:
      "Tali'Zorah is a brilliant quarian engineer and eventual Admiral of the Migrant Fleet. She is known for her expertise in technology and her crucial role in the fight against the Reapers.",
    biography:
      "Born aboard the Migrant Fleet, Tali grew up learning the engineering skills essential for maintaining the quarian ships. Her Pilgrimage led her to discover evidence of geth activity, which brought her into contact with Commander Shepard. She has since become one of Shepard's most loyal companions and a key figure in quarian politics.",
    portraits: [
      {
        id: "tali-1",
        url: "/placeholder.svg?height=400&width=300&text=Tali+Portrait+1",
        title: "Pilgrimage",
        description: "Tali during her Pilgrimage",
        year: "2183",
        context: "Security footage from the Citadel",
      },
      {
        id: "tali-2",
        url: "/placeholder.svg?height=400&width=300&text=Tali+Portrait+2",
        title: "Normandy Engineer",
        description: "Tali working in the Normandy's engine room",
        year: "2185",
        context: "Ship's internal monitoring system",
      },
      {
        id: "tali-3",
        url: "/placeholder.svg?height=400&width=300&text=Tali+Portrait+3",
        title: "Admiral of the Fleet",
        description: "Tali in her Admiral's regalia",
        year: "2186",
        context: "Official Fleet ceremony",
      },
    ],
    timeline: [
      {
        id: "tali-birth",
        year: "2161",
        title: "Born on Migrant Fleet",
        description: "Tali'Zorah was born aboard the quarian Migrant Fleet.",
        category: "early_life",
        importance: "medium",
        location: "Migrant Fleet",
      },
      {
        id: "tali-pilgrimage",
        year: "2183",
        title: "Began Pilgrimage",
        description:
          "Started her Pilgrimage, the traditional quarian rite of passage.",
        category: "career",
        importance: "medium",
        location: "Citadel",
        portraitId: "tali-1",
      },
      {
        id: "tali-geth-data",
        year: "2183",
        title: "Discovered Geth Data",
        description:
          "Found evidence of geth activity and Saren's involvement with them.",
        category: "major_event",
        importance: "high",
        location: "Citadel",
      },
      {
        id: "tali-trial",
        year: "2185",
        title: "Treason Trial",
        description:
          "Faced trial for allegedly sending active geth to the Migrant Fleet.",
        category: "major_event",
        importance: "high",
        location: "Migrant Fleet",
      },
      {
        id: "tali-admiral",
        year: "2186",
        title: "Became Admiral",
        description:
          "Promoted to Admiral of the Migrant Fleet during the Reaper War.",
        category: "transformation",
        importance: "critical",
        location: "Migrant Fleet",
        portraitId: "tali-3",
      },
      {
        id: "tali-rannoch",
        year: "2186",
        title: "Reclaimed Rannoch",
        description:
          "Helped broker peace between the quarians and geth, leading to the reclamation of the quarian homeworld.",
        category: "legacy",
        importance: "critical",
        location: "Rannoch",
      },
    ],
    attributes: {
      rank: "Admiral",
      specialization: "Engineering",
      homeworld: "Migrant Fleet",
      birthYear: "2161",
    },
    notableAchievements: [
      "Admiral of the Migrant Fleet",
      "Helped reclaim Rannoch",
      "Brokered peace with the Geth",
      "Master engineer and technician",
    ],
  },
  {
    id: "liara",
    name: "Dr. Liara T'Soni",
    species: "Asari",
    occupation: "Archaeologist / Information Broker",
    affiliation: "Independent",
    status: "Active",
    location: "Thessia",
    origin: "Thessia",
    description:
      "Asari archaeologist specializing in Prothean technology and culture. Later became one of the galaxy's most powerful information brokers.",
    background:
      "Dr. Liara T'Soni is a renowned asari archaeologist specializing in Prothean technology and culture. She later became one of the galaxy's most powerful information brokers.",
    biography:
      "Born to Matriarch Benezia, Liara spent over a century studying Prothean ruins before her encounter with Commander Shepard changed her life forever. Her expertise in Prothean technology proved crucial in understanding the Reaper threat, and her evolution into an information broker made her one of the most influential figures in the galaxy.",
    portraits: [
      {
        id: "liara-1",
        url: "/placeholder.svg?height=400&width=300&text=Liara+Portrait+1",
        title: "Archaeologist",
        description: "Dr. Liara T'Soni at a Prothean dig site",
        year: "2183",
        context: "Archaeological expedition documentation",
      },
    ],
    timeline: [
      {
        id: "liara-birth",
        year: "2077",
        title: "Born on Thessia",
        description:
          "Liara T'Soni was born to Matriarch Benezia on the asari homeworld.",
        category: "early_life",
        importance: "medium",
        location: "Thessia",
      },
      {
        id: "liara-shepard",
        year: "2183",
        title: "Met Commander Shepard",
        description:
          "First encountered Shepard during the search for the Conduit.",
        category: "major_event",
        importance: "high",
        location: "Therum",
        portraitId: "liara-1",
      },
    ],
    attributes: {
      rank: "Doctor",
      specialization: "Archaeology",
      homeworld: "Thessia",
      birthYear: "2077",
    },
    notableAchievements: [
      "Leading expert on Prothean technology",
      "Powerful information broker",
      "Key figure in the Reaper War",
    ],
  },
  {
    id: "wrex",
    name: "Urdnot Wrex",
    species: "Krogan",
    occupation: "Clan Leader",
    affiliation: "Clan Urdnot",
    status: "Active",
    location: "Tuchanka",
    origin: "Tuchanka",
    description:
      "Krogan Battlemaster and leader of Clan Urdnot. Instrumental in curing the genophage and uniting the krogan clans.",
    background:
      "Urdnot Wrex is the leader of Clan Urdnot and one of the most influential krogan in the galaxy. A former mercenary and bounty hunter, he now works to unite the krogan clans.",
    biography:
      "Born over 1,400 years ago, Wrex has lived through the Krogan Rebellions and the implementation of the genophage. His long life has given him a unique perspective on krogan culture and the need for change. As leader of Clan Urdnot, he works to cure the genophage and restore his people's future.",
    portraits: [
      {
        id: "wrex-1",
        url: "/placeholder.svg?height=400&width=300&text=Wrex+Portrait+1",
        title: "Clan Leader",
        description: "Urdnot Wrex as leader of Clan Urdnot",
        year: "2185",
        context: "Clan ceremony on Tuchanka",
      },
    ],
    timeline: [
      {
        id: "wrex-birth",
        year: "700",
        title: "Born on Tuchanka",
        description:
          "Urdnot Wrex was born during the height of krogan civilization.",
        category: "early_life",
        importance: "medium",
        location: "Tuchanka",
      },
      {
        id: "wrex-shepard",
        year: "2183",
        title: "Joined Shepard's crew",
        description:
          "Became a member of Commander Shepard's team aboard the Normandy.",
        category: "major_event",
        importance: "high",
        location: "Citadel",
      },
    ],
    attributes: {
      rank: "Clan Leader",
      specialization: "Combat",
      homeworld: "Tuchanka",
      birthYear: "700 CE",
    },
    notableAchievements: [
      "Leader of Clan Urdnot",
      "Veteran of the Krogan Rebellions",
      "Instrumental in curing the genophage",
    ],
  },
];
