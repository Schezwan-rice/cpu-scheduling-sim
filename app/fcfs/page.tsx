import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AlgorithmAnimation from "@/components/algorithm-animation"

export default function FCFSPage() {
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">First Come First Serve (FCFS)</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    The simplest CPU scheduling algorithm where processes are executed in the order they arrive in the
                    ready queue.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" size="lg" className="gap-1" asChild>
                    <Link href="/comparison">
                      <ArrowLeft className="h-4 w-4" /> Compare Algorithms
                    </Link>
                  </Button>
                  <Button size="lg" className="gap-1" asChild>
                    <Link href="/sjf">
                      Next Algorithm <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg border bg-background p-2">
                  <AlgorithmAnimation type="fcfs" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">How FCFS Works</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  First Come First Serve (FCFS) is the simplest CPU scheduling algorithm. In this algorithm:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>Processes are executed in the order they arrive in the ready queue.</li>
                  <li>Once a process gets the CPU, it runs to completion without interruption.</li>
                  <li>It is a non-preemptive scheduling algorithm.</li>
                  <li>The process that arrives first is executed first.</li>
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
                  <p className="text-muted-foreground">In FCFS, the execution order would be: P1 → P2 → P3 → P4</p>
                  <div className="relative h-12 bg-muted rounded-md overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[5/18*100%] bg-red-500 flex items-center justify-center text-white text-sm">
                      P1 (0-5)
                    </div>
                    <div className="absolute top-0 left-[5/18*100%] h-full w-[3/18*100%] bg-blue-500 flex items-center justify-center text-white text-sm">
                      P2 (5-8)
                    </div>
                    <div className="absolute top-0 left-[8/18*100%] h-full w-[8/18*100%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3 (8-16)
                    </div>
                    <div className="absolute top-0 left-[16/18*100%] h-full w-[2/18*100%] bg-yellow-500 flex items-center justify-center text-white text-sm">
                      P4 (16-18)
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong>Waiting Time:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>P1: 0</li>
                      <li>P2: 4 (P1's burst time - P2's arrival time = 5 - 1 = 4)</li>
                      <li>P3: 6 (P1 + P2's burst time - P3's arrival time = 8 - 2 = 6)</li>
                      <li>P4: 13 (P1 + P2 + P3's burst time - P4's arrival time = 16 - 3 = 13)</li>
                    </ul>
                    <p className="text-muted-foreground">
                      <strong>Average Waiting Time:</strong> (0 + 4 + 6 + 13) / 4 = 5.75 time units
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
                        <li>Simple to understand and implement</li>
                        <li>No starvation as every process gets a chance to execute</li>
                        <li>No overhead of context switching</li>
                        <li>Fair for processes with similar burst times</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0 space-y-4">
                      <h3 className="text-xl font-bold text-red-600">Disadvantages</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Poor average waiting time</li>
                        <li>Convoy effect: short processes wait behind long ones</li>
                        <li>Not suitable for interactive systems</li>
                        <li>No priority consideration</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Real-world Applications</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  While FCFS is rarely used as the sole scheduling algorithm in modern operating systems, it is often
                  used:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed">
                  <li>As a component in multi-level scheduling algorithms</li>
                  <li>In batch processing systems where jobs are submitted and processed in sequence</li>
                  <li>In simple embedded systems with predictable workloads</li>
                  <li>In request handling for some types of servers where order of request is important</li>
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

