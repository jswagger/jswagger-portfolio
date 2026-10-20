import { describe, expect, it } from 'vitest'
import { caseStudies } from '../src/data/caseStudies'
import { render } from '../src/entry-server'

// Rendering through the SSR entry exercises the same output the prerender
// script writes to dist/, so these also guard crawlability for non-JS readers.
const decode = (html: string) => html.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"')

describe('caseStudies data', () => {
  it('has unique, URL-safe slugs', () => {
    const slugs = caseStudies.map((study) => study.slug)

    expect(new Set(slugs).size).toBe(slugs.length)
    slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/))
  })

  it.each(caseStudies)('$slug has the fields every page and card depends on', (study) => {
    expect(study.title.trim()).not.toBe('')
    expect(study.summary.trim()).not.toBe('')
    expect(study.tags.length).toBeGreaterThan(0)
    expect(study.sections.length).toBeGreaterThan(0)
    study.sections.forEach((section) => expect(section.heading.trim()).not.toBe(''))
  })
})

describe('case study routes', () => {
  it.each(caseStudies)('/work/$slug renders its content as static HTML', (study) => {
    const html = decode(render(`/work/${study.slug}`))

    expect(html).toContain(`data-case-study="${study.slug}"`)
    expect(html).toContain(study.title)
    study.sections.forEach((section) => expect(html).toContain(`>${section.heading}</h2>`))
    if (study.intro) expect(html).toContain(study.intro)
  })

  it('renders the not-found page for an unknown slug', () => {
    const html = render('/work/does-not-exist')

    expect(html).not.toContain('data-case-study')
  })
})

describe('homepage prerender', () => {
  it('links to every case study', () => {
    const html = render('/')

    caseStudies.forEach((study) => expect(html).toContain(`href="/work/${study.slug}"`))
  })
})
