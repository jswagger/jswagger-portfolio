import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip } from 'chart.js'
import type { CaseStudyMetric } from '../types/content'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

interface ThemeColors {
  accent: string
  accentSoft: string
  text: string
  border: string
}

function readThemeColors(): ThemeColors {
  const styles = getComputedStyle(document.documentElement)
  return {
    accent: styles.getPropertyValue('--accent').trim() || '#966844',
    accentSoft: styles.getPropertyValue('--accent-soft').trim() || '#324b5f',
    text: styles.getPropertyValue('--text').trim() || '#f6f5f1',
    border: styles.getPropertyValue('--border').trim() || '#415a77',
  }
}

interface CaseStudyMetricChartProps {
  metric: CaseStudyMetric
}

export default function CaseStudyMetricChart({ metric }: CaseStudyMetricChartProps) {
  const [colors, setColors] = useState<ThemeColors>(readThemeColors)

  useEffect(() => {
    const observer = new MutationObserver(() => setColors(readThemeColors()))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  const displayValues = metric.rows.map((row) => row.value)

  const data = {
    labels: metric.rows.map((row) => row.version),
    datasets: [
      {
        data: metric.rows.map((row) => row.numericValue),
        backgroundColor: metric.rows.map((_, index) => (index === 0 ? colors.accentSoft : colors.accent)),
        borderRadius: 6,
        maxBarThickness: 48,
      },
    ],
  }

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: { dataIndex: number }) => displayValues[context.dataIndex],
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { color: colors.border },
        ticks: { color: colors.text },
      },
      y: {
        grid: { display: false },
        ticks: { color: colors.text, font: { weight: 600 as const } },
      },
    },
  }

  return (
    <div className="case-study-metric-chart">
      <p className="case-study-metric-chart-label">{metric.label}</p>
      <div className="case-study-metric-chart-canvas">
        <Bar data={data} options={options} />
      </div>
      <p className="case-study-metric-chart-improvement">{metric.improvement}</p>
    </div>
  )
}
