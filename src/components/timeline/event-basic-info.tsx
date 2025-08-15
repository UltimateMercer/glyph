import type { TimelineEvent } from "@/lib/timeline-events-data";
import { useEventStyles } from "./helpers";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

// Componente para os detalhes básicos do evento
export const EventBasicInfo = ({ event }: { event: TimelineEvent }) => {
  const styles = useEventStyles(event.type);

  return (
    <div className="flex items-center space-x-4 text-sm text-slate-400">
      <div
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border",
          styles.secondaryBadge
        )}
      >
        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
      </div>
      {event.type === "conflict" && (
        <span className="flex items-center">
          <AlertTriangle className="mr-1 h-4 w-4 text-red-500" />
          Significant casualties reported
        </span>
      )}
    </div>
  );
};
