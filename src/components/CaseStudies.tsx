import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CaseStudyCarousel from './CaseStudyCarousel'
import { caseStudies } from '../data/caseStudies'

const caseStudySummaries = caseStudies.map(({ title, summary, image, slug }) => ({
  title,
  description: summary,
  image,
  href: `/work/${slug}`,
}))

export default function CaseStudies() {
  const [isRevealed, setIsRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const navigate = useNavigate()

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
        <h2 className="section-label">Selected Work</h2>
        <h3>Evolving Software That Already Matters</h3>
        <p>
          For nearly a decade, I have played a key role in evolving a mature enterprise system by expanding its capabilities, modernizing its technology, and addressing the complex challenges associated with software that people rely on every day. Real-world systems. Meaningful constraints. Measurable improvements.
        </p>
      </div>
      <CaseStudyCarousel
        items={caseStudySummaries}
        onSelect={(item) => {
          if (item.href) navigate(item.href)
        }}
      />
    </section>
  )
}
