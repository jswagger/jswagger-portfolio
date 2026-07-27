import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../src/App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders the Get started heading', () => {
    render(<App />)
    // Use standard assertion instead of jest-dom matcher to avoid setup ordering issues
    expect(screen.getByText(/Get started/i)).toBeTruthy()
  })
})