import React, { useEffect, useState } from 'react'
import { applyTheme, getInitialTheme, type ThemeMode } from '../theme'

export default function Navbar() {
  const [theme, setTheme] = useState<ThemeMode>('light')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const initialTheme = getInitialTheme()
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const setThemeMode = (nextTheme: ThemeMode) => {
    setTheme(nextTheme)
    applyTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
  }

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container">
        <a className="brand" href="#top" aria-label="Go to home">
          <img className="brand-mark" src="/favicon.png?v=4" alt="" aria-hidden="true" />
          <span>jeremy swagger</span>
        </a>
        <div className="nav-group">
          <nav className="nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="theme-switch" role="group" aria-label="Theme switcher">
            <label className="theme-option theme-option-bounce">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={() => setThemeMode('light')}
              />
              <span>Light</span>
            </label>
            <label className="theme-option theme-option-bounce">
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
