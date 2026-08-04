import React, { useEffect, useRef, useState } from 'react'
import { services } from '../data/portfolioContent'

export default function Services() {
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
    <section className="content-section section-muted" id="services" ref={sectionRef} data-reveal={isRevealed}>
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
