"use client"

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
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-7xl mx-auto">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary w-fit mx-auto lg:mx-0">
                  CPU Scheduling Algorithm
                </div>
                <div className="space-y-2 text-center lg:text-left">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">First Come First Serve (FCFS)</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto lg:mx-0">
                    The simplest CPU scheduling algorithm where processes are executed in the order they arrive in the
                    ready queue.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
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
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl border bg-background p-3 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 pointer-events-none z-10 rounded-xl"></div>
                  <AlgorithmAnimation type="fcfs" defaultSpeed="slow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter">How FCFS Works</h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  First Come First Serve (FCFS) is the simplest CPU scheduling algorithm. In this algorithm:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  <li>Processes are executed in the order they arrive in the ready queue.</li>
                  <li>Once a process gets the CPU, it runs to completion without interruption.</li>
                  <li>It is a non-preemptive scheduling algorithm.</li>
                  <li>The process that arrives first is executed first.</li>
                </ul>
              </div>

              <Card className="p-6 max-w-4xl mx-auto">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-bold text-center">Example</h3>
                  <p className="text-muted-foreground text-center">
                    Consider the following processes with their arrival times and burst times:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-center p-3 bg-muted/50 rounded-tl-lg">Process</th>
                          <th className="text-center p-3 bg-muted/50">Arrival Time</th>
                          <th className="text-center p-3 bg-muted/50">Burst Time</th>
                          <th className="text-center p-3 bg-muted/50">Completion Time</th>
                          <th className="text-center p-3 bg-muted/50">Turnaround Time</th>
                          <th className="text-center p-3 bg-muted/50">Waiting Time</th>
                          <th className="text-center p-3 bg-muted/50 rounded-tr-lg">Response Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P1</td>
                          <td className="p-3 text-center">0</td>
                          <td className="p-3 text-center">5</td>
                          <td className="p-3 text-center">5</td>
                          <td className="p-3 text-center">5</td>
                          <td className="p-3 text-center">0</td>
                          <td className="p-3 text-center">0</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P2</td>
                          <td className="p-3 text-center">1</td>
                          <td className="p-3 text-center">3</td>
                          <td className="p-3 text-center">8</td>
                          <td className="p-3 text-center">7</td>
                          <td className="p-3 text-center">4</td>
                          <td className="p-3 text-center">4</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P3</td>
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">8</td>
                          <td className="p-3 text-center">16</td>
                          <td className="p-3 text-center">14</td>
                          <td className="p-3 text-center">6</td>
                          <td className="p-3 text-center">6</td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P4</td>
                          <td className="p-3 text-center">3</td>
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">18</td>
                          <td className="p-3 text-center">15</td>
                          <td className="p-3 text-center">13</td>
                          <td className="p-3 text-center">13</td>
                        </tr>
                      </tbody>
                      <tfoot className="bg-muted/20">
                        <tr>
                          <td colSpan={4} className="p-3 text-center font-medium">Average</td>
                          <td className="p-3 text-center font-medium">10.25</td>
                          <td className="p-3 text-center font-medium">5.75</td>
                          <td className="p-3 text-center font-medium">5.75</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <p className="text-muted-foreground text-center font-medium">
                    In FCFS, the execution order would be: P1 → P2 → P3 → P4
                  </p>
                  <div className="relative h-16 bg-muted/30 rounded-lg overflow-hidden mb-6 mt-4">
                    <div className="absolute top-0 left-0 h-full w-[27.8%] bg-red-500 flex items-center justify-center text-white text-sm">
                      P1
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">0</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">5</span>
                    </div>
                    <div className="absolute top-0 left-[27.8%] h-full w-[16.7%] bg-blue-500 flex items-center justify-center text-white text-sm">
                      P2
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">5</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">8</span>
                    </div>
                    <div className="absolute top-0 left-[44.5%] h-full w-[44.4%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">8</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">16</span>
                    </div>
                    <div className="absolute top-0 left-[88.9%] h-full w-[11.1%] bg-yellow-500 flex items-center justify-center text-white text-sm">
                      P4
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">16</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">18</span>
                    </div>
                    <div className="absolute -bottom-8 left-0 right-0 border-t border-dashed border-primary/30 pt-1 text-xs text-muted-foreground flex justify-between px-1">
                      <span>Process arrival times: P1(0), P2(1), P3(2), P4(3)</span>
                      <span>Non-preemptive execution</span>
                    </div>
                  </div>
                  <div className="bg-muted/10 p-5 rounded-lg text-muted-foreground text-left mt-8 mb-2">
                    <h4 className="font-medium text-foreground mb-2 text-center">Gantt Chart Explanation</h4>
                    <p className="mb-3">The Gantt chart above illustrates how the FCFS algorithm works:</p>
                    <ol className="space-y-2 ml-5 list-decimal">
                      <li><span className="text-red-500 font-medium">P1</span> arrives first at time 0 and gets the CPU immediately, executing for 5 time units (0-5)</li>
                      <li><span className="text-blue-500 font-medium">P2</span> arrives at time 1 but must wait until P1 completes, then executes for 3 time units (5-8)</li>
                      <li><span className="text-green-500 font-medium">P3</span> arrives at time 2 but must wait until both P1 and P2 complete, then executes for 8 time units (8-16)</li>
                      <li><span className="text-yellow-500 font-medium">P4</span> arrives at time 3 but must wait until P1, P2, and P3 complete, then executes for 2 time units (16-18)</li>
                    </ol>
                    <p className="mt-3 italic">Note how each process must wait for all previous processes to complete before being given CPU time, regardless of its burst time. This illustrates the "convoy effect" where short processes can be significantly delayed behind longer ones.</p>
                  </div>
                  <div className="space-y-4 text-center bg-muted/20 p-5 rounded-lg">
                    <p className="text-muted-foreground font-medium">
                      <strong>Performance Metrics Explanation:</strong>
                    </p>
                    <ul className="space-y-2 text-muted-foreground inline-block text-left">
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">CT</span>
                        <span><strong>Completion Time</strong>: Time at which process completes execution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">TAT</span>
                        <span><strong>Turnaround Time</strong>: Completion Time - Arrival Time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">WT</span>
                        <span><strong>Waiting Time</strong>: Turnaround Time - Burst Time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">RT</span>
                        <span><strong>Response Time</strong>: Time when process first gets CPU - Arrival Time (same as waiting time in FCFS)</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground font-medium mt-4 italic">
                      In FCFS, the response time equals the waiting time because processes are executed in order of arrival without preemption.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter">Advantages and Disadvantages</h2>
                <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                  <Card className="p-6">
                    <CardContent className="p-0 space-y-4">
                      <h3 className="text-xl font-bold text-green-600 text-center">Advantages</h3>
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
                      <h3 className="text-xl font-bold text-red-600 text-center">Disadvantages</h3>
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

              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter">Real-world Applications</h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  While FCFS is rarely used as the sole scheduling algorithm in modern operating systems, it is often
                  used:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto inline-block text-left">
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
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Continue Learning</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed mx-auto">
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

