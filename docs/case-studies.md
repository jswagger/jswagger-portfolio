## AI Report Summarization ##
### Description ###
Integrating the power of AWS Bedrock

### Problem: ###
Users run many reports that give specific analysis about different aspects of their data. But there was no way to summarize or draw correlations easily from multiple documents.

### Approach: ###
Since reports can hold many different types of data, and utilize many different layouts, I knew that we needed to establish a large test pool to try out many different combinations. So I worked with Claude AI to carefully create some temporary scripts in Python to run specific reports through bedrock, and compare against a direct analysis. This allowed me to isolate specific problematic cases, and establish intentional dynamic context, so that the bedrock model would consistenly return desired results. 

### Strategy: ###

We wanted a clean and simple UI element, so I designed a new React component to house a modal that took in basic markdown information returned from an API call, and displayed nicely formatted text to the user.

On the backend, I untilized our AWS Bedrock connection in Python. There I built a new class that received a list of report id's, retrieved them from Amazon S3, did some processing, then sent a request to Bedrock.

Token consumption was another large concern, since images can consume tokens at a much higher rate than text. So I established a dynamic system of text extraction and image pre-processing in Python, so that our codebase could handle as much of structural contextual work as possible, and only pass through valuable and helpful information to bedrock. This allowed the bedrock model to mostly focus on smartly summarizing data, as it was intended to do, resulting in lower token consumption, and higher success probability.

### Result: ###
Selecting multiple reports and clicking "Summarize" now allows users to get a high-level view quickly and automatically. Token consumption is well-managed, and users are able to receive accuarate perceptions of their data.

### Value Added: ###

## UI Modernization ##
### Description ###
Lifting the codebase

### Problem: ###
Over time, the UI codebase became stale, filled with legacy structures and strategies, stuck on old library definitions, and scattered with undefined object types. On a day to day basis, this resulted in old coding practices, random bugs, and limited debug visibility.

### Approach: ###
When I became the UI Focus Group Leader, I set to work establishing a plan to incrementally improve the codebase over time. I looked at key metrics, such as TypeScript usage, React UNSAFE function occurance, areas with low type definition, blockers to upgrading our React version, and started tracking the numbers.

### Strategy: ###
Through monthly meetings, I highlight our progress on each area of concern, and encouraged the team to take a two-pronged approach: Intentionally focusing on refactoring specific areas, and cleaning up while working on feature tickets that touched targeted areas.

### Result: ###
Over the course of 3 years, we achieved the following results:
 - Upgraded from React version 16 to version 18
 - Migrated from Webpack to Vite, increasing build times by 60-80%
 - Increased our TypeScript file usage by 
 - Switched from using React Class components to exclusively Functional components
 - Increased our usage of React hooks by over 100%
 - Trimmed over 100 existing UNSAFE functions through careful refactoring
 - Cut our occurance of undefined object and property types by over 50%

### Value Added: ###
These improvements and modernizations have resulted in improved developer visibility and confidence, prevention of bugs, replacement of old coding habits and strategies with modern recommended practices, and more effiecient coding in general.

## Enterprise Enrollment Process ##
### Description ###
Managing Legal Customer Licensing

### Problem: ###
 Administrators needed a way to manage customers that legally agreed to have their farm field data used for analysis in a community database. 

### Approach: ###
Since this was a feature that did not immediately benefit users enrolling, we needed this to be a simple, painless process, to maximize adoption. So keeping a clean user experience was paramount.


### Strategy: ###
This is a workflow that includes many areas, including UI interaction, verification in AWS Cognito, SMS verification, and email interaction. So I took it piece by piece, and incrementally created, tested, and integrated each section. New React components were created and connected to our login process, in order to utilize app authentication. Next I created a specific user pool in Cognito to house the users outside of the app, to allow approvals by leadership individuals, who might have different access to the app than the original customer. Once that was in place, I began testing Cognito's SMS verification process, and adjusted the configuration to meet our needs. Afterwards, it was time for email verification, and I utilized an existing app API endpoint and supporting fuctions to send prompt emails to targeted decision makers. Lastly, I created a new Enrollment table in our SQL Server database to track responses.

- React components
- .Net API's
- AWS Cognito
- SQL Server

### Result: ###
Users were able to successfully enroll in data sharing, allowing improved visibilty for analytics. Since this feature was built with intentionality and quality-driven, very few changes have been required in over 5 years.

### Value Added: ###
This is now an important gate check for multiple pieces of functionality that require customers to reach this legal agreement.

## Code Quality Automation ##
### Description ###
Improving logic quality before pull requests

### Problem: ###
As a software engineer, I care deeply about the quality of the solutions that I create. And while I value the input and reviews from peers, I often desire to catch inconsistencies and opportunities to improve my solutions, before I create pull requests

### Approach: ###
With the addition of AI agents into my daily workflow, I realized that I could leverage their ability to analyze my code in an automated way. So I started strategizing on areas that frusterated me the most.

### Strategy: ###
Once I defined my areas of focus, I started working with Claude AI to create skills that specifically targeted these areas. I needed these skills to be repeatable, observable, and configurable, so that I could run them against different repositories and look for different things. I also needed to limit the scope, so I utilized the `git diff` of my feature branches, in order to keep the review agents focused on the code that had changed, and how it could directly impact surround areas.

### Result: ###
I now have multiple review agents, skills, helper scripts, and configuration files in my arsenal to hunt bugs and keep things clean in my solutions, before I create my pull requests:

- Regression Inspector - Reads code changes, analyzes their affect, reads surrounding code, and reports likely bugs and changes that pose high-risk of hitting edge cases.

- Requirements Verification - Checks ticket acceptance criteria to be sure that all expected functionality has been completed
- Efficiency Inspector - Analyzes structures and strategies like for loops, to identify areas with opportunity to increase performance
- Code Cleanliness Inspector - Looks for adherence to SOLID principles, avoidence of deep nesting, and general complexity of functions

### Value Added: ###
This has resulted in an improvement of code quality, prevention of bugs, and a general performance increase my development workflow