import heroImage from '../assets/hello-placeholder.PNG'
import portraitImage from '../assets/profile-2026.png'

const skills = ['JavaScript/React', 'Python', 'C#', 'AWS', 'Node.js', 'SQL']

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-banner" aria-label="Featured banner">
        <img className="hero-banner-image" src={heroImage} alt="Featured hero banner" />
        <div className="hero-banner-overlay">
          <span className="hero-banner-pill">Thoughtful engineering • Reliable solutions</span>
        </div>
      </div>
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
          <div className="chip-row" aria-label="Technologies I work with">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <img className="hero-portrait" src={portraitImage} alt="Jeremy Swagger portrait" />
        </div>
      </div>
    </section>
  )
}
