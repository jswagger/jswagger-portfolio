import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App'
import { afterEach, describe, it, expect, vi } from 'vitest'

describe('App', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the hero heading for the landing page', () => {
    render(<App />, { wrapper: MemoryRouter })
    expect(screen.getByText(/Thoughtfully engineering reliable software/i)).toBeTruthy()
  })

  it('renders a Strengths section with the expected tagline', () => {
    render(<App />, { wrapper: MemoryRouter })

    expect(screen.getAllByText(/Strengths/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Where experience makes a difference/i).length).toBeGreaterThan(0)
  })

  it('adds a compact header state after scrolling', async () => {
    const { container } = render(<App />, { wrapper: MemoryRouter })
    const header = container.querySelector('header')

    expect(header?.classList.contains('is-scrolled')).toBe(false)

    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 40,
    })

    window.dispatchEvent(new Event('scroll'))

    await waitFor(() => {
      expect(header?.classList.contains('is-scrolled')).toBe(true)
    })
  })

  it('activates the hero spotlight when the pointer enters the hero section', () => {
    // jsdom has no requestAnimationFrame; the spotlight hook only needs it to
    // schedule, not fire, so a no-op stub is enough for this assertion.
    vi.stubGlobal('requestAnimationFrame', () => 0)
    vi.stubGlobal('cancelAnimationFrame', () => {})

    const { container } = render(<App />, { wrapper: MemoryRouter })
    const heroSection = container.querySelector('#top')

    expect(heroSection).not.toBeNull()
    expect(heroSection?.classList.contains('hero-spotlight-active')).toBe(false)

    fireEvent.mouseEnter(heroSection as Element)
    fireEvent.mouseMove(heroSection as Element, { clientX: 120, clientY: 60 })

    expect(heroSection?.classList.contains('hero-spotlight-active')).toBe(true)
  })
})