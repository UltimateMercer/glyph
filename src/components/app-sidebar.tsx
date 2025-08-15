import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  AlertTriangle,
  Calendar,
  Clock,
  Cpu,
  Dna,
  Home,
  Inbox,
  MapPin,
  Rocket,
  Search,
  Settings,
  Shield,
  Ship,
  Users,
} from "lucide-react";

const items = [
  { name: "Dashboard", url: "/", icon: Home },
  { name: "Personnel", url: "/persons", icon: Users },
  { name: "Military", url: "/military", icon: Shield },
  { name: "Technology", url: "/technology", icon: Cpu },
  { name: "Locations", url: "/locations", icon: MapPin },
  { name: "Species", url: "/races", icon: Dna },
  { name: "Threats", url: "/threats", icon: AlertTriangle },
  { name: "Ships", url: "/ships", icon: Ship },
  { name: "Andromeda", url: "/andromeda", icon: Rocket },
  { name: "Timeline", url: "/timeline", icon: Clock },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
