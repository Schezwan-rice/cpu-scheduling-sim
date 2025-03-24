import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AlgorithmAnimation from "@/components/algorithm-animation"

export default function PriorityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary w-fit">
                  CPU Scheduling Algorithm
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Priority Scheduling</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    A scheduling algorithm that assigns CPU based on process priority, ensuring critical processes run
                    first.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" size="lg" className="gap-1" asChild>
                    <Link href="/round-robin">
                      <ArrowLeft className="h-4 w-4" /> Previous Algorithm
                    </Link>
                  </Button>
                  <Button size="lg" className="gap-1" asChild>
                    <Link href="/comparison">
                      Compare All <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg border bg-background p-2">
                  <AlgorithmAnimation type="priority" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">How Priority Scheduling Works</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Priority Scheduling is an algorithm where each process is assigned a priority value. Key
                  characteristics include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>Processes with higher priority are executed first</li>
                  <li>Can be preemptive or non-preemptive</li>
                  <li>In preemptive mode, a higher priority process can interrupt a running process</li>
                  <li>
                    In non-preemptive mode, the running process completes its CPU burst before a higher priority process
                    is scheduled
                  </li>
                </ul>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Priority can be determined by various factors:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>Time limits</li>
                  <li>Memory requirements</li>
                  <li>I/O to processor ratio</li>
                  <li>Funds being paid for computer use</li>
                  <li>Political factors</li>
                </ul>
              </div>

              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-bold">Example</h3>
                  <p className="text-muted-foreground">
                    Consider the following processes with their arrival times, burst times, and priorities (lower number
                    = higher priority):
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Process</th>
                          <th className="text-left p-2">Arrival Time</th>
                          <th className="text-left p-2">Burst Time</th>
                          <th className="text-left p-2">Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">P1</td>
                          <td className="p-2">0</td>
                          <td className="p-2">5</td>
                          <td className="p-2">3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">P2</td>
                          <td className="p-2">1</td>
                          <td className="p-2">3</td>
                          <td className="p-2">1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">P3</td>
                          <td className="p-2">2</td>
                          <td className="p-2">8</td>
                          <td className="p-2">4</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">P4</td>
                          <td className="p-2">3</td>
                          <td className="p-2">2</td>
                          <td className="p-2">2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Non-preemptive Priority:</strong> The execution order would be: P1 → P2 → P4 → P3
                  </p>
                  <div className="relative h-12 bg-muted rounded-md overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[5/18*100%] bg-red-500 flex items-center justify-center text-white text-sm">
                      P1 (0-5)
                    </div>
                    <div className="absolute top-0 left-[5/18*100%] h-full w-[3/18*100%] bg-blue-500 flex items-center justify-center text-white text-sm">
                      P2 (5-8)
                    </div>
                    <div className="absolute top-0 left-[8/18*100%] h-full w-[2/18*100%] bg-yellow-500 flex items-center justify-center text-white text-sm">
                      P4 (8-10)
                    </div>
                    <div className="absolute top-0 left-[10/18*100%] h-full w-[8/18*100%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3 (10-18)
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Preemptive Priority:</strong> P2 would preempt P1 at t=1, and P4 would preempt P3 at t=3.
                  </p>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong>Waiting Time (Non-preemptive):</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>P1: 0</li>
                      <li>P2: 4 (P1's burst time - P2's arrival time = 5 - 1 = 4)</li>
                      <li>P3: 8 (P1 + P2 + P4's burst time - P3's arrival time = 10 - 2 = 8)</li>
                      <li>P4: 5 (P1 + P2's burst time - P4's arrival time = 8 - 3 = 5)</li>
                    </ul>
                    <p className="text-muted-foreground">
                      <strong>Average Waiting Time:</strong> (0 + 4 + 8 + 5) / 4 = 4.25 time units
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Starvation and Aging</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  A major issue with Priority Scheduling is starvation:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>
                    <strong>Starvation:</strong> Low-priority processes may never execute if there's a continuous stream
                    of high-priority processes
                  </li>
                  <li>
                    <strong>Aging:</strong> A solution to starvation where the priority of a process is gradually
                    increased the longer it waits in the ready queue
                  </li>
                </ul>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Aging ensures that a low-priority process will eventually reach a high enough priority to be executed,
                  preventing indefinite blocking.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Advantages and Disadvantages</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-6">
                    <CardContent className="p-0 space-y-4">
                      <h3 className="text-xl font-bold text-green-600">Advantages</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Prioritizes important or time-critical processes</li>
                        <li>Flexible priority assignment based on various factors</li>
                        <li>Suitable for real-time systems</li>
                        <li>Can be adapted to different system requirements</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0 space-y-4">
                      <h3 className="text-xl font-bold text-red-600">Disadvantages</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Potential starvation of low-priority processes</li>
                        <li>Overhead in determining and managing priorities</li>
                        <li>Priority inversion problem</li>
                        <li>Complexity in implementing aging mechanisms</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Priority Inversion</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Priority inversion is a scenario where a high-priority process is indirectly preempted by a
                  low-priority process:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>A high-priority process needs a resource held by a low-priority process</li>
                  <li>The high-priority process is blocked waiting for the resource</li>
                  <li>A medium-priority process preempts the low-priority process</li>
                  <li>The high-priority process indirectly waits for the medium-priority process</li>
                </ul>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Solutions include priority inheritance and priority ceiling protocols.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Real-world Applications</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">Priority Scheduling is widely used in:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>Real-time operating systems</li>
                  <li>Military and defense systems</li>
                  <li>Industrial control systems</li>
                  <li>Medical equipment</li>
                  <li>Multimedia applications</li>
                  <li>As a component in multi-level feedback queue schedulers in general-purpose operating systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Continue Learning</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Explore other CPU scheduling algorithms to understand their differences and applications.
                </p>
              </div>
              <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl mt-8">
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                  <Link href="/fcfs">
                    <span>First Come First Serve</span>
                    <span className="text-xs text-muted-foreground">Simple and fair</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                  <Link href="/sjf">
                    <span>Shortest Job First</span>
                    <span className="text-xs text-muted-foreground">Optimal average waiting time</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                  <Link href="/round-robin">
                    <span>Round Robin</span>
                    <span className="text-xs text-muted-foreground">Fair CPU allocation</span>
                  </Link>
                </Button>
              </div>
              <Button className="mt-8" asChild>
                <Link href="/comparison">Compare All Algorithms</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

