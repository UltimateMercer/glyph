import type { TimelineEvent } from "@/lib/timeline-events-data";
import { Separator } from "../ui/separator";
import { Atom, Globe2, Shield, Target } from "lucide-react";

// Componente para informações de impacto adicional
export const EventImpactSections = ({ event }: { event: TimelineEvent }) => {
  const { details } = event;
  const hasImpactData =
    details.culturalImpact ||
    details.technologicalImpact ||
    details.politicalImpact ||
    details.economicImpact;

  if (!hasImpactData) return null;

  return (
    <>
      <Separator className="bg-slate-700" />
      <div className="grid gap-4 md:grid-cols-2">
        {details.culturalImpact && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Globe2 className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-white">
                Cultural Impact
              </span>
            </div>
            <p className="text-sm text-slate-300">{details.culturalImpact}</p>
          </div>
        )}

        {details.technologicalImpact && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Atom className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-white">
                Technological Impact
              </span>
            </div>
            <p className="text-sm text-slate-300">
              {details.technologicalImpact}
            </p>
          </div>
        )}

        {details.politicalImpact && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-white">
                Political Impact
              </span>
            </div>
            <p className="text-sm text-slate-300">{details.politicalImpact}</p>
          </div>
        )}

        {details.economicImpact && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-white">
                Economic Impact
              </span>
            </div>
            <p className="text-sm text-slate-300">{details.economicImpact}</p>
          </div>
        )}
      </div>
    </>
  );
};
