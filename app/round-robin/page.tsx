"use client"

import Link from "next/link"
import { ArrowRight, ArrowLeft, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AlgorithmAnimation from "@/components/algorithm-animation"
import { useEffect, useState } from "react"

export default function RoundRobinPage() {
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Round Robin Scheduling</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto lg:mx-0 leading-relaxed">
                    A preemptive scheduling algorithm that allocates CPU time in fixed time slices to each process in a
                    circular queue.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button variant="outline" size="lg" className="gap-2 group" asChild>
                    <Link href="/sjf">
                      <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" /> 
                      <span className="ml-1 group-hover:ml-0 transition-all">Previous Algorithm</span>
                    </Link>
                  </Button>
                  <Button size="lg" className="gap-2 group" asChild>
                    <Link href="/priority">
                      <span className="mr-1 group-hover:mr-0 transition-all">Next Algorithm</span> 
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl border bg-background p-3 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 pointer-events-none z-10 rounded-xl"></div>
                  <AlgorithmAnimation type="round-robin" defaultSpeed="slow" />
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
                  How Round Robin Works
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  Round Robin is a CPU scheduling algorithm specifically designed for time-sharing systems. Key
                  characteristics include:
                </p>
                <ul className="list-none space-y-3 text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">→</span>
                    <span>Each process is assigned a fixed time slice called a quantum or time slice</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">→</span>
                    <span>Processes are executed in a circular queue</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">→</span>
                    <span>If a process doesn't complete within its time quantum, it's preempted and moved to the back of the queue</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">→</span>
                    <span>The algorithm continues until all processes are completed</span>
                  </li>
                </ul>
              </div>

              <Card className="p-6 max-w-4xl mx-auto border shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-0 space-y-6">
                  <h3 className="text-xl font-bold text-center">Example</h3>
                  <p className="text-muted-foreground text-center">
                    Consider the following processes with their arrival times and burst times, and a time quantum of 2
                    units:
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
                          <td className="p-3 text-center">10</td>
                          <td className="p-3 text-center">10</td>
                          <td className="p-3 text-center">5</td>
                          <td className="p-3 text-center">0</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P2</td>
                          <td className="p-3 text-center">1</td>
                          <td className="p-3 text-center">3</td>
                          <td className="p-3 text-center">11</td>
                          <td className="p-3 text-center">10</td>
                          <td className="p-3 text-center">7</td>
                          <td className="p-3 text-center">1</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P3</td>
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">8</td>
                          <td className="p-3 text-center">17</td>
                          <td className="p-3 text-center">15</td>
                          <td className="p-3 text-center">7</td>
                          <td className="p-3 text-center">2</td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-center font-medium">P4</td>
                          <td className="p-3 text-center">3</td>
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">8</td>
                          <td className="p-3 text-center">5</td>
                          <td className="p-3 text-center">3</td>
                          <td className="p-3 text-center">3</td>
                        </tr>
                      </tbody>
                      <tfoot className="bg-muted/20">
                        <tr>
                          <td colSpan={4} className="p-3 text-center font-medium">Average</td>
                          <td className="p-3 text-center font-medium">10.0</td>
                          <td className="p-3 text-center font-medium">5.5</td>
                          <td className="p-3 text-center font-medium">1.5</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <p className="text-muted-foreground text-center font-medium">
                    With a time quantum of 2, the execution order would be: P1 → P2 → P3 → P4 → P1 → P2 → P3 → P3 → P3
                  </p>
                  <div className="relative h-16 bg-muted/30 rounded-lg overflow-hidden mb-6">
                    <div className="absolute top-0 left-0 h-full w-[11.1%] bg-red-500 flex items-center justify-center text-white text-sm">
                      P1
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">0</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">2</span>
                    </div>
                    <div className="absolute top-0 left-[11.1%] h-full w-[11.1%] bg-blue-500 flex items-center justify-center text-white text-sm">
                      P2
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">2</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">4</span>
                    </div>
                    <div className="absolute top-0 left-[22.2%] h-full w-[11.1%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">4</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">6</span>
                    </div>
                    <div className="absolute top-0 left-[33.3%] h-full w-[11.1%] bg-yellow-500 flex items-center justify-center text-white text-sm">
                      P4
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">6</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">8</span>
                    </div>
                    <div className="absolute top-0 left-[44.4%] h-full w-[11.1%] bg-red-500 flex items-center justify-center text-white text-sm">
                      P1
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">8</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">10</span>
                    </div>
                    <div className="absolute top-0 left-[55.5%] h-full w-[5.6%] bg-blue-500 flex items-center justify-center text-white text-sm">
                      P2
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">10</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">11</span>
                    </div>
                    <div className="absolute top-0 left-[61.1%] h-full w-[11.1%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">11</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">13</span>
                    </div>
                    <div className="absolute top-0 left-[72.2%] h-full w-[11.1%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">13</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">15</span>
                    </div>
                    <div className="absolute top-0 left-[83.3%] h-full w-[11.1%] bg-green-500 flex items-center justify-center text-white text-sm">
                      P3
                      <span className="absolute bottom-[-20px] left-0 text-xs text-muted-foreground">15</span>
                      <span className="absolute bottom-[-20px] right-0 text-xs text-muted-foreground">17</span>
                    </div>
                    <div className="absolute -bottom-8 left-0 right-0 border-t border-dashed border-primary/30 pt-1 text-xs text-muted-foreground flex justify-between px-1">
                      <span>Time Quantum = 2</span>
                      <span>Context Switch</span>
                    </div>
                  </div>
                  <div className="bg-muted/10 p-5 rounded-lg text-muted-foreground text-left mt-8 mb-2">
                    <h4 className="font-medium text-foreground mb-2 text-center">Gantt Chart Explanation</h4>
                    <p className="mb-3">The Gantt chart above illustrates how the Round Robin algorithm works with a time quantum of 2:</p>
                    <ol className="space-y-2 ml-5 list-decimal">
                      <li><span className="text-red-500 font-medium">P1</span> gets the first 2 time units (0-2) as it arrives first, but since its burst time is 5, it's preempted after its quantum expires</li>
                      <li><span className="text-blue-500 font-medium">P2</span> executes for its quantum (2-4), but doesn't complete as its burst time is 3</li>
                      <li><span className="text-green-500 font-medium">P3</span> gets its first quantum (4-6), but with a burst time of 8, it needs more time</li>
                      <li><span className="text-yellow-500 font-medium">P4</span> executes for its entire burst time of 2 units (6-8) and completes within its quantum</li>
                      <li><span className="text-red-500 font-medium">P1</span> returns to complete its remaining 3 units, using a full quantum (8-10), but still has 1 time unit remaining</li>
                      <li><span className="text-blue-500 font-medium">P2</span> returns to complete its final 1 unit (10-11) and finishes execution</li>
                      <li><span className="text-green-500 font-medium">P3</span> returns for its remaining 6 units, executing in three separate quanta (11-13, 13-15, 15-17) to complete</li>
                    </ol>
                    <p className="mt-3 italic">Round Robin ensures fairness by giving each process a turn to execute for a fixed time quantum before being preempted. This improves response time for shorter processes without completely blocking longer ones. The context switching overhead increases with smaller time quanta, but larger quanta make Round Robin behave more like FCFS.</p>
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
                      In Round Robin, response time is generally better than in non-preemptive algorithms because each process gets a chance to execute within its time quantum.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-5 text-center">
                <h2 className="text-3xl font-bold tracking-tighter inline-flex items-center justify-center">
                  <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">2</span>
                  Time Quantum Selection
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto">
                  The selection of the time quantum is critical in Round Robin scheduling:
                </p>
                <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto mt-4">
                  <Card className="p-4 border shadow-sm hover:shadow-md transition-all hover:bg-muted/10">
                    <CardContent className="p-0">
                      <div className="flex flex-col items-center gap-4 h-full">
                        <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                        <div className="text-center">
                          <h4 className="font-semibold mb-2">Too Large</h4>
                          <p className="text-muted-foreground text-sm">Round Robin degenerates to FCFS</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-4 border shadow-sm hover:shadow-md transition-all hover:bg-muted/10">
                    <CardContent className="p-0">
                      <div className="flex flex-col items-center gap-4 h-full">
                        <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                        <div className="text-center">
                          <h4 className="font-semibold mb-2">Too Small</h4>
                          <p className="text-muted-foreground text-sm">Excessive context switching overhead</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-4 border shadow-sm hover:shadow-md transition-all hover:bg-muted/10">
                    <CardContent className="p-0">
                      <div className="flex flex-col items-center gap-4 h-full">
                        <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                        <div className="text-center">
                          <h4 className="font-semibold mb-2">Optimal</h4>
                          <p className="text-muted-foreground text-sm">Slightly larger than time required for a typical interaction</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-3xl mx-auto mt-4 italic">
                  A rule of thumb is that 80% of CPU bursts should be shorter than the time quantum.
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
                          <span>Fair allocation of CPU time to all processes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Good for time-sharing systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Low response time for short processes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>No starvation as every process gets a turn</span>
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
                          <span>High context switching overhead</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Average waiting time can be higher than SJF</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Performance heavily depends on time quantum selection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Not optimal for processes with widely varying CPU burst times</span>
                        </li>
                      </ul>
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
                  <Link href="/sjf">
                    <span className="text-lg">Shortest Job First</span>
                    <span className="text-xs text-muted-foreground">Optimal average waiting time</span>
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

