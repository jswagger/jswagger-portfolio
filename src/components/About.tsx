import React, { useEffect, useRef, useState } from 'react'
import { highlights } from '../data/portfolioContent'

export default function About() {
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
    <section className="content-section" id="about" ref={sectionRef} data-reveal={isRevealed}>
      <div className="section-heading">
        <p className="section-label">About</p>
        <h2>Combining modern agentic engineering with proven architectural strategies</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            For over a decade, I have engineered mission-critical web applications, 
            enterprise systems, and technical support frameworks. My career is defined 
            by building resilient, highly testable architecture that stands up to intense, 
            real-world production pressure.
          </p>
          <p>
            More than a coder, I am a full-cycle solution architect who uncovers edge cases, 
            protects against regression, and uses contextual guardrails to keep both 
            AI agents and human teams tightly aligned. I balance macro-level project ROI 
            with micro-level code health, ensuring every technical decision serves the 
            product vision through proactive, iterative communication.
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
