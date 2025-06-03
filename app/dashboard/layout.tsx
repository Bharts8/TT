import type React from "react"
import { UserProvider } from "@/contexts/user-context"

// Define the default user data
const defaultUser = {
  name: "Robert Jones",
  email: "robert.jones@zentratech.com",
  avatar: "", // Empty string to ensure fallback is used
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <UserProvider user={defaultUser}>{children}</UserProvider>
}
