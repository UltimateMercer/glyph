"use client";
import * as React from "react";
import { HeaderSection } from "@/components/header-section";
import { timelineEvents, type TimelineEvent } from "@/lib/timeline-events-data";
import { useTimelineEvents } from "@/components/timeline/helpers";
import { EraSection } from "@/components/timeline/era-section";
import { EventModal } from "@/components/timeline/event-modal";

export default function TimelinePage() {
  // const [selectedEvent, setSelectedEvent] =
  //   React.useState<TimelineEvent | null>(null);

  const { selectedEvent, setSelectedEvent } = useTimelineEvents();

  return (
    <>
      <div className="min-h-screen ">
        <HeaderSection />
        <div className="space-y-12">
          {timelineEvents.map((era) => (
            <EraSection
              key={era.era}
              era={era}
              onEventSelect={setSelectedEvent}
            />
          ))}
        </div>
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      </div>
    </>
  );
}
