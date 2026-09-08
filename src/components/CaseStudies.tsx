import React, { useEffect, useRef, useState } from 'react'
import agvanceImage from '../assets/Agvance.webp'

const caseStudies = [
  {
    title: 'AI Report Summarization',
    description: 'Integrating the power of AWS Bedrock to turn complex reports into clear, useful summaries.',
  },
  {
    title: 'UI Modernization',
    description: 'Lifting a legacy codebase with thoughtful React patterns and a more maintainable interface.',
  },
  {
    title: 'Enterprise Enrollment Process',
    description: 'Creating a clean, painless workflow for managing legal customer licensing and data enrollment.',
  },
]

export default function CaseStudies() {
  const [isRevealed, setIsRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  const [isBannerRevealed, setIsBannerRevealed] = useState(false)
  const bannerRef = useRef<HTMLImageElement | null>(null)

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

  useEffect(() => {
    const node = bannerRef.current
    if (!node) return

    if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
      setIsBannerRevealed(true)
      return
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBannerRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="content-section case-studies-section"
      id="case-studies"
      ref={sectionRef}
      data-reveal={isRevealed}
    >
      <div className="section-heading">
        <h1 className="section-label">Selected Work</h1>
        <h2>Evolving Software That Already Matters</h2>
        <p>
          For nearly a decade, I've worked within a mature enterprise application—adding new
          capabilities, modernizing its technology, and solving the complex problems that come
          with software people depend on every day.
        </p>
      </div>
      <img
        className="case-studies-banner"
        src={agvanceImage}
        alt="Agvance"
        ref={bannerRef}
        data-reveal={isBannerRevealed}
        loading="lazy"
      />
      <div className="case-studies-grid">
        {caseStudies.map((caseStudy) => (
          <a className="case-study-card" href="#" key={caseStudy.title}>
            <div className="case-study-card-image" aria-hidden="true" />
            <div className="case-study-card-content">
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.description}</p>
            </div>
            <span className="case-study-card-arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}