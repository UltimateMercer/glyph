import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
// import { ThemeProvider } from "./lib/theme-context"
// import { SidebarLayout } from "./components/sidebar"
// import { CommandMenuTrigger } from "./components/command-menu-trigger"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mass Effect Codex",
  description: "Comprehensive database of Mass Effect universe information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <AppSidebar />
          {/* <SidebarLayout> */}
          {/* <div className="mb-4">
              <CommandMenuTrigger />
            </div> */}
          <SidebarInset className="border dark:border-blue-900/50 dark:bg-blue-950/20 border-blue-200 bg-white/60 px-5 pt-2.5 pb-5">
            <div className="flex justify-end mb-4">
              <ThemeToggle />
            </div>
            {children}
          </SidebarInset>
          {/* </SidebarLayout> */}
        </Providers>
      </body>
    </html>
  );
}
