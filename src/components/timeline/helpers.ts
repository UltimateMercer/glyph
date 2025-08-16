import * as React from "react";
import type { TimelineEvent } from "@/lib/timeline-events-data";

// Hook para estilos baseados no tipo do evento
export const useEventStyles = (type: TimelineEvent["type"]) => {
  const styles = {
    conflict: {
      color: "text-red-500",
      iconColor: "text-red-500",
      hoverBorder: "hover:border-red-500/50",
      hoverBg: "hover:bg-red-500/5",
      badgeClasses: "border-red-500/50 text-white bg-red-500",
      connectorBg: "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]",
      secondaryBadge: "bg-red-950/40 text-red-400 border-red-800",
    },
    discovery: {
      color: "text-emerald-500",
      iconColor: "text-emerald-500",
      hoverBorder: "hover:border-emerald-500/50",
      hoverBg: "hover:bg-emerald-500/5",
      badgeClasses: "border-emerald-500/50 text-white bg-emerald-500",
      connectorBg: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]",
      secondaryBadge: "bg-emerald-950/40 text-emerald-400 border-emerald-800",
    },
    major: {
      color: "text-blue-500",
      iconColor: "text-blue-500",
      hoverBorder: "hover:border-blue-500/50",
      hoverBg: "hover:bg-blue-500/5",
      badgeClasses: "border-blue-500/50 text-white bg-blue-500",
      connectorBg: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]",
      secondaryBadge: "bg-blue-950/40 text-blue-400 border-blue-800",
    },
    contact: {
      color: "text-purple-500",
      iconColor: "text-purple-500",
      hoverBorder: "hover:border-purple-500/50",
      hoverBg: "hover:bg-purple-500/5",
      badgeClasses: "border-purple-500/50 text-white bg-purple-500",
      connectorBg: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]",
      secondaryBadge: "bg-purple-950/40 text-purple-400 border-purple-800",
    },
  };

  return styles[type as keyof typeof styles];
};

// Hook personalizado para gerenciar estado dos eventos
export const useTimelineEvents = () => {
  const [selectedEvent, setSelectedEvent] =
    React.useState<TimelineEvent | null>(null);

  return { selectedEvent, setSelectedEvent };
};
