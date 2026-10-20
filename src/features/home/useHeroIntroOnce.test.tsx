import { render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

// The hook keeps module-level state (which hero owns the intro), so each test
// loads a fresh copy of it.
async function loadHero() {
  vi.resetModules()
  const { default: useHeroIntroOnce } = await import('./useHeroIntroOnce')
  return function Hero() {
    useHeroIntroOnce()
    return null
  }
}

describe('useHeroIntroOnce', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('data-hero-intro-seen')
    sessionStorage.clear()
  })

  it('lets the first hero play the intro and remembers it for the session', async () => {
    const Hero = await loadHero()
    render(<Hero />)

    expect(document.documentElement).not.toHaveAttribute('data-hero-intro-seen')
    expect(sessionStorage.getItem('heroIntroSeen')).toBe('1')
  })

  it('skips the intro for a hero mounted later in the same page load', async () => {
    const Hero = await loadHero()
    const first = render(<Hero />)
    first.unmount()

    render(<Hero />)

    expect(document.documentElement).toHaveAttribute('data-hero-intro-seen')
  })

  it('does nothing when the document is already flagged as seen', async () => {
    document.documentElement.setAttribute('data-hero-intro-seen', '')
    const Hero = await loadHero()
    render(<Hero />)

    expect(sessionStorage.getItem('heroIntroSeen')).toBeNull()
  })
})
