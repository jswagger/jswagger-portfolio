import strengthBadlandsImage from '../assets/strength-badlands.jpg'
import strengthWaterfallImage from '../assets/strength-waterfall.jpg'
import strengthRiverImage from '../assets/strength-river.jpg'
import type { CompanyExperience, Highlight, ServiceItem, StrengthStat } from '../types/content'

export const highlights: Highlight[] = [
  { label: 'Experience', value: '10+ Years Building Software' },
  { label: 'Home Base', value: 'Florida’s Emerald Coast' },
  { label: 'Off the Clock', value: 'Family, Travel & the Outdoors' },
  { label: 'Engineering Philosophy', value: 'Context First. Quality Always.' }
]

export const strengthStats: StrengthStat[] = [
  { value: 10, suffix: '+', emphasis: 'Years', label: 'of experience' },
  { value: 400, suffix: '+', emphasis: 'Legacy files', label: 'modernized' },
  { value: 25000, suffix: '+', emphasis: 'Platform', label: 'users' },
  { value: 7, suffix: '+', emphasis: 'Engineers', label: 'mentored' },
]

export const services: ServiceItem[] = [
  {
    title: 'Built with Intention',
    icon: 'quality',
    image: strengthWaterfallImage,
    description: 'Quality goes beyond making code work. I focus on writing clear, maintainable code while following sound engineering practices. My goal is to create lasting solutions, not quick fixes. I pay attention to the details that make software reliable, consistent, and built to last.'
  },
  {
    title: 'Modernize with Purpose',
    icon: 'interface',
    image: strengthBadlandsImage,
    description: 'I lead front-end improvement initiatives focused on maintainability, accessibility, and modern best practices. By refactoring legacy React components and enhancing team standards, I turn technical debt into a solid foundation for sustainable future development.'
  },
  {
    title: 'Strengthen the Team',
    icon: 'mentorship',
    image: strengthRiverImage,
    description: 'I support engineers and product teams by bringing clarity through collaboration, guidance, and practical execution. I share knowledge, build trust, and improve team practices, making complex projects easier to navigate and more sustainable over time.'
  }
]

// Verbs cycled through beside the sticky "I can" in the Experience section.
export const capabilityWords: string[] = [
  'design.',
  'modernize.',
  'optimize.',
  'automate.',
  'mentor.',
  'deliver.',
]

// Condensed, one-item-per-company view used by the Experience accordion.
// Role-by-role detail lives in docs/project-details.ts.
export const experience: CompanyExperience[] = [
  {
    company: 'Software Solutions Integrated',
    dateRange: '2022 - Present',
    jobTitle: 'Senior Software Developer',
    highlights: [
      'Built full-stack features: engineered new React components and API endpoints using a high-velocity agentic workflow that boosted development throughput efficiency by over 50%.',
      'Led the UI Focus Group, driving a core React framework upgrade that slashed deprecated functions by over 50% while spearheading over 350 file conversions to TypeScript.',
      'Mentored 7+ junior engineers through pair programming and code reviews, and partnered with QA to implement strict testing guardrails that minimized production regression risk.'
    ],
    tags: ['React', 'TypeScript', 'Python', 'AWS', 'GIS', 'SQL', 'C#']
  },
  {
    company: 'GIS, inc.',
    dateRange: '2018 - 2022',
    jobTitle: 'Geospatial Software Developer',
    highlights: [
      'Built geospatial front-end features with the ArcGIS API for JavaScript, including editing workflows and mapping interactions',
      'Developed back-end spatial processing methods and manipulated spatial data using Python',
      'Championed unit testing practices, organizing test suites and embedding test creation into standard ticket work'
    ],
    tags: ['React', 'Python', 'GIS', 'SQL', 'ArcGIS API for JavaScript']
  },
  {
    company: 'Lake Superior Consulting',
    dateRange: '2011 - 2018',
    jobTitle: 'GIS Supervisor',
    highlights: [
      'Led a team of GIS analysts delivering geospatial data and deliverables to clients',
      'Directed front-end mapping workflows using the ArcGIS API for JavaScript',
      'Directed back-end spatial data processing and Python-based automation'
    ],
    tags: ['Angular', 'Python', 'GIS', 'Arcpy', 'ArcGIS API for JavaScript']
  }
]
