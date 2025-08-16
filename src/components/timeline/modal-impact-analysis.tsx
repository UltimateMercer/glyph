import { Clock, History } from "lucide-react";

// Componente para análise de impacto no modal
export const ModalImpactAnalysis = ({
  aftermath,
  longTermEffects,
}: {
  aftermath: string;
  longTermEffects: string;
}) => (
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Clock className="h-4 w-4 text-blue-400" />
        <span className="text-sm font-medium text-white">
          Immediate Aftermath
        </span>
      </div>
      <p className="text-sm text-slate-300">{aftermath}</p>
    </div>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <History className="h-4 w-4 text-blue-400" />
        <span className="text-sm font-medium text-white">
          Long-term Effects
        </span>
      </div>
      <p className="text-sm text-slate-300">{longTermEffects}</p>
    </div>
  </div>
);
