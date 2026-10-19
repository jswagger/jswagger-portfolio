import type { CSSProperties, ReactNode } from 'react'
import Reveal from './Reveal'

interface Language {
  name: string
  color: string
  icon: ReactNode
}

const LANGUAGES: Language[] = [
  {
    name: 'React',
    color: '#1f7fb8',
    icon: (
      <>
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'AWS',
    color: '#b8610f',
    icon: (
      <>
        <text x="12" y="12" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" stroke="none">
          aws
        </text>
        <path d="M5 16c4.5 3 9.5 3 14 0" />
        <path d="m16.5 15.5 2.7.5-.6 2.7" />
      </>
    ),
  },
  {
    name: 'C#',
    color: '#7a4fb5',
    icon: (
      <text x="12" y="16.5" textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor" stroke="none">
        C#
      </text>
    ),
  },
  {
    name: 'Python',
    color: '#3b6ea5',
    icon: (
      <>
        <path d="M15.5 9V6a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v3a2 2 0 0 0 2 2h6a2 2 0 0 1 2 2v1" />
        <path d="M15.5 9V6a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v3a2 2 0 0 0 2 2h6a2 2 0 0 1 2 2v1" transform="rotate(180 12 12)" />
        <circle cx="10.5" cy="6" r=".8" fill="currentColor" />
        <circle cx="13.5" cy="18" r=".8" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'SQL',
    color: '#2f8566',
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
      </>
    ),
  },
]

export default function LanguageStrip() {
  return (
    <section className="language-strip" aria-label="Languages and technologies">
      <Reveal>
        <h2 className="language-strip-title">What I work with</h2>
        <ul className="language-strip-list">
          {LANGUAGES.map(({ name, color, icon }) => (
            <li className="language-strip-item" key={name} style={{ '--badge-color': color } as CSSProperties}>
              <span className="language-strip-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icon}
                </svg>
              </span>
              <span className="language-strip-name">{name}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
