import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ExperienceAccordion from '../src/components/ExperienceAccordion'
import type { CompanyExperience } from '../src/types/content'

const experiences: CompanyExperience[] = [
  {
    company: 'Acme Corp',
    dateRange: '2020-2022',
    jobTitle: 'Senior Engineer',
    highlights: ['Led migration'],
    tags: ['TypeScript'],
  },
  {
    company: 'Globex',
    dateRange: '2022-2024',
    jobTitle: 'Staff Engineer',
    highlights: ['Scaled infra'],
    tags: ['Go'],
  },
]

describe('ExperienceAccordion', () => {
  it('starts with every entry collapsed', () => {
    render(<ExperienceAccordion experiences={experiences} />)

    expect(screen.getByRole('button', { name: /acme corp/i })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: /globex/i })).toHaveAttribute('aria-expanded', 'false')
  })

  it('expands an entry on click and collapses it again on a second click', () => {
    render(<ExperienceAccordion experiences={experiences} />)
    const acme = screen.getByRole('button', { name: /acme corp/i })

    fireEvent.click(acme)
    expect(acme).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(acme)
    expect(acme).toHaveAttribute('aria-expanded', 'false')
  })

  it('switching to a different entry collapses the previous one', () => {
    render(<ExperienceAccordion experiences={experiences} />)
    const acme = screen.getByRole('button', { name: /acme corp/i })
    const globex = screen.getByRole('button', { name: /globex/i })

    fireEvent.click(acme)
    fireEvent.click(globex)

    expect(acme).toHaveAttribute('aria-expanded', 'false')
    expect(globex).toHaveAttribute('aria-expanded', 'true')
  })
})
