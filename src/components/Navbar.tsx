import React from 'react'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <a className="brand" href="#top">
          jswagger
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
