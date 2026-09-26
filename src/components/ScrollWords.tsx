import type { CSSProperties } from 'react'

interface ScrollWordsProps {
  lead: string
  words: string[]
}

// Adapted from Jhey Tompkins' "you can scroll" demo: the lead stays pinned
// while each word brightens as it crosses the middle of the viewport.
const toSentence = (lead: string, words: string[]) => {
  const verbs = words.map((word) => word.replace(/\.$/, ''))
  return `${lead} ${verbs.slice(0, -1).join(', ')}, and ${verbs[verbs.length - 1]}.`
}

export default function ScrollWords({ lead, words }: ScrollWordsProps) {
  return (
    <div className="scroll-words">
      <p className="sr-only">{toSentence(lead, words)}</p>
      <p className="scroll-words-lead" aria-hidden="true">
        {lead}&nbsp;
      </p>
      <ul aria-hidden="true" style={{ '--count': words.length } as CSSProperties}>
        {words.map((word, index) => (
          <li key={word} style={{ '--i': index } as CSSProperties}>
            {word}
          </li>
        ))}
      </ul>
    </div>
  )
}
