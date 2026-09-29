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

export interface CaseStudyMetricRow {
  version: string
  value: string
  numericValue: number
}

export interface CaseStudyMetric {
  label: string
  rows: CaseStudyMetricRow[]
  improvement: string
}

export interface CaseStudyImage {
  src: string
  alt: string
  caption?: string
}

export interface CaseStudySection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  metrics?: CaseStudyMetric[]
  images?: CaseStudyImage[]
}

export interface WorkflowVisualStep {
  label: string
  systems: string[]
}

export interface WorkflowVisualBranch {
  label: string
  systems: string[]
}

export interface WorkflowVisualArchitecture {
  question: string
  explanation: string
  branches: WorkflowVisualBranch[]
}

export interface WorkflowVisualOutcome {
  value: string
  label: string
  description: string
}

export interface WorkflowVisualData {
  headline: string
  steps: WorkflowVisualStep[]
  architecture: WorkflowVisualArchitecture
  outcome: WorkflowVisualOutcome
  caption: string
}

export interface CaseStudyDetail {
  title: string
  slug: string
  tagline: string
  summary: string
  tags: string[]
  sections: CaseStudySection[]
  image?: string
  heroImage?: string
  heroSubtitle?: string
  heroPosition?: string
  intro?: string
  workflowVisual?: WorkflowVisualData
  stats?: StrengthStat[]
  diagramImage?: CaseStudyImage
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
