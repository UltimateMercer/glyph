import type { TimelineEvent } from "@/lib/timeline-events-data";
import { cn } from "@/lib/utils";
import { useEventStyles } from "./helpers";

// Componente para o conector visual do evento
export const EventConnector = ({ type }: { type: TimelineEvent["type"] }) => {
  const styles = useEventStyles(type);

  return (
    <div className="absolute -left-[2rem] top-1/2 h-4 w-4 rounded-full border-2 border-slate-600 bg-slate-800">
      <div
        className={cn(
          "absolute inset-0.5 rounded-full transition-colors duration-200",
          styles.connectorBg
        )}
      />
    </div>
  );
};
