import React, { useEffect, useRef, useState } from 'react'

export default function Contact() {
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
    <section className="content-section" id="contact" ref={sectionRef} data-reveal={isRevealed}>
      <div className="contact-card">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s build something thoughtful, resilient, and well considered.</h2>
        <p>
          I am currently open to conversations around architecture, systems work,
          and product delivery. If you value clear thinking, disciplined execution,
          and software that holds up in the real world, I would love to connect.
        </p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:jeremy.swagger@gmail.com">
            jeremy.swagger@gmail.com
          </a>
          <a className="button button-secondary" href="https://github.com/jswagger" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button button-secondary" href="https://linkedin.com/in/jeremy-swagger" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
