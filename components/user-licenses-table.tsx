"use client"

import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { UserAvatar } from "./user-avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export type UserLicense = {
  id: string
  name: string
  email: string
  department: string
  title: string
  licenses: {
    e3: boolean
    e5: boolean
    businessPremium: boolean
    e1: boolean
    powerBi: boolean
  }
  lastActive: string
  usageScore: number
}

const data: UserLicense[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@highwaterhealthcare.com",
    department: "IT",
    title: "IT Director",
    licenses: {
      e3: false,
      e5: true,
      businessPremium: false,
      e1: false,
      powerBi: true,
    },
    lastActive: "2023-05-15",
    usageScore: 92,
  },
  {
    id: "2",
    name: "Emily Johnson",
    email: "emily.johnson@highwaterhealthcare.com",
    department: "HR",
    title: "HR Manager",
    licenses: {
      e3: true,
      e5: false,
      businessPremium: false,
      e1: false,
      powerBi: false,
    },
    lastActive: "2023-05-14",
    usageScore: 87,
  },
  {
    id: "3",
    name: "Michael Williams",
    email: "michael.williams@highwaterhealthcare.com",
    department: "Finance",
    title: "Financial Analyst",
    licenses: {
      e3: true,
      e5: false,
      businessPremium: false,
      e1: false,
      powerBi: true,
    },
    lastActive: "2023-05-15",
    usageScore: 95,
  },
  {
    id: "4",
    name: "Jessica Brown",
    email: "jessica.brown@highwaterhealthcare.com",
    department: "Marketing",
    title: "Marketing Specialist",
    licenses: {
      e3: true,
      e5: false,
      businessPremium: false,
      e1: false,
      powerBi: false,
    },
    lastActive: "2023-05-10",
    usageScore: 65,
  },
  {
    id: "5",
    name: "David Miller",
    email: "david.miller@highwaterhealthcare.com",
    department: "Operations",
    title: "Operations Manager",
    licenses: {
      e3: false,
      e5: true,
      businessPremium: false,
      e1: false,
      powerBi: true,
    },
    lastActive: "2023-05-15",
    usageScore: 88,
  },
  {
    id: "6",
    name: "Sarah Davis",
    email: "sarah.davis@highwaterhealthcare.com",
    department: "Customer Service",
    title: "Customer Service Rep",
    licenses: {
      e3: false,
      e5: false,
      businessPremium: false,
      e1: true,
      powerBi: false,
    },
    lastActive: "2023-05-14",
    usageScore: 78,
  },
  {
    id: "7",
    name: "Robert Wilson",
    email: "robert.wilson@highwaterhealthcare.com",
    department: "IT",
    title: "Systems Administrator",
    licenses: {
      e3: true,
      e5: false,
      businessPremium: false,
      e1: false,
      powerBi: false,
    },
    lastActive: "2023-05-15",
    usageScore: 91,
  },
  {
    id: "8",
    name: "Jennifer Taylor",
    email: "jennifer.taylor@highwaterhealthcare.com",
    department: "HR",
    title: "HR Specialist",
    licenses: {
      e3: false,
      e5: false,
      businessPremium: false,
      e1: true,
      powerBi: false,
    },
    lastActive: "2023-05-13",
    usageScore: 72,
  },
  {
    id: "9",
    name: "Thomas Anderson",
    email: "thomas.anderson@highwaterhealthcare.com",
    department: "Finance",
    title: "Accountant",
    licenses: {
      e3: true,
      e5: false,
      businessPremium: false,
      e1: false,
      powerBi: true,
    },
    lastActive: "2023-05-15",
    usageScore: 89,
  },
  {
    id: "10",
    name: "Lisa Martinez",
    email: "lisa.martinez@highwaterhealthcare.com",
    department: "Marketing",
    title: "Marketing Director",
    licenses: {
      e3: false,
      e5: true,
      businessPremium: false,
      e1: false,
      powerBi: true,
    },
    lastActive: "2023-05-15",
    usageScore: 94,
  },
  {
    id: "11",
    name: "Daniel Thompson",
    email: "daniel.thompson@highwaterhealthcare.com",
    department: "Operations",
    title: "Operations Analyst",
    licenses: {
      e3: true,
      e5: false,
      businessPremium: false,
      e1: false,
      powerBi: false,
    },
    lastActive: "2023-05-12",
    usageScore: 76,
  },
  {
    id: "12",
    name: "Patricia Garcia",
    email: "patricia.garcia@highwaterhealthcare.com",
    department: "Customer Service",
    title: "Customer Service Manager",
    licenses: {
      e3: true,
      e5: false,
      businessPremium: false,
      e1: false,
      powerBi: false,
    },
    lastActive: "2023-05-14",
    usageScore: 85,
  },
  {
    id: "13",
    name: "James Rodriguez",
    email: "james.rodriguez@highwaterhealthcare.com",
    department: "IT",
    title: "Network Engineer",
    licenses: {
      e3: true,
      e5: false,
      businessPremium: false,
      e1: false,
      powerBi: false,
    },
    lastActive: "2023-05-15",
    usageScore: 90,
  },
  {
    id: "14",
    name: "Nancy Lewis",
    email: "nancy.lewis@highwaterhealthcare.com",
    department: "HR",
    title: "Recruiter",
    licenses: {
      e3: false,
      e5: false,
      businessPremium: false,
      e1: true,
      powerBi: false,
    },
    lastActive: "2023-05-11",
    usageScore: 68,
  },
  {
    id: "15",
    name: "Christopher Lee",
    email: "christopher.lee@highwaterhealthcare.com",
    department: "Finance",
    title: "Finance Manager",
    licenses: {
      e3: false,
      e5: true,
      businessPremium: false,
      e1: false,
      powerBi: true,
    },
    lastActive: "2023-05-15",
    usageScore: 93,
  },
]

