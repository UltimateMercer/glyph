import { AlertTriangle } from "lucide-react";

// Componente para casualties (quando existirem)
export const EventCasualties = ({ casualties }: { casualties?: string }) => {
  if (!casualties) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <AlertTriangle className="h-4 w-4 text-red-500" />
        <span className="font-medium text-white">Casualties</span>
      </div>
      <p className="text-red-400">{casualties}</p>
    </div>
  );
};
