import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Reveal from './Reveal'
import { installMockIntersectionObserver } from '../test/intersectionObserver'

describe('Reveal', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('stays hidden until it scrolls into view, then stays revealed', () => {
    const MockObserver = installMockIntersectionObserver()
    const { container } = render(<Reveal>content</Reveal>)
    const wrapper = container.firstElementChild as HTMLElement

    expect(wrapper).toHaveAttribute('data-reveal', 'false')

    act(() => MockObserver.instances[0].trigger(false))
    expect(wrapper).toHaveAttribute('data-reveal', 'false')

    act(() => MockObserver.instances[0].trigger(true))
    expect(wrapper).toHaveAttribute('data-reveal', 'true')
  })

  it('shows content immediately when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const { container } = render(<Reveal>content</Reveal>)

    expect(container.firstElementChild).toHaveAttribute('data-reveal', 'true')
  })
})
