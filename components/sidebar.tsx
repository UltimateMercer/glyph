"use client"

import { cn } from "@/lib/utils"
import { Monitor, Users, Clock, Star, Shield, Cpu, Globe2, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const routes = [
  {
    href: "/",
    label: "Dashboard",
    icon: Monitor,
  },
  {
    href: "/races",
    label: "Races",
    icon: Users,
  },
  {
    href: "/technology",
    label: "Technology",
    icon: Cpu,
  },
  {
    href: "/military",
    label: "Military",
    icon: Shield,
  },
  {
    href: "/locations",
    label: "Locations",
    icon: Globe2,
  },
  {
    href: "/timeline",
    label: "Timeline",
    icon: Clock,
  },
  {
    href: "/persons",
    label: "Persons",
    icon: Star,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <div className="fixed left-0 top-0 z-50 flex h-screen w-16 flex-col border-r border-blue-900/50 bg-blue-950/20 backdrop-blur-md">
        {/* Header */}
        <div className="flex h-16 items-center justify-center border-b border-blue-900/50">
          <Link href="/" className="relative group">
            <div className="relative">
              <Monitor className="h-6 w-6 text-cyan-400" />
              <div className="absolute -inset-0.5 animate-pulse rounded-full bg-cyan-400/20" />
            </div>
            <div className="absolute left-full ml-4 hidden rounded-md bg-blue-950/90 px-2 py-1 text-sm text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
              EDI Terminal
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-2">
          {routes.map((route) => {
            const isActive = pathname === route.href

            return (
              <Tooltip key={route.href} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={route.href}
                    className={cn(
                      "group flex items-center justify-center rounded-lg px-3 py-2 transition-all duration-200 hover:bg-blue-900/50",
                      isActive ? "bg-blue-900/50 text-cyan-400" : "text-blue-400 hover:text-cyan-300",
                    )}
                  >
                    <route.icon className="h-5 w-5 transition-all" />
                    {isActive && <div className="absolute inset-y-1 left-0 w-1 rounded-r-full bg-cyan-400" />}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="border-blue-900/50 bg-blue-950/90">
                  {route.label}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-blue-900/50 p-4">
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div className="flex justify-center text-cyan-600">
                <Shield className="h-4 w-4" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="border-blue-900/50 bg-blue-950/90">
              Shadow Broker Access
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  )
}

