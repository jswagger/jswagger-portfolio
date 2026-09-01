import type { Highlight, ProjectItem, ServiceItem } from '../types/content'

export const highlights: Highlight[] = [
  { label: 'Experience', value: '10+ years' },
  { label: 'Location', value: 'Florida, USA' },
  { label: 'Specialties', value: 'Enterprise architecture & GIS systems' },
  { label: 'Approach', value: 'Context-first, quality-driven' }
]

export const services: ServiceItem[] = [
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
    title: 'Engineering Solutions',
    roleType: 'development', // Add this
    roleSummary: 'Built full-stack features and spatial processing systems', // Add this
    leadershipItems: [], // Empty for dev-focused role
    sections: [
      {
        label: 'Front-end Development',
        items: [
          'Building new React components',
          'Designing UI patterns and workflows',
          'Creating and maintaining type definitions and unit tests'
        ]
      },
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
    tags: ['React', 'Python', 'AWS', 'GIS', 'SQL', 'C#']
    },
    {
    title: 'UI Focus Group Leader',
    roleType: 'leadership',
    roleSummary: 'Led UI modernization initiatives across the engineering team',
    leadershipItems: [ // Add this
      'Organized monthly focus group meetings',
      'Drove React and TypeScript modernization'
    ],
    sections: [
      {
        label: 'Monthly Meetings',
        items: [
          'Review progress on major initiatives',
          'Celebrate wins',
          'Discuss strategies for solving difficult problems related to UI codebase and front end practices',
          'Encourage collaboration and teamwork',
          'Assign actions items - tackle initiatives as a team'
        ]
      },
      {
        label: 'Technical Debt Cleanup',
        items: [
          'Removing legacy React functions',
          'Refactoring React Class components to Functional components'
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
        roleType: 'leadership',
    roleSummary: 'Mentored engineers through code reviews and pair programming',
    leadershipItems: [
      'Provided guidance and mentorship to engineers',
    ],
    sections: [
      {
        label: 'Code Reviews',
        items: [
          'Review Pull Requests in a timely manner',
          'Always pair positive encouragement with constructive criticism',
          'Provide examples to explain concepts'
        ]
      },
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
