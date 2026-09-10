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
    <section className="full-section section-muted" id="contact" ref={sectionRef} data-reveal={isRevealed}>
      <div className="contact-card">
        <h1 className="section-label">Contact</h1>
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
          <a
            className="social-icon-link"
            href="https://github.com/jswagger"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.286 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            className="social-icon-link"
            href="https://linkedin.com/in/jeremy-swagger"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.119 20.452H3.554V9h3.565v11.452z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
