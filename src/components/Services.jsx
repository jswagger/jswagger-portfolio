import React from 'react'

const services = [
  {
    title: 'Enterprise architecture',
    description: 'Designing systems that are resilient, scalable, and maintainable from the ground up.'
  },
  {
    title: 'System optimization',
    description: 'Improving performance, reliability, and developer experience across existing platforms.'
  },
  {
    title: 'Full-stack delivery',
    description: 'Building modern web applications with React, Node.js, Python, and .NET where the product and architecture align.'
  },
  {
    title: 'Technical consulting',
    description: 'Helping teams make sound technical decisions with clear tradeoffs, strong standards, and practical execution.'
  }
]

export default function Services() {
  return (
    <section className="content-section section-muted" id="services">
      <div className="section-heading">
        <p className="section-label">Services</p>
        <h2>Support for teams that want dependable delivery and thoughtful systems.</h2>
      </div>
      <div className="card-grid">
        {services.map((service) => (
          <article key={service.title} className="info-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
