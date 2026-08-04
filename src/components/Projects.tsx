import React from 'react'
import { projects } from '../data/portfolioContent'

export default function Projects() {
  return (
    <section className="content-section" id="work">
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
