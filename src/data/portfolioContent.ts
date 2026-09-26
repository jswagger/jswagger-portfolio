import type { CompanyExperience, Highlight, ProjectItem, ServiceItem } from '../types/content'

export const highlights: Highlight[] = [
  { label: 'Experience', value: '10+ years' },
  { label: 'Location', value: 'Florida, USA' },
  { label: 'Specialties', value: 'Enterprise architecture & GIS systems' },
  { label: 'Approach', value: 'Context-first, quality-driven' }
]

export const services: ServiceItem[] = [
  {
    title: 'Commitment to Quality',
    icon: 'quality',
    description: 'With every task and project, I strive to do my best work, every time. I am passionate about following best practices in code and in processes. This keeps my output consistent and clear, as I deliver with confidence every time.'
  },
  {
    title: 'UI leadership and modernization',
    icon: 'interface',
    description: 'I lead front-end improvement initiatives with an eye toward maintainability, accessibility, and modern patterns. From refactoring legacy React to improving team standards, I help organizations turn technical debt into a healthier long-term foundation.'
  },
  {
    title: 'Mentorship and team enablement',
    icon: 'mentorship',
    description: 'I help engineers and product teams move forward with clarity by pairing thoughtful guidance with practical execution. I focus on building trust, reducing friction, and creating systems that make complex work feel sustainable.'
  }
]

// Condensed, one-item-per-company view used by the single Experience
// accordion. Full role-by-role detail is preserved below in `projects`,
// `projectsGIS`, and `projectsLSC`.
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

// Full role-by-role detail behind each company above, kept for reference
// and possible future use (e.g. a detail view or resume export).
export const projects: ProjectItem[] = [
  {
    title: 'Front End Engineering',
    roleType: 'Development',
    roleSummary: 'Building full-stack features with focus on performance optimization and modern UI architecture',
    leadershipItems: [], 
    sections: [
      {
        label: 'UI Development',
        items: [
          'Building new React components, boosting throughput efficiency by over 50% via agentic workflows',
          'Overhauling batch-editing engines, slashing React actions by 69% and API calls by 95%',
          'Designing UI patterns and workflows while maintaining type definitions and robust unit tests'
        ]
      },
    ],
    tags: ['React', 'TypeScript', 'CSS', 'Agentic Engineering']
  },
  {
    title: 'Back End Engineering',
    roleType: 'Development',
    roleSummary: 'Building full-stack features and high-performance server-side data flows',
    leadershipItems: [], 
    sections: [
      {
        label: 'Back-end Development',
        items: [
          'Creating spatial processing methods and designing new RESTful API endpoints and workflows',
          'Adjusting database structure, procedures, and schema to drive data retrieval efficiencies',
          'AWS Lambda function development, maintenance, and cloud service integration'
        ]
      }
    ],
    tags: ['Python', 'AWS', 'GIS', 'SQL', 'C#', '.NET']
  },
  {
    title: 'UI Focus Group Leader',
    roleType: 'Leadership',
    roleSummary: 'Led UI modernization initiatives across the engineering team to dramatically reduce technical debt',
    leadershipItems: [ 
      'Organize monthly focus group meetings to align codebase goals and frontend best practices',
      'Drive React framework upgrades and scale strict TypeScript implementation across 500+ file repository'
    ],
    sections: [
      {
        label: 'Monthly Meetings',
        items: [
          'Review progress on major initiatives and establish context boundaries for agentic development workflows',
          'Discuss strategies for solving difficult problems related to UI codebase and front end practices',
          'Encourage collaboration, teamwork, and collective code ownership across development pods'
        ]
      },
      {
        label: 'Modernization Initiatives',
        items: [
          'React upgraded from version 16 to 18, slashing overall deprecated function usage by over 40%',
          'Led initiative in file conversions, resulting in over 350 conversions to TypeScript',
          'Refactoring legacy component structure to fit modern standards and enforce complete type safety'
        ]
      }
    ],
    tags: ['UI Leadership', 'React', 'Modernization', 'Technical Debt']    
  },
  {
    title: 'Mentorship',
    roleType: 'Development',
    roleSummary: 'Mentor engineers through proactive code reviews and architectural pair programming loops',
    leadershipItems: [
      'Guided 7+ junior developers over career tenure, elevating team velocity and code quality standards'
    ],
    sections: [
      {
        label: 'Pair Programming',
        items: [
          'Always available to discuss topics and walk through complex system components to explain data flow',
          'Discussing structural trade-offs and macro/micro ROI balances between alternative software solutions',
          'Incorporating industry-accepted clean coding principles and SOLID architectural design throughout'
        ]
      }
    ],
    tags: ['Mentorship', 'Code Reviews', 'Pair Programming', 'Engineering Culture']
  },
  {
    title: 'QA Liason',
    roleType: 'Development',
    roleSummary: 'Collaborate with the Quality Assurance team to mitigate regression risk across the platform',
    leadershipItems: [],
    sections: [
      {
        label: 'Testing Integration',
        items: [
          'Discuss automated testing patterns, driving production regression rates toward zero',
          'Assist with manual and automated test execution using custom markdown testing histories',
          'Implement targeted code adjustments and structural changes to support improved test framework injection'
        ]
      }
    ],
    tags: ['Quality Assurance', 'Teamwork', 'Test Automation', 'Risk Mitigation']
  }
]

