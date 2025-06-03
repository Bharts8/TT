"use client"

import type React from "react"

import { useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Array of background color classes in a non-sequential order
const backgroundColors = [
  "bg-blue-600", // 1
  "bg-amber-600", // 2
  "bg-purple-600", // 3
  "bg-green-600", // 4
  "bg-rose-600", // 5
  "bg-cyan-600", // 6
  "bg-orange-600", // 7
  "bg-indigo-600", // 8
  "bg-emerald-600", // 9
  "bg-pink-600", // 10
  "bg-sky-600", // 11
  "bg-red-600", // 12
  "bg-violet-600", // 13
  "bg-lime-600", // 14
  "bg-fuchsia-600", // 15
  "bg-teal-600", // 16
  "bg-yellow-600", // 17
  "bg-slate-600", // 18
  "bg-gray-600", // 19
  "bg-zinc-600", // 20
  "bg-neutral-600", // 21
  "bg-stone-600", // 22
]

// Text color for all avatars
const textColor = "text-white"

interface CustomerAvatarProps extends React.ComponentPropsWithoutRef<typeof Avatar> {
  customer: {
    name: string
    id: string
    logo?: string
  }
  fallbackClassName?: string
}

export function CustomerAvatar({ customer, fallbackClassName, className, ...props }: CustomerAvatarProps) {
  // Generate initials from customer name (maximum 2 characters)
  const initials = useMemo(() => {
    const nameParts = customer.name.split(" ").filter(Boolean)

    if (nameParts.length === 0) return "??"

    if (nameParts.length === 1) {
      // If only one word, take up to first two characters
      return nameParts[0].substring(0, 2).toUpperCase()
    }

    // Otherwise take first character of first two words
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase()
  }, [customer.name])

  // Generate a "random" but consistent color based on the customer's ID
  const colorIndex = useMemo(() => {
    let hash = 0
    const str = customer.id || customer.name
    // Use a different prime number multiplier for more "random" distribution
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) % 997
    }
    return Math.abs(hash) % backgroundColors.length
  }, [customer.id, customer.name])

  const backgroundColor = backgroundColors[colorIndex]

  return (
    <Avatar className={cn("rounded-md", className)} {...props}>
      {/* Only render AvatarImage if there's a valid logo URL */}
      {customer.logo && customer.logo !== "/placeholder.svg" ? (
        <AvatarImage src={customer.logo || "/placeholder.svg"} alt={customer.name} className="rounded-md" />
      ) : null}
      <AvatarFallback className={cn(backgroundColor, textColor, "rounded-md", fallbackClassName)}>
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}
