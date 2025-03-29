"use client"

import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Project Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CPU Scheduling Visualizer</h3>
            <p className="text-sm text-muted-foreground">
              An interactive tool for learning and understanding CPU scheduling algorithms in operating systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/fcfs" className="text-sm text-muted-foreground hover:text-primary">
                  First Come First Serve
                </Link>
              </li>
              <li>
                <Link href="/sjf" className="text-sm text-muted-foreground hover:text-primary">
                  Shortest Job First
                </Link>
              </li>
              <li>
                <Link href="/round-robin" className="text-sm text-muted-foreground hover:text-primary">
                  Round Robin
                </Link>
              </li>
              <li>
                <Link href="/priority" className="text-sm text-muted-foreground hover:text-primary">
                  Priority Scheduling
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/comparison" className="text-sm text-muted-foreground hover:text-primary">
                  Algorithm Comparison
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Schezwan-rice/cpu-scheduling-sim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Learn More
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Schezwan-rice/cpu-scheduling-sim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CPU Scheduling Visualizer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

