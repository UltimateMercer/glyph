"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const { theme } = useTheme();

  const steps = [
    "Initializing Glyph Terminal...",
    "Connecting to Shadow Broker Network...",
    "Decrypting Intelligence Files...",
    "Loading Database Modules...",
    "Establishing Secure Connection...",
    "Ready for Operation",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return steps.length - 1;
        }
        return prev + 1;
      });
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [steps.length]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        theme === "dark" ? "bg-black" : "bg-white"
      )}
    >
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative">
            <div
              className={cn(
                "w-20 h-20 rounded-full border-4 border-t-transparent animate-spin",
                theme === "dark" ? "border-blue-400" : "border-blue-600"
              )}
            />
            <div
              className={cn(
                "absolute inset-0 w-20 h-20 rounded-full flex items-center justify-center",
                theme === "dark" ? "bg-blue-950/20" : "bg-blue-50/50"
              )}
            >
              <span
                className={cn(
                  "text-xl font-bold",
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                )}
              >
                ME
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1
            className={cn(
              "text-2xl font-bold",
              theme === "dark" ? "text-blue-100" : "text-slate-900"
            )}
          >
            Mass Effect Codex
          </h1>
          <p
            className={cn(
              "text-sm",
              theme === "dark" ? "text-blue-300" : "text-slate-600"
            )}
          >
            Shadow Broker Intelligence Network
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-4">
          <div
            className={cn(
              "w-full h-2 rounded-full overflow-hidden",
              theme === "dark" ? "bg-blue-900/30" : "bg-slate-200"
            )}
          >
            <div
              className={cn(
                "h-full transition-all duration-300 ease-out rounded-full",
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                  : "bg-gradient-to-r from-blue-600 to-cyan-500"
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs">
            <span
              className={cn(
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              )}
            >
              {progress}%
            </span>
            <span
              className={cn(
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              )}
            >
              Loading...
            </span>
          </div>
        </div>

        {/* Current Step */}
        <div className="space-y-2">
          <p
            className={cn(
              "text-sm font-medium",
              theme === "dark" ? "text-blue-200" : "text-slate-700"
            )}
          >
            {steps[currentStep]}
          </p>
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1 h-1 rounded-full animate-pulse",
                  theme === "dark" ? "bg-blue-400" : "bg-blue-600"
                )}
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="space-y-2">
          <div
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-xs",
              theme === "dark"
                ? "bg-green-900/20 text-green-400 border border-green-500/30"
                : "bg-green-50 text-green-700 border border-green-200"
            )}
          >
            <div
              className={cn(
                "w-2 h-2 rounded-full mr-2 animate-pulse",
                theme === "dark" ? "bg-green-400" : "bg-green-600"
              )}
            />
            System Online
          </div>
        </div>
      </div>
    </div>
  );
}
