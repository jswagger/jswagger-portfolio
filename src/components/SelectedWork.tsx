import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import CaseStudyHeroBlobs from './CaseStudyHeroBlobs'
import CaseStudyHeroMark from './CaseStudyHeroMark'
import { caseStudies } from '../data/caseStudies'

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
      <Navbar />

      <div className="case-study-hero">
        <CaseStudyHeroBlobs />
        <div className="case-study-hero-mask">
          <CaseStudyHeroMark />
        </div>
        <Link to="/#case-studies" className="case-study-page-back" aria-label="Back to selected work">
          ←
        </Link>
      </div>

      <div className="case-study-page-frame">
        <article className="case-study-page-article">
          <div className="case-study-page-header">
            <p className="case-study-page-tagline">{caseStudy.tagline}</p>
            <h1>{caseStudy.title}</h1>
            <div className="case-study-page-tags">
              {caseStudy.tags.map((tag) => (
                <span key={tag} className="case-study-page-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="case-study-page-body">
            {caseStudy.sections.map((section) => (
              <section key={section.heading} className="case-study-page-section">
                <h2>{section.heading}</h2>
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
        </article>

        <Link to={`/work/${nextCaseStudy.slug}`} className="case-study-page-next">
          Next project →
        </Link>
      </div>
    </main>
  )
}
