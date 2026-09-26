import { useState, type CSSProperties } from 'react'

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

interface CarouselSlot {
  position: number
  offset: number
  item: CaseStudyCarouselItem
}

interface SlotAppearance {
  scale: number
  opacity: number
  brightness: number
}

// Indexed by distance from the active card. The outermost slot is invisible so
// cards can mount and unmount there while the row loops.
const SLOT_APPEARANCES: SlotAppearance[] = [
  { scale: 1.16, opacity: 1, brightness: 1 },
  { scale: 0.7, opacity: 1, brightness: 0.6 },
  { scale: 0.44, opacity: 0.8, brightness: 0.45 },
  { scale: 0.24, opacity: 0.45, brightness: 0.35 },
  { scale: 0.12, opacity: 0, brightness: 0.35 },
]
const RENDER_RANGE = SLOT_APPEARANCES.length - 1
const INTERACTIVE_RANGE = 2

const wrapIndex = (value: number, length: number) => ((value % length) + length) % length

const getVisibleSlots = (items: CaseStudyCarouselItem[], activePosition: number): CarouselSlot[] =>
  Array.from({ length: RENDER_RANGE * 2 + 1 }, (_, index) => {
    const offset = index - RENDER_RANGE
    const position = activePosition + offset
    return { position, offset, item: items[wrapIndex(position, items.length)] }
  })

// Sums the half-widths of every scaled card between the center and this slot so
// each neighboring pair is separated by the same --card-gap.
const getSlotTranslateX = (offset: number) => {
  const distance = Math.abs(offset)
  const widthsFromCenter = SLOT_APPEARANCES.slice(0, distance).reduce(
    (total, { scale }, index) => total + scale / 2 + SLOT_APPEARANCES[index + 1].scale / 2,
    0,
  )

  return `calc(${Math.sign(offset)} * (${widthsFromCenter} * var(--card-w) + ${distance} * var(--card-gap)))`
}

const getSlotStyle = ({ offset, item }: CarouselSlot): CSSProperties => {
  const distance = Math.abs(offset)
  const { scale, opacity, brightness } = SLOT_APPEARANCES[distance]

  return {
    transform: `translateX(${getSlotTranslateX(offset)}) scale(${scale})`,
    opacity,
    filter: `brightness(${brightness})`,
    zIndex: SLOT_APPEARANCES.length - distance,
    ...(item.image ? { backgroundImage: `url(${item.image})` } : undefined),
  }
}

interface CarouselCardProps {
  slot: CarouselSlot
  onActivate: () => void
  onSelect: () => void
}

function CarouselCard({ slot, onActivate, onSelect }: CarouselCardProps) {
  const isActive = slot.offset === 0
  const isInteractive = Math.abs(slot.offset) <= INTERACTIVE_RANGE

  return (
    <a
      href={slot.item.href ?? '#'}
      className={`case-carousel-card ${isActive ? 'is-active' : ''}`}
      style={getSlotStyle(slot)}
      aria-current={isActive}
      aria-label={slot.item.title}
      aria-hidden={!isInteractive}
      tabIndex={isInteractive ? undefined : -1}
      onClick={(event) => {
        event.preventDefault()
        if (isActive) {
          onSelect()
        } else {
          onActivate()
        }
      }}
    >
      <span className="case-carousel-banner">{slot.item.title}</span>
    </a>
  )
}

export default function CaseStudyCarousel({ items, onSelect }: CaseStudyCarouselProps) {
  const [activePosition, setActivePosition] = useState(Math.floor(items.length / 2))

  const move = (direction: number) => setActivePosition((current) => current + direction)
  const slots = getVisibleSlots(items, activePosition)

  return (
    <div className="case-carousel">
      <div className="case-carousel-stage">
        <div className="case-carousel-viewport">
          <div className="case-carousel-track">
            {slots.map((slot) => (
              <CarouselCard
                key={slot.position}
                slot={slot}
                onActivate={() => setActivePosition(slot.position)}
                onSelect={() => onSelect(slot.item)}
              />
            ))}
          </div>
        </div>

        <div className="case-carousel-overlay">
          <div className="case-carousel-nav">
            <button type="button" onClick={() => move(-1)} aria-label="Previous case study">
              ❮
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next case study">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
