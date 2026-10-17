import type { CSSProperties, ReactNode } from 'react'
import { Fragment, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import NotFound from './NotFound'
import { MetricComparisonCharts } from './MetricComparisonCharts'
import CaseStudyWorkflowVisual from './CaseStudyWorkflowVisual'
import StrengthStats from './StrengthStats'
import Reveal from './Reveal'
import ZoomableImage from './ZoomableImage'
import agvanceLogo from '../assets/AgvanceLogo.png'
import { caseStudies } from '../data/caseStudies'
import type { CaseStudySection as CaseStudySectionData } from '../types/content'

const SECTION_ICON_PATHS: Record<string, ReactNode> = {
  'The Challenge': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v6" />
      <path d="M12 16.5h.01" />
    </>
  ),
  'The Approach': (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  'The Strategy': (
    <>
      <circle cx="6" cy="6" r="2.25" />
      <circle cx="6" cy="18" r="2.25" />
      <circle cx="18" cy="12" r="2.25" />
      <path d="m8.1 7.1 7.8 3.8" />
      <path d="m8.1 16.9 7.8 -3.8" />
    </>
  ),
  'The Outcome': (
    <>
      <path d="M4 19h16" />
      <path d="M7 19v-5" />
      <path d="M12 19v-9" />
      <path d="M17 19v-13" />
    </>
  ),
  'The Value': (
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
  const images = section.images && (
    <div className={`case-study-images${section.imagesInCard ? ' case-study-images--card' : ''}`}>
      {section.imagesTitle && <h3 className="case-study-images-title">{section.imagesTitle}</h3>}
      {section.images.map((image) => (
        <figure key={image.src} className={image.narrow ? 'case-study-image--narrow' : undefined}>
          {image.narrow ? (
            <ZoomableImage src={image.src} alt={image.alt} />
          ) : (
            <img src={image.src} alt={image.alt} />
          )}
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
  const imagesIndex = section.imagesAfterParagraph

  const content = (
    <>
      {section.quote && <blockquote className="case-study-page-quote">{section.quote}</blockquote>}
      {section.paragraphs?.map((paragraph, index) => (
        <Fragment key={index}>
          <p>{paragraph}</p>
          {index === imagesIndex && images}
        </Fragment>
      ))}
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
        <MetricComparisonCharts metrics={section.metrics} />
      )}
      {imagesIndex === undefined && images}
    </>
  )

  if (SPLIT_LAYOUT_HEADINGS.has(section.heading)) {
    return (
      <section className="case-study-page-section case-study-page-section-split">
        <div className="case-study-page-section-heading">
          <div className="case-study-page-section-label">
            <SectionIcon heading={section.heading} />
            <h2>{section.heading}</h2>
          </div>
          {section.subtitle && <p className="case-study-page-section-subtitle">{section.subtitle}</p>}
        </div>
        <div className="case-study-page-section-content">{content}</div>
      </section>
    )
  }

  return (
    <section className="case-study-page-section">
      <h2>{section.heading}</h2>
      {section.subtitle && <p className="case-study-page-section-subtitle">{section.subtitle}</p>}
      {content}
    </section>
  )
}

export default function SelectedWork() {
  const { slug } = useParams()
  const caseStudyIndex = caseStudies.findIndex((study) => study.slug === slug)
  const caseStudy = caseStudies[caseStudyIndex]
  const nextCaseStudy = caseStudies[(caseStudyIndex + 1) % caseStudies.length]
  const prevCaseStudy = caseStudies[(caseStudyIndex - 1 + caseStudies.length) % caseStudies.length]

  useEffect(() => {
    if (!caseStudy) return
    document.title = `${caseStudy.title} | Jeremy Swagger`
    window.scrollTo(0, 0)
  }, [caseStudy])

  if (!caseStudy) return <NotFound />

  return (
    <main className="case-study-page" data-case-study={caseStudy.slug}>
      <Navbar showBrand={false} />
      <Link
        to="/"
        className="case-study-page-back case-study-page-back-header"
        aria-label="Home"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
        </svg>
      </Link>

      <div
        className="case-study-hero case-study-hero-photo"
        style={{
          backgroundImage: `url(${caseStudy.heroImage ?? caseStudy.image})`,
          ...(caseStudy.heroPosition ? { backgroundPosition: caseStudy.heroPosition } : {}),
        }}
      >
        <div className="case-study-hero-photo-content">
          <div className="hero-intro-main">
            <span className="hero-intro-circle" aria-hidden="true" />
            <span className="hero-intro-line hero-intro-line-left" aria-hidden="true" />
            <span className="hero-intro-line hero-intro-line-right" aria-hidden="true" />
            <h1 className="hero-fade-up" style={{ '--fade-delay': '0.2s' } as CSSProperties}>
              {caseStudy.title}
            </h1>
          </div>
          {caseStudy.heroSubtitle && (
            <p
              className="hero-intro-small hero-intro-small-bottom hero-fade-up"
              style={{ '--fade-delay': '0.5s' } as CSSProperties}
            >
              {caseStudy.heroSubtitle}
            </p>
          )}
          <div className="case-study-page-tags hero-fade-up" style={{ '--fade-delay': '0.8s' } as CSSProperties}>
            {caseStudy.tags.map((tag) => (
              <span key={tag} className="case-study-page-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {caseStudy.heroPhotoLocation && (
          <p className="case-study-hero-photo-credit">
            <span>{caseStudy.heroPhotoLocation}</span>
            <span>Photo: Jeremy Swagger</span>
          </p>
        )}
      </div>

      <div className="case-study-page-frame">
        <article className="case-study-page-article">
          <Reveal className="case-study-page-partner">
            {caseStudy.partnerLogo === 'github' ? (
              <svg viewBox="0 0 16 16" role="img" aria-label="GitHub" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            ) : (
              <img src={agvanceLogo} alt="Agvance" />
            )}
          </Reveal>

          {caseStudy.intro && (
            <Reveal>
              <p className="case-study-page-intro">{caseStudy.intro}</p>
            </Reveal>
          )}

          {caseStudy.introLink && (
            <Reveal className="case-study-page-intro-link">
              <a
                className="button button-primary"
                href={caseStudy.introLink.href}
                target="_blank"
                rel="noreferrer"
              >
                {caseStudy.introLink.label}
              </a>
            </Reveal>
          )}

          {caseStudy.stats && (
            <Reveal>
              <StrengthStats stats={caseStudy.stats} />
              {caseStudy.statsCaption && <p className="case-study-page-stats-caption">{caseStudy.statsCaption}</p>}
            </Reveal>
          )}

          {caseStudy.introImage && (
            <Reveal className={`case-study-images case-study-intro-image${caseStudy.introImage.wide ? ' case-study-intro-image--wide' : ''}${caseStudy.introImage.compact ? ' case-study-intro-image--compact' : ''}${caseStudy.introImage.fitMobile ? ' case-study-intro-image--fit-mobile' : ''}`}>
              {caseStudy.introImage.title && (
                <div className="case-study-intro-image-heading">
                  <h2>{caseStudy.introImage.title}</h2>
                  {caseStudy.introImage.subtitle && <p>{caseStudy.introImage.subtitle}</p>}
                </div>
              )}
              <figure>
                <picture>
                  {caseStudy.introImage.mobileSrc && (
                    <source media="(max-width: 640px)" srcSet={caseStudy.introImage.mobileSrc} />
                  )}
                  <img src={caseStudy.introImage.src} alt={caseStudy.introImage.alt} />
                </picture>
                {caseStudy.introImage.caption && <figcaption>{caseStudy.introImage.caption}</figcaption>}
              </figure>
            </Reveal>
          )}

          {caseStudy.workflowVisual && (
            <Reveal>
              <CaseStudyWorkflowVisual data={caseStudy.workflowVisual} />
            </Reveal>
          )}

          <div className="case-study-page-body">
            {caseStudy.sections.map((section) => (
              <Reveal key={section.heading}>
                <CaseStudySection section={section} />
              </Reveal>
            ))}
          </div>

          {caseStudy.codeImage && (
            <Reveal className="case-study-code-snippets">
              <div className="case-study-page-section-heading">
                <div className="case-study-page-section-label">
                  <h2>{caseStudy.codeImage.title}</h2>
                </div>
                {caseStudy.codeImage.subtitle && (
                  <p className="case-study-page-section-subtitle">{caseStudy.codeImage.subtitle}</p>
                )}
              </div>
              <figure>
                <img src={caseStudy.codeImage.src} alt={caseStudy.codeImage.alt} />
              </figure>
            </Reveal>
          )}

          {caseStudy.diagramImage && (
            <Reveal className="case-study-images case-study-diagram-image">
              <figure>
                <img src={caseStudy.diagramImage.src} alt={caseStudy.diagramImage.alt} />
                {caseStudy.diagramImage.caption && <figcaption>{caseStudy.diagramImage.caption}</figcaption>}
              </figure>
            </Reveal>
          )}
        </article>

        <nav className="case-study-page-pager" aria-label="More projects">
          <Link
            to={`/work/${prevCaseStudy.slug}`}
            className="case-study-page-next case-study-page-prev"
            aria-label={`Previous: ${prevCaseStudy.title}`}
          >
            ← Previous
          </Link>
          <Link
            to={`/work/${nextCaseStudy.slug}`}
            className="case-study-page-next"
            aria-label={`Next: ${nextCaseStudy.title}`}
          >
            Next →
          </Link>
        </nav>
      </div>
    </main>
  )
}
