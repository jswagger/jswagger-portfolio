import { useRef } from 'react'

interface ZoomableImageProps {
  src: string
  alt: string
}

// Click-to-enlarge for dense screenshots. The native <dialog> provides focus
// trapping, Esc to close, and the backdrop.
export default function ZoomableImage({ src, alt }: ZoomableImageProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  return (
    <>
      <button
        type="button"
        className="zoomable-image-trigger"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Enlarge image: ${alt}`}
      >
        <img src={src} alt="" />
        <span className="zoomable-image-icon" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
          </svg>
        </span>
      </button>
      <dialog
        ref={dialogRef}
        className="zoomable-image-dialog"
        aria-label={alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close()
        }}
      >
        <button
          type="button"
          className="zoomable-image-close"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close enlarged image"
        >
          ×
        </button>
        <img src={src} alt={alt} />
      </dialog>
    </>
  )
}
