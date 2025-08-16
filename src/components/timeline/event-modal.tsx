import type { TimelineEvent } from "@/lib/timeline-events-data";
import { X } from "lucide-react";
import { ModalHeader } from "./modal-header";
import { EventImage } from "./event-image-modal";
import { ModalBasicInfo } from "./modal-basic-info";
import { Separator } from "../ui/separator";
import { ModalKeyFigures } from "./modal-key-figures";
import { ModalCasualties } from "./modal-casualties";
import { ModalImpactAnalysis } from "./modal-impact-analysis";
import { EventImpactSections } from "./event-impact-sessions";
import { EventClassifiedInfo } from "./event-classified-info";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useEventStyles } from "./helpers";
import { cn } from "@/lib/utils";

// Componente para modal de detalhes do evento usando shadcn/ui Dialog
export const EventModal = ({
  event,
  onClose,
}: {
  event: TimelineEvent | null;
  onClose: () => void;
}) => {
  const styles = event ? useEventStyles(event.type) : null;

  return (
    <Dialog open={!!event} onOpenChange={() => onClose()}>
      <DialogContent className="max-h-[90vh] !max-w-6xl dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/80 backdrop-blur-sm py-10">
        {event && (
          <>
            <DialogHeader className="pb-4">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl font-bold dark:text-white text-slate-900">
                  {event.title}
                </DialogTitle>
                <div
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  border-slate-600 text-slate-300",
                    styles?.badgeClasses
                  )}
                >
                  {event.year}
                </div>
              </div>
              <DialogDescription className="text-slate-500">
                {event.description}
              </DialogDescription>
            </DialogHeader>
            <div className="h-full max-h-[60vh] overflow-y-auto pr-4">
              <div className="mt-6 space-y-6">
                {/* Hero Image */}
                <EventImage event={event} />

                {/* Basic Info */}
                <ModalBasicInfo event={event} />

                <Separator className="bg-slate-700" />

                {/* Key Figures */}
                <ModalKeyFigures figures={event.details.keyFigures} />

                {/* Casualties */}
                <ModalCasualties casualties={event.details.casualties} />

                <Separator className="bg-slate-700" />

                {/* Impact Analysis */}
                <ModalImpactAnalysis
                  aftermath={event.details.aftermath}
                  longTermEffects={event.details.longTermEffects}
                />

                {/* Additional Impact Sections */}
                <EventImpactSections event={event} />

                {/* Classified Information */}
                <EventClassifiedInfo event={event} />
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
