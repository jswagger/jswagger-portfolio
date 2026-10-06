import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import Navbar from '../src/components/Navbar'

function renderNavbar() {
  return render(<Navbar />, { wrapper: MemoryRouter })
}

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
  })

  it('toggles the theme, persists it to localStorage, and updates the toggle label', () => {
    renderNavbar()

    const toggle = screen.getAllByRole('button', { name: /switch to light mode/i })[0]
    fireEvent.click(toggle)

    expect(window.localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    expect(screen.getAllByRole('button', { name: /switch to dark mode/i }).length).toBeGreaterThan(0)
  })

  it('adds the is-scrolled class once scrollY passes the threshold', () => {
    const { container } = renderNavbar()
    const header = container.querySelector('header')

    expect(header?.classList.contains('is-scrolled')).toBe(false)

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 40 })
    fireEvent.scroll(window)

    expect(header?.classList.contains('is-scrolled')).toBe(true)
  })

  it('opens the mobile menu and closes it again on a second click', () => {
    renderNavbar()
    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i })

    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when Escape is pressed', () => {
    renderNavbar()
    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i })

    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when clicking outside the header', () => {
    renderNavbar()
    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i })

    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseDown(document.body)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('omits the brand link when showBrand is false', () => {
    render(<Navbar showBrand={false} />, { wrapper: MemoryRouter })
    expect(screen.queryByLabelText('Go to home')).not.toBeInTheDocument()
  })
})
