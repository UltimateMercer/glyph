import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Classes CSS extraídas como constantes
const cardClasses = cn(
  "backdrop-blur-sm shadow-md dark:border-slate-800 dark:bg-slate-900/50",
  "border-slate-200 bg-white/60 gap-0.5"
);

const titleClasses = cn(
  "text-sm font-medium dark:text-slate-300 text-slate-700"
);

const valueClasses = cn("text-2xl font-bold dark:text-white text-slate-900");

const descriptionClasses = cn("text-xs dark:text-slate-400 text-slate-600");

// Componente individual do card para melhor legibilidade
interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon: Icon,
  iconColor,
}) => (
  <Card className={cardClasses}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className={titleClasses}>{title}</CardTitle>
      <Icon className={cn("h-4 w-4", iconColor)} />
    </CardHeader>
    <CardContent>
      <div className={valueClasses}>{value}</div>
      <p className={descriptionClasses}>{description}</p>
    </CardContent>
  </Card>
);
