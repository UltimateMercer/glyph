// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { Globe2, Shield, Star, Target } from "lucide-react";
// import { Card, CardContent } from "./ui/card";

// export const GalacticStatusReportDialog = ({
//   showReport,
//   setShowReport,
// }: {
//   showReport: boolean;
//   setShowReport: (showReport: boolean) => void;
// }) => {
//   return (
//     <Dialog open={showReport} onOpenChange={setShowReport}>
//       <DialogContent className="!max-w-6xl border-blue-900/50 dark:bg-blue-950/90 bg-white/75 backdrop-blur-md">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold dark:text-blue-100 text-slate-800">
//             Galactic Status Report
//           </DialogTitle>
//         </DialogHeader>

//         <ScrollArea className="h-[450px]">
//           <div className="grid gap-5 pr-5">
//             {/* Council Space */}
//             <div className="space-y-4">
//               <h3 className="flex items-center text-lg font-semibold dark:text-blue-100 text-slate-800">
//                 <Shield className="mr-2 h-5 w-5 text-cyan-400" />
//                 Council Space Analysis
//               </h3>
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <Card className="dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60">
//                   <CardContent className="p-4">
//                     <h4 className="text-sm font-medium dark:text-blue-100 text-slate-800">
//                       Territory Status
//                     </h4>
//                     <div className="mt-2 space-y-2">
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-blue-300 ">Secure Systems</span>
//                         <span className="dark:text-blue-100 text-slate-800">
//                           48
//                         </span>
//                       </div>
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-blue-300">Under Watch</span>
//                         <span className="text-yellow-400">7</span>
//                       </div>
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-blue-300">Contested</span>
//                         <span className="text-red-400">3</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card className="dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60">
//                   <CardContent className="p-4">
//                     <h4 className="text-sm font-medium dark:text-blue-100 text-slate-800">
//                       Stability Metrics
//                     </h4>
//                     <div className="mt-2 space-y-2">
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-blue-300">Political</span>
//                         <div className="flex items-center space-x-2">
//                           <span className="dark:text-blue-100 text-slate-800">
//                             92%
//                           </span>
//                           <span className="text-green-400">↑2.1%</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-blue-300">Economic</span>
//                         <div className="flex items-center space-x-2">
//                           <span className="dark:text-blue-100 text-slate-800">
//                             87%
//                           </span>
//                           <span className="text-green-400">↑1.4%</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-blue-300">Military</span>
//                         <div className="flex items-center space-x-2">
//                           <span className="dark:text-blue-100 text-slate-800">
//                             84%
//                           </span>
//                           <span className="text-red-400">↓0.8%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>

//             {/* Threat Analysis */}
//             <div className="space-y-4">
//               <h3 className="flex items-center text-lg font-semibold dark:text-blue-100 text-slate-800">
//                 <Target className="mr-2 h-5 w-5 text-cyan-400" />
//                 Detailed Threat Analysis
//               </h3>
//               <div className="grid gap-4 sm:grid-cols-3">
//                 <Card className="dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60">
//                   <CardContent className="p-4">
//                     <h4 className="text-sm font-medium text-red-400">
//                       Omega Level Threats
//                     </h4>
//                     <div className="mt-2 space-y-2 text-sm">
//                       <div className="rounded border border-red-900/50 bg-red-950/20 px-2 py-1">
//                         <p className="font-medium text-red-400">
//                           Reaper Forces
//                         </p>
//                         <p className="text-red-300">
//                           Multiple sectors affected
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card className="dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60">
//                   <CardContent className="p-4">
//                     <h4 className="text-sm font-medium text-orange-400">
//                       Critical Level Threats
//                     </h4>
//                     <div className="mt-2 space-y-2 text-sm">
//                       <div className="rounded border border-orange-900/50 bg-orange-950/20 px-2 py-1">
//                         <p className="font-medium text-orange-400">
//                           Cerberus Operations
//                         </p>
//                         <p className="text-orange-300">Multiple cells active</p>
//                       </div>
//                       <div className="rounded border border-orange-900/50 bg-orange-950/20 px-2 py-1">
//                         <p className="font-medium text-orange-400">
//                           Terminus Pirates
//                         </p>
//                         <p className="text-orange-300">Increased activity</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card className="dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60">
//                   <CardContent className="p-4">
//                     <h4 className="text-sm font-medium text-yellow-400">
//                       High Level Threats
//                     </h4>
//                     <div className="mt-2 space-y-2 text-sm">
//                       <div className="rounded border border-yellow-900/50 bg-yellow-950/20 px-2 py-1">
//                         <p className="font-medium text-yellow-400">
//                           Mercenary Groups
//                         </p>
//                         <p className="text-yellow-300">8 major organizations</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>

