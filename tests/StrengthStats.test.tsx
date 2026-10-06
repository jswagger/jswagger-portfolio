import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import StrengthStats from '../src/components/StrengthStats'
import type { StrengthStat } from '../src/types/content'
import { installMockIntersectionObserver } from './test-utils/intersectionObserver'

const stats: StrengthStat[] = [{ value: 120, suffix: '+', emphasis: 'Projects', label: 'shipped' }]

function installMockRaf() {
  let pending: FrameRequestCallback[] = []
  vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
    pending.push(cb)
    return pending.length
  })
  vi.stubGlobal('cancelAnimationFrame', () => {})

  return {
    flush(now: number) {
      const callbacks = pending
      pending = []
      callbacks.forEach((cb) => cb(now))
    },
  }
}

describe('StrengthStats', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('always exposes the real value to screen readers, regardless of animation state', () => {
    installMockIntersectionObserver()
    installMockRaf()
    render(<StrengthStats stats={stats} />)

    expect(screen.getByText(/120\+ Projects shipped/i)).toBeInTheDocument()
  })

  it('drops the visible count to 0 until the stats scroll into view, then counts up to the target', () => {
    const MockObserver = installMockIntersectionObserver()
    const raf = installMockRaf()
    const { container } = render(<StrengthStats stats={stats} />)
    const numberNode = () => container.querySelector('.strength-stat-number') as HTMLElement

    expect(numberNode().textContent).toBe('0+')

    act(() => {
      MockObserver.instances[0].trigger(true)
    })
    act(() => {
      raf.flush(0)
    })

    act(() => {
      raf.flush(1600)
    })

    expect(numberNode().textContent).toBe('120+')
  })
})
