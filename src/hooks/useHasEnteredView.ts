import { useEffect, useState, type RefObject } from 'react'

// Flips to true once the element is on screen (by `threshold`, the visible
// fraction), then stops watching. Without IntersectionObserver the element is
// treated as already in view.
export default function useHasEnteredView(ref: RefObject<HTMLElement | null>, threshold: number) {
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
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, threshold])

  return hasEntered
}
