import { useState } from 'react'

interface CaseStudyCarouselItem {
  title: string
  description: string
  href?: string
  image?: string
}

interface CaseStudyCarouselProps {
  items: CaseStudyCarouselItem[]
  onSelect: (item: CaseStudyCarouselItem) => void
}

const ANGLE_STEP = 26

export default function CaseStudyCarousel({ items, onSelect }: CaseStudyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2))

  const move = (direction: number) => {
    setActiveIndex((current) => {
      const next = current + direction
      return next >= 0 && next < items.length ? next : current
    })
  }

  return (
    <div className="case-carousel">
      <div className="case-carousel-stage">
        <div className="case-carousel-viewport">
          <div className="case-carousel-track">
            {items.map((item, index) => {
              const isActive = index === activeIndex
              const rotation = (index - activeIndex) * ANGLE_STEP

              return (
                <a
                  key={item.title}
                  href={item.href ?? '#'}
                  className={`case-carousel-card ${isActive ? 'is-active' : ''}`}
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    ...(item.image
                      ? { backgroundImage: `url(${item.image})` }
                      : undefined),
                  }}
                  aria-current={isActive}
                  aria-label={item.title}
                  onClick={(event) => {
                    event.preventDefault()
                    if (isActive) {
                      onSelect(item)
                    } else {
                      setActiveIndex(index)
                    }
                  }}
                >
                  <span className="case-carousel-banner">{item.title}</span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="case-carousel-overlay">
          <div className="case-carousel-nav">
            <button type="button" onClick={() => move(-1)} aria-label="Previous case study" disabled={activeIndex === 0}>
              ❮
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next case study"
              disabled={activeIndex === items.length - 1}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
