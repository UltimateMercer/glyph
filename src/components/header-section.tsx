import * as React from "react";
import { Clock } from "lucide-react";

export const HeaderSection = ({
  icon: Icon = Clock,
  badge = "Historical Records",
  title = "Galactic Timeline",
  description = "A comprehensive chronicle of major galactic events from the rise of the Leviathans to the Reaper War.",
  gradientFrom = "blue-500/10",
  iconColor = "blue-400",
  className = "",
}) => {
  return (
    <section
      className={`relative overflow-hidden rounded-lg hex-border shadow-lg border dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60 px-6 py-12 backdrop-blur-sm ${className}`}
    >
      <div className="relative z-10">
        <div className={`flex items-center space-x-3 text-${iconColor}`}>
          <Icon className="h-6 w-6" />
          <span className="text-sm font-semibold uppercase tracking-wider">
            {badge}
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tighter dark:text-blue-100 text-slate-900">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg dark:text-blue-300 text-slate-600">
          {description}
        </p>
      </div>
      <div
        className={`absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-${gradientFrom} to-transparent`}
      />
    </section>
  );
};
