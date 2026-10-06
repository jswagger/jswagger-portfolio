import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import SectionIndicator from '../src/components/SectionIndicator'
import { installMockIntersectionObserver } from './test-utils/intersectionObserver'

const SECTION_IDS = ['top', 'case-studies', 'strengths', 'about', 'work', 'contact']

function mountSections() {
  SECTION_IDS.forEach((id) => {
    const node = document.createElement('div')
    node.id = id
    document.body.appendChild(node)
  })
}

describe('SectionIndicator', () => {
  afterEach(() => {
    SECTION_IDS.forEach((id) => document.getElementById(id)?.remove())
  })

  it('marks Home as the active section by default', () => {
    mountSections()
    installMockIntersectionObserver()
    render(<SectionIndicator />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'false')
  })

  it('switches the active link when a different section intersects the viewport', () => {
    mountSections()
    const MockObserver = installMockIntersectionObserver()
    render(<SectionIndicator />)

    const aboutSection = document.getElementById('about') as Element

    act(() => {
      MockObserver.instances[0].trigger(true, aboutSection)
    })

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'false')
  })
})
