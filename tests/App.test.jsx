import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../src/App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders the hero heading for the landing page', () => {
    render(<App />)
    expect(screen.getByText(/Building thoughtful products/i)).toBeTruthy()
  })
})