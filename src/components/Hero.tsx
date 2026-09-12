import { useRef } from 'react'
import heroImage from '../assets/PortfolioBanner.PNG'
import portraitImage from '../assets/profile-2026.png'
import useHeroSpotlight from '../hooks/useHeroSpotlight'

const skills = ['JavaScript/React', 'Python', 'C#', 'AWS', 'Node.js', 'SQL']

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  useHeroSpotlight(sectionRef)

  return (
    <section
      className="hero-section"
      id="top"
      style={{ backgroundImage: `url(${heroImage})` }}
      ref={sectionRef}
    >
      <div className="hero-content">
        <div className="hero-copy-block">
          <h1>Jeremy Swagger</h1>
          <h2>Thoughtful Engineering, Reliable Software</h2>
          <p className="hero-copy">
            Senior Software Engineer focused on solving complex problems and building solutions that last.
          </p>
        </div>
      </div>

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
