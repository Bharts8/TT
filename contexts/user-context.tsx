"use client"

import { createContext, useContext, type ReactNode } from "react"

export type User = {
  name: string
  email: string
  avatar: string
}

type UserContextType = {
  user: User
}

// Export the UserContext so it can be imported directly
export const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children, user }: { children: ReactNode; user: User }) {
  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
