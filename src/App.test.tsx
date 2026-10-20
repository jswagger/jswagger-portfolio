import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { afterEach, describe, it, expect, vi } from 'vitest'

describe('App', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
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