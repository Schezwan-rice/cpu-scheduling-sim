import Link from "next/link"
import { Clock, BarChart, Users, Award, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AlgorithmAnimation from "@/components/algorithm-animation"
import ComparisonChart from "@/components/comparison-chart"

export default function ComparisonPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  CPU Scheduling Algorithms Comparison
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Compare the performance and characteristics of different CPU scheduling algorithms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="table" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="table">Table View</TabsTrigger>
                <TabsTrigger value="chart">Chart View</TabsTrigger>
                <TabsTrigger value="visual">Visual Demo</TabsTrigger>
              </TabsList>

              <TabsContent value="table" className="space-y-8">
                <div className="rounded-lg border">
                  <Table>
                    <TableCaption>Comparison of CPU Scheduling Algorithms</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Criteria</TableHead>
                        <TableHead>FCFS</TableHead>
                        <TableHead>SJF</TableHead>
                        <TableHead>Round Robin</TableHead>
                        <TableHead>Priority</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Algorithm Type</TableCell>
                        <TableCell>Non-preemptive</TableCell>
                        <TableCell>Both (SJF/SRTF)</TableCell>
                        <TableCell>Preemptive</TableCell>
                        <TableCell>Both</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Average Waiting Time</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Minimal</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Medium to High</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Response Time</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Low</TableCell>
                        <TableCell>Medium</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Turnaround Time</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Minimal</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Medium</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Starvation</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>Yes</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Overhead</TableCell>
                        <TableCell>Low</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Medium</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Fairness</TableCell>
                        <TableCell>Fair (order based)</TableCell>
                        <TableCell>Unfair to long processes</TableCell>
                        <TableCell>Fair (time based)</TableCell>
                        <TableCell>Unfair to low priority</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Predictability</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Low</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Medium</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Implementation</TableCell>
                        <TableCell>Simple</TableCell>
                        <TableCell>Complex</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Medium</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>FCFS</CardTitle>
                      <CardDescription>First Come First Serve</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Simple to implement</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>No starvation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <span>Poor average waiting time</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <span>Convoy effect</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>SJF</CardTitle>
                      <CardDescription>Shortest Job First</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Optimal average waiting time</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Good for batch systems</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <span>Starvation of long processes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <span>Requires burst time prediction</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Round Robin</CardTitle>
                      <CardDescription>Time Quantum Based</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Fair CPU allocation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Good response time</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <span>High context switching overhead</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <span>Time quantum selection is critical</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Priority</CardTitle>
                      <CardDescription>Priority Based</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Important processes run first</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Flexible priority assignment</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <span>Starvation of low priority processes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <span>Priority inversion problem</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="chart">
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Metrics Comparison</CardTitle>
                      <CardDescription>
                        Comparing average waiting time, turnaround time, and response time
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                      <ComparisonChart />
                    </CardContent>
                  </Card>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Best Use Cases</CardTitle>
                        <CardDescription>When to use each algorithm</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-medium flex items-center gap-2">
                              <Clock className="h-4 w-4" /> FCFS
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Best for simple batch systems where order of arrival is important and processes have
                              similar burst times.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium flex items-center gap-2">
                              <BarChart className="h-4 w-4" /> SJF
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Ideal for batch systems where process burst times are known in advance and minimizing
                              average waiting time is critical.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium flex items-center gap-2">
                              <Users className="h-4 w-4" /> Round Robin
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Perfect for time-sharing systems, interactive systems, and when fair CPU allocation is
                              required.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium flex items-center gap-2">
                              <Award className="h-4 w-4" /> Priority
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Best when certain processes need preferential treatment, such as real-time systems or
                              systems with varying process importance.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Real-World Applications</CardTitle>
                        <CardDescription>Where these algorithms are used</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-medium flex items-center gap-2">
                              <Clock className="h-4 w-4" /> Operating Systems
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Modern operating systems use variations of these algorithms. Windows uses multilevel
                              feedback queues, while Linux uses the Completely Fair Scheduler.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium flex items-center gap-2">
                              <BarChart className="h-4 w-4" /> Database Systems
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Database query schedulers often use priority-based algorithms to ensure critical
                              transactions are processed first.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium flex items-center gap-2">
                              <Users className="h-4 w-4" /> Web Servers
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Web servers use variations of Round Robin to handle multiple client requests fairly and
                              efficiently.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium flex items-center gap-2">
                              <Award className="h-4 w-4" /> Real-time Systems
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Embedded and real-time systems often use priority scheduling to ensure time-critical
                              operations are completed on schedule.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="visual">
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Visual Comparison</CardTitle>
                      <CardDescription>See how each algorithm schedules the same set of processes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-medium mb-2">FCFS</h3>
                          <div className="h-[200px] border rounded-lg p-2">
                            <AlgorithmAnimation type="fcfs" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2">SJF</h3>
                          <div className="h-[200px] border rounded-lg p-2">
                            <AlgorithmAnimation type="sjf" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2">Round Robin</h3>
                          <div className="h-[200px] border rounded-lg p-2">
                            <AlgorithmAnimation type="round-robin" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2">Priority</h3>
                          <div className="h-[200px] border rounded-lg p-2">
                            <AlgorithmAnimation type="priority" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Key Observations</CardTitle>
                      <CardDescription>What to notice in the visual demonstrations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="font-medium">Process Completion Order</h3>
                          <p className="text-sm text-muted-foreground">
                            Notice how the order of process completion varies significantly between algorithms. FCFS
                            follows arrival order, SJF prioritizes shorter processes, Round Robin alternates between
                            processes, and Priority follows priority levels.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Waiting Time</h3>
                          <p className="text-sm text-muted-foreground">
                            Observe how long processes wait in each algorithm. SJF typically has the shortest average
                            waiting time, while FCFS can have long waiting times for processes that arrive early but
                            have long burst times.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Response Time</h3>
                          <p className="text-sm text-muted-foreground">
                            Round Robin generally provides the best response time as each process gets a turn quickly,
                            while in FCFS, processes at the end of the queue may wait a long time for their first
                            execution.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Fairness</h3>
                          <p className="text-sm text-muted-foreground">
                            Round Robin is the most fair in terms of CPU time allocation, while SJF and Priority can
                            lead to starvation of certain processes.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore Individual Algorithms</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Dive deeper into each scheduling algorithm with detailed explanations and interactive demos.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mt-8">
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                  <Link href="/fcfs">
                    <Clock className="h-6 w-6" />
                    <span>First Come First Serve</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                  <Link href="/sjf">
                    <BarChart className="h-6 w-6" />
                    <span>Shortest Job First</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                  <Link href="/round-robin">
                    <Users className="h-6 w-6" />
                    <span>Round Robin</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                  <Link href="/priority">
                    <Award className="h-6 w-6" />
                    <span>Priority Scheduling</span>
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

