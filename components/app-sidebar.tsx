"use client"
import { Sparkle, Home, Users, BarChart3, Settings, FileSpreadsheet, AlertCircle } from "lucide-react"
import { usePathname } from "next/navigation"

import { NavMain } from "./nav-main"
import { CompanyMenu } from "./company-menu"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"
import { CustomSidebarRail } from "./custom-sidebar-rail"

// This is sample data.
const data = {
  company: {
    name: "ZentraTech",
    logo: Sparkle,
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Customers",
      url: "/customers",
      icon: Users,
    },
    {
      title: "License Reports",
      url: "#",
      icon: FileSpreadsheet,
    },
    {
      title: "Usage Analytics",
      url: "#",
      icon: BarChart3,
    },
    {
      title: "Compliance",
      url: "#",
      icon: AlertCircle,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
}

export function AppSidebar() {
  const pathname = usePathname()

  // Update the active page based on the current path
  const navItems = data.navMain.map((item) => ({
    ...item,
    isActive: pathname.startsWith(item.url) && item.url !== "#",
  }))

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <CompanyMenu company={data.company} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter />
      <CustomSidebarRail />
    </Sidebar>
  )
}
