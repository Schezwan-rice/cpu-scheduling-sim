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
  defaultSpeed?: "slow" | "normal" | "fast"
}

export default function AlgorithmAnimation({ 
  type, 
  defaultSpeed = "slow" 
}: AlgorithmAnimationProps) {
  const [processes, setProcesses] = useState<Process[]>([])
  const [currentTime, setCurrentTime] = useState(0)
  const [timeQuantum, setTimeQuantum] = useState(2)
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(() => {
    switch (defaultSpeed) {
      case "slow": return 0.5;
      case "normal": return 1;
      case "fast": return 2;
      default: return 0.5;
    }
  })
  const animationRef = useRef<number | null>(null)
  const [executionOrder, setExecutionOrder] = useState<number[]>([])
  const [currentProcessIndex, setCurrentProcessIndex] = useState(0)
  const [remainingTime, setRemainingTime] = useState<number[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [showControls, setShowControls] = useState(true)

  // Generate random processes with better distribution
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
        burstTime: Math.floor(Math.random() * 6) + 2, // Minimum burst time of 2
        arrivalTime: type === "fcfs" ? i * 2 : Math.floor(Math.random() * 4), // Reduced random arrival time range
        priority: Math.floor(Math.random() * 5) + 1,
        color: colors[i % colors.length],
      })
    }

    setProcesses(newProcesses)
    setRemainingTime(newProcesses.map((p) => p.burstTime))
    setIsComplete(false)
    setCurrentTime(0)
    setCurrentProcessIndex(0)

    // Calculate execution order based on algorithm type
    let order: number[] = []

    switch (type) {
      case "fcfs":
        order = [...newProcesses]
          .sort((a, b) => a.arrivalTime - b.arrivalTime)
          .map((p) => p.id - 1)
        break

      case "sjf":
        order = [...newProcesses]
          .sort((a, b) => {
            if (a.arrivalTime !== b.arrivalTime) return a.arrivalTime - b.arrivalTime
            return a.burstTime - b.burstTime
          })
          .map((p) => p.id - 1)
        break

      case "priority":
        order = [...newProcesses]
          .sort((a, b) => {
            if (a.arrivalTime !== b.arrivalTime) return a.arrivalTime - b.arrivalTime
            return (a.priority || 5) - (b.priority || 5)
          })
          .map((p) => p.id - 1)
        break

      case "round-robin":
        const tempRemaining = newProcesses.map((p) => p.burstTime)
        let time = 0
        const rr: number[] = []
        let hasActiveProcesses = true

        while (hasActiveProcesses) {
          hasActiveProcesses = false
          for (let i = 0; i < newProcesses.length; i++) {
            if (tempRemaining[i] > 0 && newProcesses[i].arrivalTime <= time) {
              hasActiveProcesses = true
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
        order = Array.from({ length: newProcesses.length }, (_, i) => i)
        break
    }

    setExecutionOrder(order)
  }, [type, timeQuantum])

  // Animation loop with improved timing and completion detection
  useEffect(() => {
    if (!isPlaying || processes.length === 0 || executionOrder.length === 0) return

    const animate = () => {
      setCurrentTime((prevTime) => {
        // Apply speed with a smoother transition factor based on selected speed
        const speedFactor = speed === 0.5 ? 0.05 : (speed === 1 ? 0.1 : 0.2);
        const newTime = prevTime + speedFactor;

        // Update current process index based on time
        let totalTime = 0;
        let newIndex = 0;

        if (type === "round-robin") {
          const processIndex = Math.floor(newTime / timeQuantum) % executionOrder.length
          newIndex = Math.min(processIndex, executionOrder.length - 1)
        } else {
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

        // Check if animation is complete
        const totalExecutionTime = processes.reduce((sum, p) => sum + p.burstTime, 0)
        if (newTime >= totalExecutionTime) {
          setIsComplete(true)
          setIsPlaying(false)
          return totalExecutionTime
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
  }, [isPlaying, processes, executionOrder, type, timeQuantum, speed])

  // Render different visualizations based on algorithm type
  const renderVisualization = () => {
    const currentProcessId = executionOrder[currentProcessIndex]
    const totalExecutionTime = processes.reduce((sum, p) => sum + p.burstTime, 0)

    return (
      <div className="h-full w-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-medium">Time: {currentTime.toFixed(1)}s</div>
          {showControls && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSpeed(0.5)}
                className={`text-xs px-2 py-1 rounded transition-colors ${
                  speed === 0.5 ? "bg-primary text-primary-foreground" : "bg-primary/10 hover:bg-primary/20"
                }`}
              >
                Slow
              </button>
              <button
                onClick={() => setSpeed(1)}
                className={`text-xs px-2 py-1 rounded transition-colors ${
                  speed === 1 ? "bg-primary text-primary-foreground" : "bg-primary/10 hover:bg-primary/20"
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => setSpeed(2)}
                className={`text-xs px-2 py-1 rounded transition-colors ${
                  speed === 2 ? "bg-primary text-primary-foreground" : "bg-primary/10 hover:bg-primary/20"
                }`}
              >
                Fast
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="ml-2 text-xs px-2 py-1 rounded bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          )}
        </div>

        {/* Timeline with improved visualization */}
        <div className="relative h-12 mb-6 bg-muted rounded-md overflow-hidden">
          <div
            className="absolute top-0 h-full bg-primary/20 transition-all duration-300"
            style={{ width: `${(currentTime / totalExecutionTime) * 100}%` }}
          />

          {type !== "round-robin" &&
            processes.map((process, index) => {
              let position = 0
              for (let i = 0; i < index; i++) {
                position += (processes[i]?.burstTime || 0) / totalExecutionTime
              }

              return (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute top-0 h-full ${process.color}`}
                  style={{
                    left: `${position * 100}%`,
                    width: `${(process.burstTime / totalExecutionTime) * 100}%`,
                  }}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    P{process.id}
                  </span>
                </motion.div>
              )
            })}

          {type === "round-robin" &&
            executionOrder.slice(0, Math.ceil(totalExecutionTime / timeQuantum)).map((processId, index) => {
              const process = processes[processId]
              if (!process) return null

              return (
                <motion.div
                  key={`${process.id}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute top-0 h-full ${process.color}`}
                  style={{
                    left: `${((index * timeQuantum) / totalExecutionTime) * 100}%`,
                    width: `${(timeQuantum / totalExecutionTime) * 100}%`,
                  }}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    P{process.id}
                  </span>
                </motion.div>
              )
            })}
        </div>

        {/* Process Queue with improved visibility */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-sm font-medium">Process Queue</div>
          <div className="flex-1 space-y-2 overflow-y-auto">
            {processes.map((process) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center p-2 rounded-md border ${
                  process.id - 1 === currentProcessId ? "border-primary bg-primary/5" : "border-border"
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Completion message */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Animation Complete</h3>
              <button
                onClick={() => {
                  setIsComplete(false)
                  setCurrentTime(0)
                  setCurrentProcessIndex(0)
                  setIsPlaying(true)
                }}
                className="text-sm px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Restart
              </button>
            </div>
          </motion.div>
        )}
      </div>
    )
  }

  return renderVisualization()
}

