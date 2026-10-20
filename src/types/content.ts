import type { MetricComparison } from './metricComparison'

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

export interface CaseStudyImage {
  src: string
  alt: string
  caption?: string
  narrow?: boolean
  zoomable?: boolean
}

export interface CaseStudySection {
  heading: string
  subtitle?: string
  paragraphs?: string[]
  bullets?: string[]
  quote?: string
  metrics?: MetricComparison[]
  images?: CaseStudyImage[]
  imagesAfterParagraph?: number
  imagesInCard?: boolean
  imagesTitle?: string
}

export interface WorkflowVisualStep {
  label: string
  systems: string[]
}

export interface WorkflowVisualData {
  headline: string
  steps: WorkflowVisualStep[]
}

export type CaseStudyCardIcon = 'sparkles' | 'layout' | 'user-check' | 'shield-check' | 'bolt'

export interface CodeExample {
  title: string
  /** [before, after] source, shown side by side. */
  codeSnippets: [string, string]
}

export interface CodeExamples {
  title: string
  subtitle?: string
  examples: CodeExample[]
}

export interface CaseStudyDetail {
  title: string
  slug: string
  tagline: string
  summary: string
  tags: string[]
  sections: CaseStudySection[]
  image?: string
  cardIcon?: CaseStudyCardIcon
  cardSubtitle?: string
  heroImage?: string
  heroSubtitle?: string
  heroPosition?: string
  heroPhotoLocation?: string
  partnerLogo?: 'agvance' | 'github'
  intro?: string
  workflowVisual?: WorkflowVisualData
  stats?: StrengthStat[]
  statsCaption?: string
  introLink?: { label: string; href: string }
  introImage?: CaseStudyImage & { wide?: boolean; compact?: boolean; fitMobile?: boolean; mobileSrc?: string; title?: string; subtitle?: string }
  diagramImage?: CaseStudyImage
  codeExamples?: CodeExamples
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
