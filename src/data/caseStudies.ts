import type { CaseStudyDetail } from '../types/content'
import aiCardImage from '../assets/AICardImage.jpg'
import reportingHeroImage from '../assets/ReportingHeroImage.jpg'
import uiCardImage from '../assets/UICardImage.jpg'
import uiModernizationHeroImage from '../assets/UIModernizationHeroImage.jpg'
import enrollmentCardImage from '../assets/EnrollmentCardImage.jpg'
import enrollmentHeroImage from '../assets/EnrollmentHeroImage.jpg'
import enrollmentArchitectureDiagram from '../assets/EnrollmentArchitectureDiagram.png'
import enrollmentWorkflowDiagram from '../assets/EnrollmentWorkflowDiagram.webp'
import codeQualityCardImage from '../assets/CodeQualityCardImage.jpg'
import codeReviewWorkflowDiagram from '../assets/CodeReviewWorkflowDiagram.svg'
import bugHunterReport from '../assets/BugHunterReport.webp'
import codeQualityHeroImage from '../assets/CodeQualityHeroImage.jpg'
import geospatialCardImage from '../assets/GeospatialCardImage.jpg'
import performanceOverhaulHeroImage from '../assets/PerformanceOverhaulHeroImage.jpg'
import apiRequestsDiagram from '../assets/ApiRequestsDiagram.png'
import { performanceOverhaulMetrics } from './performanceOverhaulMetrics'

