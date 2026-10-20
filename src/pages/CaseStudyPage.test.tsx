import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import CaseStudyPage from './CaseStudyPage'
import { caseStudies } from '../data/caseStudies'
import { installMockIntersectionObserver } from '../test/intersectionObserver'

function renderAt(path: string) {
  installMockIntersectionObserver()
  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/work/:slug" element={<CaseStudyPage />} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('CaseStudyPage', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('shows the not-found page for an unknown slug', () => {
    renderAt('/work/does-not-exist')

    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
  })

  it('sets the document title from the case study', () => {
    const study = caseStudies[0]
    renderAt(`/work/${study.slug}`)

    expect(document.title).toBe(`${study.title} | Jeremy Swagger`)
  })

  it('pages through case studies and wraps around at both ends', () => {
    const first = caseStudies[0]
    const last = caseStudies[caseStudies.length - 1]

    renderAt(`/work/${first.slug}`)
    expect(screen.getByRole('link', { name: `Next: ${caseStudies[1].title}` })).toHaveAttribute('href', `/work/${caseStudies[1].slug}`)
    expect(screen.getByRole('link', { name: `Previous: ${last.title}` })).toHaveAttribute('href', `/work/${last.slug}`)
  })

  it('renders before/after code examples for a study that has them', () => {
    const study = caseStudies.find((item) => item.codeExamples)!
    const { container } = renderAt(`/work/${study.slug}`)
    const { examples } = study.codeExamples!

    expect(container.querySelectorAll('.code-example')).toHaveLength(examples.length)
    expect(container.querySelectorAll('.code-example-panel--before pre')).toHaveLength(examples.length)
    expect(container.querySelectorAll('.code-example-panel--after pre')).toHaveLength(examples.length)
  })
})
