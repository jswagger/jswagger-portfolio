import type { CSSProperties } from 'react'
import type { WorkflowVisualStep } from '../types/content'
import SystemNode from './SystemNode'

interface WorkflowStepProps {
  step: WorkflowVisualStep
  index: number
}

export default function WorkflowStep({ step, index }: WorkflowStepProps) {
  return (
    <div className="workflow-step" style={{ '--step-index': index } as CSSProperties}>
      <div className="workflow-step-node">
        <span className="workflow-step-dot" aria-hidden="true" />
        <span className="workflow-step-label">{step.label}</span>
      </div>
      <div className="workflow-step-systems">
        {step.systems.map((system) => (
          <SystemNode key={system} label={system} />
        ))}
      </div>
    </div>
  )
}
