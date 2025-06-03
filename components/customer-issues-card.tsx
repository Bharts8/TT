"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomerAvatar } from "./customer-avatar"
import { AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type CustomerIssue = {
  id: string
  name: string
  slug: string
  issue: "inactive" | "non-compliant" | "overused" | "underused"
  detail: string
  severity: "high" | "medium" | "low"
}

const customerIssues: CustomerIssue[] = [
  {
    id: "1",
    name: "Highwater Healthcare",
    slug: "highwater-healthcare",
    issue: "inactive",
    detail: "28 inactive licenses",
    severity: "high",
  },
  {
    id: "6",
    name: "Titan Telecom",
    slug: "titan-telecom",
    issue: "underused",
    detail: "35% of E5 licenses underused",
    severity: "medium",
  },
  {
    id: "4",
    name: "Oceanic Airlines",
    slug: "oceanic-airlines",
    issue: "non-compliant",
    detail: "Non-compliant E3 licensing",
    severity: "high",
  },
  {
    id: "3",
    name: "Nakatomi Trading",
    slug: "nakatomi-trading",
    issue: "overused",
    detail: "10 licenses over limit",
    severity: "medium",
  },
  {
    id: "5",
    name: "Apollo Accounting",
    slug: "apollo-accounting",
    issue: "inactive",
    detail: "7 inactive licenses",
    severity: "low",
  },
]

export function CustomerIssuesCard() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Issues to Resolve</CardTitle>
        <CardDescription>Improve utilization and reduce spend</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {customerIssues.map((customer) => (
            <div key={customer.id} className="flex items-center justify-between rounded-md border border-border p-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <CustomerAvatar customer={{ id: customer.id, name: customer.name }} className="h-8 w-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/customers/${customer.slug}`}
                      className="font-medium hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {customer.name}
                    </Link>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    {customer.issue === "inactive" && <AlertTriangle className="h-3 w-3 text-amber-500" />}
                    {customer.issue === "non-compliant" && <AlertTriangle className="h-3 w-3 text-red-500" />}
                    {customer.issue === "overused" && <AlertTriangle className="h-3 w-3 text-purple-500" />}
                    {customer.issue === "underused" && <AlertTriangle className="h-3 w-3 text-blue-500" />}
                    <span>{customer.detail}</span>
                  </div>
                </div>
              </div>
              <Link href={`/customers/${customer.slug}`} className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">View {customer.name}</span>
                </Button>
              </Link>
            </div>
          ))}
          <div className="pt-2 text-center">
            <Link href="/customers" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
              View all customers
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
