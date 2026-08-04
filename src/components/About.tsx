import React from 'react'
import { highlights } from '../data/portfolioContent'

export default function About() {
  return (
    <section className="content-section" id="about">
      <div className="section-heading">
        <p className="section-label">About</p>
        <h2>Bringing architectural rigor, clear thinking, and practical delivery to complex systems.</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            Over the past decade, I have built mission-critical applications across
            utilities, e-commerce, and fintech. My work has consistently focused on
            creating systems that are resilient, testable, and dependable under
            real-world pressure.
          </p>
          <p>
            I believe the best solutions come from understanding the full context first:
            the people involved, the constraints at play, and the long-term impact of
            the technical decisions being made. That is why my approach is grounded in
            clarity, strong fundamentals, and thoughtful tradeoffs.
          </p>
          <p>
            My experience spans full-stack development, system optimization, enterprise
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
