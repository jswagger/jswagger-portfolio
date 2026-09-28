export interface Highlight {
  label: string
  value: string
}

export interface StrengthStat {
  value: number
  suffix: string
  emphasis: string
  label: string
}

export type ServiceIcon = 'quality' | 'interface' | 'mentorship'

export interface ServiceItem {
  title: string
  description: string
  icon: ServiceIcon
  image: string
}

export interface ProjectSection {
  label: string
  items: string[]
}

export interface ProjectItem {
  title: string
  roleType: 'Development' | 'Leadership'
  roleSummary: string
  leadershipItems: string[]
  sections: ProjectSection[]
  tags: string[]
}

export interface CaseStudySection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface CaseStudyDetail {
  title: string
  slug: string
  tagline: string
  summary: string
  tags: string[]
  sections: CaseStudySection[]
  image?: string
}

// Condensed, single-accordion view of a company's experience. The full
// role-by-role detail this summarizes lives in ProjectItem[] (see
// `projects`, `projectsGIS`, `projectsLSC` in portfolioContent.ts).
export interface CompanyExperience {
  company: string
  dateRange: string
  jobTitle: string
  highlights: string[]
  tags: string[]
}
