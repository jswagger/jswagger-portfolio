import { useId, useLayoutEffect } from 'react'

const STORAGE_KEY = 'heroIntroSeen'
const SEEN_ATTRIBUTE = 'data-hero-intro-seen'

// The first hero mounted in a page load owns the intro. A later hero (client
// navigation) flags the document so its animations are skipped. The flag is
// persisted in sessionStorage so a reload or new page load skips the intro
// too; the head script in index.html applies it before first paint.
let introOwner: string | null = null

export default function useHeroIntroOnce() {
  const id = useId()

  useLayoutEffect(() => {
    const root = document.documentElement
    if (root.hasAttribute(SEEN_ATTRIBUTE)) return

    if (introOwner === null) introOwner = id
    if (introOwner !== id) {
      root.setAttribute(SEEN_ATTRIBUTE, '')
      return
    }

    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // Storage can be blocked; the intro just replays on the next load.
    }
  }, [id])
}
