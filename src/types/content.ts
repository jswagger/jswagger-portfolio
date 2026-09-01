export interface Highlight {
  label: string
  value: string
}

export interface ServiceItem {
  title: string
  description: string
}

export interface ProjectSection {
  label: string
  items: string[]
}

export interface ProjectItem {
  title: string
  roleType: 'development' | 'leadership'
  roleSummary: string
  leadershipItems: string[]
  sections: ProjectSection[]
  tags: string[]
}
