import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProjectAccordion from '../src/components/ProjectAccordion'
import type { ProjectItem } from '../src/types/content'

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

describe('ProjectAccordion', () => {
  it('expands the first project by default', () => {
    render(<ProjectAccordion projects={projects} />)

    expect(screen.getByRole('button', { name: /project one/i })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /project two/i })).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches the active project on click, always leaving exactly one open', () => {
    render(<ProjectAccordion projects={projects} />)

    fireEvent.click(screen.getByRole('button', { name: /project two/i }))

    expect(screen.getByRole('button', { name: /project one/i })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: /project two/i })).toHaveAttribute('aria-expanded', 'true')
  })

  it('does not collapse the active project when it is clicked again', () => {
    render(<ProjectAccordion projects={projects} />)

    const first = screen.getByRole('button', { name: /project one/i })
    fireEvent.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'true')
  })
})
