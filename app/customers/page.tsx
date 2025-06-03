"use client"

import { AppSidebar } from "../../components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { CustomersTable } from "../../components/customers-table"
import { AppHeader } from "@/components/app-header"

export default function CustomersPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader breadcrumbs={[{ label: "Customers", isCurrentPage: true }]} />

        <div className="flex flex-1 flex-col gap-4 overflow-auto p-4">
          <CustomersTable />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
