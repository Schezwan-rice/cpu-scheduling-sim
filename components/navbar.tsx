"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, MonitorSmartphone, LaptopIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "FCFS", href: "/fcfs" },
  { name: "SJF", href: "/sjf" },
  { name: "Round Robin", href: "/round-robin" },
  { name: "Priority", href: "/priority" },
  { name: "Comparison", href: "/comparison" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only showing theme toggle after mounting
  useEffect(() => {
    setMounted(true)
    // Set default theme to dark if not explicitly set
    if (!localStorage.getItem('theme')) {
      setTheme('dark')
    }
  }, [setTheme])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all duration-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group transition-all duration-300">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-xs font-bold text-primary-foreground">OS</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block tracking-tight group-hover:text-primary transition-colors">CPU Scheduling Visualizer</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-all hover:text-primary rounded-md overflow-hidden",
                pathname === item.href
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:translate-y-0"
                  : "text-muted-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:translate-y-2 hover:after:translate-y-0 after:transition-transform after:duration-300"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Theme toggle */}
        {mounted && (
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="w-9 h-9 rounded-full hover:bg-primary/10 hover:border-primary/50 transition-colors">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="animate-in fade-in-50 zoom-in-95 data-[side=bottom]:slide-in-from-top-2">
                <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center gap-2 cursor-pointer hover:bg-muted focus:bg-muted">
                  <Sun className="h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center gap-2 cursor-pointer hover:bg-muted focus:bg-muted">
                  <Moon className="h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center gap-2 cursor-pointer hover:bg-muted focus:bg-muted">
                  <LaptopIcon className="h-4 w-4" />
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 py-3 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-4 py-3 text-sm font-medium transition-all hover:bg-primary/10",
                  pathname === item.href
                    ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary pl-[calc(1rem-2px)]"
                    : "text-muted-foreground hover:text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

