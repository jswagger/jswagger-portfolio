import { useState } from 'react'
import type { ProjectItem } from '../types/content'

interface ProjectAccordionProps {
  projects: ProjectItem[]
}

export default function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [activeTitle, setActiveTitle] = useState<string | null>(projects[0]?.title ?? null)

  return (
    <div className="project-list project-accordion">
      {projects.map((project, index) => {
        const isActive = activeTitle === project.title

        return (
          <article
            key={project.title}
            className={`project-card ${isActive ? 'is-active' : ''}`}
            style={{ '--card-index': index } as React.CSSProperties}
          >
            <button
              type="button"
              className="project-card-toggle"
              onClick={() => setActiveTitle(project.title)}
              aria-expanded={isActive}
            >
              <span className="project-card-shadow" aria-hidden="true" />

              <span className="project-card-label">
                <span className="project-card-icon">
                  {project.roleType === 'Leadership' ? 'L' : 'D'}
                </span>
                <span className="project-card-info">
                  <span className="project-card-main">{project.title}</span>
                  <span className="project-card-sub">{project.roleSummary}</span>
                </span>
              </span>
            </button>

            <div className="project-details">
              <div className="project-details-inner">
                {project.leadershipItems.length > 0 && (
                  <div className="project-section">
                    <h4>Leadership</h4>
                    <ul>
                      {project.leadershipItems.map((item) => (
                        <li key={`${project.title}-leadership-${item}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.sections.map((section) => (
                  <div key={section.label} className="project-section">
                    <h4>{section.label}</h4>
                    <ul>
                      {section.items.map((item) => (
                        <li key={`${section.label}-${item}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="tag-row">
                  {project.tags.map((tag) => (
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
