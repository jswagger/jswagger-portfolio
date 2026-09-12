import type { CaseStudyDetail } from '../types/content'
import aiCardImage from '../assets/AIcardimage.png'
import uiCardImage from '../assets/UIcardimage2.png'

export const caseStudies: CaseStudyDetail[] = [
  {
    title: 'AI Report Summarization',
    tagline: 'Integrating the power of AWS Bedrock',
    summary: 'Integrating the power of AWS Bedrock to turn complex reports into clear, useful summaries.',
    tags: ['AWS Bedrock', 'Python', 'React', 'Amazon S3'],
    image: aiCardImage,
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Users run many reports that give specific analysis about different aspects of their data. But there was no way to summarize or draw correlations easily from multiple documents.'
        ]
      },
      {
        heading: 'Approach',
        paragraphs: [
          "Since reports can hold many different types of data, and utilize many different layouts, I knew that we needed to establish a large test pool to try out many different combinations. So I worked with Claude AI to carefully create some temporary scripts in Python to run specific reports through Bedrock, and compare against a direct analysis. This allowed me to isolate specific problematic cases, and establish intentional dynamic context, so that the Bedrock model would consistently return desired results."
        ]
      },
      {
        heading: 'Strategy',
        paragraphs: [
          'We wanted a clean and simple UI element, so I designed a new React component to house a modal that took in basic markdown information returned from an API call, and displayed nicely formatted text to the user.',
          'On the backend, I utilized our AWS Bedrock connection in Python. There I built a new class that received a list of report IDs, retrieved them from Amazon S3, did some processing, then sent a request to Bedrock.',
          'Token consumption was another large concern, since images can consume tokens at a much higher rate than text. So I established a dynamic system of text extraction and image pre-processing in Python, so that our codebase could handle as much of the structural contextual work as possible, and only pass through valuable and helpful information to Bedrock. This allowed the Bedrock model to mostly focus on smartly summarizing data, as it was intended to do, resulting in lower token consumption and higher success probability.'
        ]
      },
      {
        heading: 'Result',
        paragraphs: [
          'Selecting multiple reports and clicking "Summarize" now allows users to get a high-level view quickly and automatically. Token consumption is well-managed, and users are able to receive accurate perceptions of their data.'
        ]
      }
    ]
  },
  {
    title: 'UI Modernization',
    tagline: 'Lifting the codebase',
    summary: 'Lifting a legacy codebase with thoughtful React patterns and a more maintainable interface.',
    tags: ['React', 'TypeScript', 'Vite'],
    image: uiCardImage,
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Over time, the UI codebase became stale, filled with legacy structures and strategies, stuck on old library definitions, and scattered with undefined object types. On a day-to-day basis, this resulted in old coding practices, random bugs, and limited debug visibility.'
        ]
      },
      {
        heading: 'Approach',
        paragraphs: [
          'When I became the UI Focus Group Leader, I set to work establishing a plan to incrementally improve the codebase over time. I looked at key metrics, such as TypeScript usage, React UNSAFE function occurrence, areas with low type definition, and blockers to upgrading our React version, and started tracking the numbers.'
        ]
      },
      {
        heading: 'Strategy',
        paragraphs: [
          'Through monthly meetings, I highlighted our progress on each area of concern, and encouraged the team to take a two-pronged approach: intentionally focusing on refactoring specific areas, and cleaning up while working on feature tickets that touched targeted areas.'
        ]
      },
      {
        heading: 'Result',
        paragraphs: ['Over the course of 3 years, we achieved the following results:'],
        bullets: [
          'Upgraded from React version 16 to version 18',
          'Migrated from Webpack to Vite, increasing build times by 60-80%',
          'Meaningfully increased our TypeScript file usage across the codebase',
          'Switched from using React Class components to exclusively Functional components',
          'Increased our usage of React hooks by over 100%',
          'Trimmed over 100 existing UNSAFE functions through careful refactoring',
          'Cut our occurrence of undefined object and property types by over 50%'
        ]
      },
      {
        heading: 'Value Added',
        paragraphs: [
          'These improvements and modernizations have resulted in improved developer visibility and confidence, prevention of bugs, replacement of old coding habits and strategies with modern recommended practices, and more efficient coding in general.'
        ]
      }
    ]
  },
  {
    title: 'Enterprise Enrollment Process',
    tagline: 'Managing Legal Customer Licensing',
    summary: 'Creating a clean, painless workflow for managing legal customer licensing and data enrollment.',
    tags: ['React', '.NET APIs', 'AWS Cognito', 'SQL Server'],
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Administrators needed a way to manage customers that legally agreed to have their farm field data used for analysis in a community database.'
        ]
      },
      {
        heading: 'Approach',
        paragraphs: [
          'Since this was a feature that did not immediately benefit users enrolling, we needed this to be a simple, painless process, to maximize adoption. So keeping a clean user experience was paramount.'
        ]
      },
      {
        heading: 'Strategy',
        paragraphs: [
          'This is a workflow that includes many areas, including UI interaction, verification in AWS Cognito, SMS verification, and email interaction. So I took it piece by piece, and incrementally created, tested, and integrated each section. New React components were created and connected to our login process, in order to utilize app authentication. Next I created a specific user pool in Cognito to house the users outside of the app, to allow approvals by leadership individuals, who might have different access to the app than the original customer. Once that was in place, I began testing Cognito’s SMS verification process, and adjusted the configuration to meet our needs. Afterwards, it was time for email verification, and I utilized an existing app API endpoint and supporting functions to send prompt emails to targeted decision makers. Lastly, I created a new Enrollment table in our SQL Server database to track responses.'
        ]
      },
      {
        heading: 'Result',
        paragraphs: [
          'Users were able to successfully enroll in data sharing, allowing improved visibility for analytics. Since this feature was built with intentionality and quality-driven focus, very few changes have been required in over 5 years.'
        ]
      },
      {
        heading: 'Value Added',
        paragraphs: [
          'This is now an important gate check for multiple pieces of functionality that require customers to reach this legal agreement.'
        ]
      }
    ]
  },
  {
    title: 'Code Quality Automation',
    tagline: 'Improving logic quality before pull requests',
    summary: 'Building AI-driven review skills that hunt bugs and enforce quality before pull requests are opened.',
    tags: ['Claude AI', 'Git', 'Automation'],
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'As a software engineer, I care deeply about the quality of the solutions that I create. And while I value the input and reviews from peers, I often desire to catch inconsistencies and opportunities to improve my solutions before I create pull requests.'
        ]
      },
      {
        heading: 'Approach',
        paragraphs: [
          'With the addition of AI agents into my daily workflow, I realized that I could leverage their ability to analyze my code in an automated way. So I started strategizing on the areas that frustrated me the most.'
        ]
      },
      {
        heading: 'Strategy',
        paragraphs: [
          "Once I defined my areas of focus, I started working with Claude AI to create skills that specifically targeted these areas. I needed these skills to be repeatable, observable, and configurable, so that I could run them against different repositories and look for different things. I also needed to limit the scope, so I utilized the `git diff` of my feature branches, in order to keep the review agents focused on the code that had changed, and how it could directly impact surrounding areas."
        ]
      },
      {
        heading: 'Result',
        paragraphs: [
          'I now have multiple review agents, skills, helper scripts, and configuration files in my arsenal to hunt bugs and keep things clean in my solutions, before I create my pull requests:'
        ],
        bullets: [
          'Regression Inspector — Reads code changes, analyzes their effect, reads surrounding code, and reports likely bugs and changes that pose high risk of hitting edge cases.',
          'Requirements Verification — Checks ticket acceptance criteria to be sure that all expected functionality has been completed.',
          'Efficiency Inspector — Analyzes structures and strategies like for loops, to identify areas with opportunity to increase performance.',
          'Code Cleanliness Inspector — Looks for adherence to SOLID principles, avoidance of deep nesting, and general complexity of functions.'
        ]
      },
      {
        heading: 'Value Added',
        paragraphs: [
          'This has resulted in an improvement of code quality, prevention of bugs, and a general performance increase in my development workflow.'
        ]
      }
    ]
  },
  {
    title: 'Geospatial Mapping Platform',
    tagline: 'Turning raw field data into actionable maps',
    summary: 'Building interactive ArcGIS-powered mapping tools that turn raw field data into clear, actionable spatial insight.',
    tags: ['React', 'ArcGIS API for JavaScript', 'Python', 'GIS'],
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Field teams were collecting large volumes of spatial data, but customers had no intuitive way to explore it visually or understand how it related to their own land and operations.'
        ]
      },
      {
        heading: 'Approach',
        paragraphs: [
          'I focused on building mapping tools around the ArcGIS API for JavaScript that could take raw, disparate spatial datasets and present them as an interactive, layered map experience, prioritizing performance with large feature sets and a workflow that felt natural to non-GIS users.'
        ]
      },
      {
        heading: 'Strategy',
        paragraphs: [
          'On the front end, I built reusable React components for map layers, feature selection, and editing workflows, so new spatial data types could be added without rebuilding core map interactions. On the back end, I used Python to process and normalize incoming spatial data before it reached the map, keeping heavy geometry work off the client and the UI responsive.'
        ]
      },
      {
        heading: 'Result',
        paragraphs: [
          'Customers gained a fast, interactive map for exploring their field data, with editing and analysis workflows that scaled to large datasets without sacrificing performance.'
        ]
      },
      {
        heading: 'Value Added',
        paragraphs: [
          'This mapping platform became a core, reusable piece of the product, giving customers a visual entry point into their data and giving the team a foundation to build future spatial features on top of.'
        ]
      }
    ]
  }
]
