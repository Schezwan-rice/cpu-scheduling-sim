import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AlgorithmAnimation from "@/components/algorithm-animation"

export default function RoundRobinPage() {
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Round Robin Scheduling</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    A preemptive scheduling algorithm that allocates CPU time in fixed time slices to each process in a
                    circular queue.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" size="lg" className="gap-1" asChild>
                    <Link href="/sjf">
                      <ArrowLeft className="h-4 w-4" /> Previous Algorithm
                    </Link>
                  </Button>
                  <Button size="lg" className="gap-1" asChild>
                    <Link href="/priority">
                      Next Algorithm <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg border bg-background p-2">
                  <AlgorithmAnimation type="round-robin" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">How Round Robin Works</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Round Robin is a CPU scheduling algorithm specifically designed for time-sharing systems. Key
                  characteristics include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>Each process is assigned a fixed time slice called a quantum or time slice</li>
                  <li>Processes are executed in a circular queue</li>
                  <li>
                    If a process doesn't complete within its time quantum, it's preempted and moved to the back of the
                    queue
                  </li>
                  <li>The algorithm continues until all processes are completed</li>
                </ul>
              </div>

              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-bold">Example</h3>
                  <p className="text-muted-foreground">
                    Consider the following processes with their arrival times and burst times, and a time quantum of 2
                    units:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Process</th>
                          <th className="text-left p-2">Arrival Time</th>
                          <th className="text-left p-2">Burst Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">P1</td>
                          <td className="p-2">0</td>
                          <td className="p-2">5</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">P2</td>
                          <td className="p-2">1</td>
                          <td className="p-2">3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">P3</td>
                          <td className="p-2">2</td>
                          <td className="p-2">8</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">P4</td>
                          <td className="p-2">3</td>
                          <td className="p-2">2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground">
                    With a time quantum of 2, the execution order would be: P1 → P2 → P3 → P4 → P1 → P2 → P3 → P3 → P3
                  </p>
                  <div className="relative h-12 bg-muted rounded-md overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[2/18*100%] bg-red-500 flex items-center justify-center text-white text-sm">
                      P1
                    </div>
                    <div className="absolute top-0 left-[2/18*100%] h-full w-[2/18*100%] bg-blue-500 flex items-center justify-center text-white text-sm">
                      P2
                    </div>
                    <div className="absolute top-0 left-[4/18*100%] h-full w-[2/18*100%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3
                    </div>
                    <div className="absolute top-0 left-[6/18*100%] h-full w-[2/18*100%] bg-yellow-500 flex items-center justify-center text-white text-sm">
                      P4
                    </div>
                    <div className="absolute top-0 left-[8/18*100%] h-full w-[2/18*100%] bg-red-500 flex items-center justify-center text-white text-sm">
                      P1
                    </div>
                    <div className="absolute top-0 left-[10/18*100%] h-full w-[1/18*100%] bg-blue-500 flex items-center justify-center text-white text-sm">
                      P2
                    </div>
                    <div className="absolute top-0 left-[11/18*100%] h-full w-[2/18*100%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3
                    </div>
                    <div className="absolute top-0 left-[13/18*100%] h-full w-[2/18*100%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3
                    </div>
                    <div className="absolute top-0 left-[15/18*100%] h-full w-[2/18*100%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong>Completion Times:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>P1: 10 (executed at 0-2 and 8-10, completes at t=10)</li>
                      <li>P2: 11 (executed at 2-4 and 10-11, completes at t=11)</li>
                      <li>P3: 17 (executed at 4-6, 11-13, 13-15, and 15-17, completes at t=17)</li>
                      <li>P4: 8 (executed at 6-8, completes at t=8)</li>
                    </ul>
                    <p className="text-muted-foreground">
                      <strong>Waiting Time:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>P1: (10 - 0 - 5) = 5 units</li>
                      <li>P2: (11 - 1 - 3) = 7 units</li>
                      <li>P3: (17 - 2 - 8) = 7 units</li>
                      <li>P4: (8 - 3 - 2) = 3 units</li>
                    </ul>
                    <p className="text-muted-foreground">
                      <strong>Average Waiting Time:</strong> (5 + 7 + 7 + 3) / 4 = 5.5 time units
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Time Quantum Selection</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  The selection of the time quantum is critical in Round Robin scheduling:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>
                    <strong>Too large:</strong> Round Robin degenerates to FCFS
                  </li>
                  <li>
                    <strong>Too small:</strong> Excessive context switching overhead
                  </li>
                  <li>
                    <strong>Optimal:</strong> Typically slightly larger than the time required for a typical interaction
                  </li>
                </ul>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  A rule of thumb is that 80% of CPU bursts should be shorter than the time quantum.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Advantages and Disadvantages</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-6">
                    <CardContent className="p-0 space-y-4">
                      <h3 className="text-xl font-bold text-green-600">Advantages</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Fair allocation of CPU time to all processes</li>
                        <li>Good for time-sharing systems</li>
                        <li>Low response time for short processes</li>
                        <li>No starvation as every process gets a turn</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0 space-y-4">
                      <h3 className="text-xl font-bold text-red-600">Disadvantages</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>High context switching overhead</li>
                        <li>Average waiting time can be higher than SJF</li>
                        <li>Performance heavily depends on time quantum selection</li>
                        <li>Not optimal for processes with widely varying CPU burst times</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Real-world Applications</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">Round Robin is widely used in:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>Time-sharing operating systems</li>
                  <li>Network schedulers for packet scheduling</li>
                  <li>Web servers for handling multiple client requests</li>
                  <li>Real-time systems with soft deadlines</li>
                  <li>As a component in multi-level feedback queue schedulers</li>
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
                  <Link href="/priority">
                    <span>Priority Scheduling</span>
                    <span className="text-xs text-muted-foreground">Based on process importance</span>
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

