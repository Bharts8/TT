"use client"

import * as React from "react"
import Link from "next/link"
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
import { ArrowUpDown, ChevronDown, MoreHorizontal, Trash } from "lucide-react"

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
import { CustomerAvatar } from "./customer-avatar"
import { Badge } from "@/components/ui/badge"

export type Customer = {
  id: string
  name: string
  slug: string
  licenses: {
    total: number
    active: number
    types: {
      e3: number
      e5: number
      businessPremium: number
      e1: number
      powerBi: number
    }
  }
  spend: number
}

const data: Customer[] = [
  {
    id: "1",
    name: "Highwater Healthcare",
    slug: "highwater-healthcare",
    licenses: {
      total: 215,
      active: 187,
      types: {
        e3: 120,
        e5: 25,
        businessPremium: 0,
        e1: 60,
        powerBi: 10,
      },
    },
    spend: 12850,
  },
  {
    id: "2",
    name: "Vertex Ventures",
    slug: "vertex-ventures",
    licenses: {
      total: 178,
      active: 165,
      types: {
        e3: 85,
        e5: 45,
        businessPremium: 0,
        e1: 38,
        powerBi: 10,
      },
    },
    spend: 14250,
  },
  {
    id: "3",
    name: "Nakatomi Trading",
    slug: "nakatomi-trading",
    licenses: {
      total: 92,
      active: 84,
      types: {
        e3: 65,
        e5: 12,
        businessPremium: 0,
        e1: 10,
        powerBi: 5,
      },
    },
    spend: 6900,
  },
  {
    id: "4",
    name: "Oceanic Airlines",
    slug: "oceanic-airlines",
    licenses: {
      total: 320,
      active: 298,
      types: {
        e3: 180,
        e5: 40,
        businessPremium: 0,
        e1: 80,
        powerBi: 20,
      },
    },
    spend: 21600,
  },
  {
    id: "5",
    name: "Apollo Accounting",
    slug: "apollo-accounting",
    licenses: {
      total: 75,
      active: 68,
      types: {
        e3: 45,
        e5: 0,
        businessPremium: 20,
        e1: 5,
        powerBi: 5,
      },
    },
    spend: 3800,
  },
  {
    id: "6",
    name: "Titan Telecom",
    slug: "titan-telecom",
    licenses: {
      total: 145,
      active: 132,
      types: {
        e3: 85,
        e5: 15,
        businessPremium: 0,
        e1: 35,
        powerBi: 10,
      },
    },
    spend: 9500,
  },
  {
    id: "7",
    name: "Frontier Foods",
    slug: "frontier-foods",
    licenses: {
      total: 68,
      active: 62,
      types: {
        e3: 35,
        e5: 0,
        businessPremium: 28,
        e1: 0,
        powerBi: 5,
      },
    },
    spend: 3050,
  },
  {
    id: "8",
    name: "Mercury Manufacturing",
    slug: "mercury-manufacturing",
    licenses: {
      total: 112,
      active: 98,
      types: {
        e3: 65,
        e5: 5,
        businessPremium: 0,
        e1: 32,
        powerBi: 10,
      },
    },
    spend: 6750,
  },
  {
    id: "9",
    name: "Zenith Zippers",
    slug: "zenith-zippers",
    licenses: {
      total: 42,
      active: 38,
      types: {
        e3: 25,
        e5: 0,
        businessPremium: 12,
        e1: 0,
        powerBi: 5,
      },
    },
    spend: 1950,
  },
  {
    id: "10",
    name: "Summit Software",
    slug: "summit-software",
    licenses: {
      total: 85,
      active: 82,
      types: {
        e3: 45,
        e5: 15,
        businessPremium: 0,
        e1: 15,
        powerBi: 10,
      },
    },
    spend: 7350,
  },
  {
    id: "11",
    name: "Levelly Logistics",
    slug: "levelly-logistics",
    licenses: {
      total: 56,
      active: 51,
      types: {
        e3: 35,
        e5: 0,
        businessPremium: 16,
        e1: 0,
        powerBi: 5,
      },
    },
    spend: 2900,
  },
  {
    id: "12",
    name: "Atlas Advertising",
    slug: "atlas-advertising",
    licenses: {
      total: 38,
      active: 32,
      types: {
        e3: 20,
        e5: 0,
        businessPremium: 12,
        e1: 0,
        powerBi: 6,
      },
    },
    spend: 1600,
  },
]

export const columns: ColumnDef<Customer>[] = [
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
    header: "Business Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <CustomerAvatar customer={row.original} className="h-8 w-8" />
        <Link
          href={`/customers/${row.original.slug}`}
          className="font-medium text-primary hover:underline dark:text-primary"
        >
          {row.getValue("name")}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "licenses",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          MS Licenses
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const licenses = row.original.licenses
      const utilization = Math.round((licenses.active / licenses.total) * 100)

      return (
        <div className="flex items-center gap-2">
          <div className="text-center font-medium">{licenses.total}</div>
          <Badge variant={utilization >= 90 ? "default" : utilization >= 70 ? "secondary" : "outline"} className="ml-2">
            {utilization}% active
          </Badge>
        </div>
      )
    },
  },
  {
    accessorKey: "licenseTypes",
    header: "License Types",
    cell: ({ row }) => {
      const types = row.original.licenses.types

      return (
        <div className="flex flex-wrap gap-1">
          {types.e3 > 0 && (
            <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900">
              E3: {types.e3}
            </Badge>
          )}
          {types.e5 > 0 && (
            <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900">
              E5: {types.e5}
            </Badge>
          )}
          {types.businessPremium > 0 && (
            <Badge variant="outline" className="bg-green-100 dark:bg-green-900">
              BP: {types.businessPremium}
            </Badge>
          )}
          {types.e1 > 0 && (
            <Badge variant="outline" className="bg-amber-100 dark:bg-amber-900">
              E1: {types.e1}
            </Badge>
          )}
          {types.powerBi > 0 && (
            <Badge variant="outline" className="bg-rose-100 dark:bg-rose-900">
              BI: {types.powerBi}
            </Badge>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "spend",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Monthly Spend
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("spend"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium dark:text-foreground">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customer = row.original

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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(customer.id)}>
              Copy customer ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={`/customers/${customer.slug}`}>View customer</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Manage licenses</DropdownMenuItem>
            <DropdownMenuItem>View usage reports</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function CustomersTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
            placeholder="Filter businesses..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          {table.getFilteredSelectedRowModel().rows.length > 0 && (
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Trash className="h-4 w-4" />
              Delete ({table.getFilteredSelectedRowModel().rows.length})
            </Button>
          )}
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