export const projectsGIS: ProjectItem[] = [
    {
    title: 'Front End Enginering',
    roleType: 'Development',
    roleSummary: 'Created and configured spatial components', // Add this
    leadershipItems: [], // Empty for dev-focused role
    sections: [
      {
        label: 'Front-end Development',
        items: [
          'Utilized ESRI ArcGIS API for JavaScript',
          'Designed geospatial editing workflows',
          'Built mapping interactions'
        ]
      }
    ],
    tags: ['React', 'GIS', 'ArcGIS API for JavaScript']
    },
    {
    title: 'Backend enginering',
    roleType: 'Development',
    roleSummary: 'Created and configured spatial components', // Add this
    leadershipItems: [], // Empty for dev-focused role
    sections: [
      {
        label: 'Back-end Development',
        items: [
          'Utilized Python libraries to manipulate spatial data',
          'Added new spatial processing methods',
          'Initiated improvement of test coverage for geospatial workflows',
        ]
      }
    ],
    tags: ['Python', 'GIS', 'SQL']
    },
    {
    title: 'Unit Test Educator',
    roleType: 'Development',
    roleSummary: 'Brought focus and initiation of consistent testing', // Add this
    leadershipItems: [], // Empty for dev-focused role
    sections: [
      {
        label: 'Unit Test Management',
        items: [
          'Created and organized unit tests suites across Python classes',
          'Added new sets of test to cover existing React components',
          'Initiated a focus and best practice of including unit test creation with ticket work',
        ]
      }
    ],
    tags: ['Python', 'React']
    }
]


export const projectsLSC: ProjectItem[] = [
    {
    title: 'GIS Data and Deliverable Management',
    roleType: 'Leadership',
    roleSummary: 'Led a team of GIS analysts in providing geospatial deliverables', // Add this
    leadershipItems: [], // Empty for dev-focused role
    sections: [
      {
        label: 'Front-end Development',
        items: [
          'Utilized ESRI ArcGIS API for JavaScript',
          'Designed geospatial editing workflows',
          'Built mapping interactions'
        ]
      },
      {
        label: 'Back-end Development',
        items: [
          'Utilized Python libraries to manipulate spatial data',
          'Added new spatial processing methods',
          'Initiated improvement of test coverage for geospatial workflows',
        ]
      }
    ],
    tags: ['React', 'Python', 'GIS', 'SQL', 'ArcGIS API for JavaScript']
    }
]


// export const projects: ProjectItem[] = [
//     {
//     title: 'Engineering Solutions',
//     sections: [
//       {
//         label: 'Front-end Development',
//         items: [
//           'Building new React components',
//           'Designing UI patterns and workflows',
//           'Creating and maintaining type definitions and unit tests'
//         ]
//       },
//       {
//         label: 'Back-end Development',
//         items: [
//           'Creating spatial processing methods',
//           'Designing new API endpoints and workflows',
//           'Adjusting database structure, procedures, and schema',
//           'AWS Lambda function development and maintenance'
//         ]
//       }
//     ],
//     tags: ['React', 'Python', 'AWS', 'GIS', 'SQL', 'C#']
//     },

//     {
//     title: 'UI Focus Group Leader',
//     sections: [
//       {
//         label: 'Monthly Meetings',
//         items: [
//           'Review progress on major initiatives',
//           'Celebrate wins',
//           'Discuss strategies for solving difficult problems related to UI codebase and front end practices',
//           'Encourage collaboration and teamwork',
//           'Assign actions items - tackle initiatives as a team'
//         ]
//       },
//       {
//         label: 'Technical Debt Cleanup',
//         items: [
//           'Removing legacy React functions',
//           'Refactoring React Class components to Functional components'
//         ]
//       },
//       {
//         label: 'Modernization Initiatives',
//         items: [
//           'React version upgrade',
//           'File conversions from JavaScript to TypeScript',
//           'Adding type definitions',
//           'Refactoring old component structure to fit modern recommendations'
//         ]
//       }
//     ],
//     tags: ['UI Leadership', 'React', 'Modernization']
//   },
//   {
//     title: 'Mentorship',
//     sections: [
//       {
//         label: 'Code Reviews',
//         items: [
//           'Review Pull Requests in a timely manner',
//           'Always pair positive encouragement with constructive criticism',
//           'Provide examples to explain concepts'
//         ]
//       },
//       {
//         label: 'Pair Programming',
//         items: [
//           'Always available to discuss topics',
//           'Walking through components and explaining the flow',
//           'Discussing options between different solutions',
//           'Incorporating best practices throughout'
//         ]
//       }
//     ],
//     tags: ['Mentorship', 'Code Reviews', 'Pair Programming']
//   },
// ]
