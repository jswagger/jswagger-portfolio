import { useEffect, useRef, useState } from 'react'
import { applyTheme, getInitialTheme, type ThemeMode } from '../theme'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const initialTheme = getInitialTheme()
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 24
      setIsScrolled(scrolled)
      if (!scrolled) setIsMenuOpen(false)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const setThemeMode = (nextTheme: ThemeMode) => {
    setTheme(nextTheme)
    applyTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
  }

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`} ref={headerRef}>
      <div className="container">
        <a className="brand" href="#top" aria-label="Go to home">
          <img className="brand-mark" src="/favicon.png?v=4" alt="" aria-hidden="true" />
        </a>
        <div className="nav-group">
          <nav className="nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="nav-hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="nav-dropdown-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
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

      <div id="nav-dropdown-menu" className={`nav-dropdown${isMenuOpen ? ' is-open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
