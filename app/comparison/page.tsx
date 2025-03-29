"use client"

import Link from "next/link"
import { Clock, BarChart, Users, Award, CheckCircle, XCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AlgorithmAnimation from "@/components/algorithm-animation"
import ComparisonChart from "@/components/comparison-chart"

// Sample data for the chart
const chartData = {
  labels: ["FCFS", "SJF", "Round Robin", "Priority"],
  datasets: [
    {
      label: "Average Waiting Time",
      data: [8.5, 4.2, 6.8, 7.3],
      backgroundColor: "rgba(99, 102, 241, 0.5)",
      borderColor: "rgb(99, 102, 241)",
      borderWidth: 1,
    },
    {
      label: "Average Turnaround Time",
      data: [12.3, 7.8, 10.5, 11.2],
      backgroundColor: "rgba(14, 165, 233, 0.5)",
      borderColor: "rgb(14, 165, 233)",
      borderWidth: 1,
    },
    {
      label: "Average Response Time",
      data: [8.5, 4.2, 2.1, 5.7],
      backgroundColor: "rgba(249, 115, 22, 0.5)",
      borderColor: "rgb(249, 115, 22)",
      borderWidth: 1,
    },
  ],
}

export default function ComparisonPage() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("fcfs")
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleAlgorithmChange = (algorithm: string) => {
    setSelectedAlgorithm(algorithm)
    setIsAnimating(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className={`flex flex-col items-center justify-center space-y-5 text-center transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="space-y-3 max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  CPU Scheduling Algorithms Comparison
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed mx-auto">
                  Compare the performance and characteristics of different CPU scheduling algorithms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="table" className="w-full max-w-7xl mx-auto">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10 rounded-lg p-1 shadow-sm">
                <TabsTrigger 
                  value="table" 
                  className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Table View
                </TabsTrigger>
                <TabsTrigger 
                  value="chart" 
                  className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Chart View
                </TabsTrigger>
                <TabsTrigger 
                  value="visual" 
                  className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Visual Demo
                </TabsTrigger>
              </TabsList>

              <TabsContent value="table" className="space-y-10 mt-6">
                <div className="rounded-xl border shadow-sm overflow-hidden max-w-6xl mx-auto">
                  <Table>
                    <TableCaption className="text-center py-4 text-base">Comparison of CPU Scheduling Algorithms</TableCaption>
                    <TableHeader>
                      <TableRow className="bg-muted/30 hover:bg-muted/40">
                        <TableHead className="w-[200px] p-4 text-center font-bold">Criteria</TableHead>
                        <TableHead className="p-4 text-center font-bold">FCFS</TableHead>
                        <TableHead className="p-4 text-center font-bold">SJF</TableHead>
                        <TableHead className="p-4 text-center font-bold">Round Robin</TableHead>
                        <TableHead className="p-4 text-center font-bold">Priority</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium p-4 text-center">Algorithm Type</TableCell>
                        <TableCell className="p-4 text-center">Non-preemptive</TableCell>
                        <TableCell className="p-4 text-center">Both (SJF/SRTF)</TableCell>
                        <TableCell className="p-4 text-center">Preemptive</TableCell>
                        <TableCell className="p-4 text-center">Both</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium p-4 text-center">Average Waiting Time</TableCell>
                        <TableCell className="p-4 text-center">High</TableCell>
                        <TableCell className="p-4 text-center">Minimal</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                        <TableCell className="p-4 text-center">Medium to High</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium p-4 text-center">Response Time</TableCell>
                        <TableCell className="p-4 text-center">High</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                        <TableCell className="p-4 text-center">Low</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium p-4 text-center">Turnaround Time</TableCell>
                        <TableCell className="p-4 text-center">High</TableCell>
                        <TableCell className="p-4 text-center">Minimal</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium p-4 text-center">Starvation</TableCell>
                        <TableCell className="p-4 text-center">No</TableCell>
                        <TableCell className="p-4 text-center">Yes</TableCell>
                        <TableCell className="p-4 text-center">No</TableCell>
                        <TableCell className="p-4 text-center">Yes</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium p-4 text-center">Overhead</TableCell>
                        <TableCell className="p-4 text-center">Low</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                        <TableCell className="p-4 text-center">High</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium p-4 text-center">Fairness</TableCell>
                        <TableCell className="p-4 text-center">Fair (order based)</TableCell>
                        <TableCell className="p-4 text-center">Unfair to long processes</TableCell>
                        <TableCell className="p-4 text-center">Fair (time based)</TableCell>
                        <TableCell className="p-4 text-center">Unfair to low priority</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium p-4 text-center">Predictability</TableCell>
                        <TableCell className="p-4 text-center">High</TableCell>
                        <TableCell className="p-4 text-center">Low</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium p-4 text-center">Implementation</TableCell>
                        <TableCell className="p-4 text-center">Simple</TableCell>
                        <TableCell className="p-4 text-center">Complex</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                        <TableCell className="p-4 text-center">Medium</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                  <Card className="flex flex-col h-full border hover:shadow-md transition-all hover:border-primary/50">
                    <CardHeader className="text-center space-y-4">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>FCFS</CardTitle>
                      <CardDescription>First Come First Serve</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Simple to implement</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>No starvation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Poor average waiting time</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Convoy effect</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col h-full border hover:shadow-md transition-all hover:border-primary/50">
                    <CardHeader className="text-center space-y-4">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <BarChart className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>SJF</CardTitle>
                      <CardDescription>Shortest Job First</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Optimal average waiting time</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Good for batch systems</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Starvation of long processes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Requires burst time prediction</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col h-full border hover:shadow-md transition-all hover:border-primary/50">
                    <CardHeader className="text-center space-y-4">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <RefreshCw className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Round Robin</CardTitle>
                      <CardDescription>Time Quantum Based</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Fair CPU allocation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Good response time</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>High context switching overhead</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Time quantum selection is critical</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col h-full border hover:shadow-md transition-all hover:border-primary/50">
                    <CardHeader className="text-center space-y-4">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Priority</CardTitle>
                      <CardDescription>Priority Based</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Important processes run first</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Flexible priority assignment</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Starvation of low priority processes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Priority inversion problem</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="chart" className="mt-6">
                <div className="space-y-10">
                  <Card className="border hover:shadow-md transition-all">
                    <CardHeader className="text-center">
                      <CardTitle>Performance Metrics Comparison</CardTitle>
                      <CardDescription>
                        Comparing average waiting time, turnaround time, and response time
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ComparisonChart
                        data={chartData}
                        title="Performance Metrics"
                        yAxisLabel="Time (seconds)"
                      />
                    </CardContent>
                  </Card>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border hover:shadow-md transition-all">
                      <CardHeader className="text-center">
                        <CardTitle>Best Use Cases</CardTitle>
                        <CardDescription>When to use each algorithm</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                <Clock className="h-4 w-4" />
                              </span>
                              FCFS
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Best for batch systems where all processes arrive at the same time.
                            </p>
                          </div>
                          <div className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                <BarChart className="h-4 w-4" />
                              </span>
                              SJF
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Ideal for batch systems where process burst times are known in advance.
                            </p>
                          </div>
                          <div className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                <RefreshCw className="h-4 w-4" />
                              </span>
                              Round Robin
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Perfect for time-sharing systems requiring fair CPU allocation.
                            </p>
                          </div>
                          <div className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                <Award className="h-4 w-4" />
                              </span>
                              Priority
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Suitable for systems where some processes are more important than others.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border hover:shadow-md transition-all">
                      <CardHeader className="text-center">
                        <CardTitle>Key Considerations</CardTitle>
                        <CardDescription>Important factors to consider</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                              Process Characteristics
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Consider burst times, arrival times, and priorities when choosing an algorithm.
                            </p>
                          </div>
                          <div className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                              System Requirements
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Evaluate response time needs, fairness requirements, and overhead constraints.
                            </p>
                          </div>
                          <div className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                              Implementation Complexity
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Balance algorithm complexity with system performance requirements.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="visual" className="mt-6">
                <div className="space-y-8 max-w-6xl mx-auto">
                  <Card className="border hover:shadow-md transition-all">
                    <CardHeader className="text-center">
                      <CardTitle>Visual Comparison</CardTitle>
                      <CardDescription>Watch how different algorithms handle the same set of processes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex justify-center gap-4 flex-wrap">
                          <Button
                            variant={selectedAlgorithm === "fcfs" ? "default" : "outline"}
                            onClick={() => handleAlgorithmChange("fcfs")}
                            className="transition-all hover:shadow-sm group"
                          >
                            <Clock className="h-4 w-4 mr-2 group-hover:text-primary" />
                            FCFS
                          </Button>
                          <Button
                            variant={selectedAlgorithm === "sjf" ? "default" : "outline"}
                            onClick={() => handleAlgorithmChange("sjf")}
                            className="transition-all hover:shadow-sm group"
                          >
                            <BarChart className="h-4 w-4 mr-2 group-hover:text-primary" />
                            SJF
                          </Button>
                          <Button
                            variant={selectedAlgorithm === "round-robin" ? "default" : "outline"}
                            onClick={() => handleAlgorithmChange("round-robin")}
                            className="transition-all hover:shadow-sm group"
                          >
                            <RefreshCw className="h-4 w-4 mr-2 group-hover:text-primary" />
                            Round Robin
                          </Button>
                          <Button
                            variant={selectedAlgorithm === "priority" ? "default" : "outline"}
                            onClick={() => handleAlgorithmChange("priority")}
                            className="transition-all hover:shadow-sm group"
                          >
                            <Award className="h-4 w-4 mr-2 group-hover:text-primary" />
                            Priority
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setIsAnimating(true)}
                            className="transition-all hover:bg-primary/10 group"
                            aria-label="Refresh animation"
                          >
                            <RefreshCw className="h-4 w-4 group-hover:text-primary group-hover:animate-spin" />
                          </Button>
                        </div>
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg border bg-background p-4 shadow-sm">
                          <div className="absolute top-0 left-0 p-3 bg-muted/80 rounded-br-lg z-10 text-sm font-medium">
                            {selectedAlgorithm === "fcfs" && "First Come First Serve"}
                            {selectedAlgorithm === "sjf" && "Shortest Job First"}
                            {selectedAlgorithm === "round-robin" && "Round Robin"}
                            {selectedAlgorithm === "priority" && "Priority Scheduling"}
                          </div>
                          <AlgorithmAnimation type={selectedAlgorithm as any} defaultSpeed="slow" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore Individual Algorithms</h2>
                <p className="text-muted-foreground md:text-xl/relaxed mx-auto">
                  Dive deeper into each scheduling algorithm with detailed explanations and interactive demos.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mt-8 max-w-6xl mx-auto">
                <Button variant="outline" className="h-auto py-5 flex flex-col gap-2 hover:bg-background hover:shadow-md transition-all group" asChild>
                  <Link href="/fcfs">
                    <Clock className="h-6 w-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-lg">First Come First Serve</span>
                    <span className="text-xs text-muted-foreground">The simplest scheduling algorithm</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-5 flex flex-col gap-2 hover:bg-background hover:shadow-md transition-all group" asChild>
                  <Link href="/sjf">
                    <BarChart className="h-6 w-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-lg">Shortest Job First</span>
                    <span className="text-xs text-muted-foreground">Optimal average waiting time</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-5 flex flex-col gap-2 hover:bg-background hover:shadow-md transition-all group" asChild>
                  <Link href="/round-robin">
                    <RefreshCw className="h-6 w-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-lg">Round Robin</span>
                    <span className="text-xs text-muted-foreground">Fair CPU time allocation</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-5 flex flex-col gap-2 hover:bg-background hover:shadow-md transition-all group" asChild>
                  <Link href="/priority">
                    <Award className="h-6 w-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-lg">Priority Scheduling</span>
                    <span className="text-xs text-muted-foreground">Based on process importance</span>
                  </Link>
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

