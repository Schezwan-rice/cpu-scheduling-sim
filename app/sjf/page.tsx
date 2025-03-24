import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import AlgorithmAnimation from "@/components/algorithm-animation"
import Footer from "@/components/footer"

export default function SJFPage() {
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shortest Job First (SJF)</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    A scheduling algorithm that prioritizes processes with the shortest burst time, minimizing average
                    waiting time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" size="lg" className="gap-1" asChild>
                    <Link href="/fcfs">
                      <ArrowLeft className="h-4 w-4" /> Previous Algorithm
                    </Link>
                  </Button>
                  <Button size="lg" className="gap-1" asChild>
                    <Link href="/round-robin">
                      Next Algorithm <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg border bg-background p-2">
                  <AlgorithmAnimation type="sjf" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">How SJF Works</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Shortest Job First (SJF) is a scheduling algorithm that selects the process with the smallest
                  execution time first. It comes in two variants:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>
                    <strong>Non-preemptive SJF:</strong> Once a process starts executing, it continues until completion.
                  </li>
                  <li>
                    <strong>Preemptive SJF (SRTF):</strong> If a new process arrives with a shorter burst time than the
                    remaining time of the current process, the CPU is preempted to the new process.
                  </li>
                </ul>
              </div>

              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-bold">Example</h3>
                  <p className="text-muted-foreground">
                    Consider the following processes with their arrival times and burst times:
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
                    <strong>Non-preemptive SJF:</strong> The execution order would be: P1 → P4 → P2 → P3
                  </p>
                  <div className="relative h-12 bg-muted rounded-md overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[5/18*100%] bg-red-500 flex items-center justify-center text-white text-sm">
                      P1 (0-5)
                    </div>
                    <div className="absolute top-0 left-[5/18*100%] h-full w-[2/18*100%] bg-yellow-500 flex items-center justify-center text-white text-sm">
                      P4 (5-7)
                    </div>
                    <div className="absolute top-0 left-[7/18*100%] h-full w-[3/18*100%] bg-blue-500 flex items-center justify-center text-white text-sm">
                      P2 (7-10)
                    </div>
                    <div className="absolute top-0 left-[10/18*100%] h-full w-[8/18*100%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3 (10-18)
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Preemptive SJF (SRTF):</strong> The execution would be more complex with preemptions when
                    shorter jobs arrive.
                  </p>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong>Waiting Time (Non-preemptive SJF):</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>P1: 0</li>
                      <li>P2: 6 (P1 + P4's burst time - P2's arrival time = 7 - 1 = 6)</li>
                      <li>P3: 8 (P1 + P4 + P2's burst time - P3's arrival time = 10 - 2 = 8)</li>
                      <li>P4: 2 (P1's burst time - P4's arrival time = 5 - 3 = 2)</li>
                    </ul>
                    <p className="text-muted-foreground">
                      <strong>Average Waiting Time:</strong> (0 + 6 + 8 + 2) / 4 = 4 time units
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Advantages and Disadvantages</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-6">
                    <CardContent className="p-0 space-y-4">
                      <h3 className="text-xl font-bold text-green-600">Advantages</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Provides optimal average waiting time among all scheduling algorithms</li>
                        <li>Reduces the average response time</li>
                        <li>Efficient for batch systems where job lengths are known</li>
                        <li>Minimizes the time processes spend waiting in the queue</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0 space-y-4">
                      <h3 className="text-xl font-bold text-red-600">Disadvantages</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Starvation of longer processes is possible</li>
                        <li>Difficult to predict the exact burst time of processes in advance</li>
                        <li>Not suitable for interactive systems where response time is critical</li>
                        <li>Overhead in estimating process burst times</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Implementation Challenges</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  The main challenge in implementing SJF is accurately predicting the burst time of processes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>
                    <strong>Exponential Averaging:</strong> Using past behavior to predict future burst times
                  </li>
                  <li>
                    <strong>Process History:</strong> Maintaining a history of previous executions
                  </li>
                  <li>
                    <strong>User Hints:</strong> Allowing users or applications to provide burst time estimates
                  </li>
                  <li>
                    <strong>Adaptive Techniques:</strong> Dynamically adjusting predictions based on actual execution
                    times
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Real-world Applications</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">SJF is used in various contexts:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>Batch processing systems where job lengths are known or can be estimated</li>
                  <li>As a component in multi-level feedback queue schedulers</li>
                  <li>In some database query optimizers to prioritize shorter queries</li>
                  <li>In job scheduling systems for high-performance computing</li>
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
                  <Link href="/round-robin">
                    <span>Round Robin</span>
                    <span className="text-xs text-muted-foreground">Fair CPU allocation</span>
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

