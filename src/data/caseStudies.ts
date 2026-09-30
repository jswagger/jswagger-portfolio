import type { CaseStudyDetail } from '../types/content'
import aiCardImage from '../assets/AIcardimage.png'
import reportingHeroImage from '../assets/ReportingHeroImage.jpg'
import uiCardImage from '../assets/UICardImage3.png'
import uiModernizationHeroImage from '../assets/UIModernizationHeroImage.jpg'
import enrollmentCardImage from '../assets/EnrollmentCardImage.png'
import enrollmentHeroImage from '../assets/EnrollmentHeroImage.jpg'
import enrollmentArchitectureDiagram from '../assets/EnrollmentArchitectureDiagram.png'
import codeQualityCardImage from '../assets/CodeQualityCardImage.png'
import mappingHeroImage from '../assets/MappingHeroImage.jpg'
import geospatialCardImage from '../assets/GeospatialCardImage.png'
import performanceOverhaulHeroImage from '../assets/PerformanceOverhaulHeroImage.jpg'
import recChangedCpuOriginal from '../assets/RecChangedCPU-Original.png'
import recChangedCpuNew from '../assets/RecChangedCPU.png'

export const caseStudies: CaseStudyDetail[] = [
  {
    title: 'Smarter Reporting',
    slug: 'ai-report-summarization',
    tagline: 'Integrating the power of AWS Bedrock',
    summary: 'Integrating the power of AWS Bedrock to turn complex reports into clear, useful summaries.',
    tags: ['AWS Bedrock', 'Python', 'React', 'Amazon S3'],
    image: aiCardImage,
    heroImage: reportingHeroImage,
    heroPosition: 'center 55%',
    heroSubtitle: 'Applying AI to turn dense reports into clear, useful insights.',
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
          'Token consumption was another large concern, since images can consume tokens at a much higher rate than text. So I established a dynamic system of text extraction and image pre-processing in Python, so that our codebase could handle as much of the structural contextual work as possible, and only pass through valuable and helpful information to Bedrock. This decreased token consumption by over 75% and allowed the Bedrock model to mostly focus on smartly summarizing data, as it was intended to do, resulting in lower token consumption and higher success probability.'
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
    title: 'Modernizing a Legacy UI',
    slug: 'ui-modernization',
    tagline: 'Lifting the codebase',
    summary: 'Lifting a legacy codebase with thoughtful React patterns and a more maintainable interface.',
    tags: ['React', 'TypeScript', 'Vite'],
    image: uiCardImage,
    heroImage: uiModernizationHeroImage,
    heroPosition: 'center 55%',
    heroSubtitle: 'Bringing a legacy interface forward without disrupting the workflows behind it.',
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
    title: 'AI360 Enrollment Process',
    slug: 'enterprise-enrollment-process',
    tagline: 'Managing Legal Customer Licensing',
    summary: 'Creating a clean, painless workflow for managing legal customer licensing and data enrollment.',
    tags: ['React', '.NET APIs', 'AWS Cognito', 'SQL Server'],
    image: enrollmentCardImage,
    heroImage: enrollmentHeroImage,
    heroPosition: 'center 78%',
    heroSubtitle: 'Building a secure, end-to-end customer enrollment workflow that became a foundational part of the AI360 platform.',
    intro:
      'AI360 previously had no formal process for managing customer enrollment and agreement acceptance. I helped design and implement a multi-step workflow that introduced identity verification, agreement acceptance, and enrollment state into the existing platform; creating a foundation that downstream features could reliably depend on.',
    workflowVisual: {
      headline: 'One simple experience. Multiple systems.',
      steps: [
        { label: 'Enroll', systems: ['React'] },
        { label: 'Verify', systems: ['AWS Cognito', 'SMS Verification'] },
        { label: 'Review', systems: ['Email / API'] },
        { label: 'Approve', systems: ['Leadership Review'] },
        { label: 'Share', systems: ['SQL Server'] },
      ],
      architecture: {
        question: 'Why a separate user pool?',
        explanation:
          "Enrollment users needed to be verified and approved independently from the application's existing user population.",
        branches: [
          { label: 'Application Users', systems: ['AWS Cognito'] },
          { label: 'Enrollment Users', systems: ['Separate User Pool', 'Leadership Review'] },
        ],
      },
      outcome: {
        value: '5+ Years',
        label: 'Reliable, low-maintenance operation',
        description: 'Very few changes have been required since implementation.',
      },
      caption: 'Conceptual representation of the workflow and supporting systems.',
    },
    stats: [
      { value: 6, suffix: '+', emphasis: 'Years', label: 'In production' },
      { value: 10000, suffix: '+', emphasis: '', label: 'Customers enrolled' },
      { value: 15, suffix: '+', emphasis: '', label: 'Downstream features dependent on enrollment state' },
      { value: 8, suffix: '', emphasis: '', label: 'API calls per enrollment' },
    ],
    diagramImage: {
      src: enrollmentArchitectureDiagram,
      alt: 'Diagram of the enrollment platform connecting field devices, applicators, grain storage, mobile and desktop apps, and farm equipment through a central hub.',
    },
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'AI360 needed a formal process for enrolling customers in an agreement governing data sharing. Before this workflow was introduced, there was no system-level process for tracking enrollment status.',
          'The solution needed to guide customers through authentication, verification, and agreement acceptance while giving administrators a reliable way to initiate and track enrollment. Because enrollment status would also determine access to multiple downstream workflows, the solution needed to integrate into the existing application rather than function as an isolated experience.'
        ]
      },
      {
        heading: 'Approach',
        paragraphs: [
          'As the primary engineer, I translated the provided business requirements into an end-to-end technical solution spanning the front end, back end, authentication, and application workflows.',
          'I designed and built the React enrollment experience, backend APIs, business logic, and integrations needed to move a customer from administrator-initiated enrollment through verified agreement acceptance.',
          'The workflow connected email-based enrollment, Amazon Cognito authentication, SMS verification, agreement acceptance, and enrollment-state persistence into a cohesive experience.'
        ]
      },
      {
        heading: 'Strategy',
        paragraphs: [
          "I designed the enrollment state as a durable part of the application's business logic rather than treating enrollment as a one-time transaction.",
          'The workflow established a clear progression:',
          'Administrator initiates → Customer receives invitation → Identity is verified → Agreement is presented → Customer accepts → Enrollment state is recorded',
          'That state could then be consumed by existing and future features to determine whether a customer was eligible to access workflows requiring enrollment.',
          'This approach allowed the new capability to fit into the existing enterprise system while creating a foundation that other parts of the application could build upon.'
        ]
      },
      {
        heading: 'Result',
        paragraphs: [
          'The enrollment process became an established part of the AI360 platform and has remained in production for more than six years.',
          'Thousands of customers have completed the enrollment process, and approximately 15 downstream features reference the enrollment state to control access to related workflows.',
          'Each enrollment coordinates approximately 8 API calls, 1 email, and 1 SMS message across the application and supporting services.'
        ]
      },
      {
        heading: 'Value Added',
        paragraphs: [
          'The project introduced a formal, trackable enrollment process where none previously existed, enabling the product to support data sharing under the required agreement.',
          'More importantly, it established a reliable application-level enrollment state that could be used across the broader platform. What began as a new customer workflow became foundational infrastructure for other product capabilities.'
        ]
      }
    ]
  },
  {
    title: 'AI Assisted Code Review',
    slug: 'code-quality-automation',
    tagline: 'Improving logic quality before pull requests',
    summary: 'Building AI-driven review skills that hunt bugs and enforce quality before pull requests are opened.',
    tags: ['Claude AI', 'Git', 'Automation'],
    image: codeQualityCardImage,
    heroImage: mappingHeroImage,
    heroPosition: 'center 20%',
    heroSubtitle: 'Creating a repeatable system for finding bugs, verifying requirements, and improving code quality.',
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
    title: 'Performance Overhaul',
    slug: 'farm-editing-performance-overhaul',
    tagline: 'Cutting load times by 75% and eliminating race conditions',
    summary: 'Overhauling event and rec editing performance by taming IOT messaging, cutting load times by ~75%, and eliminating status race conditions.',
    tags: ['React', 'IOT Messaging', 'Performance'],
    image: geospatialCardImage,
    heroImage: performanceOverhaulHeroImage,
    heroPosition: 'center 55%',
    heroSubtitle: 'Identifying and eliminating performance bottlenecks across a demanding editing workflow.',
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          "Farm event editing was slow and unreliable. Loading a batch of events took over a minute and a half, the UI called far more actions and API requests than it needed to, and competing IOT status messages (Event Changed, Event Status Changed) regularly raced each other, leaving stale or duplicate statuses visible in the UI."
        ]
      },
      {
        heading: 'Approach',
        paragraphs: [
          'I profiled a batch of 100 events end-to-end to establish a real baseline for load time, actions called, and API requests, then worked through the messaging and state-update paths to find where redundant calls and competing updates were coming from.'
        ]
      },
      {
        heading: 'Strategy',
        paragraphs: [
          'I removed the redundant Event Summary call and improved handling of the Event Changed and Event Status Changed messaging streams so they no longer competed for the same UI state.',
          'I introduced logic to collapse duplicate updates for the same Event or Rec: when Processing Surfaces and Complete messages land in the same debounce grouping, only the most recent update is applied, so an outdated status can no longer overwrite a newer one.',
          "I also sped up how the Event Info and Rec Info panels close after saving, so the UI can depend on the IOT messaging itself to reflect status, rather than waiting on a separate confirmation round-trip."
        ]
      },
      {
        heading: 'Result',
        paragraphs: ['Re-running the same batch of 100 events after these changes showed a substantial, measurable improvement across every metric tracked:'],
        metrics: [
          {
            label: '⏱️ Load Times',
            rows: [
              { version: 'Original', value: '1:35', numericValue: 95 },
              { version: 'New', value: '0:24', numericValue: 24 }
            ],
            improvement: '~75% Faster'
          },
          {
            label: '⚡ Actions Called',
            rows: [
              { version: 'Original', value: '3,492', numericValue: 3492 },
              { version: 'New', value: '1,074', numericValue: 1074 }
            ],
            improvement: '~69% Fewer'
          },
          {
            label: '🌐 API Requests',
            rows: [
              { version: 'Original', value: '167', numericValue: 167 },
              { version: 'New', value: '8', numericValue: 8 }
            ],
            improvement: '~95% Fewer'
          }
        ]
      },
      {
        heading: 'Value Added',
        paragraphs: [
          'CPU usage during Rec Changed and Event Changed messaging previously plateaued at 100% under load; spikes are now substantially lower, letting the UI process incoming messages more consistently instead of stalling.'
        ],
        images: [
          { src: recChangedCpuOriginal, alt: 'CPU usage during Rec Changed messaging, original version, plateauing at 100%', caption: 'Rec Changed Messaging (Original)' },
          { src: recChangedCpuNew, alt: 'CPU usage during Rec Changed messaging, new version, with lower spikes', caption: 'Rec Changed Messaging (New)' }
        ]
      }
    ]
  }
]
