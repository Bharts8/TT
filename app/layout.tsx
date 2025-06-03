import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { UserProvider } from "@/contexts/user-context"
import PasswordGate from "@/components/password-gate"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "License Management Portal",
  description: "Manage software licenses for your customers",
    generator: 'v0.dev'
}

// Define the default user data
const defaultUser = {
  name: "Robert Jones",
  email: "robert.jones@zentratech.com",
  avatar: "", // Empty string to ensure fallback is used
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <PasswordGate>
      <body className={`${inter.className} antialiased`}>
        {/* This div is just to ensure Tailwind doesn't purge our color classes */}
        <div className="hidden">
          <div className="bg-blue-600 bg-amber-600 bg-purple-600 bg-green-600 bg-rose-600 bg-cyan-600 bg-orange-600 bg-indigo-600 bg-emerald-600 bg-pink-600 bg-sky-600 bg-red-600 bg-violet-600 bg-lime-600 bg-fuchsia-600 bg-teal-600 bg-yellow-600 bg-slate-600 bg-gray-600 bg-zinc-600 bg-neutral-600 bg-stone-600"></div>
        </div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <UserProvider user={defaultUser}>{children}</UserProvider>
        </ThemeProvider>
      </body>
      </PasswordGate>
    </html>
  )
}
