import React, { useEffect, useState } from 'react'
import { applyTheme, getInitialTheme, type ThemeMode } from '../theme'

export default function Navbar() {
  const [theme, setTheme] = useState<ThemeMode>('dark')
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
          <button
            type="button"
            className="theme-toggle theme-option-bounce"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setThemeMode(theme === 'dark' ? 'light' : 'dark')}
          >
            <span aria-hidden="true" className="theme-symbol">
              {theme === 'dark' ? '☼' : '☾'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
