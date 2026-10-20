import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Contact from './Contact'
import { installMockIntersectionObserver } from '../../test/intersectionObserver'

describe('Contact', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('is not revealed until the section intersects the viewport', () => {
    const MockObserver = installMockIntersectionObserver()
    const { container } = render(<Contact />)
    const section = container.querySelector('#contact')

    expect(section).toHaveAttribute('data-reveal', 'false')

    act(() => {
      MockObserver.instances[0].trigger(true, section as Element)
    })

    expect(section).toHaveAttribute('data-reveal', 'true')
  })

  it('reveals immediately when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined)

    const { container } = render(<Contact />)
    const section = container.querySelector('#contact')

    expect(section).toHaveAttribute('data-reveal', 'true')
  })

  it('renders the contact email as a mailto link', () => {
    installMockIntersectionObserver()
    const { container } = render(<Contact />)

    expect(container.querySelector('a[href="mailto:jeremy.swagger@gmail.com"]')).not.toBeNull()
  })
})
