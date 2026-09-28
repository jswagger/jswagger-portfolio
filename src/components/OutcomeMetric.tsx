import type { WorkflowVisualOutcome } from '../types/content'

interface OutcomeMetricProps {
  outcome: WorkflowVisualOutcome
}

export default function OutcomeMetric({ outcome }: OutcomeMetricProps) {
  return (
    <div className="outcome-metric">
      <div className="outcome-metric-value">{outcome.value}</div>
      <div className="outcome-metric-label">{outcome.label}</div>
      <p className="outcome-metric-description">{outcome.description}</p>
    </div>
  )
}
