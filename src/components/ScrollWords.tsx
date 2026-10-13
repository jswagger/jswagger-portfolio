import { useEffect, useRef, type CSSProperties } from 'react'

interface ScrollWordsProps {
  lead: string
  words: string[]
}

// Must match --line in .scroll-words.
const LINE_HEIGHT_EM = 1.25

const toSentence = (lead: string, words: string[]) => {
  const verbs = words.map((word) => word.replace(/\.$/, ''))
  return `${lead} ${verbs.slice(0, -1).join(', ')}, and ${verbs[verbs.length - 1]}.`
}

// The section pins while a three-line window (previous, current, next) rolls
// through the words as the tall track scrolls past.
export default function ScrollWords({ lead, words }: ScrollWordsProps) {
  const trackRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const track = trackRef.current
    const list = track?.querySelector('ul')
    if (!track || !list) return
    const stage = track.firstElementChild as HTMLElement
    const items = Array.from(list.children) as HTMLElement[]

    let frameId = 0
    const update = () => {
      frameId = 0
      // Progress runs from when the stage pins (its sticky `top`) to when it releases.
      const distance = track.offsetHeight - stage.offsetHeight
      const pinTop = parseFloat(getComputedStyle(stage).top)
      const progress = distance > 0 ? (pinTop - track.getBoundingClientRect().top) / distance : 0
      const position = Math.min(1, Math.max(0, progress)) * (items.length - 1)
      // Set directly rather than via CSS calc()/abs() so it works in every browser.
      list.style.transform = `translateY(${(1 - position) * LINE_HEIGHT_EM}em)`
      items.forEach((item, index) => {
        item.style.opacity = String(1 - Math.min(1, Math.abs(index - position)) * 0.75)
      })
    }
    const schedule = () => {
      if (!frameId) frameId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <section
      className="scroll-words-track section-muted"
      ref={trackRef}
      style={{ '--word-count': words.length } as CSSProperties}
    >
      <div className="scroll-words-stage">
        <div className="scroll-words">
          <p className="sr-only">{toSentence(lead, words)}</p>
          <p className="scroll-words-lead" aria-hidden="true">
            {lead}&nbsp;
          </p>
          <div className="scroll-words-window" aria-hidden="true">
            <ul style={{ '--count': words.length } as CSSProperties}>
              {words.map((word, index) => (
                <li key={word} style={{ '--i': index } as CSSProperties}>
                  {word}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
