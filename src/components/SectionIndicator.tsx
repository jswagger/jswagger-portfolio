import { useEffect, useState } from 'react'

interface IndicatorSection {
  id: string
  label: string
}

const SECTIONS: IndicatorSection[] = [
  { id: 'top', label: 'Home' },
  { id: 'case-studies', label: 'Selected Work' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// Treats whichever section crosses the vertical middle of the viewport as active.
function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    if (typeof window.IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) setActiveId(visibleEntry.target.id)
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )

    ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)
      .forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [ids])

  return activeId
}

const SECTION_IDS = SECTIONS.map((section) => section.id)

export default function SectionIndicator() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <nav className="section-indicator" aria-label="Page sections">
      <ul>
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={id === activeId}>
              <span className="section-indicator-label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
