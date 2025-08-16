import type { TimelineEvent } from "@/lib/timeline-events-data";
import { MapPin, Star } from "lucide-react";

// Componente para informações básicas no modal
export const ModalBasicInfo = ({ event }: { event: TimelineEvent }) => (
  <div className="grid gap-4 md:grid-cols-2">
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <MapPin className="h-4 w-4 text-blue-400" />
        <span className="text-sm font-medium text-white">Location</span>
      </div>
      <p className="text-sm text-slate-300">{event.details.location}</p>
    </div>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Star className="h-4 w-4 text-blue-400" />
        <span className="text-sm font-medium text-white">Significance</span>
      </div>
      <p className="text-sm text-slate-300">{event.details.significance}</p>
    </div>
  </div>
);
