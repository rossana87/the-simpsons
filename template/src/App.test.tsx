import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders Hello World heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: /hello world/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the main div container', () => {
    render(<App />)
    const container = screen.getByRole('heading').parentElement
    expect(container).toBeInTheDocument()
    expect(container?.tagName).toBe('DIV')
  })
})
