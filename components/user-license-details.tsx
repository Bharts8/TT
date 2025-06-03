"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserLicensesTable } from "./user-licenses-table"
import { Button } from "@/components/ui/button"
import { Download, Upload, UserPlus } from "lucide-react"

export function UserLicenseDetails() {
  return (
    <Card className="border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>User License Management</CardTitle>
          <CardDescription>Manage Microsoft licenses assigned to individual users</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button size="sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all-users">
          <TabsList className="mb-4">
            <TabsTrigger value="all-users">All Users</TabsTrigger>
            <TabsTrigger value="e3-users">E3 Users</TabsTrigger>
            <TabsTrigger value="e5-users">E5 Users</TabsTrigger>
            <TabsTrigger value="e1-users">E1 Users</TabsTrigger>
            <TabsTrigger value="low-usage">Low Usage</TabsTrigger>
          </TabsList>
          <TabsContent value="all-users">
            <UserLicensesTable />
          </TabsContent>
          <TabsContent value="e3-users">
            <UserLicensesTable />
          </TabsContent>
          <TabsContent value="e5-users">
            <UserLicensesTable />
          </TabsContent>
          <TabsContent value="e1-users">
            <UserLicensesTable />
          </TabsContent>
          <TabsContent value="low-usage">
            <UserLicensesTable />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
