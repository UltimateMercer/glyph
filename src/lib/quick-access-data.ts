import { Dna, Clock, Cpu, Database, AlertTriangle, Rocket } from "lucide-react";
// Dados dos cards de acesso rápido
export const quickAccessData = [
  {
    id: "species",
    href: "/races",
    title: "Species Database",
    description:
      "Comprehensive information about known sapient species in the galaxy.",
    icon: Dna,
    statusIcon: Database,
    statusText: "15 Species documented",
    statusColor: "dark:text-blue-400 text-blue-600",
  },
  {
    id: "timeline",
    href: "/timeline",
    title: "Historical Events",
    description:
      "Timeline of major galactic events and conflicts throughout history.",
    icon: Clock,
    statusIcon: AlertTriangle,
    statusText: "Recent conflict detected",
    statusColor: "text-orange-600",
  },
  {
    id: "technology",
    href: "/technology",
    title: "Technology",
    description: "Advanced technological developments and scientific research.",
    icon: Cpu,
    statusIcon: Rocket,
    statusText: "New discoveries available",
    statusColor: "dark:text-blue-400 text-blue-600",
  },
];
