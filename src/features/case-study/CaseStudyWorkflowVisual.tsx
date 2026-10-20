import { useRef } from 'react'
import useHasEnteredView from '../../hooks/useHasEnteredView'
import type { WorkflowVisualData } from '../../types/content'
import WorkflowStep from './WorkflowStep'

interface CaseStudyWorkflowVisualProps {
  data: WorkflowVisualData
}

export default function CaseStudyWorkflowVisual({ data }: CaseStudyWorkflowVisualProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isRevealed = useHasEnteredView(containerRef, 0.3)

  return (
    <section className="workflow-visual" ref={containerRef} data-reveal={isRevealed}>
      <p className="workflow-visual-headline">{data.headline}</p>

      <div className="workflow-visual-flow">
        <div className="workflow-visual-line" aria-hidden="true" />
        {data.steps.map((step, index) => (
          <WorkflowStep key={step.label} step={step} index={index} />
        ))}
      </div>
    </section>
  )
}
