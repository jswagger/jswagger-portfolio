import React from 'react'

const projects = [
  {
    title: 'Enterprise web platform',
    description: 'Delivered scalable application architecture and frontend execution for business-critical workflows with a strong emphasis on maintainability.',
    tags: ['React', 'AWS', 'Architecture']
  },
  {
    title: 'Geospatial and operations systems',
    description: 'Built and improved systems that combine geospatial data, operational workflows, and dependable user experiences.',
    tags: ['GIS', 'Python', 'SQL']
  },
  {
    title: 'Legacy modernization initiatives',
    description: 'Led refactoring and optimization efforts that improved performance, reduced complexity, and increased team confidence in long-standing systems.',
    tags: ['C#', '.NET', 'Refactoring']
  }
]

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
