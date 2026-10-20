import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CaseStudyCarousel from './CaseStudyCarousel'

// Five items still means every title appears on two slots (the carousel
// renders 9 slots total), so tests target the interactive (non-hidden) copy.
const items = ['A', 'B', 'C', 'D', 'E'].map((title) => ({
  title,
  description: `${title} description`,
}))

function getActiveCard(container: HTMLElement) {
  return container.querySelector('.case-carousel-card.is-active') as HTMLElement
}

function getInteractiveCard(container: HTMLElement, label: string) {
  return container.querySelector(
    `.case-carousel-card[aria-label="${label}"][aria-hidden="false"]`,
  ) as HTMLElement
}

describe('CaseStudyCarousel', () => {
  it('starts with the middle item active', () => {
    const { container } = render(<CaseStudyCarousel items={items} onSelect={vi.fn()} />)
    expect(getActiveCard(container)).toHaveAttribute('aria-label', 'C')
  })

  it('clicking a non-active, interactive card activates it instead of selecting it', () => {
    const onSelect = vi.fn()
    const { container } = render(<CaseStudyCarousel items={items} onSelect={onSelect} />)

    fireEvent.click(getInteractiveCard(container, 'B'))

    expect(onSelect).not.toHaveBeenCalled()
    expect(getActiveCard(container)).toHaveAttribute('aria-label', 'B')
  })

  it('clicking the active card calls onSelect with that item', () => {
    const onSelect = vi.fn()
    const { container } = render(<CaseStudyCarousel items={items} onSelect={onSelect} />)

    fireEvent.click(getInteractiveCard(container, 'C'))

    expect(onSelect).toHaveBeenCalledWith(items[2])
  })

  it('the next/previous buttons move the active slot by one', () => {
    const { container } = render(<CaseStudyCarousel items={items} onSelect={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: /next case study/i }))
    expect(getActiveCard(container)).toHaveAttribute('aria-label', 'D')

    fireEvent.click(screen.getByRole('button', { name: /previous case study/i }))
    fireEvent.click(screen.getByRole('button', { name: /previous case study/i }))
    expect(getActiveCard(container)).toHaveAttribute('aria-label', 'B')
  })
})
