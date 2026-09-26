import React, { useEffect, useRef, useState } from 'react'
import { highlights } from '../data/portfolioContent'

export default function About() {
  const [isRevealed, setIsRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
      setIsRevealed(true)
      return
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="content-section" id="about" ref={sectionRef} data-reveal={isRevealed}>
      <div className="section-heading">
        <h2 className="section-label">About</h2>
        <h3>
          When I’m not building software, I’m usually building a life I enjoy with the people I
          love.
        </h3>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I love to travel and explore new places, whether that means hiking a new trail,
            wandering through an unfamiliar town, or finding a beautiful spot to spend the day.
            Having lived in Croatia and now calling Florida home, I’ve developed a strong
            appreciation for both European charm and life by the sea.
          </p>
          <p>
            Family time is my favorite kind of time. I enjoy discovering new places together and
            making the most of wherever we are.
          </p>
          <p>
            I’m also a big fan of green tea, engaging conversations, and learning something new,
            wherever I can find it.
          </p>
          <p>
            I bring that same curiosity into my work. I like understanding how things fit
            together, asking good questions, and continually learning how to make things better.
          </p>
        </div>
        <div className="stats-list">
          {highlights.map((item) => (
            <div key={item.label} className="stat-card">
              <span className="stat-label">{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
