import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
}

// Flips to true once the element is mostly on screen, then stops watching.
function useHasEnteredView(ref: React.RefObject<HTMLElement | null>) {
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
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])

  return hasEntered
}

// Fades a block in with a subtle upward shift as it scrolls into view,
// matching the reveal treatment already used on the homepage sections.
export default function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isRevealed = useHasEnteredView(ref)

  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ''}`} data-reveal={isRevealed}>
      {children}
    </div>
  )
}
