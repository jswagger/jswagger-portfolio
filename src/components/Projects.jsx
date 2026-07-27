import React from 'react'

const sampleProjects = [
  {
    id: 1,
    title: 'Personal Website',
    description: 'A simple portfolio built with React and Vite',
    link: '#'
  },
  {
    id: 2,
    title: 'Open-source Library',
    description: 'Small utility library published to npm',
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <ul>
        {sampleProjects.map((p) => (
          <li key={p.id} className="project">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a className="project-link" href={p.link} aria-label={`Open ${p.title}`}>
              View
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
