import type { TimelineEra, TimelineEvent } from "@/lib/timeline-events-data";
import { EventCard } from "./event-card";

export const EraSection = ({
  era,
  onEventSelect,
}: {
  era: TimelineEra;
  onEventSelect: (event: TimelineEvent) => void;
}) => (
  <div className="mt-8 mb-12">
    <div className="mb-6">
      <h2 className="text-2xl font-bold dark:text-white text-slate-900">
        {era.era}
      </h2>
      <p className="text-slate-400 mb-1">{era.description}</p>
      <p className="text-sm text-slate-500">{era.significance}</p>
    </div>

    <div className="relative ml-3 space-y-6 border-l border-slate-600">
      {era.events.map((event, eventIndex) => (
        <EventCard
          key={event.title}
          event={event}
          onSelect={onEventSelect}
          isFirst={eventIndex === 0}
        />
      ))}
    </div>
  </div>
);
