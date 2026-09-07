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
          <div className="hero-badge">Senior Software Developer • 10+ years</div>
          <h1>Building dependable software with clarity, context, and craft.</h1>
          <p className="hero-copy">
            I architect robust enterprise solutions where stability meets velocity.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View recent work
            </a>
            <a className="button button-secondary" href="#contact">
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
