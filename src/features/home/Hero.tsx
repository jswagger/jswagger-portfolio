import { useRef } from 'react'
import heroImage from '../../assets/PortfolioBanner.PNG'
import useHeroIntroOnce from './useHeroIntroOnce'
import useHeroSpotlight from './useHeroSpotlight'

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  useHeroSpotlight(sectionRef)
  useHeroIntroOnce()

  return (
    <section
      className="hero-section"
      id="top"
      style={{ backgroundImage: `url(${heroImage})` }}
      ref={sectionRef}
    >
      <div className="hero-content">
        <div className="hero-copy-block">
          <p className="hero-intro-small hero-intro-small-top">Senior Software Engineer</p>
          <div className="hero-intro-main">
            <span className="hero-intro-circle" aria-hidden="true" />
            <span className="hero-intro-line hero-intro-line-left" aria-hidden="true" />
            <span className="hero-intro-line hero-intro-line-right" aria-hidden="true" />
            <span className="hero-intro-bracket hero-intro-bracket-left" aria-hidden="true" />
            <span className="hero-intro-bracket hero-intro-bracket-right" aria-hidden="true" />
            <h1 className="section-label">Jeremy Swagger</h1>
          </div>
          <h3 className="hero-intro-small hero-intro-small-bottom">
            Thoughtfully engineering reliable software to solve complex problems and build systems designed to last.
          </h3>
        </div>
      </div>

      <p className="hero-photo-credit">
        <span>Jeremy Working Remotely</span>
      </p>

      <a href="#case-studies" className="hero-scroll-indicator" aria-label="Scroll to selected work">
        <svg viewBox="0 0 40 64" width="40" height="64" fill="none" aria-hidden="true">
          <rect x="1.5" y="1.5" width="37" height="61" rx="18.5" className="hero-scroll-indicator-pill" />
          <path
            d="M20 22 L20 42 M13 35 L20 42 L27 35"
            className="hero-scroll-indicator-arrow"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  )
}
