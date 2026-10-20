import { Component, type ErrorInfo, type ReactNode } from 'react'
import NotFound from '../pages/NotFound'

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <NotFound
        title="Something went wrong"
        message="An unexpected error occurred. Head back home and try again."
      />
    )
  }
}
