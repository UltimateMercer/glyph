"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  minimumLoadingTime?: number; // Time in milliseconds
}

export function LoadingScreen({
  minimumLoadingTime = 2000,
}: LoadingScreenProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, minimumLoadingTime);

    return () => clearTimeout(timer);
  }, [minimumLoadingTime]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-950/90 backdrop-blur-sm">
      <div className="relative">
        {/* Outer ring */}
        <div className="absolute -inset-16 animate-spin-slow rounded-full border-b-2 border-cyan-400/20" />
        <div className="absolute -inset-12 animate-spin-slow-reverse rounded-full border-r-2 border-cyan-400/20" />

        {/* Inner ring */}
        <div className="absolute -inset-8 animate-spin rounded-full border-t-2 border-cyan-400/40" />
        <div className="absolute -inset-4 animate-spin-reverse rounded-full border-l-2 border-cyan-400/40" />

        {/* Center */}
        <div className="relative h-16 w-16 rounded-full bg-blue-950">
          <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-400/20" />
          <div className="absolute inset-2 rounded-full border-2 border-cyan-400/50" />
          <div className="absolute inset-4 rounded-full border border-cyan-400/50" />
          <div className="absolute inset-6 rounded-full border border-cyan-400/50" />
        </div>

        {/* Loading text */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
          <p className="text-sm font-medium text-cyan-400">
            ACCESSING BROKER NETWORK
          </p>
          <p className="text-xs text-cyan-500">DECRYPTING DATA</p>
        </div>
      </div>
    </div>
  );
}
