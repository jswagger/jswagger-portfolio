import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import CaseStudyMetricChart from './CaseStudyMetricChart'
import CaseStudyWorkflowVisual from './CaseStudyWorkflowVisual'
import { caseStudies } from '../data/caseStudies'
import type { CaseStudySection as CaseStudySectionData } from '../types/content'

const SECTION_ICON_PATHS: Record<string, ReactNode> = {
  Problem: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v6" />
      <path d="M12 16.5h.01" />
    </>
  ),
  Approach: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  Strategy: (
    <>
      <circle cx="6" cy="6" r="2.25" />
      <circle cx="6" cy="18" r="2.25" />
      <circle cx="18" cy="12" r="2.25" />
      <path d="m8.1 7.1 7.8 3.8" />
      <path d="m8.1 16.9 7.8 -3.8" />
    </>
  ),
  Result: (
    <>
      <path d="M4 19h16" />
      <path d="M7 19v-5" />
      <path d="M12 19v-9" />
      <path d="M17 19v-13" />
    </>
  ),
  'Value Added': (
    <>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m18.4 5.6-2.8 2.8" />
      <path d="m8.4 15.6-2.8 2.8" />
    </>
  ),
}

const SPLIT_LAYOUT_HEADINGS = new Set(Object.keys(SECTION_ICON_PATHS))

function SectionIcon({ heading }: { heading: string }) {
  return (
    <svg
      className="case-study-page-section-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {SECTION_ICON_PATHS[heading]}
    </svg>
  )
}

function BulletCheckIcon() {
  return (
    <svg
      className="case-study-page-check-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.5 2.5 2.5L16 9.5" />
    </svg>
  )
}

function CaseStudySection({ section }: { section: CaseStudySectionData }) {
  const content = (
    <>
      {section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {section.bullets && (
        <ul className="case-study-page-checklist">
          {section.bullets.map((bullet, index) => (
            <li key={index}>
              <BulletCheckIcon />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {section.metrics && (
        <div className="case-study-metrics">
          {section.metrics.map((metric) => (
            <CaseStudyMetricChart key={metric.label} metric={metric} />
          ))}
        </div>
      )}
      {section.images && (
        <div className="case-study-images">
          {section.images.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </>
  )

  if (SPLIT_LAYOUT_HEADINGS.has(section.heading)) {
    return (
      <section className="case-study-page-section case-study-page-section-split">
        <div className="case-study-page-section-label">
          <SectionIcon heading={section.heading} />
          <h2>{section.heading}</h2>
        </div>
        <div className="case-study-page-section-content">{content}</div>
      </section>
    )
  }

  return (
    <section className="case-study-page-section">
      <h2>{section.heading}</h2>
      {content}
    </section>
  )
}

export default function SelectedWork() {
  const { slug } = useParams()
  const caseStudyIndex = caseStudies.findIndex((study) => study.slug === slug)
  const caseStudy = caseStudies[caseStudyIndex]
  const nextCaseStudy = caseStudies[(caseStudyIndex + 1) % caseStudies.length]

  useEffect(() => {
    if (!caseStudy) return
    document.title = `${caseStudy.title} | Jeremy Swagger`
    window.scrollTo(0, 0)
  }, [caseStudy])

  if (!caseStudy) return <Navigate to="/" replace />

  return (
    <main className="case-study-page">
      <Navbar showBrand={false} />
      <Link
        to="/#case-studies"
        className="case-study-page-back case-study-page-back-header"
        aria-label="Back to selected work"
      >
        ←
      </Link>

      <div
        className="case-study-hero case-study-hero-photo"
        style={{
          backgroundImage: `url(${caseStudy.heroImage ?? caseStudy.image})`,
          ...(caseStudy.heroPosition ? { backgroundPosition: caseStudy.heroPosition } : {}),
        }}
      >
        <div className="case-study-hero-photo-content">
          <h1>{caseStudy.title}</h1>
          {caseStudy.heroSubtitle && <p>{caseStudy.heroSubtitle}</p>}
          <div className="case-study-page-tags">
            {caseStudy.tags.map((tag) => (
              <span key={tag} className="case-study-page-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="case-study-page-frame">
        <article className="case-study-page-article">
          {caseStudy.workflowVisual && <CaseStudyWorkflowVisual data={caseStudy.workflowVisual} />}

          <h2 className="section-label case-study-page-overview-label">Overview</h2>

          <div className="case-study-page-body">
            {caseStudy.sections.map((section) => (
              <CaseStudySection key={section.heading} section={section} />
            ))}
          </div>
        </article>

        <Link to={`/work/${nextCaseStudy.slug}`} className="case-study-page-next">
          Next project →
        </Link>
      </div>
    </main>
  )
}
