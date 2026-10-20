import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ExperienceAccordion from '../src/components/ExperienceAccordion'
import ProjectAccordion from '../src/components/ProjectAccordion'
import type { CompanyExperience, ProjectItem } from '../src/types/content'

const experiences: CompanyExperience[] = [
  { company: 'Acme Corp', dateRange: '2020-2022', jobTitle: 'Senior Engineer', highlights: ['Led migration'], tags: ['TypeScript'] },
  { company: 'Globex', dateRange: '2022-2024', jobTitle: 'Staff Engineer', highlights: ['Scaled infra'], tags: ['Go'] },
]

const projects: ProjectItem[] = [
  {
    title: 'Project One',
    roleType: 'Development',
    roleSummary: 'Built the thing',
    leadershipItems: [],
    sections: [{ label: 'Impact', items: ['Shipped fast'] }],
    tags: ['React'],
  },
  {
    title: 'Project Two',
    roleType: 'Leadership',
    roleSummary: 'Led the team',
    leadershipItems: ['Mentored engineers'],
    sections: [],
    tags: ['Leadership'],
  },
]

const expanded = (name: RegExp) => screen.getByRole('button', { name }).getAttribute('aria-expanded')

describe.each([
  {
    name: 'ExperienceAccordion',
    ui: () => <ExperienceAccordion experiences={experiences} />,
    first: /acme corp/i,
    second: /globex/i,
    initiallyOpen: false,
    canCollapse: true,
  },
  {
    name: 'ProjectAccordion',
    ui: () => <ProjectAccordion projects={projects} />,
    first: /project one/i,
    second: /project two/i,
    initiallyOpen: true,
    canCollapse: false,
  },
])('$name', ({ ui, first, second, initiallyOpen, canCollapse }) => {
  it('has the expected initial state', () => {
    render(ui())

    expect(expanded(first)).toBe(String(initiallyOpen))
    expect(expanded(second)).toBe('false')
  })

  it('opening another entry closes the previous one', () => {
    render(ui())

    if (!initiallyOpen) fireEvent.click(screen.getByRole('button', { name: first }))
    fireEvent.click(screen.getByRole('button', { name: second }))

    expect(expanded(first)).toBe('false')
    expect(expanded(second)).toBe('true')
  })

  it(canCollapse ? 'collapses an open entry on a second click' : 'keeps the active entry open when clicked again', () => {
    render(ui())
    const button = screen.getByRole('button', { name: second })

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', String(!canCollapse))
  })
})
