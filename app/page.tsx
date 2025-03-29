"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Clock, Layers, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AlgorithmAnimation from "@/components/algorithm-animation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className={`grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 max-w-6xl mx-auto transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col justify-center space-y-5">
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center lg:text-left">
                    Master CPU Scheduling Algorithms
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 leading-relaxed">
                    Interactive visualizations to help you understand FCFS, SJF, Round Robin, and Priority Scheduling
                    algorithms.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button size="lg" className="gap-2 transition-all hover:gap-3" asChild>
                    <Link href="/comparison">
                      Start Learning <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="group" asChild>
                    <Link href="#algorithms">
                      <span className="mr-2 group-hover:mr-3 transition-all">View Demos</span>
                      <BookOpen className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl border bg-background p-3 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 pointer-events-none z-10 rounded-xl"></div>
                  <AlgorithmAnimation type="overview" defaultSpeed="slow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="algorithms" className="w-full py-16 md:py-24 lg:py-32 scroll-mt-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-5 text-center mb-12">
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">CPU Scheduling Algorithms</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Explore the different CPU scheduling algorithms and understand how they work with our interactive visualizations.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              <Card className="flex flex-col h-full border-transparent hover:border-primary/50 transition-all hover:shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>First Come First Serve</CardTitle>
                  <CardDescription>The simplest scheduling algorithm</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <p className="text-muted-foreground mb-6">
                    Processes are executed in the order they arrive in the ready queue.
                  </p>
                  <Button variant="outline" className="w-full transition-all hover:bg-primary hover:text-primary-foreground" asChild>
                    <Link href="/fcfs">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full border-transparent hover:border-primary/50 transition-all hover:shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Shortest Job First</CardTitle>
                  <CardDescription>Optimal average waiting time</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <p className="text-muted-foreground mb-6">
                    Processes with the shortest burst time are executed first.
                  </p>
                  <Button variant="outline" className="w-full transition-all hover:bg-primary hover:text-primary-foreground" asChild>
                    <Link href="/sjf">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full border-transparent hover:border-primary/50 transition-all hover:shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Round Robin</CardTitle>
                  <CardDescription>Time-sharing systems</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <p className="text-muted-foreground mb-6">
                    Each process is assigned a fixed time slice in a cyclic way.
                  </p>
                  <Button variant="outline" className="w-full transition-all hover:bg-primary hover:text-primary-foreground" asChild>
                    <Link href="/round-robin">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full border-transparent hover:border-primary/50 transition-all hover:shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Priority Scheduling</CardTitle>
                  <CardDescription>Based on process priority</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <p className="text-muted-foreground mb-6">Processes with higher priority are executed first.</p>
                  <Button variant="outline" className="w-full transition-all hover:bg-primary hover:text-primary-foreground" asChild>
                    <Link href="/priority">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-5 text-center">
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compare All Algorithms</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  See how different scheduling algorithms perform under various conditions with our interactive comparison tools.
                </p>
              </div>
              <Button size="lg" className="mt-6 group" asChild>
                <Link href="/comparison">
                  <span className="mr-2 group-hover:mr-3 transition-all">View Comparison</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-5 text-center">
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to master CPU scheduling?</h2>
                <p className="md:text-xl mx-auto">
                  Start learning with our interactive visualizations and comprehensive tutorials designed to help you understand these essential concepts.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row mt-3">
                <Button size="lg" variant="secondary" className="group" asChild>
                  <Link href="/comparison">
                    <span className="mr-2 group-hover:mr-3 transition-all">Get Started</span> 
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/70 hover:border-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/fcfs">View First Algorithm</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

