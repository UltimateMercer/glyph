import type { TimelineEvent } from "@/lib/timeline-events-data";
import { EventLocationSignificance } from "./event-location-significance";
import { EventKeyFigures } from "./event-key-figures";
import { EventCasualties } from "./event-casualties";
import { EventConsequences } from "./event-consequences";

// Componente principal para os detalhes do evento
export const EventDetails = ({ event }: { event: TimelineEvent }) => {
  if (!event.details) return null;

  return (
    <div className="mt-4 space-y-4 border-t border-slate-700 pt-4">
      <EventLocationSignificance event={event} />
      <EventKeyFigures figures={event.details.keyFigures} />
      <EventCasualties casualties={event.details.casualties} />
      <EventConsequences
        aftermath={event.details.aftermath}
        longTermEffects={event.details.longTermEffects}
      />
    </div>
  );
};
