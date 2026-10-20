import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MetricComparisonCharts } from './MetricComparisonCharts'
import type { MetricComparison } from '../../types/metricComparison'

const base: MetricComparison = {
  id: 'm',
  icon: '⏱️',
  title: 'Load time',
  original: 95,
  updated: 24,
  valueFormat: 'duration',
  improvementLabel: 'faster',
  deltaLabel: 'seconds saved',
}

describe('MetricComparisonCharts', () => {
  it('formats durations as m:ss and reports the rounded percent improvement and delta', () => {
    render(<MetricComparisonCharts metrics={[base]} />)

    expect(screen.getByText('1:35')).toBeInTheDocument()
    expect(screen.getByText('0:24')).toBeInTheDocument()
    expect(screen.getByText('~75%')).toBeInTheDocument()
    expect(screen.getByText(/71 seconds saved per batch/)).toBeInTheDocument()
  })

  it('formats counts with thousands separators', () => {
    const counts: MetricComparison = {
      ...base,
      id: 'c',
      original: 3492,
      updated: 1074,
      valueFormat: 'count',
      deltaLabel: 'fewer actions',
    }
    render(<MetricComparisonCharts metrics={[counts]} />)

    expect(screen.getByText('3,492')).toBeInTheDocument()
    expect(screen.getByText('1,074')).toBeInTheDocument()
    expect(screen.getByText(/2,418 fewer actions per batch/)).toBeInTheDocument()
  })

  it('sizes the updated bar relative to the original', () => {
    const { container } = render(<MetricComparisonCharts metrics={[{ ...base, original: 100, updated: 50, valueFormat: 'count' }]} />)

    const original = container.querySelector('.metric-bar--original') as HTMLElement
    const updated = container.querySelector('.metric-bar--updated') as HTMLElement

    expect(parseFloat(updated.style.width)).toBeCloseTo(parseFloat(original.style.width) / 2)
  })
})
