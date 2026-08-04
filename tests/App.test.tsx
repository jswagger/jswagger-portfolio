import { render, screen } from '@testing-library/react'
import App from '../src/App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders the hero heading for the landing page', () => {
    render(<App />)
    expect(screen.getByText(/Building dependable software with clarity, context, and craft/i)).toBeTruthy()
  })
})