"use client"

import Link from "next/link"
import { ArrowRight, ArrowLeft, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AlgorithmAnimation from "@/components/algorithm-animation"
import { useEffect, useState } from "react"

export default function PriorityPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className={`grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col justify-center space-y-5">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary w-fit mx-auto lg:mx-0">
                  CPU Scheduling Algorithm
                </div>
                <div className="space-y-3 text-center lg:text-left">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Priority Scheduling</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto lg:mx-0 leading-relaxed">
                    A scheduling algorithm that assigns CPU based on process priority, ensuring critical processes run
                    first.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button variant="outline" size="lg" className="gap-2 group" asChild>
                    <Link href="/round-robin">
                      <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" /> 
                      <span className="ml-1 group-hover:ml-0 transition-all">Previous Algorithm</span>
                    </Link>
                  </Button>
                  <Button size="lg" className="gap-2 group" asChild>
                    <Link href="/comparison">
                      <span className="mr-1 group-hover:mr-0 transition-all">Compare All</span> 
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl border bg-background p-3 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 pointer-events-none z-10 rounded-xl"></div>
                  <AlgorithmAnimation type="priority" defaultSpeed="slow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-10">
              <div className="space-y-5 text-center">
                <h2 className="text-3xl font-bold tracking-tighter inline-flex items-center justify-center">
                  <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">1</span>
                  How Priority Scheduling Works
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  Priority Scheduling is an algorithm where each process is assigned a priority value. Key
                  characteristics include:
                </p>
                <ul className="list-none space-y-3 text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">→</span>
                    <span>Processes with higher priority are executed first</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">→</span>
                    <span>Can be preemptive or non-preemptive</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">→</span>
                    <span>In preemptive mode, a higher priority process can interrupt a running process</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">→</span>
                    <span>In non-preemptive mode, the running process completes its CPU burst before a higher priority process
                      is scheduled</span>
                  </li>
                </ul>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto mt-4">
                  Priority can be determined by various factors:
                </p>
                <div className="grid gap-3 grid-cols-2 md:grid-cols-5 max-w-3xl mx-auto mt-2">
                  <div className="flex items-center justify-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <span className="text-sm font-medium">Time limits</span>
                  </div>
                  <div className="flex items-center justify-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <span className="text-sm font-medium">Memory requirements</span>
                  </div>
                  <div className="flex items-center justify-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <span className="text-sm font-medium">I/O to processor ratio</span>
                  </div>
                  <div className="flex items-center justify-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <span className="text-sm font-medium">Funds being paid</span>
                  </div>
                  <div className="flex items-center justify-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <span className="text-sm font-medium">Political factors</span>
                  </div>
                </div>
              </div>

              <Card className="p-6 max-w-4xl mx-auto border shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-0 space-y-6">
                  <h3 className="text-xl font-bold text-center">Example</h3>
                  <p className="text-muted-foreground text-center">
                    Consider the following processes with their arrival times, burst times, and priorities (lower number
                    = higher priority):
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-center p-3 bg-muted/50 rounded-tl-lg">Process</th>
                          <th className="text-center p-3 bg-muted/50">Arrival Time</th>
                          <th className="text-center p-3 bg-muted/50">Burst Time</th>
                          <th className="text-center p-3 bg-muted/50">Priority</th>
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
                          <td className="p-3 text-center">3</td>
                          <td className="p-3 text-center">5</td>
                          <td className="p-3 text-center">5</td>
                          <td className="p-3 text-center">0</td>
                          <td className="p-3 text-center">0</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P2</td>
                          <td className="p-3 text-center">1</td>
                          <td className="p-3 text-center">3</td>
                          <td className="p-3 text-center">1</td>
                          <td className="p-3 text-center">8</td>
                          <td className="p-3 text-center">7</td>
                          <td className="p-3 text-center">4</td>
                          <td className="p-3 text-center">4</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P3</td>
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">8</td>
                          <td className="p-3 text-center">4</td>
                          <td className="p-3 text-center">18</td>
                          <td className="p-3 text-center">16</td>
                          <td className="p-3 text-center">8</td>
                          <td className="p-3 text-center">8</td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P4</td>
                          <td className="p-3 text-center">3</td>
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">10</td>
                          <td className="p-3 text-center">7</td>
                          <td className="p-3 text-center">5</td>
                          <td className="p-3 text-center">5</td>
                        </tr>
                      </tbody>
                      <tfoot className="bg-muted/20">
                        <tr>
                          <td colSpan={5} className="p-3 text-center font-medium">Average</td>
                          <td className="p-3 text-center font-medium">8.75</td>
                          <td className="p-3 text-center font-medium">4.25</td>
                          <td className="p-3 text-center font-medium">4.25</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <p className="text-muted-foreground text-center font-medium">
                    <strong>Non-preemptive Priority:</strong> The execution order would be: P1 → P2 → P4 → P3
                  </p>
                  <div className="relative h-14 bg-muted/30 rounded-lg overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[27.8%] bg-red-500 flex items-center justify-center text-white text-sm">
                      P1 (0-5)
                    </div>
                    <div className="absolute top-0 left-[27.8%] h-full w-[16.7%] bg-blue-500 flex items-center justify-center text-white text-sm">
                      P2 (5-8)
                    </div>
                    <div className="absolute top-0 left-[44.5%] h-full w-[11.1%] bg-yellow-500 flex items-center justify-center text-white text-sm">
                      P4 (8-10)
                    </div>
                    <div className="absolute top-0 left-[55.6%] h-full w-[44.4%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3 (10-18)
                    </div>
                  </div>
                  <div className="bg-muted/10 p-5 rounded-lg text-muted-foreground text-left mt-8 mb-2">
                    <h4 className="font-medium text-foreground mb-2 text-center">Gantt Chart Explanation</h4>
                    <p className="mb-3">The Gantt chart above illustrates how the non-preemptive Priority scheduling algorithm works:</p>
                    <ol className="space-y-2 ml-5 list-decimal">
                      <li><span className="text-red-500 font-medium">P1</span> arrives first at time 0 and gets the CPU immediately, executing for 5 time units (0-5)</li>
                      <li>At time 5, processes P2, P3, and P4 are all waiting in the ready queue</li>
                      <li><span className="text-blue-500 font-medium">P2</span> is selected next because it has the highest priority (lowest priority number = 1) among waiting processes, executing for 3 time units (5-8)</li>
                      <li><span className="text-yellow-500 font-medium">P4</span> executes next with the second highest priority (priority = 2), running for 2 time units (8-10)</li>
                      <li>Finally, <span className="text-green-500 font-medium">P3</span> executes with the lowest priority (priority = 4) for 8 time units (10-18)</li>
                    </ol>
                    <p className="mt-3 italic">Priority scheduling ensures critical processes with higher priority (lower priority numbers) are executed before less important ones. However, this can lead to starvation where lower priority processes may never execute if higher priority processes keep arriving. The "aging" technique can be used to gradually increase the priority of waiting processes to prevent starvation.</p>
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
                        <span><strong>Response Time</strong>: Time when process first gets CPU - Arrival Time</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground font-medium mt-4 italic">
                      In non-preemptive Priority scheduling, response time equals waiting time for each process since processes run to completion once started.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-5 text-center">
                <h2 className="text-3xl font-bold tracking-tighter inline-flex items-center justify-center">
                  <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">2</span>
                  Starvation and Aging
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  A major issue with Priority Scheduling is starvation:
                </p>
                <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mt-4">
                  <Card className="p-6 border shadow-sm hover:shadow-md transition-all hover:bg-red-50/10">
                    <CardContent className="p-0">
                      <div className="flex flex-col items-center gap-4">
                        <div className="mb-2 p-2 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                          <XCircle className="h-8 w-8 text-red-500" />
                        </div>
                        <h3 className="text-xl font-medium">Starvation</h3>
                        <p className="text-muted-foreground text-center">
                          Low-priority processes may never execute if there's a continuous stream of high-priority processes
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-6 border shadow-sm hover:shadow-md transition-all hover:bg-green-50/10">
                    <CardContent className="p-0">
                      <div className="flex flex-col items-center gap-4">
                        <div className="mb-2 p-2 w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                          <CheckCircle className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="text-xl font-medium">Aging</h3>
                        <p className="text-muted-foreground text-center">
                          A solution to starvation where the priority of a process is gradually increased the longer it waits in the ready queue
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto mt-6">
                  Aging ensures that a low-priority process will eventually reach a high enough priority to be executed,
                  preventing indefinite blocking.
                </p>
              </div>

              <div className="space-y-5 text-center">
                <h2 className="text-3xl font-bold tracking-tighter inline-flex items-center justify-center">
                  <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">3</span>
                  Advantages and Disadvantages
                </h2>
                <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                  <Card className="p-6 border shadow-sm hover:shadow-md transition-all hover:border-green-200">
                    <CardContent className="p-0 space-y-4">
                      <h3 className="text-xl font-bold text-green-600 text-center flex items-center justify-center gap-2">
                        <CheckCircle className="h-6 w-6" />
                        Advantages
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Prioritizes important or time-critical processes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Flexible priority assignment based on various factors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Suitable for real-time systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Can be adapted to different system requirements</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="p-6 border shadow-sm hover:shadow-md transition-all hover:border-red-200">
                    <CardContent className="p-0 space-y-4">
                      <h3 className="text-xl font-bold text-red-600 text-center flex items-center justify-center gap-2">
                        <XCircle className="h-6 w-6" />
                        Disadvantages
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Potential starvation of low-priority processes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Overhead in determining and managing priorities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Priority inversion problem</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Complexity in implementing aging mechanisms</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-5 text-center">
                <h2 className="text-3xl font-bold tracking-tighter inline-flex items-center justify-center">
                  <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">4</span>
                  Priority Inversion
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  Priority inversion is a scenario where a high-priority process is indirectly preempted by a low-priority process:
                </p>
                <div className="bg-muted/20 p-6 rounded-lg max-w-4xl mx-auto mt-4">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">1</div>
                      <p className="text-muted-foreground text-left">A high-priority process needs a resource held by a low-priority process</p>
                    </div>
                    <div className="w-0.5 h-6 bg-primary/20 mx-auto"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">2</div>
                      <p className="text-muted-foreground text-left">The high-priority process is blocked waiting for the resource</p>
                    </div>
                    <div className="w-0.5 h-6 bg-primary/20 mx-auto"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">3</div>
                      <p className="text-muted-foreground text-left">A medium-priority process preempts the low-priority process</p>
                    </div>
                    <div className="w-0.5 h-6 bg-primary/20 mx-auto"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">4</div>
                      <p className="text-muted-foreground text-left">The high-priority process indirectly waits for the medium-priority process</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto mt-6">
                  Solutions include priority inheritance and priority ceiling protocols.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-5 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Continue Learning</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed mx-auto">
                  Explore other CPU scheduling algorithms to understand their differences and applications.
                </p>
              </div>
              <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl mt-8">
                <Button variant="outline" className="h-auto py-5 flex flex-col gap-2 hover:bg-background hover:shadow-md transition-all" asChild>
                  <Link href="/fcfs">
                    <span className="text-lg">First Come First Serve</span>
                    <span className="text-xs text-muted-foreground">Simple and fair</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-5 flex flex-col gap-2 hover:bg-background hover:shadow-md transition-all" asChild>
                  <Link href="/sjf">
                    <span className="text-lg">Shortest Job First</span>
                    <span className="text-xs text-muted-foreground">Optimal average waiting time</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-5 flex flex-col gap-2 hover:bg-background hover:shadow-md transition-all" asChild>
                  <Link href="/round-robin">
                    <span className="text-lg">Round Robin</span>
                    <span className="text-xs text-muted-foreground">Fair CPU allocation</span>
                  </Link>
                </Button>
              </div>
              <Button className="mt-8 group" asChild>
                <Link href="/comparison">
                  <span className="mr-2 group-hover:mr-3 transition-all">Compare All Algorithms</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

