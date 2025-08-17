import type { TimelineEvent } from "@/lib/timeline-events-data";
import { useEventStyles } from "./helpers";
import { cn } from "@/lib/utils";
import { EventConnector } from "./event-connector";
import { EventHeader } from "./event-header";
import { EventBasicInfo } from "./event-basic-info";
import { EventDetails } from "./event-details";

export const EventCard = ({
  event,
  onSelect,
  isFirst = false,
}: {
  event: TimelineEvent;
  onSelect: (event: TimelineEvent) => void;
  isFirst?: boolean;
}) => {
  const styles = useEventStyles(event.type);

  return (
    <div
      className={cn(
        "relative ml-6 transition-opacity hover:opacity-80",
        isFirst && "pt-2"
      )}
    >
      <EventConnector type={event.type} />

      <div
        className={cn(
          "rounded-md border text-card-foreground shadow-md group dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60 backdrop-blur-sm transition-all duration-200 cursor-pointer",
          styles.hoverBorder,
          styles.hoverBg
        )}
        onClick={() => onSelect(event)}
      >
        <EventHeader event={event} />
        {/* <div className="p-6 pt-0 space-y-4">
          <EventBasicInfo event={event} />
          <EventDetails event={event} />
        </div> */}
      </div>
    </div>
  );
};
