import { AlertTriangle } from "lucide-react";
import { Separator } from "../ui/separator";

// Componente para casualties no modal
export const ModalCasualties = ({ casualties }: { casualties?: string }) => {
  if (!casualties) return null;

  return (
    <>
      <Separator className="bg-slate-700" />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <span className="text-sm font-medium text-white">Casualties</span>
        </div>
        <p className="text-sm text-red-400">{casualties}</p>
      </div>
    </>
  );
};
