export interface MetricComparison {
  id: string
  icon: string
  title: string
  original: number
  updated: number
  valueFormat: 'duration' | 'count'
  improvementLabel: string
  deltaLabel: string
}
