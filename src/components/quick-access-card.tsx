"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Classes CSS extraídas
const cardClasses = cn(
  "group relative overflow-hidden backdrop-blur-sm transition-colors shadow-md",
  "dark:border-blue-900/50 dark:bg-blue-950/20 dark:hover:bg-blue-950/30",
  "border-blue-200 bg-white/60 hover:bg-blue-50/80 gap-2 rounded-md"
);

const titleClasses = cn(
  "flex items-center space-x-2 dark:text-blue-100 text-slate-800 text-2xl"
);

const iconClasses = cn("h-5 w-5 dark:text-blue-400 text-blue-600");

const descriptionClasses = cn("text-sm dark:text-blue-300 text-slate-600");

const statusClasses = cn("mt-4 flex items-center text-sm");

// Componente individual do card
interface QuickAccessCardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  statusIcon: React.ComponentType<{ className?: string }>;
  statusText: string;
  statusColor: string;
}

export const QuickAccessCard: React.FC<QuickAccessCardProps> = ({
  href,
  title,
  description,
  icon: Icon,
  statusIcon: StatusIcon,
  statusText,
  statusColor,
}) => (
  <Link href={href}>
    <Card className={cardClasses}>
      <CardHeader>
        <CardTitle className={titleClasses}>
          <Icon className={iconClasses} />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={descriptionClasses}>{description}</p>
        <div className={cn(statusClasses, statusColor)}>
          <StatusIcon className="mr-2 h-4 w-4" />
          {statusText}
        </div>
      </CardContent>
    </Card>
  </Link>
);
