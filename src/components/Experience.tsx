import React, { useEffect, useRef, useState } from 'react'
import { projects } from '../data/portfolioContent'

export default function Experience() {
  const [isRevealed, setIsRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
      setIsRevealed(true)
      return
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="content-section" id="work" ref={sectionRef} data-reveal={isRevealed}>
      <div className="section-heading">
        <p className="section-label">Work</p>
        <h2>Experience</h2>
      </div>

      <div className="experience-identity">
        <div className="identity-block">
          <span className="identity-label">Employer</span>
          <h3>Software Solutions Integrated</h3>
        </div>
        <div className="identity-block">
          <span className="identity-label">Title</span>
          <h4>Senior Software Developer</h4>
        </div>
      </div>

      <div className="role-header">
        <span className="identity-label">Roles</span>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div>
              <div className="project-card-topline">
                <h3>{project.title}</h3>
                <span className={`role-pill ${project.roleType === 'leadership' ? 'leadership' : 'development'}`}>
                  {project.roleType === 'leadership' ? 'Leadership' : 'Full-Stack'}
                </span>
              </div>

              <p className="project-summary">{project.roleSummary}</p>

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
            <span aria-hidden="true">→</span>
          </article>
        ))}
      </div>
    </section>
  )
}
