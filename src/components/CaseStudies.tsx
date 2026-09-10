import React, { useEffect, useRef, useState } from 'react'
import CaseStudyCarousel from './CaseStudyCarousel'

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
  {
    title: 'Code Quality Automation',
    description: 'Building AI-driven review skills that hunt bugs and enforce quality before pull requests are opened.',
  },
  {
    title: 'Geospatial Mapping Platform',
    description: 'Building interactive ArcGIS-powered mapping tools that turn raw field data into clear, actionable spatial insight.',
  },
]

export default function CaseStudies() {
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
      <CaseStudyCarousel items={caseStudies} />
    </section>
  )
}