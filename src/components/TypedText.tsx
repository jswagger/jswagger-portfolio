import type { CSSProperties } from 'react'

interface TypedTextProps {
  text: string
  /** Delay before the first character appears, in ms. */
  startDelay?: number
  /** Time between characters, in ms. */
  charDelay?: number
  /** Fade the caret out once the last character is typed. */
  keepCaret?: boolean
}

/** Duration of the full typing animation, so callers can chain the next line. */
export function typedDuration(text: string, startDelay = 0, charDelay = 40) {
  return startDelay + text.length * charDelay
}

export default function TypedText({ text, startDelay = 0, charDelay = 40, keepCaret = false }: TypedTextProps) {
  const style = {
    '--typed-start': `${startDelay}ms`,
    '--typed-step': `${charDelay}ms`,
  } as CSSProperties

  return (
    <span className="typed-text" style={style}>
      <span className="typed-text-sr">{text}</span>
      <span aria-hidden="true">
        {Array.from(text).map((char, index, chars) => (
          <span
            key={index}
            className={keepCaret && index === chars.length - 1 ? 'typed-char typed-char-last' : 'typed-char'}
            style={{ '--i': index } as CSSProperties}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  )
}
