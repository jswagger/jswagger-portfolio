import { useEffect, useRef, useState } from 'react'

interface CaseStudyCarouselItem {
  title: string
  description: string
  href?: string
}

interface CaseStudyCarouselProps {
  items: CaseStudyCarouselItem[]
}

const ANGLE_STEP = 26
const WHEEL_THROTTLE_MS = 600

export default function CaseStudyCarousel({ items }: CaseStudyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2))
  const stageRef = useRef<HTMLDivElement | null>(null)

  const move = (direction: number) => {
    setActiveIndex((current) => {
      const next = current + direction
      return next >= 0 && next < items.length ? next : current
    })
  }

  useEffect(() => {
    const node = stageRef.current
    if (!node) return

    let lastScroll = 0
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      const now = Date.now()
      if (now - lastScroll < WHEEL_THROTTLE_MS) return
      lastScroll = now
      move(event.deltaY > 0 ? 1 : -1)
    }

    node.addEventListener('wheel', handleWheel, { passive: false })
    return () => node.removeEventListener('wheel', handleWheel)
  }, [items.length])

  const activeItem = items[activeIndex]

  return (
    <div className="case-carousel">
      <div className="case-carousel-stage" ref={stageRef}>
        <div className="case-carousel-track">
          {items.map((item, index) => {
            const isActive = index === activeIndex
            const rotation = (index - activeIndex) * ANGLE_STEP

            return (
              <a
                key={item.title}
                href={item.href ?? '#'}
                className={`case-carousel-card ${isActive ? 'is-active' : ''}`}
                style={{ transform: `rotate(${rotation}deg)` }}
                aria-current={isActive}
                aria-label={item.title}
                onClick={(event) => {
                  if (!isActive) {
                    event.preventDefault()
                    setActiveIndex(index)
                  }
                }}
              />
            )
          })}
        </div>

        <div className="case-carousel-overlay">
          <div className="case-carousel-caption">
            <h3>{activeItem.title}</h3>
            <p>{activeItem.description}</p>
          </div>

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
