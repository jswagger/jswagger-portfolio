import { useEffect, useRef, useState, type RefObject } from 'react'
import type { StrengthStat } from '../types/content'

interface StrengthStatsProps {
  stats: StrengthStat[]
}

const COUNT_DURATION_MS = 1600
const STAGGER_MS = 150
const VISIBLE_THRESHOLD = 0.6

const easeOutCubic = (progress: number) => 1 - (1 - progress) ** 3

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Flips to true once the element is mostly on screen, then stops watching.
function useHasEnteredView(ref: RefObject<HTMLElement | null>) {
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof window.IntersectionObserver === 'undefined') {
      setHasEntered(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setHasEntered(true)
        observer.disconnect()
      },
      { threshold: VISIBLE_THRESHOLD },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])

  return hasEntered
}

// Starts at the target so prerendered HTML shows real values, drops to 0 on the
// client while inactive, then counts up once the counters scroll into view.
function useCountUp(target: number, isActive: boolean, delayMs: number) {
  const [value, setValue] = useState(target)

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!isActive) {
      setValue(0)
      return
    }

    let frame = 0
    let startTime: number | undefined

    const tick = (now: number) => {
      startTime ??= now
      const elapsed = now - startTime - delayMs
      const progress = Math.min(Math.max(elapsed / COUNT_DURATION_MS, 0), 1)
      setValue(Math.round(target * easeOutCubic(progress)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, isActive, delayMs])

  return value
}

interface StatCounterProps {
  stat: StrengthStat
  index: number
  isActive: boolean
}

function StatCounter({ stat, index, isActive }: StatCounterProps) {
  const value = useCountUp(stat.value, isActive, index * STAGGER_MS)

  return (
    <div className="strength-stat">
      <p className="sr-only">
        {stat.value}
        {stat.suffix} {stat.emphasis} {stat.label}
      </p>
      <div className="strength-stat-number" aria-hidden="true">
        {value.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="strength-stat-title" aria-hidden="true">
        <strong>{stat.emphasis}</strong> {stat.label}
      </div>
    </div>
  )
}

export default function StrengthStats({ stats }: StrengthStatsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isActive = useHasEnteredView(containerRef)

  return (
    <div className="strength-stats" ref={containerRef}>
      {stats.map((stat, index) => (
        <StatCounter key={stat.label} stat={stat} index={index} isActive={isActive} />
      ))}
    </div>
  )
}
