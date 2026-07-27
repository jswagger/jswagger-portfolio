import React from 'react'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand">jswagger</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  )
}