//             {/* Operations Overview */}
//             <div className="space-y-4">
//               <h3 className="flex items-center text-lg font-semibold dark:text-blue-100 text-slate-800">
//                 <Star className="mr-2 h-5 w-5 text-cyan-400" />
//                 Operations Overview
//               </h3>
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <Card className="dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60">
//                   <CardContent className="p-4">
//                     <h4 className="text-sm font-medium dark:text-blue-100 text-slate-800">
//                       Operation Types
//                     </h4>
//                     <div className="mt-4 space-y-3">
//                       <div>
//                         <div className="mb-1 flex items-center justify-between text-xs">
//                           <span className="text-blue-300">Intelligence</span>
//                           <span className="text-cyan-400">64 ops</span>
//                         </div>
//                         <div className="h-1.5 rounded-full bg-blue-950">
//                           <div className="h-full w-[41%] rounded-full bg-cyan-400" />
//                         </div>
//                       </div>
//                       <div>
//                         <div className="mb-1 flex items-center justify-between text-xs">
//                           <span className="text-blue-300">Reconnaissance</span>
//                           <span className="text-purple-400">47 ops</span>
//                         </div>
//                         <div className="h-1.5 rounded-full bg-blue-950">
//                           <div className="h-full w-[30%] rounded-full bg-purple-400" />
//                         </div>
//                       </div>
//                       <div>
//                         <div className="mb-1 flex items-center justify-between text-xs">
//                           <span className="text-blue-300">
//                             Asset Management
//                           </span>
//                           <span className="text-blue-400">45 ops</span>
//                         </div>
//                         <div className="h-1.5 rounded-full bg-blue-950">
//                           <div className="h-full w-[29%] rounded-full bg-blue-400" />
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card className="dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60">
//                   <CardContent className="p-4">
//                     <h4 className="text-sm font-medium dark:text-blue-100 text-slate-800">
//                       Success Metrics
//                     </h4>
//                     <div className="mt-2 space-y-2">
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-blue-300">Completed</span>
//                         <span className="text-green-400">147</span>
//                       </div>
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-blue-300">In Progress</span>
//                         <span className="text-yellow-400">8</span>
//                       </div>
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-blue-300">Failed</span>
//                         <span className="text-red-400">1Failed</span>
//                         <span className="text-red-400">1</span>
//                       </div>
//                       <div className="mt-4 rounded border border-green-900/50 bg-green-950/20 px-3 py-2">
//                         <div className="flex items-center justify-between text-sm">
//                           <span className="text-green-300">
//                             Overall Success Rate
//                           </span>
//                           <span className="text-green-400">94.2%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>

