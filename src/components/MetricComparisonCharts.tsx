import type { MetricComparison } from '../types/metricComparison'
import './MetricComparisonCharts.css'

const BAR_MAX_PERCENT = 76

const formatDuration = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

const formatValue = (value: number, format: MetricComparison['valueFormat']): string =>
  format === 'duration' ? formatDuration(value) : value.toLocaleString('en-US')

const getPercentImprovement = (original: number, updated: number): number =>
  Math.round((1 - updated / original) * 100)

interface MetricBarRowProps {
  label: string
  value: string
  share: number
  variant: 'original' | 'updated'
}

const MetricBarRow = ({ label, value, share, variant }: MetricBarRowProps) => (
  <div>
    <div className="metric-row-label">{label}</div>
    <div className="metric-row-line">
      <div
        className={`metric-bar metric-bar--${variant}`}
        style={{ width: `${share * BAR_MAX_PERCENT}%` }}
        aria-hidden="true"
      />
      <span className="metric-row-value">{value}</span>
    </div>
  </div>
)

interface MetricComparisonCardProps {
  metric: MetricComparison
}

const MetricComparisonCard = ({ metric }: MetricComparisonCardProps) => {
  const { icon, title, original, updated, valueFormat, improvementLabel, deltaLabel } = metric
  const percent = getPercentImprovement(original, updated)
  const delta = (original - updated).toLocaleString('en-US')

  return (
    <article className="metric-card">
      <h3 className="metric-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h3>
      <p className="metric-hero">
        <strong>~{percent}%</strong> {improvementLabel}
      </p>
      <div className="metric-rows">
        <MetricBarRow label="Original" value={formatValue(original, valueFormat)} share={1} variant="original" />
        <MetricBarRow label="New" value={formatValue(updated, valueFormat)} share={updated / original} variant="updated" />
      </div>
      <p className="metric-footer">
        {delta} {deltaLabel} per batch
      </p>
    </article>
  )
}

interface MetricComparisonChartsProps {
  metrics: MetricComparison[]
}

export const MetricComparisonCharts = ({ metrics }: MetricComparisonChartsProps) => (
  <div className="metric-grid">
    {metrics.map((metric) => (
      <MetricComparisonCard key={metric.id} metric={metric} />
    ))}
  </div>
)
