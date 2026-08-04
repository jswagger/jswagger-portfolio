import type { Highlight, ProjectItem, ServiceItem } from '../types/content'

export const highlights: Highlight[] = [
  { label: 'Experience', value: '10+ years' },
  { label: 'Location', value: 'Florida, USA' },
  { label: 'Specialties', value: 'Enterprise architecture & GIS systems' },
  { label: 'Approach', value: 'Context-first, quality-driven' }
]

export const services: ServiceItem[] = [
  {
    title: 'Enterprise architecture',
    description: 'Designing systems that are resilient, scalable, and maintainable without unnecessary complexity.'
  },
  {
    title: 'System optimization',
    description: 'Improving performance, reliability, and developer experience with a focus on real-world stability.'
  },
  {
    title: 'Full-stack delivery',
    description: 'Building modern applications in React, Node.js, Python, and .NET with strong testing and thoughtful integration.'
  },
  {
    title: 'Technical consulting',
    description: 'Helping teams make practical decisions grounded in context, tradeoffs, and long-term value.'
  }
]

export const projects: ProjectItem[] = [
  {
    title: 'Enterprise web platform',
    description: 'Delivered scalable application architecture and frontend execution for business-critical workflows with a strong emphasis on maintainability.',
    tags: ['React', 'AWS', 'Architecture']
  },
  {
    title: 'Geospatial and operations systems',
    description: 'Built and improved systems that combine geospatial data, operational workflows, and dependable user experiences.',
    tags: ['GIS', 'Python', 'SQL']
  },
  {
    title: 'Legacy modernization initiatives',
    description: 'Led refactoring and optimization efforts that improved performance, reduced complexity, and increased team confidence in long-standing systems.',
    tags: ['C#', '.NET', 'Refactoring']
  }
]
