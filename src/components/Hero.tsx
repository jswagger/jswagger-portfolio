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
          <div className="hero-actions">
              View recent work
            <a href="#case-studies">
              <span className="hero-work-arrow" aria-hidden="true">
              →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
