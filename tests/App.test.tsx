import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from '../src/App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders the hero heading for the landing page', () => {
    render(<App />)
    expect(screen.getByText(/Building dependable software with clarity, context, and craft/i)).toBeTruthy()
  })

  it('adds a compact header state after scrolling', async () => {
    const { container } = render(<App />)
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

  it('applies a parallax transform when the hero image is moved', () => {
    const { container } = render(<App />)
    const heroPhotoCard = container.querySelector('.hero-photo-card')

    expect(heroPhotoCard).not.toBeNull()

    fireEvent.mouseEnter(heroPhotoCard as Element)
    fireEvent.mouseMove(heroPhotoCard as Element, { clientX: 120, clientY: 60 })

    expect(heroPhotoCard?.classList.contains('is-hovered')).toBe(true)
  })
})