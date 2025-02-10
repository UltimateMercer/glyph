import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadow Broker Network",
  description: "The galaxy's most comprehensive intelligence database",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen text-blue-100">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden pl-16">
            <div className="container mx-auto px-4 py-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
