"use client";
import * as React from "react";
import { HeaderSection } from "@/components/header-section";
import { Users } from "lucide-react";

export default function PersonsPage() {
  return (
    <>
      <div className="min-h-screen ">
        <HeaderSection
          icon={Users}
          badge="Personnel Database"
          title="Key Individuals"
          description="Comprehensive profiles of significant individuals who have shaped galactic history and current events."
        />
      </div>
    </>
  );
}
