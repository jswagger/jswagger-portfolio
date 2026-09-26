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

<svg className="brand-mark" viewBox="0 0 32 32" style={{ width: '32px', height: '32px' }}>
  <rect width="32" height="32" rx="6" fill="#111825" />
  <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
    {/* Corrected Left-Hooking J */}
    <path d="M15 9H11M15 9V20C15 22.2 13.2 24 11 24C8.8 24 7 22.2 7 20" stroke="#324b5f" />
    {/* Full Standalone S */}
    <path d="M25 11.5C25 10.1 23.9 9 22.5 9H20.5C19.1 9 18 10.1 18 11.5C18 12.9 19.1 14 20.5 14H22.5C23.9 14 25 15.1 25 16.5C25 17.9 23.9 19 22.5 19H20.5C19.1 19 18 17.9 18 16.5" stroke="#966844" />
  </g>
</svg>

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
            className="theme-toggle theme-toggle-header theme-option-bounce"
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
        <button
          type="button"
          className="theme-toggle theme-toggle-dropdown theme-option-bounce"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setThemeMode(theme === 'dark' ? 'light' : 'dark')}
        >
          <span aria-hidden="true" className="theme-symbol">
            {theme === 'dark' ? '☼' : '☾'}
          </span>
          <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
        </button>
      </div>
    </header>
  )
}
