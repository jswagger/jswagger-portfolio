import { describe, expect, it } from 'vitest'
import { caseStudies } from './caseStudies'

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
