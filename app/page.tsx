/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Atom,
  Globe2,
  Rocket,
  Shield,
  Users,
  Database,
  AlertTriangle,
  Crosshair,
  Star,
  Target,
  Info,
} from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  const [showReport, setShowReport] = useState(false);
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden !rounded-lg border border-blue-900/50 bg-blue-950/20 px-6 py-16 backdrop-blur-sm hex-border">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-blue-900/50 bg-blue-900/20 px-3 py-1 text-sm text-cyan-400">
            <Database className="mr-2 h-4 w-4" />
            Glyph Terminal v2186.3
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tighter text-blue-100 sm:text-5xl xl:text-6xl">
            Information Assistant Interface
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-blue-300">
            Welcome to Glyph, Dr. T'Soni's VI assistant interface. Access to
            comprehensive data analysis and intelligence reports.
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
              className="group flex items-center text-sm text-blue-400 hover:text-blue-300"
            >
              <span>View Timeline</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      </section>

      {/* Quick Access Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/races">
          <Card className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-colors hover:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Species Database</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-300">
                Comprehensive information about known sapient species in the
                galaxy.
              </p>
              <div className="mt-4 flex items-center text-sm text-blue-400">
                <Database className="mr-2 h-4 w-4" />
                42 Species documented
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/timeline">
          <Card className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-colors hover:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>Historical Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-300">
                Timeline of major galactic events and conflicts throughout
                history.
              </p>
              <div className="mt-4 flex items-center text-sm text-blue-400">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Recent conflict detected
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="#">
          <Card className="group relative overflow-hidden border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-colors hover:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-100">
                <Atom className="h-5 w-5 text-blue-400" />
                <span>Technology</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-300">
                Advanced technological developments and scientific research.
              </p>
              <div className="mt-4 flex items-center text-sm text-blue-400">
                <Rocket className="mr-2 h-4 w-4" />
                New discoveries available
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Galactic Overview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-semibold tracking-tight text-blue-100">
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
          <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-blue-400">Council Space</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold text-blue-100">87%</p>
                    <p className="text-sm text-green-400">+2.3%</p>
                  </div>
                </div>
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-blue-300">Stability Index</span>
                  <span className="text-blue-400">87/100</span>
                </div>
                <div className="h-2 rounded-full bg-blue-950">
                  <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded bg-blue-900/20 px-2 py-1 text-center text-blue-300">
                    <p className="font-medium text-blue-100">48</p>
                    Systems Secure
                  </div>
                  <div className="rounded bg-blue-900/20 px-2 py-1 text-center text-blue-300">
                    <p className="font-medium text-blue-100">7</p>
                    Under Watch
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-blue-400">Known Threats</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold text-red-400">12</p>
                    <p className="text-sm text-red-300">Active</p>
                  </div>
                </div>
                <Target className="h-8 w-8 text-red-400" />
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-blue-300">Omega Level</span>
                    <span className="text-red-400">1</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-blue-950">
                    <div className="h-full w-[10%] rounded-full bg-red-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-blue-300">Critical Level</span>
                    <span className="text-orange-400">3</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-blue-950">
                    <div className="h-full w-[30%] rounded-full bg-orange-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-blue-300">High Level</span>
                    <span className="text-yellow-400">8</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-blue-950">
                    <div className="h-full w-[60%] rounded-full bg-yellow-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-blue-400">Active Operations</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold text-blue-100">156</p>
                    <p className="text-sm text-green-400">+12</p>
                  </div>
                </div>
                <Star className="h-8 w-8 text-blue-400" />
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-blue-300">Intelligence</span>
                  </div>
                  <span className="font-medium text-blue-100">64</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-purple-400" />
                    <span className="text-blue-300">Reconnaissance</span>
                  </div>
                  <span className="font-medium text-blue-100">47</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-blue-400" />
                    <span className="text-blue-300">Asset Management</span>
                  </div>
                  <span className="font-medium text-blue-100">45</span>
                </div>
                <div className="mt-2 rounded border border-blue-900/50 bg-blue-900/20 px-3 py-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-300">Success Rate</span>
                    <span className="text-green-400">94.2%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-900/50 bg-blue-950/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-blue-400">Network Status</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold text-blue-100">98.2%</p>
                    <p className="text-sm text-green-400">Optimal</p>
                  </div>
                </div>
                <Globe2 className="h-8 w-8 text-blue-400" />
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded border border-green-500/20 bg-green-500/10 px-3 py-2">
                  <div className="flex items-center text-xs">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-green-400">
                      All systems operational
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="space-y-1">
                    <p className="text-blue-300">Uptime</p>
                    <p className="font-medium text-blue-100">99.99%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-blue-300">Response</p>
                    <p className="font-medium text-blue-100">124ms</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-blue-300">Load</p>
                    <p className="font-medium text-blue-100">42%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-blue-300">Memory</p>
                    <p className="font-medium text-blue-100">67%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold tracking-tight text-blue-100">
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
                    <p className="text-xs text-blue-400">Updated 1 hour ago</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <div className="space-y-1">
                    <p className="text-sm text-blue-300">
                      Political shifts in Terminus Systems
                    </p>
                    <p className="text-xs text-blue-400">Updated 4 hours ago</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <div className="space-y-1">
                    <p className="text-sm text-blue-300">
                      Analysis: Trade route vulnerabilities
                    </p>
                    <p className="text-xs text-blue-400">Updated 8 hours ago</p>
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
      <Dialog open={showReport} onOpenChange={setShowReport}>
        <DialogContent className="max-w-4xl border-blue-900/50 bg-blue-950/90 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-100">
              Galactic Status Report
            </DialogTitle>
          </DialogHeader>

          <ScrollArea className="h-[450px]">
            <div className="grid gap-6 pr-5">
              {/* Council Space */}
              <div className="space-y-4">
                <h3 className="flex items-center text-lg font-semibold text-blue-100">
                  <Shield className="mr-2 h-5 w-5 text-cyan-400" />
                  Council Space Analysis
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border-blue-900/50 bg-blue-950/20">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-medium text-blue-100">
                        Territory Status
                      </h4>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">Secure Systems</span>
                          <span className="text-blue-100">48</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">Under Watch</span>
                          <span className="text-yellow-400">7</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">Contested</span>
                          <span className="text-red-400">3</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-900/50 bg-blue-950/20">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-medium text-blue-100">
                        Stability Metrics
                      </h4>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">Political</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-100">92%</span>
                            <span className="text-green-400">↑2.1%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">Economic</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-100">87%</span>
                            <span className="text-green-400">↑1.4%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">Military</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-100">84%</span>
                            <span className="text-red-400">↓0.8%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Threat Analysis */}
              <div className="space-y-4">
                <h3 className="flex items-center text-lg font-semibold text-blue-100">
                  <Target className="mr-2 h-5 w-5 text-cyan-400" />
                  Detailed Threat Analysis
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Card className="border-blue-900/50 bg-blue-950/20">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-medium text-red-400">
                        Omega Level Threats
                      </h4>
                      <div className="mt-2 space-y-2 text-sm">
                        <div className="rounded border border-red-900/50 bg-red-950/20 px-2 py-1">
                          <p className="font-medium text-red-400">
                            Reaper Forces
                          </p>
                          <p className="text-red-300">
                            Multiple sectors affected
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-900/50 bg-blue-950/20">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-medium text-orange-400">
                        Critical Level Threats
                      </h4>
                      <div className="mt-2 space-y-2 text-sm">
                        <div className="rounded border border-orange-900/50 bg-orange-950/20 px-2 py-1">
                          <p className="font-medium text-orange-400">
                            Cerberus Operations
                          </p>
                          <p className="text-orange-300">
                            Multiple cells active
                          </p>
                        </div>
                        <div className="rounded border border-orange-900/50 bg-orange-950/20 px-2 py-1">
                          <p className="font-medium text-orange-400">
                            Terminus Pirates
                          </p>
                          <p className="text-orange-300">Increased activity</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-900/50 bg-blue-950/20">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-medium text-yellow-400">
                        High Level Threats
                      </h4>
                      <div className="mt-2 space-y-2 text-sm">
                        <div className="rounded border border-yellow-900/50 bg-yellow-950/20 px-2 py-1">
                          <p className="font-medium text-yellow-400">
                            Mercenary Groups
                          </p>
                          <p className="text-yellow-300">
                            8 major organizations
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Operations Overview */}
              <div className="space-y-4">
                <h3 className="flex items-center text-lg font-semibold text-blue-100">
                  <Star className="mr-2 h-5 w-5 text-cyan-400" />
                  Operations Overview
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border-blue-900/50 bg-blue-950/20">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-medium text-blue-100">
                        Operation Types
                      </h4>
                      <div className="mt-4 space-y-3">
                        <div>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="text-blue-300">Intelligence</span>
                            <span className="text-cyan-400">64 ops</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-blue-950">
                            <div className="h-full w-[41%] rounded-full bg-cyan-400" />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="text-blue-300">
                              Reconnaissance
                            </span>
                            <span className="text-purple-400">47 ops</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-blue-950">
                            <div className="h-full w-[30%] rounded-full bg-purple-400" />
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="text-blue-300">
                              Asset Management
                            </span>
                            <span className="text-blue-400">45 ops</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-blue-950">
                            <div className="h-full w-[29%] rounded-full bg-blue-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-900/50 bg-blue-950/20">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-medium text-blue-100">
                        Success Metrics
                      </h4>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">Completed</span>
                          <span className="text-green-400">147</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">In Progress</span>
                          <span className="text-yellow-400">8</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-300">Failed</span>
                          <span className="text-red-400">1Failed</span>
                          <span className="text-red-400">1</span>
                        </div>
                        <div className="mt-4 rounded border border-green-900/50 bg-green-950/20 px-3 py-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-green-300">
                              Overall Success Rate
                            </span>
                            <span className="text-green-400">94.2%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Network Status */}
              <div className="space-y-4">
                <h3 className="flex items-center text-lg font-semibold text-blue-100">
                  <Globe2 className="mr-2 h-5 w-5 text-cyan-400" />
                  Network Diagnostics
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border-blue-900/50 bg-blue-950/20">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-medium text-blue-100">
                        System Performance
                      </h4>
                      <div className="mt-2 grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-blue-300">CPU Load</p>
                          <div className="h-1.5 rounded-full bg-blue-950">
                            <div className="h-full w-[42%] rounded-full bg-blue-400" />
                          </div>
                          <p className="text-xs text-blue-400">42%</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-blue-300">Memory</p>
                          <div className="h-1.5 rounded-full bg-blue-950">
                            <div className="h-full w-[67%] rounded-full bg-blue-400" />
                          </div>
                          <p className="text-xs text-blue-400">67%</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-blue-300">Storage</p>
                          <div className="h-1.5 rounded-full bg-blue-950">
                            <div className="h-full w-[55%] rounded-full bg-blue-400" />
                          </div>
                          <p className="text-xs text-blue-400">55%</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-blue-300">Network</p>
                          <div className="h-1.5 rounded-full bg-blue-950">
                            <div className="h-full w-[89%] rounded-full bg-blue-400" />
                          </div>
                          <p className="text-xs text-blue-400">89%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-900/50 bg-blue-950/20">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-medium text-blue-100">
                        Network Statistics
                      </h4>
                      <div className="mt-2 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-blue-300">Uptime</p>
                            <p className="font-medium text-blue-100">99.99%</p>
                          </div>
                          <div>
                            <p className="text-blue-300">Response Time</p>
                            <p className="font-medium text-blue-100">124ms</p>
                          </div>
                          <div>
                            <p className="text-blue-300">Active Nodes</p>
                            <p className="font-medium text-blue-100">1,247</p>
                          </div>
                          <div>
                            <p className="text-blue-300">Data Transfer</p>
                            <p className="font-medium text-blue-100">
                              1.2 PB/day
                            </p>
                          </div>
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
              </div>
            </div>
            <ScrollBar />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
