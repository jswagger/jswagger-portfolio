import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { CaseStudyDetail } from '../types/content'

interface CaseStudyModalProps {
  caseStudy: CaseStudyDetail | null
  onClose: () => void
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!caseStudy) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [caseStudy, onClose])

  if (!caseStudy) return null

  return createPortal(
    <div className="case-study-modal-backdrop" onClick={onClose}>
      <div
        className="case-study-modal"
        role="dialog"
        aria-modal="true"
        aria-label={caseStudy.title}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="case-study-modal-close" onClick={onClose} aria-label="Close case study">
          ✕
        </button>

        <div className="case-study-modal-header">
          <p className="case-study-modal-tagline">{caseStudy.tagline}</p>
          <h2>{caseStudy.title}</h2>
          <div className="case-study-modal-tags">
            {caseStudy.tags.map((tag) => (
              <span key={tag} className="case-study-modal-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="case-study-modal-body">
          {caseStudy.sections.map((section) => (
            <section key={section.heading} className="case-study-modal-section">
              <h3>{section.heading}</h3>
              {section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  )
}
