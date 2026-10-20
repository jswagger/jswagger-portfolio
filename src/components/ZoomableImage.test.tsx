import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import ZoomableImage from './ZoomableImage'

// jsdom does not implement <dialog> modal methods.
const showModal = vi.fn()
const close = vi.fn()

describe('ZoomableImage', () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = showModal
    HTMLDialogElement.prototype.close = close
  })
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('opens the enlarged view from the trigger button', () => {
    render(<ZoomableImage src="/x.png" alt="Report view" />)

    fireEvent.click(screen.getByRole('button', { name: 'Enlarge image: Report view' }))

    expect(showModal).toHaveBeenCalledTimes(1)
  })

  it('closes on a backdrop click but not on a click inside the image area', () => {
    const { container } = render(<ZoomableImage src="/x.png" alt="Report view" />)
    const dialog = container.querySelector('dialog') as HTMLDialogElement

    fireEvent.click(container.querySelector('.zoomable-image-scroll') as Element)
    expect(close).not.toHaveBeenCalled()

    fireEvent.click(dialog)
    expect(close).toHaveBeenCalledTimes(1)
  })
})
