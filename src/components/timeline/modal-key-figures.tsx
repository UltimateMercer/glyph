import { Users } from "lucide-react";

// Componente para figuras-chave no modal
export const ModalKeyFigures = ({ figures }: { figures: string[] }) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <Users className="h-4 w-4 text-blue-400" />
      <span className="text-sm font-medium text-white">Key Figures</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {figures.map((figure) => (
        <div
          key={figure}
          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-800/50 text-slate-300 border border-slate-600"
        >
          {figure}
        </div>
      ))}
    </div>
  </div>
);
