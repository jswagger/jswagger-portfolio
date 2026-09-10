import React, { useEffect, useRef, useState } from 'react'
import { services } from '../data/portfolioContent'
import InfoCardTilt from './InfoCardTilt'

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
          <h1 className="section-label">Strengths</h1>
          <h2>What I bring to the table</h2>
        </div>
        <div className="card-grid">
          {services.map((service, index) => (
            <InfoCardTilt
              key={service.title}
              title={service.title}
              description={service.description}
              tone={(index % 3) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
