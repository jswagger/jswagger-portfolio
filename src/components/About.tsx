import { useEffect, useRef, useState } from 'react'
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
        <h3>Always curious. Always learning.</h3>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            Coding the day away latte in hand along the shores of the Emerald Coast, Florida. I love
            simplifying complex problems and enhancing user experience. My rule of thumb? If my kids
            can’t figure it out, let’s improve it.
          </p>
          <p>
            When I’m not coding, I’m exploring the outdoors, whether it’s hiking
            a scenic trail, wandering around charming towns, or discovering off the beaten path
            spots.
          </p>
          <p>
            Family is at the heart of my life. Raising teens alongside my wife means there’s never a
            dull moment, from cheering at soccer games to answering endless questions and heading
            out on camping adventures together.
          </p>
          <p>
            I’m a big fan of dark chocolate, beach sunsets, and engaging conversations. My curiosity drives everything I do; I enjoy understanding how ideas connect, asking thoughtful questions, and finding better ways to solve problems.
          </p>
          <p>And yes, all the photos on this site are my own captures from our adventures!</p>
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
