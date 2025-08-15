import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
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
          {/* <SidebarLayout> */}
          {/* <div className="mb-4">
              <CommandMenuTrigger />
            </div> */}
          {children}
          {/* </SidebarLayout> */}
        </Providers>
      </body>
    </html>
  );
}
