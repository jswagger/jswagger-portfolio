import { useState, type CSSProperties, type ReactNode } from 'react'
import type { CaseStudyCardIcon } from '../../types/content'

interface CaseStudyCarouselItem {
  title: string
  description: string
  href?: string
  image?: string
  icon?: CaseStudyCardIcon
  subtitle?: string
}

interface CaseStudyCarouselProps {
  items: CaseStudyCarouselItem[]
  onSelect: (item: CaseStudyCarouselItem) => void
}

const CARD_ICON_PATHS: Record<CaseStudyCardIcon, ReactNode> = {
  sparkles: (
    <>
      <path d="M10 4l1.8 4.7L16.5 10.5l-4.7 1.8L10 17l-1.8-4.7L3.5 10.5l4.7-1.8z" />
      <path d="M18 3v4" />
      <path d="M16 5h4" />
      <path d="M18 17v4" />
      <path d="M16 19h4" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 9v11" />
    </>
  ),
  'user-check': (
    <>
      <circle cx="9" cy="8" r="4" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="m16 11 2 2 4-4" />
    </>
  ),
  'shield-check': (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" />
      <path d="m8.5 12 2.5 2.5L15.5 10" />
    </>
  ),
  bolt: <path d="M13 3 5 13.5h6L10 21l8-10.5h-6z" />,
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
      <span className="case-carousel-banner">
        {slot.item.icon && (
          <svg
            className="case-carousel-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {CARD_ICON_PATHS[slot.item.icon]}
          </svg>
        )}
        <span className="case-carousel-title">{slot.item.title}</span>
        {slot.item.subtitle && <span className="case-carousel-subtitle">{slot.item.subtitle}</span>}
      </span>
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