//             {/* Network Status */}
//             <div className="space-y-4">
//               <h3 className="flex items-center text-lg font-semibold dark:text-blue-100 text-slate-800">
//                 <Globe2 className="mr-2 h-5 w-5 text-cyan-400" />
//                 Network Diagnostics
//               </h3>
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <Card className="dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60">
//                   <CardContent className="p-4">
//                     <h4 className="text-sm font-medium dark:text-blue-100 text-slate-800">
//                       System Performance
//                     </h4>
//                     <div className="mt-2 grid grid-cols-2 gap-4">
//                       <div className="space-y-1">
//                         <p className="text-sm text-blue-300">CPU Load</p>
//                         <div className="h-1.5 rounded-full bg-blue-950">
//                           <div className="h-full w-[42%] rounded-full bg-blue-400" />
//                         </div>
//                         <p className="text-xs text-blue-400">42%</p>
//                       </div>
//                       <div className="space-y-1">
//                         <p className="text-sm text-blue-300">Memory</p>
//                         <div className="h-1.5 rounded-full bg-blue-950">
//                           <div className="h-full w-[67%] rounded-full bg-blue-400" />
//                         </div>
//                         <p className="text-xs text-blue-400">67%</p>
//                       </div>
//                       <div className="space-y-1">
//                         <p className="text-sm text-blue-300">Storage</p>
//                         <div className="h-1.5 rounded-full bg-blue-950">
//                           <div className="h-full w-[55%] rounded-full bg-blue-400" />
//                         </div>
//                         <p className="text-xs text-blue-400">55%</p>
//                       </div>
//                       <div className="space-y-1">
//                         <p className="text-sm text-blue-300">Network</p>
//                         <div className="h-1.5 rounded-full bg-blue-950">
//                           <div className="h-full w-[89%] rounded-full bg-blue-400" />
//                         </div>
//                         <p className="text-xs text-blue-400">89%</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card className="dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60">
//                   <CardContent className="p-4">
//                     <h4 className="text-sm font-medium dark:text-blue-100 text-slate-800">
//                       Network Statistics
//                     </h4>
//                     <div className="mt-2 space-y-4">
//                       <div className="grid grid-cols-2 gap-4 text-sm">
//                         <div>
//                           <p className="text-blue-300">Uptime</p>
//                           <p className="font-medium dark:text-blue-100 text-slate-800">
//                             99.99%
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-blue-300">Response Time</p>
//                           <p className="font-medium dark:text-blue-100 text-slate-800">
//                             124ms
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-blue-300">Active Nodes</p>
//                           <p className="font-medium dark:text-blue-100 text-slate-800">
//                             1,247
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-blue-300">Data Transfer</p>
//                           <p className="font-medium dark:text-blue-100 text-slate-800">
//                             1.2 PB/day
//                           </p>
//                         </div>
//                       </div>
//                       <div className="rounded border border-green-900/50 bg-green-950/20 px-3 py-2">
//                         <div className="flex items-center text-sm">
//                           <div className="mr-2 h-2 w-2 rounded-full bg-green-400" />
//                           <span className="text-green-400">
//                             All systems functioning within normal parameters
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//           <ScrollBar />
//         </ScrollArea>
//       </DialogContent>
//     </Dialog>
//   );
// };

