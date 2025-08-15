import { Shield, Target, Star, Globe2, Database } from "lucide-react";

export interface OverviewCardData {
  id: string;
  title: string;
  mainValue: string;
  mainValueColor: string;
  subtitle?: string;
  subtitleColor?: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  content: "stability" | "threats" | "operations" | "network";
  data?: any;
}

// Dados estruturados
export const overviewData: OverviewCardData[] = [
  {
    id: "council-space",
    title: "Council Space",
    mainValue: "87%",
    mainValueColor: "dark:text-blue-100 text-slate-800",
    subtitle: "+2.3%",
    subtitleColor: "text-green-400",
    icon: Shield,
    iconColor: "text-blue-400",
    content: "stability",
    data: {
      stabilityIndex: 87,
      systemsSecure: 48,
      underWatch: 7,
    },
  },
  {
    id: "threats",
    title: "Known Threats",
    mainValue: "12",
    mainValueColor: "text-red-400",
    subtitle: "Active",
    subtitleColor: "text-red-300",
    icon: Target,
    iconColor: "text-red-400",
    content: "threats",
    data: {
      omega: { count: 1, percentage: 10 },
      critical: { count: 3, percentage: 30 },
      high: { count: 8, percentage: 60 },
    },
  },
  {
    id: "operations",
    title: "Active Operations",
    mainValue: "156",
    mainValueColor: "dark:text-blue-100 text-slate-800",
    subtitle: "+12",
    subtitleColor: "text-green-400",
    icon: Star,
    iconColor: "text-blue-400",
    content: "operations",
    data: {
      intelligence: 64,
      reconnaissance: 47,
      assetManagement: 45,
      successRate: "94.2%",
    },
  },
  {
    id: "network",
    title: "Network Status",
    mainValue: "98.2%",
    mainValueColor: "dark:text-blue-100 text-slate-800",
    subtitle: "Optimal",
    subtitleColor: "text-green-400",
    icon: Globe2,
    iconColor: "text-blue-400",
    content: "network",
    data: {
      uptime: "99.99%",
      response: "124ms",
      load: "42%",
      memory: "67%",
    },
  },
];
