"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Process {
  id: number
  burstTime: number
  arrivalTime: number
  priority?: number
  color: string
}

interface AlgorithmAnimationProps {
  type: "overview" | "fcfs" | "sjf" | "round-robin" | "priority"
}

export default function AlgorithmAnimation({ type }: AlgorithmAnimationProps) {
  const [processes, setProcesses] = useState<Process[]>([])
  const [currentTime, setCurrentTime] = useState(0)
  const [timeQuantum] = useState(2)
  const [isPlaying, setIsPlaying] = useState(true)
  const animationRef = useRef<number | null>(null)
  const [executionOrder, setExecutionOrder] = useState<number[]>([])
  const [currentProcessIndex, setCurrentProcessIndex] = useState(0)
  const [remainingTime, setRemainingTime] = useState<number[]>([])

  // Generate random processes
  useEffect(() => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-orange-500",
    ]

    const newProcesses: Process[] = []
    const count = type === "overview" ? 8 : 5

    for (let i = 0; i < count; i++) {
      newProcesses.push({
        id: i + 1,
        burstTime: Math.floor(Math.random() * 8) + 1,
        arrivalTime: type === "fcfs" ? i * 2 : Math.floor(Math.random() * 5),
        priority: Math.floor(Math.random() * 5) + 1,
        color: colors[i % colors.length],
      })
    }

    setProcesses(newProcesses)

    // Initialize remaining time for each process
    setRemainingTime(newProcesses.map((p) => p.burstTime))

    // Calculate execution order based on algorithm type
    let order: number[] = []

    switch (type) {
      case "fcfs":
        // Sort by arrival time
        order = [...newProcesses].sort((a, b) => a.arrivalTime - b.arrivalTime).map((p) => p.id - 1)
        break

      case "sjf":
        // Sort by burst time
        order = [...newProcesses].sort((a, b) => a.burstTime - b.burstTime).map((p) => p.id - 1)
        break

      case "priority":
        // Sort by priority (lower number = higher priority)
        order = [...newProcesses].sort((a, b) => (a.priority || 5) - (b.priority || 5)).map((p) => p.id - 1)
        break

      case "round-robin":
        // Create round robin order
        const tempRemaining = newProcesses.map((p) => p.burstTime)
        let time = 0
        const rr: number[] = []

        while (tempRemaining.some((t) => t > 0)) {
          for (let i = 0; i < newProcesses.length; i++) {
            if (tempRemaining[i] > 0) {
              rr.push(i)
              tempRemaining[i] = Math.max(0, tempRemaining[i] - timeQuantum)
              time += Math.min(timeQuantum, tempRemaining[i] + timeQuantum)
            }
          }
        }

        order = rr
        break

      case "overview":
      default:
        // Mix of all algorithms for overview
        order = []
        for (let i = 0; i < newProcesses.length; i++) {
          order.push(i)
        }
        break
    }

    setExecutionOrder(order)
  }, [type, timeQuantum])

  // Animation loop
  useEffect(() => {
    if (!isPlaying || processes.length === 0 || executionOrder.length === 0) return

    const animate = () => {
      setCurrentTime((prevTime) => {
        const newTime = prevTime + 0.1

        // Update current process index based on time
        let totalTime = 0
        let newIndex = 0

        if (type === "round-robin") {
          // For round robin, we need to calculate based on time quantum
          const processIndex = Math.floor(newTime / timeQuantum) % executionOrder.length
          newIndex = Math.min(processIndex, executionOrder.length - 1)
        } else {
          // For other algorithms
          for (let i = 0; i < executionOrder.length; i++) {
            const processId = executionOrder[i]
            totalTime += processes[processId]?.burstTime || 0

            if (newTime <= totalTime) {
              newIndex = i
              break
            }
          }
        }

        setCurrentProcessIndex(newIndex)

        // Reset animation if we've gone through all processes
        if (newTime > 30) {
          return 0
        }

        return newTime
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, processes, executionOrder, type, timeQuantum])

  // Render different visualizations based on algorithm type
  const renderVisualization = () => {
    const currentProcessId = executionOrder[currentProcessIndex]

    return (
      <div className="h-full w-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-medium">Time: {currentTime.toFixed(1)}s</div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-xs px-2 py-1 rounded bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>

        {/* Timeline */}
        <div className="relative h-12 mb-6 bg-muted rounded-md overflow-hidden">
          <div
            className="absolute top-0 h-full bg-primary/20 transition-all duration-300"
            style={{ width: `${(currentTime / 30) * 100}%` }}
          />

          {type !== "round-robin" &&
            processes.map((process, index) => {
              // Calculate position based on burst times
              let position = 0
              for (let i = 0; i < index; i++) {
                position += (processes[i]?.burstTime || 0) / 30
              }

              return (
                <div
                  key={process.id}
                  className={`absolute top-0 h-full ${process.color} opacity-70`}
                  style={{
                    left: `${position * 100}%`,
                    width: `${(process.burstTime / 30) * 100}%`,
                  }}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    P{process.id}
                  </span>
                </div>
              )
            })}

          {type === "round-robin" &&
            executionOrder.slice(0, 10).map((processId, index) => {
              const process = processes[processId]
              if (!process) return null

              return (
                <div
                  key={`${process.id}-${index}`}
                  className={`absolute top-0 h-full ${process.color} opacity-70`}
                  style={{
                    left: `${((index * timeQuantum) / 30) * 100}%`,
                    width: `${(timeQuantum / 30) * 100}%`,
                  }}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    P{process.id}
                  </span>
                </div>
              )
            })}
        </div>

        {/* Process Queue */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-sm font-medium">Process Queue</div>
          <div className="flex-1 space-y-2 overflow-y-auto">
            {processes.map((process) => (
              <div
                key={process.id}
                className={`flex items-center p-2 rounded-md border ${
                  process.id - 1 === currentProcessId ? "border-primary" : "border-border"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full ${process.color} flex items-center justify-center text-white text-xs font-bold mr-2`}
                >
                  {process.id}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-xs">
                    <span>Burst: {process.burstTime}s</span>
                    <span>Arrival: {process.arrivalTime}s</span>
                    {type === "priority" && <span>Priority: {process.priority}</span>}
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <motion.div
                      className={`h-full rounded-full ${process.color}`}
                      initial={{ width: "0%" }}
                      animate={{
                        width:
                          process.id - 1 === currentProcessId
                            ? `${((currentTime % process.burstTime) / process.burstTime) * 100}%`
                            : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full bg-background rounded-lg p-4 overflow-hidden">
      {processes.length > 0 ? (
        renderVisualization()
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  )
}

