import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AlgorithmAnimation from "@/components/algorithm-animation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master CPU Scheduling Algorithms
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Interactive visualizations to help you understand FCFS, SJF, Round Robin, and Priority Scheduling
                    algorithms.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1" asChild>
                    <Link href="/comparison">
                      Start Learning <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#algorithms">View Demos</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg border bg-background p-2">
                  <AlgorithmAnimation type="overview" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="algorithms" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">CPU Scheduling Algorithms</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the different CPU scheduling algorithms and understand how they work.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>First Come First Serve</CardTitle>
                  <CardDescription>The simplest scheduling algorithm</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    Processes are executed in the order they arrive in the ready queue.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/fcfs">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Shortest Job First</CardTitle>
                  <CardDescription>Optimal average waiting time</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    Processes with the shortest burst time are executed first.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/sjf">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Round Robin</CardTitle>
                  <CardDescription>Time-sharing systems</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    Each process is assigned a fixed time slice in a cyclic way.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/round-robin">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Priority Scheduling</CardTitle>
                  <CardDescription>Based on process priority</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">Processes with higher priority are executed first.</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/priority">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compare All Algorithms</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how different scheduling algorithms perform under various conditions.
                </p>
              </div>
              <Button size="lg" className="mt-4" asChild>
                <Link href="/comparison">View Comparison</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to master CPU scheduling?</h2>
                <p className="max-w-[600px] md:text-xl">
                  Start learning with our interactive visualizations and comprehensive tutorials.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1" asChild>
                  <Link href="/comparison">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground" asChild>
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

