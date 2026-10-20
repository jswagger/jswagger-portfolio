import { useRef, type ReactNode } from 'react'
import useHasEnteredView from '../hooks/useHasEnteredView'

interface RevealProps {
  children: ReactNode
  className?: string
}

// Fades a block in with a subtle upward shift as it scrolls into view,
// matching the reveal treatment already used on the homepage sections.
export default function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isRevealed = useHasEnteredView(ref, 0.2)

  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ''}`} data-reveal={isRevealed}>
      {children}
    </div>
  )
}
