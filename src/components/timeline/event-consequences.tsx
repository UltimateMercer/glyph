import { Clock, History } from "lucide-react";

export const EventConsequences = ({
  aftermath,
  longTermEffects,
}: {
  aftermath: string;
  longTermEffects: string;
}) => (
  <div className="grid gap-4 text-sm md:grid-cols-2">
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Clock className="h-4 w-4 text-blue-400" />
        <span className="font-medium text-white">Immediate Aftermath</span>
      </div>
      <p className="text-slate-300">{aftermath}</p>
    </div>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <History className="h-4 w-4 text-blue-400" />
        <span className="font-medium text-white">Long-term Effects</span>
      </div>
      <p className="text-slate-300">{longTermEffects}</p>
    </div>
  </div>
);