export function UserLicensesTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const columns: ColumnDef<UserLicense>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "User",
      cell: ({ row }) => {
        const user = {
          name: row.getValue("name"),
          email: row.original.email,
        }
        return (
          <div className="flex items-center gap-2">
            <UserAvatar user={user} className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground">{user.email}</span>
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: "department",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Department
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div>{row.getValue("department")}</div>,
    },
    {
      accessorKey: "title",
      header: "Job Title",
      cell: ({ row }) => <div>{row.getValue("title")}</div>,
    },
    {
      accessorKey: "licenses",
      header: "Assigned Licenses",
      cell: ({ row }) => {
        const licenses = row.original.licenses
        return (
          <div className="flex flex-wrap gap-1">
            {licenses.e3 && (
              <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900">
                E3
              </Badge>
            )}
            {licenses.e5 && (
              <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900">
                E5
              </Badge>
            )}
            {licenses.businessPremium && (
              <Badge variant="outline" className="bg-green-100 dark:bg-green-900">
                BP
              </Badge>
            )}
            {licenses.e1 && (
              <Badge variant="outline" className="bg-amber-100 dark:bg-amber-900">
                E1
              </Badge>
            )}
            {licenses.powerBi && (
              <Badge variant="outline" className="bg-rose-100 dark:bg-rose-900">
                BI
              </Badge>
            )}
          </div>
        )
      },
    },
    {
      accessorKey: "lastActive",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Last Active
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const date = new Date(row.getValue("lastActive"))
        const formatted = new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(date)
        return <div>{formatted}</div>
      },
    },
    {
      accessorKey: "usageScore",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Usage
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const score = row.getValue("usageScore") as number
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-12 rounded-full ${
                      score >= 80
                        ? "bg-green-500"
                        : score >= 60
                          ? "bg-amber-500"
                          : score >= 40
                            ? "bg-orange-500"
                            : "bg-red-500"
                    }`}
                  >
                    <div
                      className={`h-full rounded-full ${
                        score >= 80
                          ? "bg-green-700"
                          : score >= 60
                            ? "bg-amber-700"
                            : score >= 40
                              ? "bg-orange-700"
                              : "bg-red-700"
                      }`}
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                  <span className="text-sm">{score}%</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Usage score based on activity across Microsoft services</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const user = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>Copy user ID</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View user details</DropdownMenuItem>
              <DropdownMenuItem>Manage licenses</DropdownMenuItem>
              <DropdownMenuItem>View usage report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Filter users..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Department <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => table.getColumn("department")?.setFilterValue("")}>
                All Departments
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => table.getColumn("department")?.setFilterValue("IT")}>
                IT
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => table.getColumn("department")?.setFilterValue("HR")}>
                HR
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => table.getColumn("department")?.setFilterValue("Finance")}>
                Finance
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => table.getColumn("department")?.setFilterValue("Marketing")}>
                Marketing
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => table.getColumn("department")?.setFilterValue("Operations")}>
                Operations
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => table.getColumn("department")?.setFilterValue("Customer Service")}>
                Customer Service
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border border-border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-border hover:bg-muted/50">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="dark:text-foreground">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-border hover:bg-muted/50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="dark:text-foreground">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="border-border">
                <TableCell colSpan={columns.length} className="h-24 text-center dark:text-foreground">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
          selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
