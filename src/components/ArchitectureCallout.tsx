import type { WorkflowVisualArchitecture } from '../types/content'

interface ArchitectureCalloutProps {
  architecture: WorkflowVisualArchitecture
}

export default function ArchitectureCallout({ architecture }: ArchitectureCalloutProps) {
  return (
    <div className="architecture-callout">
      <p className="architecture-callout-question">{architecture.question}</p>
      <p className="architecture-callout-explanation">{architecture.explanation}</p>
      <div className="architecture-callout-diagram">
        {architecture.branches.map((branch) => (
          <div key={branch.label} className="architecture-branch">
            <span className="architecture-branch-label">{branch.label}</span>
            {branch.systems.map((system) => (
              <span key={system} className="architecture-branch-system">
                <span className="architecture-branch-arrow" aria-hidden="true">
                  ↓
                </span>
                {system}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
