"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export default function ComparisonChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // Create new chart
    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
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
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Time (ms)",
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

