import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

// Define font with subsets
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  title: "CPU Scheduling Algorithms",
  description: "Learn about FCFS, SJF, Round Robin, and Priority Scheduling algorithms with interactive visualizations",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-background">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'