import React from 'react'
import heroImage from '../assets/berchtesgaden.jpg'
import portraitImage from '../assets/profile-2026.png'
import textureImage from '../assets/hello-there-5.png'

const skills = ['JavaScript/React', 'Python', 'C#', 'AWS', 'Node.js', 'SQL']

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-content">
        <div className="hero-copy-block">
          <div className="hero-badge">Senior Software Developer • 10+ years</div>
          <h1>Innovative developer building scalable systems with clarity and purpose.</h1>
          <p className="hero-copy">
            I specialize in scalable web systems, enterprise architecture, and geospatial
            solutions. Known for bringing clean code principles, architectural rigor,
            and strategic simplicity to complex problems.
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
          <div className="hero-photo-card">
            <img className="hero-texture" src={textureImage} alt="Decorative background texture" />
            <img className="hero-portrait" src={portraitImage} alt="Jeremy Swagger portrait" />
            <img className="hero-nature" src={heroImage} alt="Scenic landscape view" />
          </div>
        </div>
      </div>
    </section>
  )
}
