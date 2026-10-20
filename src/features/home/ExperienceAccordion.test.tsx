import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ExperienceAccordion from './ExperienceAccordion'
import type { CompanyExperience } from '../../types/content'

const experiences: CompanyExperience[] = [
  { company: 'Acme Corp', dateRange: '2020-2022', jobTitle: 'Senior Engineer', highlights: ['Led migration'], tags: ['TypeScript'] },
  { company: 'Globex', dateRange: '2022-2024', jobTitle: 'Staff Engineer', highlights: ['Scaled infra'], tags: ['Go'] },
]

const entry = (name: RegExp) => screen.getByRole('button', { name })

describe('ExperienceAccordion', () => {
  it('starts with every entry collapsed', () => {
    render(<ExperienceAccordion experiences={experiences} />)

    expect(entry(/acme corp/i)).toHaveAttribute('aria-expanded', 'false')
    expect(entry(/globex/i)).toHaveAttribute('aria-expanded', 'false')
  })

  it('expands an entry on click and collapses it on a second click', () => {
    render(<ExperienceAccordion experiences={experiences} />)

    fireEvent.click(entry(/acme corp/i))
    expect(entry(/acme corp/i)).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(entry(/acme corp/i))
    expect(entry(/acme corp/i)).toHaveAttribute('aria-expanded', 'false')
  })

  it('opening another entry closes the previous one', () => {
    render(<ExperienceAccordion experiences={experiences} />)

    fireEvent.click(entry(/acme corp/i))
    fireEvent.click(entry(/globex/i))

    expect(entry(/acme corp/i)).toHaveAttribute('aria-expanded', 'false')
    expect(entry(/globex/i)).toHaveAttribute('aria-expanded', 'true')
  })
})
