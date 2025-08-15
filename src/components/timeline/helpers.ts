import type { TimelineEvent } from "@/lib/timeline-events-data";

// Hook para estilos baseados no tipo do evento
export const useEventStyles = (type: TimelineEvent["type"]) => {
  const styles = {
    conflict: {
      color: "text-red-400",
      iconColor: "text-red-500",
      hoverBorder: "hover:border-red-500/50",
      hoverBg: "hover:bg-red-500/5",
      badgeClasses: "border-red-500/50 text-red-400 bg-red-950/20",
      connectorBg: "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]",
      secondaryBadge: "bg-red-950/40 text-red-400 border-red-800",
    },
    discovery: {
      color: "text-emerald-400",
      iconColor: "text-emerald-500",
      hoverBorder: "hover:border-emerald-500/50",
      hoverBg: "hover:bg-emerald-500/5",
      badgeClasses: "border-emerald-500/50 text-emerald-400 bg-emerald-950/20",
      connectorBg: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]",
      secondaryBadge: "bg-emerald-950/40 text-emerald-400 border-emerald-800",
    },
    major: {
      color: "text-blue-400",
      iconColor: "text-blue-500",
      hoverBorder: "hover:border-blue-500/50",
      hoverBg: "hover:bg-blue-500/5",
      badgeClasses: "border-blue-500/50 text-blue-400 bg-blue-950/20",
      connectorBg: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]",
      secondaryBadge: "bg-blue-950/40 text-blue-400 border-blue-800",
    },
    contact: {
      color: "text-purple-400",
      iconColor: "text-purple-500",
      hoverBorder: "hover:border-purple-500/50",
      hoverBg: "hover:bg-purple-500/5",
      badgeClasses: "border-purple-500/50 text-purple-400 bg-purple-950/20",
      connectorBg: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]",
      secondaryBadge: "bg-purple-950/40 text-purple-400 border-purple-800",
    },
  };

  return styles[type as keyof typeof styles];
};
