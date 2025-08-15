import type { OverviewCardData } from "@/lib/overview-data";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

// Componente individual do card
interface OverviewCardProps {
  cardData: OverviewCardData;
}

// Classes CSS reutilizáveis
const cardClasses =
  "dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60 backdrop-blur-sm shadow-md";
const labelClasses = "text-sm dark:text-blue-400 text-blue-600";
const progressBarBg = "bg-blue-950";
const metricBoxClasses =
  "rounded dark:bg-blue-900/20 bg-blue-300/20 px-2 py-1 text-center dark:text-blue-300 text-slate-600";

// Componentes de conteúdo específicos
const StabilityContent: React.FC<{ data: any }> = ({ data }) => (
  <div className="mt-4">
    <div className="mb-1 flex items-center justify-between text-xs">
      <span className="dark:text-blue-300 text-slate-600">Stability Index</span>
      <span className="dark:text-blue-400 text-blue-600">
        {data.stabilityIndex}/100
      </span>
    </div>
    <div className={cn("h-2 rounded-full", progressBarBg)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
        style={{ width: `${data.stabilityIndex}%` }}
      />
    </div>
    <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
      <div className={metricBoxClasses}>
        <p className="font-medium dark:text-blue-100 text-slate-900">
          {data.systemsSecure}
        </p>
        Systems Secure
      </div>
      <div className={metricBoxClasses}>
        <p className="font-medium dark:text-blue-100 text-slate-900">
          {data.underWatch}
        </p>
        Under Watch
      </div>
    </div>
  </div>
);

const ThreatsContent: React.FC<{ data: any }> = ({ data }) => {
  const threats = [
    {
      label: "Omega Level",
      count: data.omega.count,
      color: "text-red-400",
      barColor: "bg-red-500",
      percentage: data.omega.percentage,
    },
    {
      label: "Critical Level",
      count: data.critical.count,
      color: "text-orange-400",
      barColor: "bg-orange-500",
      percentage: data.critical.percentage,
    },
    {
      label: "High Level",
      count: data.high.count,
      color: "text-yellow-400",
      barColor: "bg-yellow-500",
      percentage: data.high.percentage,
    },
  ];

  return (
    <div className="mt-4 space-y-3">
      {threats.map((threat) => (
        <div key={threat.label}>
          <div className="mb-1 flex items-center justify-between text-xs">
            <span className="dark:text-blue-300 text-slate-600">
              {threat.label}
            </span>
            <span className={threat.color}>{threat.count}</span>
          </div>
          <div className={cn("h-1.5 rounded-full", progressBarBg)}>
            <div
              className={cn("h-full rounded-full", threat.barColor)}
              style={{ width: `${threat.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const OperationsContent: React.FC<{ data: any }> = ({ data }) => {
  const operations = [
    { type: "Intelligence", count: data.intelligence, color: "bg-cyan-400" },
    {
      type: "Reconnaissance",
      count: data.reconnaissance,
      color: "bg-purple-400",
    },
    {
      type: "Asset Management",
      count: data.assetManagement,
      color: "bg-blue-400",
    },
  ];

  return (
    <div className="mt-4 space-y-3">
      {operations.map((op) => (
        <div
          key={op.type}
          className="flex items-center justify-between text-xs"
        >
          <div className="flex items-center">
            <div className={cn("mr-2 h-2 w-2 rounded-full", op.color)} />
            <span className="dark:text-blue-300 text-slate-600">{op.type}</span>
          </div>
          <span className="font-medium dark:text-blue-100 text-blue-900">
            {op.count}
          </span>
        </div>
      ))}
      <div className="mt-2 rounded border dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60 px-3 py-2">
        <div className="flex items-center justify-between text-xs">
          <span className="dark:text-blue-300 text-slate-600">
            Success Rate
          </span>
          <span className="text-green-400">{data.successRate}</span>
        </div>
      </div>
    </div>
  );
};

const NetworkContent: React.FC<{ data: any }> = ({ data }) => (
  <div className="mt-4 space-y-3">
    <div className="rounded border border-green-500/20 bg-green-500/10 px-3 py-2">
      <div className="flex items-center text-xs">
        <div className="mr-2 h-2 w-2 rounded-full bg-green-400" />
        <span className="text-green-400">All systems operational</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 text-xs">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="space-y-1">
          <p className="dark:text-blue-300 text-slate-600 capitalize">{key}</p>
          <p className="font-medium dark:text-blue-100 text-blue-900">
            {String(value)}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export const OverviewCard: React.FC<OverviewCardProps> = ({ cardData }) => {
  const {
    title,
    mainValue,
    mainValueColor,
    subtitle,
    subtitleColor,
    icon: Icon,
    iconColor,
    content,
    data,
  } = cardData;

  const renderContent = () => {
    switch (content) {
      case "stability":
        return <StabilityContent data={data} />;
      case "threats":
        return <ThreatsContent data={data} />;
      case "operations":
        return <OperationsContent data={data} />;
      case "network":
        return <NetworkContent data={data} />;
      default:
        return null;
    }
  };

  return (
    <Card className={cardClasses}>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className={labelClasses}>{title}</p>
            <div className="flex items-baseline space-x-2">
              <p className={cn("text-2xl font-bold", mainValueColor)}>
                {mainValue}
              </p>
              {subtitle && (
                <p className={cn("text-sm", subtitleColor)}>{subtitle}</p>
              )}
            </div>
          </div>
          <Icon className={cn("h-8 w-8", iconColor)} />
        </div>
        {renderContent()}
      </CardContent>
    </Card>
  );
};
