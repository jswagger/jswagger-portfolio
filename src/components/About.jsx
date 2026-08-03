import React from 'react'

const highlights = [
  { label: 'Experience', value: '10+ years' },
  { label: 'Location', value: 'Florida, USA' },
  { label: 'Specialties', value: 'Enterprise architecture & GIS systems' },
  { label: 'Philosophy', value: 'Keep it simple, keep it testable' }
]

export default function About() {
  return (
    <section className="content-section" id="about">
      <div className="section-heading">
        <p className="section-label">About</p>
        <h2>Bringing architectural rigor and strategic simplicity to complex systems.</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            Over the past decade, I have built mission-critical applications across
            utilities, e-commerce, and fintech. My focus has consistently been on
            delivering systems that are scalable, testable, and resilient under
            real-world pressure.
          </p>
          <p>
            I care deeply about clean code and architectural soundness, but I also
            believe the best technical decisions come from understanding context.
            That is why my approach is grounded in clarity, constraints, and
            thoughtful tradeoffs.
          </p>
          <p>
            My work spans full-stack development, system optimization, enterprise
            architecture, and geospatial solutions, with a strong foundation in
            JavaScript/React, Python, C#, and AWS.
          </p>
        </div>
        <div className="stats-list">
          {highlights.map((item) => (
            <div key={item.label} className="stat-card">
              <span className="stat-label">{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
