import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      themes={["light", "dark", "book", "system"]}
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}
