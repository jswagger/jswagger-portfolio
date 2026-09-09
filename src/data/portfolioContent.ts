import type { Highlight, ProjectItem, ServiceItem } from '../types/content'

export const highlights: Highlight[] = [
  { label: 'Experience', value: '10+ years' },
  { label: 'Location', value: 'Florida, USA' },
  { label: 'Specialties', value: 'Enterprise architecture & GIS systems' },
  { label: 'Approach', value: 'Context-first, quality-driven' }
]

export const services: ServiceItem[] = [
  {
    title: 'Commitment to Quality',
    description: 'With every task and project, I strive to do my best work, every time. I am passionate about following best practices in code and in processes. This keeps my output consistent and clear, as I deliver with confidence every time.'
  },
  {
    title: 'UI leadership and modernization',
    description: 'I lead front-end improvement initiatives with an eye toward maintainability, accessibility, and modern patterns. From refactoring legacy React to improving team standards, I help organizations turn technical debt into a healthier long-term foundation.'
  },
  {
    title: 'Mentorship and team enablement',
    description: 'I help engineers and product teams move forward with clarity by pairing thoughtful guidance with practical execution. I focus on building trust, reducing friction, and creating systems that make complex work feel sustainable.'
  }
]

export const projects: ProjectItem[] = [
    {
    title: 'Front End Engineering',
    roleType: 'Development',
    roleSummary: 'Building full-stack features', // Add this
    leadershipItems: [], // Empty for dev-focused role
    sections: [
      {
        label: 'UI Development',
        items: [
          'Building new React components',
          'Designing UI patterns and workflows',
          'Creating and maintaining type definitions and unit tests'
        ]
      },
    ],
    tags: ['React', 'TypeScript', 'CSS']
  },
  {
    title: 'Back End Engineering',
    roleType: 'Development',
    roleSummary: 'Building full-stack features', // Add this
    leadershipItems: [], // Empty for dev-focused role
    sections: [
      {
        label: 'Back-end Development',
        items: [
          'Creating spatial processing methods',
          'Designing new API endpoints and workflows',
          'Adjusting database structure, procedures, and schema',
          'AWS Lambda function development and maintenance'
        ]
      }
    ],
    tags: ['Python', 'AWS', 'GIS', 'SQL', 'C#']
    },
    {
    title: 'UI Focus Group Leader',
    roleType: 'Leadership',
    roleSummary: 'Led UI modernization initiatives across the engineering team',
    leadershipItems: [ // Add this
      'Organize monthly focus group meetings',
      'Drive React and TypeScript modernization'
    ],
    sections: [
      {
        label: 'Monthly Meetings',
        items: [
          'Review progress on major initiatives',
          'Discuss strategies for solving difficult problems related to UI codebase and front end practices',
          'Encourage collaboration and teamwork',
        ]
      },
      {
        label: 'Modernization Initiatives',
        items: [
          'React version upgrade',
          'File conversions from JavaScript to TypeScript',
          'Adding type definitions',
          'Refactoring old component structure to fit modern recommendations'
        ]
      }
    ],
    tags: ['UI Leadership', 'React', 'Modernization']    
  },
  {
    title: 'Mentorship',
    roleType: 'Development',
    roleSummary: 'Mentor engineers through code reviews and pair programming',
    leadershipItems: [
    ],
    sections: [
      {
        label: 'Pair Programming',
        items: [
          'Always available to discuss topics',
          'Walking through components and explaining the flow',
          'Discussing options between different solutions',
          'Incorporating best practices throughout'
        ]
      }
    ],
    tags: ['Mentorship', 'Code Reviews', 'Pair Programming']
  },
    {
    title: 'QA Liason',
    roleType: 'Development',
    roleSummary: 'Coolaborate with Quality Assurance team',
    leadershipItems: [
    ],
    sections: [
      {
        label: 'Pair Programming',
        items: [
          'Discuss automated testing ideas',
          'Assist with test creation',
          'Implement code changes to support improved testing'
        ]
      }
    ],
    tags: ['Quality Assurance', 'Teamwork', 'Test Automation']
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
