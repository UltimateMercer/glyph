import type { TimelineEvent } from "@/lib/timeline-events-data";
import { Separator } from "../ui/separator";
import { FileText } from "lucide-react";

// Componente para informações classificadas
export const EventClassifiedInfo = ({ event }: { event: TimelineEvent }) => {
  if (!event.details.classifiedInfo) return null;

  return (
    <>
      <Separator className="bg-slate-700" />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <FileText className="h-4 w-4 text-red-500" />
          <span className="text-sm font-medium text-white">
            Classified Information
          </span>
        </div>
        <p className="text-sm text-red-400">{event.details.classifiedInfo}</p>
      </div>
    </>
  );
};
