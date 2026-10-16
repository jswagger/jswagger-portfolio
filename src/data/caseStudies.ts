import type { CaseStudyDetail } from '../types/content'
import aiCardImage from '../assets/AICardImage.jpg'
import reportingHeroImage from '../assets/ReportingHeroImage.jpg'
import uiCardImage from '../assets/UICardImage.jpg'
import uiModernizationHeroImage from '../assets/UIModernizationHeroImage.jpg'
import legacyUIOutcomes from '../assets/LegacyUIOutcomes.svg'
import legacyUITypeScriptShare from '../assets/LegacyUITypeScriptShare.svg'
import legacyUIFunctionalComponents from '../assets/LegacyUIFunctionalComponents.svg'
import legacyUICodeBeforeAfter from '../assets/LegacyUICodeBeforeAfter.svg'
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
import summaryWorkflowDiagram from '../assets/SummaryWorkflowDiagram.png'
import summaryModal from '../assets/SummaryModal.png'
import summaryReportsView from '../assets/SummaryReportsView.png'
import testPoolDiagram from '../assets/TestPoolDiagram.png'
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
    intro:
      'Analyzing data across multiple reports used to require users to manually compare findings and identify connections. I developed an AI-powered reporting feature that consolidates these insights into a single, accessible summary. By integrating AWS Bedrock with intelligent document preprocessing and systematic testing, I created a reliable solution that simplifies complex analysis and reduces AI token consumption by over 75%.',
    introImage: {
      src: summaryWorkflowDiagram,
      wide: true,
      alt: 'Workflow diagram: in the React UI, the user selects up to 20 reports of any mix of types. The Python backend fetches each PDF from S3 and detects its type from the filename. Text-only types send extracted text with no PDF, avoiding image tokens, while PDF types send the raw PDF plus table JSON and a color legend when found. Reports are batched at up to 5 reports and 100 images per batch. Up to 5 reports go in one call, streamed straight back; 6 to 20 reports use map-reduce, summarizing batches in parallel and then combining. The summary is rendered as markdown in a modal in the React UI.',
    },
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
          "Since reports can hold many different types of data, and utilize many different layouts, I knew that we needed to establish a large test pool to try out many different combinations. So I worked with Claude Code to carefully create some temporary scripts in Python to run specific reports through Bedrock, and compare against a direct analysis. This allowed me to isolate specific problematic cases, and establish intentional dynamic context, so that the Bedrock model would consistently return desired results.",
        ],
        images: [
          {
            src: testPoolDiagram,
            alt: 'Diagram titled Building a test pool: a grid of 24 report tiles of varying layouts, with three highlighted in orange as problem cases to isolate, feeds a repeating loop. Run: send a specific report through Bedrock. Compare: check it against a direct analysis. Isolate: pull out the problem cases. Add context: guardrails per report type, color legends. The loop then repeats.',
          },
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
        ],
        images: [
          {
            src: summaryModal,
            alt: 'The Summary modal for three selected reports, with an overview of corn yields across 12 fields, key highlights comparing North 80 and Creek Bottom, and a Worth a closer look note on Creek Bottom\'s later planting and lower yield.',
            caption: 'Illustrative summary with sample data.',
            narrow: true,
          },
          {
            src: summaryReportsView,
            alt: 'The Reports view: a list of six reports with Spring Planting Summary, Fertilizer Applications, and Yield by Field checked and a Summarize button below. A Yield by field map of 12 fields shows North 80 mostly green for higher yield and Creek Bottom mostly orange and red for lower yield. A Summary panel for the 3 selected reports gives an overview, key highlights, and a Worth a closer look note.',
            caption: 'Illustrative reports view with sample data.',
            narrow: true,
          },
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
    codeImage: {
      src: legacyUICodeBeforeAfter,
      title: 'Modernization in Practice',
      subtitle: 'Applying modern React patterns and stronger type safety to an evolving codebase.',
      alt: 'Two refactors shown as before and after pairs. In each, an UNSAFE_componentWillReceiveProps lifecycle method is replaced by a memoized getter or selector that is used in render: a lifecycle loop becomes a memoized getter, and state copied from props becomes a memoized selector.',
    },
    image: uiCardImage,
    cardIcon: 'layout',
    cardSubtitle: '350+ files converted to TypeScript',
    heroImage: uiModernizationHeroImage,
    heroPhotoLocation: 'Patagonia, Chile',
    heroPosition: 'center 55%',
    heroSubtitle: 'Bringing a legacy interface forward without disrupting the workflows behind it.',
    intro:
      'As an established enterprise application continued to grow and evolve, opportunities emerged to modernize its technical foundation and improve developer efficiency. As UI Focus Group Leader, I helped guide a three-year initiative focused on adopting modern React practices, strengthening type safety, and improving maintainability. Through steady, incremental improvements, we made the codebase faster and easier to work with while preserving the stability and functionality customers depend on.',
    introImage: {
      src: legacyUIOutcomes,
      wide: true,
      compact: true,
      title: 'Modernization at a Glance',
      subtitle: 'Tracking progress in type safety, React modernization, and development tooling.',
      alt: 'Three years of results: React upgraded from 16 to 18; builds 60 to 80 percent faster after moving from Webpack to Vite; 478 TypeScript files added, now 64.5 percent of the codebase; 305 functional components added; over 140 UNSAFE functions trimmed; 1,092 any types removed, cutting them in half.',
    },
    sections: [
      {
        heading: 'The Challenge',
        subtitle: 'Legacy patterns were slowing development.',
        paragraphs: [
          'Due to years of continuous development, the UI codebase had come to include outdated libraries, obsolete React patterns, and only limited use of TypeScript. The any type was used in more than 2,000 cases, which reduced the safety of types, and deprecated functions together with inconsistent coding practices had made debugging and maintenance more and more difficult.',
          'It was necessary to modernize, but this had to be done without disrupting the existing enterprise application or slowing down the delivery of new features.'
        ]
      },
      {
        heading: 'The Approach',
        subtitle: 'Establishing a roadmap for incremental improvement.',
        paragraphs: [
          'In my capacity as UI Focus Group Leader, I set up a long-term modernization initiative aimed at enhancing code quality, maintainability, and developer efficiency.',
          'The first step was to determine the areas where improvements could be measured, such as the use of TypeScript, the presence of deprecated React functions, component patterns, and dependencies that were hindering upgrades of the framework. By monitoring these metrics, clear priorities were established and a reliable method of assessing progress over time was created.'
        ]
      },
      {
        heading: 'The Strategy',
        subtitle: 'Making modernization part of everyday development.',
        paragraphs: [
          'Instead of attempting a radical overhaul, I helped set up an incremental method which combined modernization with the continued development of features.',
          'To deal with technical debt the team carried out focused refactoring activities and at the same time improved the legacy code that they came across while carrying out regular feature work. The monthly UI Focus Group meetings gave the opportunity to review progress, discuss the problems encountered and reinforce modern development practices, together with annual presentations which highlighted the measurable improvements.',
          'This method turned modernization into something that required the combined effort of a team rather than treating it as a one-off project.'
        ]
      },
      {
        heading: 'The Outcome',
        subtitle: 'Three years of measurable progress.',
        paragraphs: [
          "Over a period of three years the step-by-step method resulted in significant improvements to the application's technical base, the upgrades to the framework and the tools speeding up the development processes and the greater use of TypeScript together with modern React practices enhancing the consistency, maintainability and type safety of the codebase."
        ],
        bullets: [
          'Upgraded from React version 16 to version 18',
          'Migrated from Webpack to Vite, increasing build times by 60-80%',
          'Increased our TypeScript file usage by over 350 files',
          'Switched from using React Class components to exclusively Functional components',
          'Increased our usage of React hooks by over 100%',
          'Trimmed over 140 existing UNSAFE functions through careful refactoring'
        ],
        images: [
          {
            src: legacyUITypeScriptShare,
            alt: 'Stacked bars showing TypeScript rising from 49.3 percent of the codebase in 2024 to 57.3 percent in 2025 and 64.5 percent in 2026, with JavaScript making up the rest.',
          },
          {
            src: legacyUIFunctionalComponents,
            alt: 'Two bars comparing 56 functional components three years ago with 361 today, a gain of 305.',
          },
        ]
      },
      {
        heading: 'The Value',
        subtitle: 'A healthier codebase built for the future.',
        paragraphs: [
          'The outcome is that the codebase becomes easier to maintain and the development process is more efficient since faster builds mean less time is spent waiting, better typing helps in detecting problems earlier on, and consistent use of React practices makes the application simpler to understand, debug, and extend.',
          'Just as importantly, the initiative set up a sustainable method for modernization; the team achieves a continual reduction of technical debt by incorporating improvements into regular development and at the same time delivering new functionality while keeping the stability of the existing enterprise application.'
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
