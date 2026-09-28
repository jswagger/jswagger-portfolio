import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CaseStudyHeroBlobs() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const shapeRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const shapes = shapeRefs.current.filter((el): el is HTMLDivElement => el !== null)
    const cursor = cursorRef.current
    const targets = cursor ? [...shapes, cursor] : shapes

    const { width, height } = container.getBoundingClientRect()
    gsap.set(targets, { x: width / 2, y: height / 2 })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      if (cursor) gsap.set(cursor, { x, y })
      gsap.to(shapes, { x, y, stagger: -0.1, duration: 0.5, ease: 'power2.out' })
    }

    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      gsap.killTweensOf(targets)
    }
  }, [])

  return (
    <div ref={containerRef} className="case-study-hero-shapes">
      <div
        className="case-study-hero-shape case-study-hero-shape-1"
        ref={(el) => {
          shapeRefs.current[0] = el
        }}
      />
      <div
        className="case-study-hero-shape case-study-hero-shape-2"
        ref={(el) => {
          shapeRefs.current[1] = el
        }}
      />
      <div
        className="case-study-hero-shape case-study-hero-shape-3"
        ref={(el) => {
          shapeRefs.current[2] = el
        }}
      />
      <div className="case-study-hero-cursor" ref={cursorRef} />
    </div>
  )
}
