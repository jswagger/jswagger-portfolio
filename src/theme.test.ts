import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { applyTheme, getInitialTheme } from './theme'

function mockSystemTheme(prefersDark: boolean) {
  vi.stubGlobal('matchMedia', (query: string) => ({ matches: prefersDark && query.includes('dark') }))
}

describe('getInitialTheme', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('prefers a stored choice over the system setting', () => {
    mockSystemTheme(true)
    window.localStorage.setItem('theme', 'light')

    expect(getInitialTheme()).toBe('light')
  })

  it('ignores a corrupted stored value and falls back to the system setting', () => {
    mockSystemTheme(false)
    window.localStorage.setItem('theme', 'sepia')

    expect(getInitialTheme()).toBe('light')
  })

  it('follows the system setting when nothing is stored', () => {
    mockSystemTheme(true)
    expect(getInitialTheme()).toBe('dark')

    mockSystemTheme(false)
    expect(getInitialTheme()).toBe('light')
  })

  it('defaults to dark when matchMedia is unavailable', () => {
    vi.stubGlobal('matchMedia', undefined)

    expect(getInitialTheme()).toBe('dark')
  })
})

describe('applyTheme', () => {
  it('sets the data-theme attribute and the native color scheme', () => {
    applyTheme('light')

    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    expect(document.documentElement.style.colorScheme).toBe('light')
  })
})
