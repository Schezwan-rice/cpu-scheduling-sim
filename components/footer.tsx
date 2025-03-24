import Link from "next/link"
import { Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:justify-between md:py-12">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <Clock className="h-6 w-6" />
            <span className="text-lg font-bold">CPU Scheduler</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CPU Scheduler. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Algorithms</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/fcfs" className="text-muted-foreground hover:text-foreground">
                  FCFS
                </Link>
              </li>
              <li>
                <Link href="/sjf" className="text-muted-foreground hover:text-foreground">
                  SJF
                </Link>
              </li>
              <li>
                <Link href="/round-robin" className="text-muted-foreground hover:text-foreground">
                  Round Robin
                </Link>
              </li>
              <li>
                <Link href="/priority" className="text-muted-foreground hover:text-foreground">
                  Priority
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/comparison" className="text-muted-foreground hover:text-foreground">
                  Comparison
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

