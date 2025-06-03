"use client"

import { AppSidebar } from "../../../components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Building, Mail, Phone, MapPin, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { AppHeader } from "@/components/app-header"
import { CustomerAvatar } from "@/components/customer-avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserLicenseDetails } from "@/components/user-license-details"

export default function CustomerPage() {
  const customer = {
    id: "1",
    name: "Highwater Healthcare",
    slug: "highwater-healthcare",
    licenses: {
      total: 215,
      active: 187,
      inactive: 28,
      types: {
        e3: {
          total: 120,
          active: 105,
          inactive: 15,
          services: {
            exchange: { active: 105, inactive: 15 },
            teams: { active: 98, inactive: 22 },
            sharepoint: { active: 92, inactive: 28 },
            onedrive: { active: 102, inactive: 18 },
            word: { active: 105, inactive: 15 },
            excel: { active: 103, inactive: 17 },
            powerpoint: { active: 95, inactive: 25 },
          },
        },
        e5: {
          total: 25,
          active: 23,
          inactive: 2,
          services: {
            exchange: { active: 23, inactive: 2 },
            teams: { active: 23, inactive: 2 },
            sharepoint: { active: 21, inactive: 4 },
            onedrive: { active: 22, inactive: 3 },
            word: { active: 23, inactive: 2 },
            excel: { active: 23, inactive: 2 },
            powerpoint: { active: 20, inactive: 5 },
            powerbi: { active: 18, inactive: 7 },
          },
        },
        e1: {
          total: 60,
          active: 52,
          inactive: 8,
          services: {
            exchange: { active: 52, inactive: 8 },
            teams: { active: 50, inactive: 10 },
            sharepoint: { active: 45, inactive: 15 },
            onedrive: { active: 48, inactive: 12 },
          },
        },
        powerBi: {
          total: 10,
          active: 7,
          inactive: 3,
          services: {
            powerbi: { active: 7, inactive: 3 },
          },
        },
      },
    },
    spend: 12850,
    contact: {
      name: "Sarah Johnson",
      email: "sarah@highwaterhealthcare.com",
      phone: "(555) 123-4567",
      address: "123 Main St, Highwater, CA 94530",
    },
    recentActivity: [
      {
        date: "2023-05-01",
        action: "Added 5 Microsoft 365 E3 licenses",
        user: "David Jackson",
        type: "addition",
      },
      {
        date: "2023-04-15",
        action: "Renewed 120 Microsoft 365 E3 licenses",
        user: "Maria Rodriguez",
        type: "renewal",
      },
      {
        date: "2023-03-22",
        action: "Added 10 Office 365 E1 licenses",
        user: "David Jackson",
        type: "addition",
      },
      {
        date: "2023-02-10",
        action: "Upgraded 5 Office 365 E3 to Microsoft 365 E5",
        user: "David Jackson",
        type: "upgrade",
      },
    ],
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader
          breadcrumbs={[
            { label: "Customers", href: "/customers" },
            { label: customer.name, isCurrentPage: true },
          ]}
        />

        <div className="flex flex-1 flex-col gap-4 overflow-auto p-4">
          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>

            {/* Overview Tab Content */}
            <TabsContent value="overview" className="mt-4 space-y-4">
              <div className="space-y-4">
                {/* License Summary Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>License Summary</CardTitle>
                    <CardDescription>
                      {customer.licenses.total} total licenses with {customer.licenses.active} active (
                      {Math.round((customer.licenses.active / customer.licenses.total) * 100)}% utilization)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="overview">
                      <TabsList className="mb-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="usage">Usage</TabsTrigger>
                        <TabsTrigger value="inactive">Inactive</TabsTrigger>
                      </TabsList>
                      <TabsContent value="overview" className="space-y-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Microsoft 365 E3</span>
                              <span className="text-sm text-muted-foreground">
                                {customer.licenses.types.e3.active} / {customer.licenses.types.e3.total} active
                              </span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                              <div
                                className="h-full bg-brand-primary transition-all duration-300 ease-in-out"
                                style={{
                                  width: `${(customer.licenses.types.e3.active / customer.licenses.types.e3.total) * 100}%`,
                                }}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Microsoft 365 E5</span>
                              <span className="text-sm text-muted-foreground">
                                {customer.licenses.types.e5.active} / {customer.licenses.types.e5.total} active
                              </span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                              <div
                                className="h-full bg-brand-primary transition-all duration-300 ease-in-out"
                                style={{
                                  width: `${(customer.licenses.types.e5.active / customer.licenses.types.e5.total) * 100}%`,
                                }}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Office 365 E1</span>
                              <span className="text-sm text-muted-foreground">
                                {customer.licenses.types.e1.active} / {customer.licenses.types.e1.total} active
                              </span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                              <div
                                className="h-full bg-brand-primary transition-all duration-300 ease-in-out"
                                style={{
                                  width: `${(customer.licenses.types.e1.active / customer.licenses.types.e1.total) * 100}%`,
                                }}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Power BI Pro</span>
                              <span className="text-sm text-muted-foreground">
                                {customer.licenses.types.powerBi.active} / {customer.licenses.types.powerBi.total}{" "}
                                active
                              </span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                              <div
                                className="h-full bg-brand-primary transition-all duration-300 ease-in-out"
                                style={{
                                  width: `${(customer.licenses.types.powerBi.active / customer.licenses.types.powerBi.total) * 100}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="usage">
                        <div className="space-y-4">
                          <div className="rounded-md border border-border">
                            <Table>
                              <TableHeader>
                                <TableRow className="border-border hover:bg-muted/50">
                                  <TableHead>Service</TableHead>
                                  <TableHead className="text-center">E3 Usage</TableHead>
                                  <TableHead className="text-center">E5 Usage</TableHead>
                                  <TableHead className="text-center">E1 Usage</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                <TableRow className="border-border hover:bg-muted/50">
                                  <TableCell className="font-medium">Exchange</TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e3.services.exchange.active /
                                        customer.licenses.types.e3.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e5.services.exchange.active /
                                        customer.licenses.types.e5.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e1.services.exchange.active /
                                        customer.licenses.types.e1.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                </TableRow>
                                <TableRow className="border-border hover:bg-muted/50">
                                  <TableCell className="font-medium">Teams</TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e3.services.teams.active /
                                        customer.licenses.types.e3.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e5.services.teams.active /
                                        customer.licenses.types.e5.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e1.services.teams.active /
                                        customer.licenses.types.e1.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                </TableRow>
                                <TableRow className="border-border hover:bg-muted/50">
                                  <TableCell className="font-medium">SharePoint</TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e3.services.sharepoint.active /
                                        customer.licenses.types.e3.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e5.services.sharepoint.active /
                                        customer.licenses.types.e5.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e1.services.sharepoint.active /
                                        customer.licenses.types.e1.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                </TableRow>
                                <TableRow className="border-border hover:bg-muted/50">
                                  <TableCell className="font-medium">OneDrive</TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e3.services.onedrive.active /
                                        customer.licenses.types.e3.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e5.services.onedrive.active /
                                        customer.licenses.types.e5.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e1.services.onedrive.active /
                                        customer.licenses.types.e1.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                </TableRow>
                                <TableRow className="border-border hover:bg-muted/50">
                                  <TableCell className="font-medium">Word</TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e3.services.word.active /
                                        customer.licenses.types.e3.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e5.services.word.active /
                                        customer.licenses.types.e5.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">-</TableCell>
                                </TableRow>
                                <TableRow className="border-border hover:bg-muted/50">
                                  <TableCell className="font-medium">Excel</TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e3.services.excel.active /
                                        customer.licenses.types.e3.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e5.services.excel.active /
                                        customer.licenses.types.e5.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">-</TableCell>
                                </TableRow>
                                <TableRow className="border-border hover:bg-muted/50">
                                  <TableCell className="font-medium">PowerPoint</TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e3.services.powerpoint.active /
                                        customer.licenses.types.e3.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e5.services.powerpoint.active /
                                        customer.licenses.types.e5.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">-</TableCell>
                                </TableRow>
                                <TableRow className="border-border hover:bg-muted/50">
                                  <TableCell className="font-medium">Power BI</TableCell>
                                  <TableCell className="text-center">-</TableCell>
                                  <TableCell className="text-center">
                                    {Math.round(
                                      (customer.licenses.types.e5.services.powerbi.active /
                                        customer.licenses.types.e5.total) *
                                        100,
                                    )}
                                    %
                                  </TableCell>
                                  <TableCell className="text-center">-</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="inactive">
                        <div className="space-y-4">
                          <div className="rounded-md border border-border p-4">
                            <div className="mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5 text-amber-500" />
                              <h3 className="text-lg font-medium">Inactive Licenses</h3>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between rounded-md border border-border p-3">
                                <div>
                                  <p className="font-medium">Microsoft 365 E3</p>
                                  <p className="text-sm text-muted-foreground">15 inactive licenses</p>
                                </div>
                                <Button size="sm" variant="outline">
                                  Reassign
                                </Button>
                              </div>

                              <div className="flex items-center justify-between rounded-md border border-border p-3">
                                <div>
                                  <p className="font-medium">Microsoft 365 E5</p>
                                  <p className="text-sm text-muted-foreground">2 inactive licenses</p>
                                </div>
                                <Button size="sm" variant="outline">
                                  Reassign
                                </Button>
                              </div>

                              <div className="flex items-center justify-between rounded-md border border-border p-3">
                                <div>
                                  <p className="font-medium">Office 365 E1</p>
                                  <p className="text-sm text-muted-foreground">8 inactive licenses</p>
                                </div>
                                <Button size="sm" variant="outline">
                                  Reassign
                                </Button>
                              </div>

                              <div className="flex items-center justify-between rounded-md border border-border p-3">
                                <div>
                                  <p className="font-medium">Power BI Pro</p>
                                  <p className="text-sm text-muted-foreground">3 inactive licenses</p>
                                </div>
                                <Button size="sm" variant="outline">
                                  Reassign
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Manage Licenses</Button>
                    <Button>Add License</Button>
                  </CardFooter>
                </Card>
              </div>

              {/* License Activity Card */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>License Activity</CardTitle>
                  <CardDescription>Recent license changes and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customer.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 rounded-lg border border-border p-3">
                        <div className="mt-0.5">
                          {activity.type === "addition" && (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                              <CheckCircle2 className="h-5 w-5" />
                            </div>
                          )}
                          {activity.type === "renewal" && (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                              <CheckCircle2 className="h-5 w-5" />
                            </div>
                          )}
                          {activity.type === "upgrade" && (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                              <CheckCircle2 className="h-5 w-5" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.action}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{activity.date}</span>
                            <span>•</span>
                            <span>{activity.user}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Tab Content */}
            <TabsContent value="users" className="mt-4">
              <UserLicenseDetails />
            </TabsContent>

            {/* Activity Tab Content */}
            <TabsContent value="activity" className="mt-4">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                  <CardDescription>All license and user activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] rounded-md border border-dashed border-border flex items-center justify-center">
                    <p className="text-muted-foreground">Activity log content will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Tab Content */}
            <TabsContent value="billing" className="mt-4">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                  <CardDescription>License costs and billing history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] rounded-md border border-dashed border-border flex items-center justify-center">
                    <p className="text-muted-foreground">Billing information will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Account Tab Content */}
            <TabsContent value="account" className="mt-4">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CustomerAvatar customer={customer} className="h-10 w-10" />
                    <div>
                      <CardTitle>{customer.name}</CardTitle>
                      <CardDescription>Customer ID: {customer.id}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span>{customer.contact.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{customer.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{customer.contact.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{customer.contact.address}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Edit Customer
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
