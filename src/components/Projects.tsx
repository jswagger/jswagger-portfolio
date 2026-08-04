import React, { useEffect, useRef, useState } from 'react'
import { projects } from '../data/portfolioContent'

export default function Projects() {
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
        <h2>Selected work shaped by architectural thinking and practical delivery.</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <a key={project.title} className="project-card" href="#contact">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  )
}
