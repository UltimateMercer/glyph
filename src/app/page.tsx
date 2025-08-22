"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Users,
  Ship,
  AlertTriangle,
  MapPin,
  Zap,
  Shield,
  Globe,
  Rocket,
  Clock,
  Database,
  Activity,
  TrendingUp,
  Eye,
  ArrowRight,
  Globe2,
  Star,
  Target,
  Dna,
  Cpu,
  Divide,
  Info,
} from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { statsData } from "@/lib/stats-data";
import { StatCard } from "@/components/stat-card";
import { quickAccessData } from "@/lib/quick-access-data";
import { QuickAccessCard } from "@/components/quick-access-card";
import { overviewData } from "@/lib/overview-data";
import { OverviewCard } from "@/components/overview-card";
import GalacticStatusReportDialog from "@/components/galatic-status-report-dialog";
import { NotchedCard } from "@/components/notched-card";

export default function Dashboard() {
  const [showReport, setShowReport] = React.useState(false);
  // const modules = [
  //   {
  //     title: "Personnel Database",
  //     description: "Key individuals and their profiles",
  //     href: "/persons",
  //     icon: Users,
  //     count: persons.length,
  //     color: "from-blue-500 to-cyan-500",
  //     status: "Active",
  //   },
  //   {
  //     title: "Naval Registry",
  //     description: "Ships and fleet information",
  //     href: "/ships",
  //     icon: Ship,
  //     count: ships.length,
  //     color: "from-purple-500 to-pink-500",
  //     status: "Active",
  //   },
  //   {
  //     title: "Threat Assessment",
  //     description: "Security threats and hostile entities",
  //     href: "/threats",
  //     icon: AlertTriangle,
  //     count: threats.length,
  //     color: "from-red-500 to-orange-500",
  //     status: "Critical",
  //   },
  //   {
  //     title: "Galactic Locations",
  //     description: "Planets, stations, and points of interest",
  //     href: "/locations",
  //     icon: MapPin,
  //     count: 47,
  //     color: "from-yellow-500 to-orange-500",
  //     status: "Active",
  //   },
  //   {
  //     title: "Technology Archive",
  //     description: "Advanced technologies and research",
  //     href: "/technology",
  //     icon: Zap,
  //     count: 23,
  //     color: "from-cyan-500 to-blue-500",
  //     status: "Active",
  //   },
  //   {
  //     title: "Military Assets",
  //     description: "Military forces and strategic assets",
  //     href: "/military",
  //     icon: Shield,
  //     count: 31,
  //     color: "from-red-500 to-pink-500",
  //     status: "Active",
  //   },
  //   {
  //     title: "Galactic Species",
  //     description: "Known sentient species database",
  //     href: "/races",
  //     icon: Globe,
  //     count: 15,
  //     color: "from-purple-500 to-indigo-500",
  //     status: "Active",
  //   },
  //   {
  //     title: "Andromeda Initiative",
  //     description: "Andromeda galaxy exploration data",
  //     href: "/andromeda",
  //     icon: Rocket,
  //     count: 8,
  //     color: "from-indigo-500 to-purple-500",
  //     status: "Active",
  //   },
  //   {
  //     title: "Historical Timeline",
  //     description: "Historical events and chronology",
  //     href: "/timeline",
  //     icon: Clock,
  //     count: 156,
  //     color: "from-green-500 to-teal-500",
  //     status: "Active",
  //   },
  // ]

  // const recentUpdates = [
  //   {
  //     type: "Personnel",
  //     title: "Commander Shepard profile updated",
  //     time: "2 hours ago",
  //     priority: "High",
  //   },
  //   {
  //     type: "Threat",
  //     title: "New Reaper activity detected",
  //     time: "4 hours ago",
  //     priority: "Critical",
  //   },
  //   {
  //     type: "Naval",
  //     title: "SSV Normandy SR-2 status changed",
  //     time: "6 hours ago",
  //     priority: "Medium",
  //   },
  //   {
  //     type: "Intelligence",
  //     title: "Cerberus facility discovered",
  //     time: "8 hours ago",
  //     priority: "High",
  //   },
  //   {
  //     type: "Species",
  //     title: "Prothean artifact analysis complete",
  //     time: "12 hours ago",
  //     priority: "Medium",
  //   },
  //   {
  //     type: "Technology",
  //     title: "Mass relay network status update",
  //     time: "1 day ago",
  //     priority: "Low",
  //   },
  // ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Critical":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "High":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Low":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <>
      <div className="space-y-8">
        <section
          className={cn(
            "relative overflow-hidden rounded-lg px-6 py-16 backdrop-blur-sm hex-border shadow-lg border dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60"
          )}
        >
          <div className="relative z-10 max-w-3xl">
            <div
              className={cn(
                "inline-flex items-center rounded-md border px-3 py-1 text-sm dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-cyan-400 border-blue-200 bg-blue-50 text-blue-600"
              )}
            >
              <Database className="mr-2 h-4 w-4" />
              Glyph Terminal v2186.3
            </div>
            <h1
              className={cn(
                "mt-6 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl dark:text-blue-100 text-slate-900"
              )}
            >
              Information Assistant Interface
            </h1>
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg dark:text-blue-300 text-slate-600"
              )}
            >
              Welcome to Glyph, Dr. T'Soni's VI assistant interface. Access to
              comprehensive data analysis and intelligence reports across entire
              database.
              {/* {persons.length + ships.length + threats.length + 284} records. */}
            </p>
            <div className="mt-8 flex items-center space-x-6">
              <Button
                className="relative overflow-hidden bg-blue-600 text-white hover:bg-blue-700"
                asChild
              >
                <Link href="/races">
                  <span className="relative z-10 flex items-center">
                    Begin Research <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity hover:opacity-100" />
                </Link>
              </Button>
              <Link
                href="/timeline"
                className={cn(
                  "group flex items-center text-sm transition-colors dark:text-blue-400 dark:hover:text-blue-300 text-slate-600 hover:text-blue-600"
                )}
              >
                <span>View Timeline</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          {/* Decorative Elements */}
          <div
            className={cn(
              "absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l to-transparent dark:from-blue-600/10 from-blue-100/50"
            )}
          />
          <div
            className={cn(
              "absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] dark:bg-blue-600/20 bg-blue-200/30"
            )}
          />
        </section>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatCard
              key={`stat-${index}`} // Considere usar um ID único se disponível
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
              iconColor={stat.iconColor}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {quickAccessData.map((item) => (
            <QuickAccessCard
              key={item.id}
              href={item.href}
              title={item.title}
              description={item.description}
              icon={item.icon}
              statusIcon={item.statusIcon}
              statusText={item.statusText}
              statusColor={item.statusColor}
            />
          ))}
        </div>

        <section className="space-y-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-semibold tracking-tight dark:text-blue-100 text-slate-900">
                Galactic Overview
              </h2>
              <div className="h-px w-32 bg-gradient-to-r from-blue-900/50 to-transparent" />
            </div>
            <Button
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 hover:bg-transparent"
              onClick={() => setShowReport(true)}
            >
              <Database className="mr-2 h-4 w-4" />
              View Full Report
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {overviewData.map((cardData) => (
              <OverviewCard key={cardData.id} cardData={cardData} />
            ))}
          </div>
        </section>

        {/* Recent Updates */}
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-semibold tracking-tight dark:text-blue-100 text-slate-800">
              Recent Updates
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-900/50 to-transparent" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-blue-100">
                  <Shield className="h-5 w-5 text-cyan-400" />
                  <span>Security Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                    <div className="space-y-1">
                      <p className="text-sm text-blue-300">
                        Multiple breaches detected in Terminus Systems
                      </p>
                      <p className="text-xs text-blue-400">2 hours ago</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <div className="space-y-1">
                      <p className="text-sm text-blue-300">
                        Increased mercenary activity near Omega
                      </p>
                      <p className="text-xs text-blue-400">6 hours ago</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <div className="space-y-1">
                      <p className="text-sm text-blue-300">
                        New security protocols implemented
                      </p>
                      <p className="text-xs text-blue-400">12 hours ago</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-blue-100">
                  <Info className="h-5 w-5 text-cyan-400" />
                  <span>Intelligence Reports</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <div className="space-y-1">
                      <p className="text-sm text-blue-300">
                        New intel on Cerberus remnant activities
                      </p>
                      <p className="text-xs text-blue-400">
                        Updated 1 hour ago
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <div className="space-y-1">
                      <p className="text-sm text-blue-300">
                        Political shifts in Terminus Systems
                      </p>
                      <p className="text-xs text-blue-400">
                        Updated 4 hours ago
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <div className="space-y-1">
                      <p className="text-sm text-blue-300">
                        Analysis: Trade route vulnerabilities
                      </p>
                      <p className="text-xs text-blue-400">
                        Updated 8 hours ago
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-blue-100">
                  <Database className="h-5 w-5 text-cyan-400" />
                  <span>Database Updates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400" />
                    <div className="space-y-1">
                      <p className="text-sm text-blue-300">
                        Archaeological data from Ilos added
                      </p>
                      <p className="text-xs text-blue-400">Today at 14:23</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400" />
                    <div className="space-y-1">
                      <p className="text-sm text-blue-300">
                        Species profiles updated
                      </p>
                      <p className="text-xs text-blue-400">Today at 12:45</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400" />
                    <div className="space-y-1">
                      <p className="text-sm text-blue-300">
                        New threat assessments compiled
                      </p>
                      <p className="text-xs text-blue-400">Today at 10:30</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="">
          <NotchedCard
            position="bottom-right" // ✅ Type-safe: só aceita posições válidas
            size={8} // ✅ Type-safe: número
            className="bg-blue-400 px-4 py-2" // ✅ Type-safe: número
          >
            <h3 className="font-bold text-white">Card com Borda</h3>
          </NotchedCard>
          <NotchedCard
            position="bottom-right" // ✅ Type-safe: só aceita posições válidas
            size={20} // ✅ Type-safe: número
            borderColor="bg-blue-400" // ✅ Type-safe: string opcional
            borderWidth={2} // ✅ Type-safe: número
          >
            <h3 className="font-bold mb-2">Card com Borda</h3>
            <p className="text-gray-600">Fundo branco, borda vermelha</p>
          </NotchedCard>
        </div>

        <GalacticStatusReportDialog
          showReport={showReport}
          setShowReport={setShowReport}
        />
      </div>
    </>
  );
}
