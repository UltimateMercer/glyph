import type { TimelineEvent } from "@/lib/timeline-events-data";
import { useEventStyles } from "./helpers";
import { cn } from "@/lib/utils";

// Componente expandido para o cabeçalho do modal
export const ModalHeader = ({ event }: { event: TimelineEvent }) => {
  const styles = useEventStyles(event.type);

  return (
    <div className="space-y-2 mb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{event.title}</h2>
        <div
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-slate-600 text-slate-300",
            styles.badgeClasses
          )}
        >
          {event.year}
        </div>
      </div>
      <p className="text-slate-400">{event.description}</p>
    </div>
  );
};
