import { describe, expect, it } from 'vitest'
import { caseStudies } from './data/caseStudies'
import { render } from './entry-server'

// Rendering through the SSR entry exercises the same output the prerender
// script writes to dist/, so these also guard crawlability for non-JS readers.
const decode = (html: string) => html.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"')

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
