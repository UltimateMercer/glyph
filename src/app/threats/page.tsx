"use client";
import * as React from "react";
import { HeaderSection } from "@/components/header-section";
import { AlertTriangle, Shield } from "lucide-react";

export default function ThreatsPage() {
  return (
    <>
      <div className="min-h-screen ">
        <HeaderSection
          icon={AlertTriangle}
          badge="Threat Assessment"
          title="Known Threats"
          description=" Comprehensive analysis of hostile forces, organizations, and entities that pose risks to galactic security."
        />
      </div>
    </>
  );
}
