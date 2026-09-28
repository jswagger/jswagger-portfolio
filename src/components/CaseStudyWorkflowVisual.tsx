import { useEffect, useRef, useState, type RefObject } from 'react'
import type { WorkflowVisualData } from '../types/content'
import WorkflowStep from './WorkflowStep'
import ArchitectureCallout from './ArchitectureCallout'
import OutcomeMetric from './OutcomeMetric'

interface CaseStudyWorkflowVisualProps {
  data: WorkflowVisualData
}

// Flips to true once the element is mostly on screen, then stops watching.
function useHasEnteredView(ref: RefObject<HTMLElement | null>) {
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof window.IntersectionObserver === 'undefined') {
      setHasEntered(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setHasEntered(true)
        observer.disconnect()
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])

  return hasEntered
}

export default function CaseStudyWorkflowVisual({ data }: CaseStudyWorkflowVisualProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isRevealed = useHasEnteredView(containerRef)

  return (
    <section className="workflow-visual" ref={containerRef} data-reveal={isRevealed}>
      <p className="workflow-visual-headline">{data.headline}</p>

      <div className="workflow-visual-flow">
        <div className="workflow-visual-line" aria-hidden="true" />
        {data.steps.map((step, index) => (
          <WorkflowStep key={step.label} step={step} index={index} />
        ))}
      </div>

      <ArchitectureCallout architecture={data.architecture} />

      <OutcomeMetric outcome={data.outcome} />

      <p className="workflow-visual-caption">{data.caption}</p>
    </section>
  )
}
