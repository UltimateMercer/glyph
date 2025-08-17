import type { TimelineEvent } from "@/lib/timeline-events-data";
import { useEventStyles } from "./helpers";
import { cn } from "@/lib/utils";

// Componente para o cabeçalho do evento
export const EventHeader = ({ event }: { event: TimelineEvent }) => {
  const styles = useEventStyles(event.type);

  return (
    <div className="flex flex-col space-y-1.5 p-6">
      <div className="flex items-center justify-between">
        <h3
          className={cn(
            "text-2xl font-semibold leading-none tracking-tight flex items-center space-x-3",
            styles.color
          )}
        >
          <event.icon className={cn("h-5 w-5", styles.iconColor)} />
          <span>{event.title}</span>
        </h3>
        <div
          className={cn(
            "inline-flex items-center rounded px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur-sm border-slate-600 text-slate-300",
            styles.badgeClasses
          )}
        >
          {event.year}
        </div>
      </div>
      <p className="text-sm mt-2 text-slate-400">{event.description}</p>
    </div>
  );
};
