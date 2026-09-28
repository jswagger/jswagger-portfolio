import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import { ACTIVE_CARD_SCALE } from './CaseStudyCarousel'
import type { CaseStudyDetail } from '../types/content'

interface CaseStudyModalProps {
  caseStudy: CaseStudyDetail | null
  originRect: DOMRect | null
  onClose: () => void
}

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Material-style morph, adapted from a CodePen modal demo: a surface grows out
// of the clicked card into the modal box while the card image fades away, then
// the content fades in on top.
const MORPH_EASING = 'cubic-bezier(0.23, 1, 0.32, 1)'
const MORPH_DURATION = 500
const CONTENT_FADE_DURATION = 250
// Brings the card image back gradually so it's fully visible just as the box lands.
const IMAGE_RETURN_EASING = 'cubic-bezier(0.7, 0, 1, 1)'

// Visual corner radius at the card's position: the card's 22px radius at its
// active scale. Matches .case-study-modal-image.
const ORIGIN_RADIUS = 22 * ACTIVE_CARD_SCALE

// Morph keyframe that makes a box laid out at `to` sit exactly over `from`. The
// radius is counter-scaled so the corners stay round and line up with the card
// image instead of squashing into sharp corners that poke past it.
const getOriginFrame = (from: DOMRect, to: DOMRect): Keyframe => {
  const scaleX = from.width / to.width
  const scaleY = from.height / to.height
  return {
    transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${scaleX}, ${scaleY})`,
    borderRadius: `${ORIGIN_RADIUS / scaleX}px / ${ORIGIN_RADIUS / scaleY}px`,
  }
}

// The morph's own radius at rest (square bottom corners on mobile), so the
// keyframes interpolate back to it.
const getRestingFrame = (morph: HTMLElement): Keyframe => ({
  transform: 'none',
  borderRadius: getComputedStyle(morph).borderRadius,
})

export default function CaseStudyModal({ caseStudy, originRect, onClose }: CaseStudyModalProps) {
  const [isClosing, setIsClosing] = useState(false)
  const morphRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  // Keyframes from the card to the modal box, or null when the animation can't run.
  const getMorph = useCallback(() => {
    const morph = morphRef.current
    const image = imageRef.current
    if (!morph || !image || !originRect || prefersReducedMotion() || typeof morph.animate !== 'function') return null

    const target = morph.getBoundingClientRect()
    return {
      morph,
      image,
      morphFrames: [getOriginFrame(originRect, target), getRestingFrame(morph)],
      // The card image resizes rather than scales so it stays cropped, fading as it grows.
      imageFrames: [
        {
          left: `${originRect.left - target.left}px`,
          top: `${originRect.top - target.top}px`,
          width: `${originRect.width}px`,
          height: `${originRect.height}px`,
        },
        { left: '0px', top: '0px', width: `${target.width}px`, height: `${target.height}px` },
      ],
    }
  }, [originRect])

  // Grow the surface out of the card once the modal has been laid out.
  useLayoutEffect(() => {
    if (!caseStudy) return
    const target = getMorph()
    if (!target) return

    const timing = { duration: MORPH_DURATION, easing: MORPH_EASING }
    target.morph.animate(target.morphFrames, timing)
    target.image.animate(target.imageFrames, timing)
    target.image.animate([{ opacity: 1 }, { opacity: 0 }], timing)
  }, [caseStudy, getMorph])

  // Fade the content out, shrink the surface back into the card, then unmount.
  const requestClose = useCallback(() => {
    if (isClosing) return
    const target = getMorph()
    if (!target) {
      onClose()
      return
    }

    setIsClosing(true)
    const timing: KeyframeAnimationOptions = {
      duration: MORPH_DURATION,
      delay: CONTENT_FADE_DURATION / 2,
      easing: MORPH_EASING,
      fill: 'forwards',
    }
    target.image.animate([...target.imageFrames].reverse(), timing)
    target.image.animate([{ opacity: 0 }, { opacity: 1 }], { ...timing, easing: IMAGE_RETURN_EASING })
    target.morph.animate([...target.morphFrames].reverse(), timing).finished.then(() => {
      setIsClosing(false)
      onClose()
    })
  }, [getMorph, isClosing, onClose])

  useEffect(() => {
    if (!caseStudy) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') requestClose()
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [caseStudy, requestClose])

  if (!caseStudy) return null

  return createPortal(
    <div className={`case-study-modal-backdrop ${isClosing ? 'is-closing' : ''}`} onClick={requestClose}>
      <div className="case-study-modal-frame">
        <div className="case-study-modal-morph" ref={morphRef} aria-hidden="true" />
        <div
          className="case-study-modal-image"
          ref={imageRef}
          style={{ backgroundImage: `url(${caseStudy.image})`, '--card-scale': ACTIVE_CARD_SCALE } as CSSProperties}
          aria-hidden="true"
        >
          {/* Copy of the card's title bar so it fades with the image instead of popping in. */}
          <div className="case-study-modal-image-card">
            <span className="case-carousel-banner">{caseStudy.title}</span>
          </div>
        </div>
        <div
          className="case-study-modal"
          role="dialog"
          aria-modal="true"
          aria-label={caseStudy.title}
          onClick={(event) => event.stopPropagation()}
        >
          <button type="button" className="case-study-modal-close" onClick={requestClose} aria-label="Close case study">
            ✕
          </button>

          <div className="case-study-modal-header">
            <p className="case-study-modal-tagline">{caseStudy.tagline}</p>
            <h2>{caseStudy.title}</h2>
            <div className="case-study-modal-tags">
              {caseStudy.tags.map((tag) => (
                <span key={tag} className="case-study-modal-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="case-study-modal-body">
            {caseStudy.sections.map((section) => (
              <section key={section.heading} className="case-study-modal-section">
                <h3>{section.heading}</h3>
                {section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
