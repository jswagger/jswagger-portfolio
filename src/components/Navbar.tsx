import React, { useEffect, useState } from 'react'
import { applyTheme, getInitialTheme, type ThemeMode } from '../theme'

export default function Navbar() {
  const [theme, setTheme] = useState<ThemeMode>('light')

  useEffect(() => {
    const initialTheme = getInitialTheme()
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const setThemeMode = (nextTheme: ThemeMode) => {
    setTheme(nextTheme)
    applyTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
  }

  return (
    <header className="site-header">
      <div className="container">
        <a className="brand" href="#top">
          jswagger
        </a>
        <div className="nav-group">
          <nav className="nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="theme-switch" role="group" aria-label="Theme switcher">
            <label className="theme-option">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={() => setThemeMode('light')}
              />
              <span>Light</span>
            </label>
            <label className="theme-option">
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={() => setThemeMode('dark')}
              />
              <span>Dark</span>
            </label>
          </div>
        </div>
      </div>
    </header>
  )
}
