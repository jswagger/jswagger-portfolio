import React from 'react'

export default function Contact() {
  return (
    <section className="content-section" id="contact">
      <div className="contact-card">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s build something thoughtful together.</h2>
        <p>
          I am currently open to conversations around architecture, systems work,
          and product delivery. If you are looking for a seasoned developer who
          values clarity, rigor, and practical outcomes, I would love to connect.
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
