import { useEffect, useRef } from 'react'

interface HeroCursorProps {
  containerRef: React.RefObject<HTMLElement | null>
}

export default function HeroCursor({ containerRef }: HeroCursorProps) {
  const ringRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const ring = ringRef.current
    const dot = dotRef.current
    if (!container || !ring || !dot) return

    let rect = container.getBoundingClientRect()
    let mouseX = rect.width / 2
    let mouseY = rect.height / 2
    let frameId = 0

    const tick = () => {
      const x = `${mouseX}px`
      const y = `${mouseY}px`
      ring.style.left = x
      ring.style.top = y
      dot.style.left = x
      dot.style.top = y
      frameId = requestAnimationFrame(tick)
    }

    const trackMouse = (event: MouseEvent) => {
      mouseX = event.clientX - rect.left
      mouseY = event.clientY - rect.top
    }

    const handleEnter = (event: MouseEvent) => {
      rect = container.getBoundingClientRect()
      trackMouse(event)
      container.classList.add('hero-cursor-active')
      ring.style.opacity = '1'
      dot.style.opacity = '1'
      frameId = requestAnimationFrame(tick)
    }

    const handleLeave = () => {
      container.classList.remove('hero-cursor-active')
      ring.style.opacity = '0'
      dot.style.opacity = '0'
      ring.classList.remove('is-grown', 'is-grown-small')
      cancelAnimationFrame(frameId)
    }

    const handleResize = () => {
      rect = container.getBoundingClientRect()
    }

    container.addEventListener('mousemove', trackMouse)
    container.addEventListener('mouseenter', handleEnter)
    container.addEventListener('mouseleave', handleLeave)
    window.addEventListener('resize', handleResize)

    const scaleTargets = container.querySelectorAll<HTMLElement>('[data-cursor-scale]')
    const cleanupTargets: Array<() => void> = []

    scaleTargets.forEach((target) => {
      const growClass = target.dataset.cursorScale === 'small' ? 'is-grown-small' : 'is-grown'
      const onEnter = () => ring.classList.add(growClass)
      const onLeave = () => ring.classList.remove(growClass)
      target.addEventListener('mouseenter', onEnter)
      target.addEventListener('mouseleave', onLeave)
      cleanupTargets.push(() => {
        target.removeEventListener('mouseenter', onEnter)
        target.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => {
      container.removeEventListener('mousemove', trackMouse)
      container.removeEventListener('mouseenter', handleEnter)
      container.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(frameId)
      cleanupTargets.forEach((cleanup) => cleanup())
    }
  }, [containerRef])

  return (
    <>
      <div className="hero-cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="hero-cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  )
}
