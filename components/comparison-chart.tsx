"use client"

import { useEffect, useRef } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface ComparisonChartProps {
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string
      borderColor: string
      borderWidth: number
    }[]
  }
  title: string
  yAxisLabel: string
}

export default function ComparisonChart({ data, title, yAxisLabel }: ComparisonChartProps) {
  const chartRef = useRef<ChartJS<"bar">>(null)

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}s`
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: yAxisLabel,
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          callback: function (value) {
            return value + "s"
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  }

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update()
    }
  }, [data])

  return (
    <div className="w-full h-[400px] p-4 bg-background rounded-lg border">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <Bar ref={chartRef} options={options} data={data} />
    </div>
  )
}

