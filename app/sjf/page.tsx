"use client"

import Link from "next/link"
import { ArrowRight, ArrowLeft, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import AlgorithmAnimation from "@/components/algorithm-animation"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

export default function SJFPage() {
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shortest Job First (SJF)</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto lg:mx-0 leading-relaxed">
                    A scheduling algorithm that prioritizes processes with the shortest burst time, minimizing average
                    waiting time.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button variant="outline" size="lg" className="gap-2 group" asChild>
                    <Link href="/fcfs">
                      <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" /> 
                      <span className="ml-1 group-hover:ml-0 transition-all">Previous Algorithm</span>
                    </Link>
                  </Button>
                  <Button size="lg" className="gap-2 group" asChild>
                    <Link href="/round-robin">
                      <span className="mr-1 group-hover:mr-0 transition-all">Next Algorithm</span> 
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl border bg-background p-3 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 pointer-events-none z-10 rounded-xl"></div>
                  <AlgorithmAnimation type="sjf" defaultSpeed="slow" />
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
                  How SJF Works
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  Shortest Job First (SJF) is a scheduling algorithm that selects the process with the smallest
                  execution time first. It comes in two variants:
                </p>
                <ul className="list-none space-y-3 text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">→</span>
                    <span><strong>Non-preemptive SJF:</strong> Once a process starts executing, it continues until completion.</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">→</span>
                    <span><strong>Preemptive SJF (SRTF):</strong> If a new process arrives with a shorter burst time than the
                    remaining time of the current process, the CPU is preempted to the new process.</span>
                  </li>
                </ul>
              </div>

              <Card className="p-6 max-w-4xl mx-auto border shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-0 space-y-6">
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
                          <td className="p-3 text-center">10</td>
                          <td className="p-3 text-center">9</td>
                          <td className="p-3 text-center">6</td>
                          <td className="p-3 text-center">6</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P3</td>
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">8</td>
                          <td className="p-3 text-center">18</td>
                          <td className="p-3 text-center">16</td>
                          <td className="p-3 text-center">8</td>
                          <td className="p-3 text-center">8</td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P4</td>
                          <td className="p-3 text-center">3</td>
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">7</td>
                          <td className="p-3 text-center">4</td>
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">2</td>
                        </tr>
                      </tbody>
                      <tfoot className="bg-muted/20">
                        <tr>
                          <td colSpan={4} className="p-3 text-center font-medium">Average</td>
                          <td className="p-3 text-center font-medium">8.5</td>
                          <td className="p-3 text-center font-medium">4.0</td>
                          <td className="p-3 text-center font-medium">4.0</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <p className="text-muted-foreground text-center font-medium">
                    <strong>Non-preemptive SJF:</strong> The execution order would be: P1 → P4 → P2 → P3
                  </p>
                  <div className="relative h-14 bg-muted/30 rounded-lg overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[27.8%] bg-red-500 flex items-center justify-center text-white text-sm">
                      P1 (0-5)
                    </div>
                    <div className="absolute top-0 left-[27.8%] h-full w-[11.1%] bg-yellow-500 flex items-center justify-center text-white text-sm">
                      P4 (5-7)
                    </div>
                    <div className="absolute top-0 left-[38.9%] h-full w-[16.7%] bg-blue-500 flex items-center justify-center text-white text-sm">
                      P2 (7-10)
                    </div>
                    <div className="absolute top-0 left-[55.6%] h-full w-[44.4%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3 (10-18)
                    </div>
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
                      In non-preemptive SJF, response time equals waiting time for each process because once a process gets CPU, it completes without interruption.
                    </p>
                  </div>
                  <div className="bg-muted/10 p-5 rounded-lg text-muted-foreground text-left mt-8 mb-2">
                    <h4 className="font-medium text-foreground mb-2 text-center">Gantt Chart Explanation</h4>
                    <p className="mb-3">The Gantt chart above illustrates how the non-preemptive SJF algorithm works:</p>
                    <ol className="space-y-2 ml-5 list-decimal">
                      <li><span className="text-red-500 font-medium">P1</span> arrives first at time 0 and gets the CPU immediately, executing for 5 time units (0-5)</li>
                      <li>At time 5, both P2 (arrived at 1) and P3 (arrived at 2) are waiting. P4 has also arrived (at time 3).</li>
                      <li><span className="text-yellow-500 font-medium">P4</span> gets selected next because it has the shortest burst time (2 units) among the waiting processes, executing for 2 time units (5-7)</li>
                      <li><span className="text-blue-500 font-medium">P2</span> is selected next as it has the next shortest burst time (3 units), executing for 3 time units (7-10)</li>
                      <li>Finally, <span className="text-green-500 font-medium">P3</span> executes for its 8 time units (10-18) as it has the longest burst time</li>
                    </ol>
                    <p className="mt-3 italic">Notice how SJF prioritizes shorter jobs over longer ones regardless of arrival order (after the first process starts). This reduces the average waiting time compared to FCFS but can lead to starvation of longer processes if shorter ones continue to arrive.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-5 text-center">
                <h2 className="text-3xl font-bold tracking-tighter inline-flex items-center justify-center">
                  <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">2</span>
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
                          <span>Provides optimal average waiting time among all scheduling algorithms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Reduces the average response time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Efficient for batch systems where job lengths are known</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Minimizes the time processes spend waiting in the queue</span>
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
                          <span>Starvation of longer processes is possible</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Difficult to predict the exact burst time of processes in advance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Not suitable for interactive systems where response time is critical</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Overhead in estimating process burst times</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-5 text-center">
                <h2 className="text-3xl font-bold tracking-tighter inline-flex items-center justify-center">
                  <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">3</span>
                  Implementation Challenges
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  The main challenge in implementing SJF is accurately predicting the burst time of processes:
                </p>
                <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto mt-4">
                  <Card className="p-4 border shadow-sm hover:shadow-md transition-all hover:bg-muted/10">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                        <p className="text-muted-foreground text-left"><strong>Exponential Averaging:</strong> Using past behavior to predict future burst times</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-4 border shadow-sm hover:shadow-md transition-all hover:bg-muted/10">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                        <p className="text-muted-foreground text-left"><strong>Process History:</strong> Maintaining a history of previous executions</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-4 border shadow-sm hover:shadow-md transition-all hover:bg-muted/10">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                        <p className="text-muted-foreground text-left"><strong>User Hints:</strong> Allowing users or applications to provide burst time estimates</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-4 border shadow-sm hover:shadow-md transition-all hover:bg-muted/10">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                        <p className="text-muted-foreground text-left"><strong>Adaptive Techniques:</strong> Dynamically adjusting predictions based on actual execution times</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
                  <Link href="/round-robin">
                    <span className="text-lg">Round Robin</span>
                    <span className="text-xs text-muted-foreground">Fair CPU allocation</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-5 flex flex-col gap-2 hover:bg-background hover:shadow-md transition-all" asChild>
                  <Link href="/priority">
                    <span className="text-lg">Priority Scheduling</span>
                    <span className="text-xs text-muted-foreground">Based on process importance</span>
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

