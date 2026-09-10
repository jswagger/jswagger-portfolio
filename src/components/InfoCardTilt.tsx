import { useRef } from 'react'

interface InfoCardTiltProps {
  title: string
  description: string
  tone: number
}

const RESET_DELAY_MS = 1000

export default function InfoCardTilt({ title, description, tone }: InfoCardTiltProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)
  const dimsRef = useRef({ left: 0, top: 0, width: 1, height: 1 })
  const resetTimeoutRef = useRef<number | undefined>(undefined)

  const applyTilt = (mouseX: number, mouseY: number) => {
    const { width, height } = dimsRef.current
    const px = mouseX / width
    const py = mouseY / height

    if (innerRef.current) {
      innerRef.current.style.transform = `rotateY(${px * 30}deg) rotateX(${py * -30}deg)`
    }
    if (bgRef.current) {
      bgRef.current.style.transform = `translate(${px * -40}px, ${py * -40}px)`
    }
  }

  const handleMouseEnter = () => {
    if (resetTimeoutRef.current) {
      window.clearTimeout(resetTimeoutRef.current)
    }
    const wrap = wrapRef.current
    if (wrap) {
      const rect = wrap.getBoundingClientRect()
      dimsRef.current = { left: rect.left, top: rect.top, width: rect.width, height: rect.height }
    }
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = dimsRef.current
    applyTilt(event.clientX - left - width / 2, event.clientY - top - height / 2)
  }

  const handleMouseLeave = () => {
    resetTimeoutRef.current = window.setTimeout(() => applyTilt(0, 0), RESET_DELAY_MS)
  }

  return (
    <div
      className="info-card"
      ref={wrapRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="info-card-inner" ref={innerRef}>
        <div className={`info-card-bg info-card-bg-tone-${tone}`} ref={bgRef} aria-hidden="true" />
        <div className="info-card-glow" aria-hidden="true" />
        <div className="info-card-body">
          <h3>{title}</h3>
          <p className="info-card-description">{description}</p>
        </div>
      </div>
    </div>
  )
}
