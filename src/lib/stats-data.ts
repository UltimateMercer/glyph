import { Database, AlertTriangle, Activity, TrendingUp } from "lucide-react";
// Dados das estatísticas extraídos para facilitar manutenção
export const statsData = [
  {
    title: "Total Records",
    value: "Undefined", // Considere substituir por um valor dinâmico
    description: "Across all databases",
    icon: Database,
    iconColor: "text-blue-400",
  },
  {
    title: "Active Threats",
    value: "2",
    description: "Requiring monitoring",
    icon: AlertTriangle,
    iconColor: "text-red-400",
  },
  {
    title: "Network Activity",
    value: "98.7%",
    description: "Uptime this cycle",
    icon: Activity,
    iconColor: "text-green-400",
  },
  {
    title: "Data Integrity",
    value: "99.9%",
    description: "Quantum verified",
    icon: TrendingUp,
    iconColor: "text-cyan-400",
  },
];
