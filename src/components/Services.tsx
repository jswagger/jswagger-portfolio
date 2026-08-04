import React from 'react'
import { services } from '../data/portfolioContent'

export default function Services() {
  return (
    <section className="content-section section-muted" id="services">
      <div className="section-heading">
        <p className="section-label">Services</p>
        <h2>Support for teams that value dependable delivery, thoughtful systems, and clear execution.</h2>
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
