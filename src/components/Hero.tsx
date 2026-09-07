import heroImage from '../assets/PortfolioBanner.PNG'
import portraitImage from '../assets/profile-2026.png'

const skills = ['JavaScript/React', 'Python', 'C#', 'AWS', 'Node.js', 'SQL']

export default function Hero() {
  return (
    <section
      className="hero-section"
      id="top"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <div className="hero-copy-block">
          <h1>Jeremy Swagger</h1>
          <h2>Thoughtful Engineering, Reliable Software</h2>
          <p className="hero-copy">
            Senior Software Engineer focused on solving complex problems and building solutions that last.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View recent work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
