import type { TimelineEvent } from "@/lib/timeline-events-data";

// Componente para imagem do evento (no modal)
export const EventImage = ({ event }: { event: TimelineEvent }) => {
  if (!event.image) return null;

  return (
    <div className="relative h-80 overflow-hidden rounded-lg">
      <img
        src={event.image || "/placeholder.svg"}
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
    </div>
  );
};
