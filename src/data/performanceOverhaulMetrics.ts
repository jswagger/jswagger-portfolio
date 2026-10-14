import type { MetricComparison } from '../types/metricComparison'

export const performanceOverhaulMetrics: MetricComparison[] = [
  {
    id: 'load-time',
    icon: '⏱️',
    title: 'Load time',
    original: 95,
    updated: 24,
    valueFormat: 'duration',
    improvementLabel: 'faster',
    deltaLabel: 'seconds saved',
  },
  {
    id: 'actions',
    icon: '⚡',
    title: 'Actions called',
    original: 3492,
    updated: 1074,
    valueFormat: 'count',
    improvementLabel: 'fewer',
    deltaLabel: 'fewer actions',
  },
  {
    id: 'api-requests',
    icon: '🌐',
    title: 'API requests',
    original: 167,
    updated: 8,
    valueFormat: 'count',
    improvementLabel: 'fewer',
    deltaLabel: 'fewer requests',
  },
]
