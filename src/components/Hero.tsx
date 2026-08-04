import React, { useState } from 'react'
import heroImage from '../assets/berchtesgaden.jpg'
import portraitImage from '../assets/profile-2026.png'
import textureImage from '../assets/hello-there-5.png'

const skills = ['JavaScript/React', 'Python', 'C#', 'AWS', 'Node.js', 'SQL']

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12
    setPointer({ x, y })
  }

  return (
    <section className="hero-section" id="top">
      <div className="hero-content">
        <div className="hero-copy-block">
          <div className="hero-badge">Senior Software Developer • 10+ years</div>
          <h1>Building dependable software with clarity, context, and craft.</h1>
          <p className="hero-copy">
            I create web systems and enterprise solutions that are grounded in thoughtful
            architecture, practical tradeoffs, and a strong bias for reliability. I use
            modern tools responsibly, but I never compromise on quality, maintainability,
            or user experience.
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
          <div
            className={`hero-photo-card${isHovered ? ' is-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false)
              setPointer({ x: 0, y: 0 })
            }}
            onMouseMove={handleMouseMove}
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateY(${pointer.x}deg) rotateX(${-pointer.y}deg) translateY(-4px)`
                : undefined,
            }}
          >
            <img className="hero-texture" src={textureImage} alt="Decorative background texture" />
            <img className="hero-portrait" src={portraitImage} alt="Jeremy Swagger portrait" />
            <img className="hero-nature" src={heroImage} alt="Scenic landscape view" />
          </div>
        </div>
      </div>
    </section>
  )
}
