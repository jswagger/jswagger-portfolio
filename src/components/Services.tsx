import React, { useEffect, useRef, useState } from 'react'
import { services, strengthStats } from '../data/portfolioContent'
import InfoCard from './InfoCard'
import StrengthStats from './StrengthStats'

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
    <section className="full-section section-muted" id="strengths" ref={sectionRef} data-reveal={isRevealed}>
      <div className="full-section-card">
        <div className="section-heading">
          <h2 className="section-label">Strengths</h2>
          <h3>Where experience makes a difference.

          </h3>
          <p>
            Experience has taught me that great software is built with intention, improved through collaboration, and designed to last.
          </p>
        </div>
        <StrengthStats stats={strengthStats} />
        <div className="card-grid">
          {services.map((service) => (
            <InfoCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
