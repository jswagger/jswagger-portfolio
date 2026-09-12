import { useEffect, useRef, useState } from 'react'
import CaseStudyCarousel from './CaseStudyCarousel'
import CaseStudyModal from './CaseStudyModal'
import { caseStudies } from '../data/caseStudies'
import type { CaseStudyDetail } from '../types/content'

const caseStudySummaries = caseStudies.map(({ title, summary, image }) => ({
  title,
  description: summary,
  image,
}))

export default function CaseStudies() {
  const [isRevealed, setIsRevealed] = useState(false)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyDetail | null>(null)
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
      <CaseStudyCarousel
        items={caseStudySummaries}
        onSelect={(item) => {
          const detail = caseStudies.find((caseStudy) => caseStudy.title === item.title)
          if (detail) setSelectedCaseStudy(detail)
        }}
      />
      <CaseStudyModal caseStudy={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
    </section>
  )
}
