import React, { useEffect, useRef, useState } from 'react'
import { projects, projectsGIS, projectsLSC } from '../data/portfolioContent'
import ProjectAccordion from './ProjectAccordion'

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
        <h1>Experience</h1>
      </div>

      <div className="experience-container">
        <div className="experience-identity">
          <h2>Software Solutions Integrated (2022 - Present)</h2>
          <br />
          <h4>Senior Software Developer</h4>
        </div>

        <div className="role-header">
          <span className="identity-label">Roles</span>
        </div>

        <ProjectAccordion projects={projects} />
      </div>

      <div className="experience-container">
        <div className="experience-identity">
          <h2>GIS, inc. (2018 - 2022)</h2>
          <br />
          <h4>Geospatial Software Developer</h4>
        </div>

        <div className="role-header">
          <span className="identity-label">Roles</span>
        </div>

        <ProjectAccordion projects={projectsGIS} />
      </div>

      <div className="experience-container">
        <div className="experience-identity">
          <h2>Lake Superior Consulting (2011 - 2018)</h2>
          <br />
          <h4>GIS Supervisor</h4>
        </div>

        <div className="role-header">
          <span className="identity-label">Roles</span>
        </div>

        <ProjectAccordion projects={projectsLSC} />
      </div>
    </section>
  )
}
