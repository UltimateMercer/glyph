import type { TimelineEvent } from "@/lib/timeline-events-data";
import { MapPin, Star } from "lucide-react";

// Componente para informações de localização e significância
export const EventLocationSignificance = ({
  event,
}: {
  event: TimelineEvent;
}) => (
  <div className="grid gap-4 text-sm md:grid-cols-2">
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <MapPin className="h-4 w-4 text-blue-400" />
        <span className="font-medium text-white">Location</span>
      </div>
      <p className="text-slate-300">{event.details.location}</p>
    </div>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Star className="h-4 w-4 text-blue-400" />
        <span className="font-medium text-white">Significance</span>
      </div>
      <p className="text-slate-300">{event.details.significance}</p>
    </div>
  </div>
);
