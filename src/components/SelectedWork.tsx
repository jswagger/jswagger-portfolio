import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import CaseStudyMetricChart from './CaseStudyMetricChart'
import CaseStudyWorkflowVisual from './CaseStudyWorkflowVisual'
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
        </div>
      </div>

      <div className="case-study-page-frame">
        <article className="case-study-page-article">
          <div className="case-study-page-header">
            <div className="case-study-page-tags">
              {caseStudy.tags.map((tag) => (
                <span key={tag} className="case-study-page-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {caseStudy.workflowVisual && <CaseStudyWorkflowVisual data={caseStudy.workflowVisual} />}

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