export const caseStudies: CaseStudyDetail[] = [
  {
    title: 'Smarter Reporting',
    slug: 'ai-report-summarization',
    tagline: 'Integrating the power of AWS Bedrock',
    summary: 'Integrating the power of AWS Bedrock to turn complex reports into clear, useful summaries.',
    tags: ['AWS Bedrock', 'Python', 'React', 'Amazon S3'],
    image: aiCardImage,
    cardIcon: 'sparkles',
    cardSubtitle: '75% decrease token consumption',
    heroImage: reportingHeroImage,
    heroPhotoLocation: 'Cappadocia, Türkiye',
    heroPosition: 'center 55%',
    heroSubtitle: 'Applying AI to turn dense reports into clear, useful insights.',
    sections: [
      {
        heading: 'The Challenge',
        subtitle: 'There was no easy way to see across multiple reports.',
        paragraphs: [
          'Users run many reports that give specific analysis about different aspects of their data. But there was no way to summarize or draw correlations easily from multiple documents.'
        ]
      },
      {
        heading: 'The Approach',
        subtitle: 'Building a test pool to make AI results dependable.',
        paragraphs: [
          "Since reports can hold many different types of data, and utilize many different layouts, I knew that we needed to establish a large test pool to try out many different combinations. So I worked with Claude Code to carefully create some temporary scripts in Python to run specific reports through Bedrock, and compare against a direct analysis. This allowed me to isolate specific problematic cases, and establish intentional dynamic context, so that the Bedrock model would consistently return desired results."
        ]
      },
      {
        heading: 'The Strategy',
        subtitle: 'Cutting token use by 75% while keeping the insight.',
        paragraphs: [
          'We wanted a clean and simple UI element, so I designed a new React component to house a modal that took in basic markdown information returned from an API call, and displayed nicely formatted text to the user.',
          'On the backend, I utilized our AWS Bedrock connection in Python. There I built a new class that received a list of report IDs, retrieved them from Amazon S3, did some processing, then sent a request to Bedrock.',
          'Token consumption was another large concern, since images can consume tokens at a much higher rate than text. So I established a dynamic system of text extraction and image pre-processing in Python, so that our codebase could handle as much of the structural contextual work as possible, and only pass through valuable and helpful information to Bedrock. This decreased token consumption by over 75% and allowed the Bedrock model to mostly focus on smartly summarizing data, as it was intended to do, resulting in lower token consumption and higher success probability.'
        ]
      },
      {
        heading: 'The Outcome',
        subtitle: 'Clear summaries in a single click.',
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
    codeSnippets: [
      [
        'UNSAFE_componentWillReceiveProps(nextProps) {',
        '    if (nextProps.records) {',
        '        for (const item of nextProps.records) formatText(item);',
        '    }',
        '}',
      ].join('\n'),
      [
        'getFormattedRecords = memoizeFormattedRecords(formatDetailText);',
        'render() { ... records={this.getFormattedRecords(this.props.records)} ... }',
      ].join('\n'),
      [
        'UNSAFE_componentWillReceiveProps(nextProps) {',
        '    this.initializePlantType(nextProps);',
        '    this.initializePlantLife(nextProps);',
        '    this.initializePlantStage(nextProps);',
        '    // ...plus 2 more, and the same shape repeated in 8 panels',
        '}',
        '',
        'initializePlantType = (nextProps) => {',
        '    if (nextProps[PICKLIST_PLANT_TYPE]) {          // bare truthiness',
        '        this.setState({',
        '            [PICKLIST_PLANT_TYPE]: prepareSelectableOptions(',
        '                nextProps[LIST_PLANT_TYPE],',
        '                { guid: LIST_GUID, label: VALUE, id: ID }',
        '            ),',
        '        });',
        '    }',
        '};',
        '// render: options={this.state[LIST_PLANT_TYPE]}',
      ].join('\n'),
      [
        'getPlantTypeOptions = memoizeSelectableOptions((options) =>',
        '    prepareSelectableOptions(options, { guid: LIST_GUID, label: VALUE, id: ID })',
        ');',
        '',
        '// render:',
        'options={this.getPlantTypeOptions(this.props[LIST_PLANT_TYPE])}',
      ].join('\n'),
    ],
    image: uiCardImage,
    cardIcon: 'layout',
    cardSubtitle: '350+ files converted to TypeScript',
    heroImage: uiModernizationHeroImage,
    heroPhotoLocation: 'Patagonia, Chile',
    heroPosition: 'center 55%',
    heroSubtitle: 'Bringing a legacy interface forward without disrupting the workflows behind it.',
    sections: [
      {
        heading: 'The Challenge',
        subtitle: 'A stale codebase was hiding bugs and slowing the team down.',
        paragraphs: [
          'Over time, the UI codebase became stale, filled with legacy structures and strategies, stuck on old library definitions, and scattered with undefined object types. On a day-to-day basis, this resulted in old coding practices, random bugs, and limited debug visibility.'
        ]
      },
      {
        heading: 'The Approach',
        subtitle: 'Turning a legacy codebase into measurable goals.',
        paragraphs: [
          'When I became the UI Focus Group Leader, I set to work establishing a plan to incrementally improve the codebase over time. I looked at key metrics, such as TypeScript usage, React UNSAFE function occurrence, areas with low type definition, and blockers to upgrading our React version, and started tracking the numbers.'
        ]
      },
      {
        heading: 'The Strategy',
        subtitle: 'Steady progress, one refactor at a time.',
        paragraphs: [
          'Through monthly meetings, I highlighted our progress on each area of concern, and encouraged the team to take a two-pronged approach: intentionally focusing on refactoring specific areas, and cleaning up while working on feature tickets that touched targeted areas.'
        ]
      },
      {
        heading: 'The Outcome',
        subtitle: 'Three years of compounding improvements.',
        paragraphs: ['Over the course of 3 years, we achieved the following results:'],
        bullets: [
          'Upgraded from React version 16 to version 18',
          'Migrated from Webpack to Vite, increasing build times by 60-80%',
          'Increased our TypeScript file usage by over 350 files',
          'Switched from using React Class components to exclusively Functional components',
          'Increased our usage of React hooks by over 100%',
          'Trimmed over 140 existing UNSAFE functions through careful refactoring'
        ]
      },
      {
        heading: 'The Value',
        subtitle: 'Safer, faster, more confident development.',
        paragraphs: [
          'These improvements and modernizations have resulted in improved developer visibility and confidence, prevention of bugs, replacement of old coding habits and strategies with modern recommended practices, and more efficient coding in general.'
        ]
      }
    ]
  },
  {
    title: 'Customer Enrollment Workflow',
    slug: 'enterprise-enrollment-process',
    tagline: 'Managing Legal Customer Licensing',
    summary: 'Creating a clean, painless workflow for managing legal customer licensing and data enrollment.',
    tags: ['React', '.NET APIs', 'AWS Cognito', 'SQL Server'],
    image: enrollmentCardImage,
    cardIcon: 'user-check',
    cardSubtitle: '10,000+ customers enrolled',
    heroImage: enrollmentHeroImage,
    heroPhotoLocation: 'Grand Tetons, Wyoming',
    heroPosition: 'center 78%',
    heroSubtitle: 'Building a secure, end-to-end customer enrollment workflow that became a foundational part of the AI360 platform.',
    intro:
      'AI360, the data-sharing platform within the Agvance agribusiness software suite, previously lacked a formal process for managing customer enrollment and agreement acceptance. As primary engineer, I designed and implemented a multi-step workflow that introduced identity verification, agreement acceptance, and enrollment state into the existing platform, creating a foundation that downstream features could reliably depend on.',
    workflowVisual: {
      headline: 'A workflow, built to scale',
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
      { value: 6, suffix: '+', emphasis: '', label: 'Years in production' },
      { value: 10000, suffix: '+', emphasis: '', label: 'Customers enrolled' },
      { value: 15, suffix: '+', emphasis: '', label: 'Dependant features' },
      { value: 5, suffix: '', emphasis: '', label: 'Repositories' },
    ],
    diagramImage: {
      src: enrollmentArchitectureDiagram,
      alt: 'Diagram of the enrollment platform connecting field devices, applicators, grain storage, mobile and desktop apps, and farm equipment through a central hub.',
    },
    sections: [
      {
        heading: 'The Challenge',
        subtitle: "A critical customer workflow didn't exist.",
        paragraphs: [
          'AI360 needed a formal process for enrolling customers in an agreement governing data sharing. Before this workflow was introduced, there was no system-level process for tracking enrollment status.',
          'The solution needed to guide customers through authentication, verification, and agreement acceptance while giving administrators a reliable way to initiate and track enrollment. Because enrollment status would also determine access to multiple downstream workflows, the solution needed to integrate into the existing application rather than function as an isolated experience.'
        ]
      },
      {
        heading: 'The Approach',
        subtitle: 'Turning a business requirement into an end-to-end workflow.',
        paragraphs: [
          'As the primary engineer, I translated the provided business requirements into an end-to-end technical solution spanning the front end, back end, authentication, and application workflows.',
          'I designed and built the React enrollment experience, backend APIs, business logic, and integrations needed to move a customer from administrator-initiated enrollment through verified agreement acceptance.',
          'The workflow connected email-based enrollment, Amazon Cognito authentication, SMS verification, agreement acceptance, and enrollment-state persistence into a cohesive experience.'
        ]
      },
      {
        heading: 'The Strategy',
        subtitle: 'Establishing enrollment as application-level state.',
        paragraphs: [
          "I designed the enrollment state as a durable part of the application's business logic rather than treating enrollment as a one-time transaction.",
          'The workflow established a clear progression:',
          
          'That state could then be consumed by existing and future features to determine whether a customer was eligible to access workflows requiring enrollment.',
          'This approach allowed the new capability to fit into the existing enterprise system while creating a foundation that other parts of the application could build upon.'
        ],
        imagesAfterParagraph: 1,
        images: [
          {
            src: enrollmentWorkflowDiagram,
            alt: 'Swimlane diagram of the enrollment workflow: an administrator initiates enrollment in React, the customer receives an email invitation, the system verifies identity with Cognito and SMS, presents the agreement in React, the customer accepts via a .NET API, and the system records enrollment state in SQL Server, which 15+ downstream features read.'
          }
        ]
      },
      {
        heading: 'The Outcome',
        subtitle: '10,000+ customers enrolled',
        paragraphs: [
          'The enrollment process became an established part of the AI360 platform and has remained in production for more than six years.',
          'Over 10,000 customers have completed the enrollment process, and approximately 15+ downstream features reference the enrollment state to control access to related workflows.',
          'Each enrollment coordinates approximately 8 API calls, 1 email, and 1 SMS message across the application and supporting services.'
        ]
      },
      {
        heading: 'The Value',
        subtitle: 'Turning a critical business need into a lasting platform capability.',
        paragraphs: [
          'The project introduced a formal, trackable enrollment process where none previously existed, enabling the product to support data sharing under the required agreement.',
          'More importantly, it established a reliable application-level enrollment state that could be used across the broader platform. What began as a new customer workflow became foundational infrastructure for other product capabilities.'
        ]
      }
    ]
  },
  {
    title: 'Catching Bugs Before Review',
    slug: 'code-quality-automation',
    tagline: 'Improving logic quality before pull requests',
    summary: 'Building AI-driven review skills that hunt bugs and enforce quality before pull requests are opened.',
    tags: ['Claude Code', 'Git', 'Automation'],
    image: codeQualityCardImage,
    cardIcon: 'shield-check',
    cardSubtitle: '18 bugs caught before review',
    heroImage: codeQualityHeroImage,
    heroPhotoLocation: 'Castle Combe, England',
    partnerLogo: 'github',
    heroPosition: 'center 50%',
    heroSubtitle: 'Creating a repeatable system for finding bugs, verifying security, and improving code quality.',
    intro:
      'Regression Inspector, the internal version of Bug Hunter, now runs on every ticket I work on our enterprise platform. Across my last 10 tickets, spanning 7 repositories, it scanned 339 changed files, surfaced 73 suspicious findings, and flagged 22 probable bugs, roughly two per ticket, before a pull request was opened. Eighteen of those were confirmed as real bugs and fixed before a pull request was opened.',
    introLink: { label: 'View GitHub', href: 'https://github.com/jswagger/AI-Skills' },
    stats: [
      { value: 18, suffix: '', emphasis: '', label: 'Bugs caught before review' },
      { value: 82, suffix: '%', emphasis: '', label: 'Of flagged bugs confirmed' },
      { value: 339, suffix: '', emphasis: '', label: 'Files scanned' },
      { value: 7, suffix: '', emphasis: '', label: 'Repositories' },
    ],
    statsCaption: 'Regression Inspector, last 10 tickets',
    introImage: {
      src: codeReviewWorkflowDiagram,
      alt: 'Workflow diagram: a feature branch feeds a git merge-base diff, which fans out to three review skills. Bug Hunter gathers evidence, runs a two-pass review and writes a tiered report. Code Sweeper and Security Auditor scan patterns, run an agent review and write tiered reports. All three lead to the developer, who decides what to fix before opening a PR.',
    },
    sections: [
      {
        heading: 'The Challenge',
        subtitle: 'Problems surface too late.',
        paragraphs: [
          "Most issues that reach peer review could have been caught earlier: a guard removed during a refactor, a function signature that changed while a caller still relied on the old contract, a risky pattern that's easy to overlook, or tests that no longer test anything meaningful. Each one costs a review cycle, and some slip through to production. I wanted a consistent way to catch these myself, on every ticket, before anyone else had to."
        ]
      },
      {
        heading: 'The Approach',
        subtitle: 'Put AI agents to work on the parts humans miss.',
        paragraphs: [
          'AI agents are good at reading code in context, but on their own they\'re inconsistent and prone to confident mistakes. Instead of asking an agent to "review my code," I split the work into three focused skills, each with one job: Bug Hunter looks for regressions and new bugs, Security Auditor looks for vulnerabilities, and Code Sweeper looks for clean-code issues and low-value tests. Each skill does its own job well and defers the others to their dedicated tool.'
        ]
      },
      {
        heading: 'The Strategy',
        subtitle: 'Scripts gather evidence. Agents make judgments.',
        paragraphs: [
          'Every skill follows the same pattern. First, Node.js scripts collect the diff using `git merge-base`, so reviews cover only what my branch changed. Then deterministic scanners flag candidates, such as removed guards, dropped awaits, changed signatures, or risky security patterns. Only after that does the agent review the evidence in context. Scanner matches are treated as candidates, not confirmed issues.',
          "Bug Hunter goes furthest. It reads the ticket's acceptance criteria and turns them into edge cases to check, looks up callers when a signature changes, and ranks findings into compact risk packets so the agent reads the riskiest changes first. A fast model triages, then a stronger model performs a deep review. Every probable bug must include a concrete failure scenario, a specific input and the wrong result it produces, or the report rejects it. Auto-fixing is off by default, and I decide what changes."
        ],
        quote: 'Every probable bug needs a concrete failure scenario.'
      },
      {
        heading: 'The Outcome',
        subtitle: 'A proven, open-source review toolkit.',
        paragraphs: [
          'Regression Inspector, the internal version of Bug Hunter, now runs on every ticket I work on our enterprise platform. Across my last 10 tickets, spanning 7 repositories, it scanned 339 changed files, surfaced 73 suspicious findings, and flagged 22 probable bugs, roughly two per ticket, before a pull request was opened.',
          "Bug Hunter, Code Sweeper, and Security Auditor are available in my open-source AI-Skills repository. They're configurable per project, unit tested, and built on Node.js built-ins with no third-party dependencies."
        ],
        images: [
          {
            src: bugHunterReport,
            alt: 'Sample Bug Hunter report for a feature branch, showing one probable bug with its failing scenario and fix, two suspicious findings to check, two clean areas, and one dismissed finding.',
            caption: 'Illustrative Bug Hunter report. Example code is generic.',
          },
        ],
        imagesAfterParagraph: 1
      },
      {
        heading: 'The Value',
        subtitle: 'Better code before review, not after.',
        paragraphs: [
          "Catching issues before a pull request means fewer review cycles, fewer regressions reaching production, and reviewers who can focus on architecture and intent instead of hunting for bugs. Just as importantly, the toolkit is built to be trustworthy: it shows its evidence, separates likely problems from things worth a second look, and leaves the final call to the developer. AI makes the review faster, while accountability for the code stays with the engineer."
        ]
      }
    ]
  },
  {
    title: 'Performance Overhaul',
    slug: 'farm-editing-performance-overhaul',
    tagline: 'Cutting load times by 75% and eliminating race conditions',
    summary: 'Overhauling event editing performance by taming IOT messaging, cutting load times by ~75%, and eliminating status race conditions.',
    tags: ['React', 'IOT Messaging', 'Performance'],
    image: geospatialCardImage,
    cardIcon: 'bolt',
    cardSubtitle: '95% fewer API calls',
    heroImage: performanceOverhaulHeroImage,
    heroPhotoLocation: 'BLM Land, Utah',
    heroPosition: 'center 55%',
    heroSubtitle: 'Identifying and eliminating performance bottlenecks across a demanding editing workflow.',
    intro:
      'Editing farm events had become a frustrating experience, with long load times, excessive API requests, and conflicting real-time updates affecting application responsiveness and reliability. By identifying performance bottlenecks and improving how the application processed requests and status updates, I reduced load times by approximately 75%, significantly decreased unnecessary operations, and delivered a faster, more dependable user experience.',
    introImage: {
      src: apiRequestsDiagram,
      wide: true,
      alt: 'Dot diagram comparing API requests for the same 100-event batch: the original version made 167 requests, shown as 167 dots, and the new version makes 8, shown as 8 dots. That is about 21 times fewer, 159 fewer requests per batch, a reduction of roughly 95%.',
    },
    sections: [
      {
        heading: 'The Challenge',
        subtitle: "Slow performance. Unreliable updates.",
        paragraphs: [
          "Editing large batches of farm events had become increasingly inefficient. Loading 100 events took over 90 seconds, while excessive API requests and unnecessary UI actions added processing overhead.",
          "Competing real-time messaging streams also caused inconsistent event statuses, occasionally displaying outdated or duplicate information. Together, these issues slowed everyday workflows and made the application less responsive and reliable for users."
        ]
      },
      {
        heading: 'The Approach',
        subtitle: "Measure first. Optimize with purpose.",
        paragraphs: [
          "I began by profiling a batch of 100 events to establish measurable baselines for load times, UI actions, and API requests.",
          "Using those findings, I traced the application's messaging and state-management workflows to identify redundant operations, unnecessary network requests, and competing updates. This provided a clear path toward targeted improvements without introducing unnecessary complexity."
        ]
      },
      {
        heading: 'The Strategy',
        subtitle: "Reduce overhead. Restore consistency.",
        paragraphs: [
          "I eliminated redundant Event Summary API requests and refined how the application processed its two real-time messaging streams: Event Changed and Event Status Changed.",
          "To prevent conflicting updates, I introduced logic that consolidates duplicate messages and prioritizes the most recent event status. This ensures outdated processing states cannot overwrite newer information displayed in the UI.",
          "I also optimized how Event Information panels close after saving, allowing the interface to respond immediately while relying on existing real-time messaging to reflect updated statuses rather than waiting for additional confirmation requests.",
          "Together, these changes reduced unnecessary processing, improved state consistency, and made the application noticeably more responsive."
        ]
      },
      {
        heading: 'The Outcome',
        subtitle: "Measurable improvements across the board.",
        paragraphs: [
          "Re-profiling the same batch of 100 events confirmed substantial improvements across every measured metric. Load times dropped from 95 seconds to just 24 seconds, while UI actions and API requests decreased dramatically.",
          "These improvements translated directly into faster interactions, reduced processing overhead, and a more responsive experience for users working with large batches of events."
        ],
        metrics: performanceOverhaulMetrics
      },
      {
        heading: 'The Value',
        subtitle: "Faster workflows. A more reliable experience.",
        paragraphs: [
          "Beyond faster load times, the improvements made everyday interactions more responsive and predictable. CPU usage, which previously reached sustained 100% utilization during heavy messaging activity, was substantially reduced, allowing the application to process incoming updates without the same performance bottlenecks.",
          "For users, the difference was immediate: less waiting, more consistent status information, and a smoother experience when editing large batches of events."
        ]
      }
    ]
  }
]
