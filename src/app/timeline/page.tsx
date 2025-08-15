"use client";
import * as React from "react";
import { HeaderSection } from "@/components/header-section";
import type { TimelineEvent } from "@/lib/timeline-events-data";

export default function TimelinePage() {
  const [selectedEvent, setSelectedEvent] =
    React.useState<TimelineEvent | null>(null);

  return (
    <>
      <div className="min-h-screen ">
        <HeaderSection />
      </div>
    </>
  );
}
