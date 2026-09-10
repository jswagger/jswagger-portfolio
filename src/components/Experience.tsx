import React, { useEffect, useRef, useState } from 'react'
import { experience } from '../data/portfolioContent'
import ExperienceAccordion from './ExperienceAccordion'

export default function Experience() {
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
    <section className="content-section" id="work" ref={sectionRef} data-reveal={isRevealed}>
      <div className="section-heading">
        <h1>Experience</h1>
      </div>

      <div className="experience-container">
        <div className="role-header">
          <span className="identity-label">Companies</span>
        </div>

        <ExperienceAccordion experiences={experience} />
      </div>
    </section>
  )
}