import React, { memo, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Globe2, Shield, Star, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

// Tipos para melhor type safety
interface ThreatItem {
  name: string;
  description: string;
  level: "omega" | "critical" | "high";
}

interface StatusMetric {
  label: string;
  value: string | number;
  trend?: string;
  color?: string;
}

interface OperationMetric {
  type: string;
  count: number;
  percentage: number;
  color: string;
}

interface SystemMetric {
  name: string;
  value: number;
  color: string;
}

// Dados mockados (em um app real, viriam de props ou estado)
const mockData = {
  territoryStatus: [
    { label: "Secure Systems", value: 48, color: "text-blue-300" },
    { label: "Under Watch", value: 7, color: "text-yellow-400" },
    { label: "Contested", value: 3, color: "text-red-400" },
  ],
  stabilityMetrics: [
    {
      label: "Political",
      value: "92%",
      trend: "↑2.1%",
      color: "text-green-400",
    },
    {
      label: "Economic",
      value: "87%",
      trend: "↑1.4%",
      color: "text-green-400",
    },
    { label: "Military", value: "84%", trend: "↓0.8%", color: "text-red-400" },
  ],
  threats: {
    omega: [
      { name: "Reaper Forces", description: "Multiple sectors affected" },
    ],
    critical: [
      { name: "Cerberus Operations", description: "Multiple cells active" },
      { name: "Terminus Pirates", description: "Increased activity" },
    ],
    high: [{ name: "Mercenary Groups", description: "8 major organizations" }],
  },
  operations: [
    { type: "Intelligence", count: 64, percentage: 41, color: "bg-cyan-400" },
    {
      type: "Reconnaissance",
      count: 47,
      percentage: 30,
      color: "bg-purple-400",
    },
    {
      type: "Asset Management",
      count: 45,
      percentage: 29,
      color: "bg-blue-400",
    },
  ],
  successMetrics: [
    { label: "Completed", value: 147, color: "text-green-400" },
    { label: "In Progress", value: 8, color: "text-yellow-400" },
    { label: "Failed", value: 1, color: "text-red-400" },
  ],
  systemPerformance: [
    { name: "CPU Load", value: 42, color: "bg-blue-400" },
    { name: "Memory", value: 67, color: "bg-blue-400" },
    { name: "Storage", value: 55, color: "bg-blue-400" },
    { name: "Network", value: 89, color: "bg-blue-400" },
  ],
  networkStats: [
    { label: "Uptime", value: "99.99%" },
    { label: "Response Time", value: "124ms" },
    { label: "Active Nodes", value: "1,247" },
    { label: "Data Transfer", value: "1.2 PB/day" },
  ],
};

// Componentes otimizados e reutilizáveis
const MetricItem = memo<{ metric: StatusMetric }>(({ metric }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-blue-300">{metric.label}</span>
    {metric.trend ? (
      <div className="flex items-center space-x-2">
        <span className="dark:text-blue-100 text-slate-800">
          {metric.value}
        </span>
        <span className={metric.color}>{metric.trend}</span>
      </div>
    ) : (
      <span className={metric.color || "dark:text-blue-100 text-slate-800"}>
        {metric.value}
      </span>
    )}
  </div>
));

const ThreatCard = memo<{
  title: string;
  threats: ThreatItem[];
  colorClass: string;
}>(({ title, threats, colorClass }) => (
  <Card className="dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60">
    <CardContent className="p-4">
      <h4 className={`text-sm font-medium ${colorClass}`}>{title}</h4>
      <div className="mt-2 space-y-2 text-sm">
        {threats.map((threat, index) => (
          <div
            key={index}
            className={`rounded border px-2 py-1 ${
              colorClass.includes("red")
                ? "border-red-900/50 bg-red-950/20"
                : colorClass.includes("orange")
                ? "border-orange-900/50 bg-orange-950/20"
                : "border-yellow-900/50 bg-yellow-950/20"
            }`}
          >
            <p className={`font-medium ${colorClass}`}>{threat.name}</p>
            <p className={colorClass.replace("400", "300")}>
              {threat.description}
            </p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
));

const ProgressBar = memo<{ operation: OperationMetric }>(({ operation }) => (
  <div key={operation.type}>
    <div className="mb-1 flex items-center justify-between text-xs">
      <span className="text-blue-300">{operation.type}</span>
      <span className={operation.color.replace("bg-", "text-")}>
        {operation.count} ops
      </span>
    </div>
    <div className="h-1.5 rounded-full bg-blue-950">
      <div
        className={`h-full rounded-full ${operation.color}`}
        style={{ width: `${operation.percentage}%` }}
      />
    </div>
  </div>
));

const SystemMetricBar = memo<{ metric: SystemMetric }>(({ metric }) => (
  <div className="space-y-1">
    <p className="text-sm text-blue-300">{metric.name}</p>
    <div className="h-1.5 rounded-full bg-blue-950">
      <div
        className={`h-full rounded-full ${metric.color}`}
        style={{ width: `${metric.value}%` }}
      />
    </div>
    <p className="text-xs text-blue-400">{metric.value}%</p>
  </div>
));

// Componente principal otimizado
const GalacticStatusReportDialog = memo<{
  showReport: boolean;
  setShowReport: (showReport: boolean) => void;
}>(({ showReport, setShowReport }) => {
  // Memoização de cálculos complexos
  const successRate = useMemo(() => {
    const total = mockData.successMetrics.reduce(
      (sum, metric) =>
        sum + (typeof metric.value === "number" ? metric.value : 0),
      0
    );
    const completed =
      mockData.successMetrics.find((m) => m.label === "Completed")?.value || 0;
    return (((completed as number) / total) * 100).toFixed(1);
  }, []);

  const cardClasses =
    "dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60";
  const sectionHeaderClasses =
    "flex items-center text-lg font-semibold dark:text-blue-100 text-slate-800";
  const cardTitleClasses =
    "text-sm font-medium dark:text-blue-100 text-slate-800";

  return (
    <Dialog open={showReport} onOpenChange={setShowReport}>
      <DialogContent className="!max-w-6xl border-blue-900/50 dark:bg-blue-950/90 bg-white/75 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold dark:text-blue-100 text-slate-800">
            Galactic Status Report
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[450px]">
          <div className="grid gap-5 pr-5">
            {/* Council Space */}
            <section className="space-y-4">
              <h3 className={sectionHeaderClasses}>
                <Shield className="mr-2 h-5 w-5 text-cyan-400" />
                Council Space Analysis
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className={cardClasses}>
                  <CardContent className="p-4">
                    <h4 className={cardTitleClasses}>Territory Status</h4>
                    <div className="mt-2 space-y-2">
                      {mockData.territoryStatus.map((status, index) => (
                        <MetricItem key={index} metric={status} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className={cardClasses}>
                  <CardContent className="p-4">
                    <h4 className={cardTitleClasses}>Stability Metrics</h4>
                    <div className="mt-2 space-y-2">
                      {mockData.stabilityMetrics.map((metric, index) => (
                        <MetricItem key={index} metric={metric} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Threat Analysis */}
            <section className="space-y-4">
              <h3 className={sectionHeaderClasses}>
                <Target className="mr-2 h-5 w-5 text-cyan-400" />
                Detailed Threat Analysis
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <ThreatCard
                  title="Omega Level Threats"
                  threats={mockData.threats.omega}
                  colorClass="text-red-400"
                />
                <ThreatCard
                  title="Critical Level Threats"
                  threats={mockData.threats.critical}
                  colorClass="text-orange-400"
                />
                <ThreatCard
                  title="High Level Threats"
                  threats={mockData.threats.high}
                  colorClass="text-yellow-400"
                />
              </div>
            </section>

            {/* Operations Overview */}
            <section className="space-y-4">
              <h3 className={sectionHeaderClasses}>
                <Star className="mr-2 h-5 w-5 text-cyan-400" />
                Operations Overview
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className={cardClasses}>
                  <CardContent className="p-4">
                    <h4 className={cardTitleClasses}>Operation Types</h4>
                    <div className="mt-4 space-y-3">
                      {mockData.operations.map((operation, index) => (
                        <ProgressBar key={index} operation={operation} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className={cardClasses}>
                  <CardContent className="p-4">
                    <h4 className={cardTitleClasses}>Success Metrics</h4>
                    <div className="mt-2 space-y-2">
                      {mockData.successMetrics.map((metric, index) => (
                        <MetricItem key={index} metric={metric} />
                      ))}
                      <div className="mt-4 rounded border border-green-900/50 bg-green-950/20 px-3 py-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-green-300">
                            Overall Success Rate
                          </span>
                          <span className="text-green-400">{successRate}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Network Status */}
            <section className="space-y-4">
              <h3 className={sectionHeaderClasses}>
                <Globe2 className="mr-2 h-5 w-5 text-cyan-400" />
                Network Diagnostics
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className={cardClasses}>
                  <CardContent className="p-4">
                    <h4 className={cardTitleClasses}>System Performance</h4>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      {mockData.systemPerformance.map((metric, index) => (
                        <SystemMetricBar key={index} metric={metric} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className={cardClasses}>
                  <CardContent className="p-4">
                    <h4 className={cardTitleClasses}>Network Statistics</h4>
                    <div className="mt-2 space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {mockData.networkStats.map((stat, index) => (
                          <div key={index}>
                            <p className="text-blue-300">{stat.label}</p>
                            <p className="font-medium dark:text-blue-100 text-slate-800">
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="rounded border border-green-900/50 bg-green-950/20 px-3 py-2">
                        <div className="flex items-center text-sm">
                          <div className="mr-2 h-2 w-2 rounded-full bg-green-400" />
                          <span className="text-green-400">
                            All systems functioning within normal parameters
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
          <ScrollBar />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
});
export default GalacticStatusReportDialog;
