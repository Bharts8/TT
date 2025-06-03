"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function LicenseUsageTable() {
  const licenseData = [
    {
      type: "Microsoft 365 E3",
      assigned: 685,
      active: 534,
      inactive: 151,
      utilization: "78%",
    },
    {
      type: "Microsoft 365 E5",
      assigned: 142,
      active: 131,
      inactive: 11,
      utilization: "92%",
    },
    {
      type: "Microsoft 365 Business Premium",
      assigned: 98,
      active: 64,
      inactive: 34,
      utilization: "65%",
    },
    {
      type: "Office 365 E1",
      assigned: 178,
      active: 148,
      inactive: 30,
      utilization: "83%",
    },
    {
      type: "Power BI Pro",
      assigned: 84,
      active: 45,
      inactive: 39,
      utilization: "54%",
    },
  ]

  return (
    <div className="max-h-[220px] overflow-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-muted/50">
            <TableHead className="w-[180px]">License Type</TableHead>
            <TableHead className="text-right">Assigned</TableHead>
            <TableHead className="text-right">Active</TableHead>
            <TableHead className="text-right">Inactive</TableHead>
            <TableHead className="text-right">Utilization</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {licenseData.map((license) => (
            <TableRow key={license.type} className="border-border hover:bg-muted/50">
              <TableCell className="font-medium">{license.type}</TableCell>
              <TableCell className="text-right">{license.assigned}</TableCell>
              <TableCell className="text-right">{license.active}</TableCell>
              <TableCell className="text-right">{license.inactive}</TableCell>
              <TableCell className="text-right">{license.utilization}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
