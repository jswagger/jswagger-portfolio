import { useEffect } from 'react'

export default function useHeroSpotlight(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rect = container.getBoundingClientRect()
    let mouseX = rect.width / 2
    let mouseY = rect.height / 2
    let frameId = 0

    const tick = () => {
      container.style.setProperty('--spot-x', `${mouseX}px`)
      container.style.setProperty('--spot-y', `${mouseY}px`)
      frameId = requestAnimationFrame(tick)
    }

    const trackMouse = (event: MouseEvent) => {
      mouseX = event.clientX - rect.left
      mouseY = event.clientY - rect.top
    }

    const handleEnter = (event: MouseEvent) => {
      rect = container.getBoundingClientRect()
      trackMouse(event)
      container.classList.add('hero-spotlight-active')
      frameId = requestAnimationFrame(tick)
    }

    const handleLeave = () => {
      container.classList.remove('hero-spotlight-active')
      cancelAnimationFrame(frameId)
    }

    const handleReposition = () => {
      rect = container.getBoundingClientRect()
    }

    container.addEventListener('mousemove', trackMouse)
    container.addEventListener('mouseenter', handleEnter)
    container.addEventListener('mouseleave', handleLeave)
    window.addEventListener('resize', handleReposition)
    window.addEventListener('scroll', handleReposition, { passive: true })

    return () => {
      container.removeEventListener('mousemove', trackMouse)
      container.removeEventListener('mouseenter', handleEnter)
      container.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('resize', handleReposition)
      window.removeEventListener('scroll', handleReposition)
      cancelAnimationFrame(frameId)
    }
  }, [containerRef])
}
