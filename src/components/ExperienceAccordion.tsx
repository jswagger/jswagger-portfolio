import { useState } from 'react'
import type { CompanyExperience } from '../types/content'

interface ExperienceAccordionProps {
  experiences: CompanyExperience[]
}

export default function ExperienceAccordion({ experiences }: ExperienceAccordionProps) {
  const [activeCompany, setActiveCompany] = useState<string | null>(null)

  return (
    <div className="project-list project-accordion">
      {experiences.map((entry, index) => {
        const isActive = activeCompany === entry.company

        return (
          <article
            key={entry.company}
            className={`project-card ${isActive ? 'is-active' : ''}`}
            style={{ '--card-index': index } as React.CSSProperties}
          >
            <button
              type="button"
              className="project-card-toggle"
              onClick={() => setActiveCompany(isActive ? null : entry.company)}
              aria-expanded={isActive}
            >
              <span className="project-card-shadow" aria-hidden="true" />

              <span className="project-card-label">
                <span className="project-card-info">
                  <span className="project-card-main">
                    {entry.company} ({entry.dateRange})
                  </span>
                  <span className="project-card-sub">{entry.jobTitle}</span>
                </span>
              </span>
            </button>

            <div className="project-details">
              <div className="project-details-inner">
                <div className="project-section">
                  <ul>
                    {entry.highlights.map((highlight) => (
                      <li key={`${entry.company}-${highlight}`}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="tag-row">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
