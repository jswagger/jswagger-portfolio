## Core Philosophies ##

### Quality over speed ###
 - I take extra steps, and go the extra mile in testing to ensure that regression risk is minimal. I do this through manual testing, unit tests, AI skills, and other guardrails

### AI Integration ###
-  I utilize the latest AI tools and strategies, while staying true to foundational best practices accepted in the software development industry. Knowing how and when to use AI to integrate into my workflow is key in making me an effective engineer, and maximizing my productivity, while maintaining my commitment to quality.

- My feedback loop is getting more precise as time goes on. Refining and adding new skills, while slowly allowing agents more 
autonomy, but keeping a close on risk.

- Steadily building my "Software Factory" by placing repeatable systems and guardrails in place, as trustability increases.

### Context is critical ###
- Whether working with and AI agent, understanding product owner desires, or addressing QA concerns. Boundaries keep agents in targeted areas. And boundaries are established through context. I ask pointed questions to see the broader picture, and strive to understand the heart behind the problem, so that I can provide pointed solutions that are effective in achieving the best possible output. 

### More than a coder ###
- I am focused on giving complete solutions, architecting full structure, start to finished, with a smooth, clean user experience through the entire process.

-Stability and reliability is huge. I take extra care to hunt down edge cases before new solutions go to production. 

### Prioritization ###
-  I weigh the return on investment frequently, on micro and macro levels. When refactoring a class or function, I evaluate the long-term effects, while estimating the time cost and regression risk. When making massive changes in a workflow or system, I keep best practices and ideal structure in mind, while keeping an eye on schedule and deadlines.

### Communication ###
- Solutions are often interative, and require multiple decision points. During these pivitol points, I explain situations and provide options for the product owner, for him to choose desired directions. Working with AI agents, I put requirements in place to prevent assumptions and instead report back to me frequently, so that I can use my experience and expertise to keep momentum going in the right direction.



## My Standard Workflow: ##

### Phase 1 - Setup and Planning ###
- Setup context
	- Acceptance Criteria
	- Coding Standards and preferences
	- Module-specific knowledge (additional detailed non-logical knowledge)

- AI Agent introduction and planning
	- Reading and clarifying Acceptance Criteria details
	- Evaluation of repositories involved
	- Drafting initial plan and specifications

### Phase 2 - Build Main Requirements ###
- AI Agent implementation
	- Stepped approach, with feedback loops built into each step
	- Evaluation of changes after each step, corrections as needed
	- Creation of unit and acceptance tests
	- Manual modular testing of individual pieces

### Phase 3 - Refinement ###
- Initial inspections and Testing
	- Manual code scanning (general overview, not detailed reading)
    - Clean Inspector (skill)
	- Efficiency Inspector (skill)
	- Manual end-to-end smoke testing
	- Re-run applicable unit and acceptance tests

- Revisions
	- User Experience improvements
	- Edge case and error handling
	- Re-run applicable unit and acceptance tests

### Phase 4 - Capstone ###
- Final inspections and testing
	- Regression Inspector (skill)
	- Manually review Acceptance Criteria
	- Manual end-to-end exploratory testing
	- Run all unit and acceptance tests

- Create Pull Requests


## Context Structure ##

### Tickets ###

#### Main ####
Concise index, high level overview 
- Description, 
- AC, 
- Repositories, 
- Repository/Environment Status, 
- PO Review Findings status table
- Known Gaps status table

#### Development ####
Detailed notes on specific sessions
- Completed work
- Every bug identified
- Every fix applied
- Gotchas to watch out for
- Remaining Gaps - details and code locations

#### Testing ####
Manual and automated tests
- Details about datasets tested
- Results from each local debug session
- List of all new tests added
- List of all existing tests modified

### Repository - Integrated ###

- Specific non-logic details co-located with modules and classes


## Software Factory ##

Software Factory Pipeline Steps

### STEP 1: Setup Ticket Context ###
Type: Setup
Description: Extracts ticket ID, loads Acceptance Criteria/Repositories/Dev Notes, branch creation
Model / Effort: Haiku / Low

### STEP 2: Planning ###
Type: Plan
Description: Scans affected repos, produces a contract-complete implementation plan
Model / Effort: Sonnet / High

### STEP 3: Implementation ###
Type: Build
Description: Per-repo sub-agents build the plan, run tests, flag risks
Model / Effort: Haiku / Low

### STEP 4: Check-In 1 ###
Type: Checkpoint
Description: Conditional — pauses only if risks/open questions were flagged
Model / Effort: —

### STEP 5: Review Phase 1 — Code Cleanliness ###
Type: Review
Description: Scans for best practices, triggers Auto-fixes
Model / Effort: Haiku / Low

### STEP 6: Review Phase 2 — Efficiency ###
Type: Review
Description: Scans for efficiency and performance, triggers Auto-fixes
Model / Effort: Haiku / High

### STEP 7: Check-In 2 ###
Type: Checkpoint
Description: Conditional — Cleanliness + Efficiency summary
Model / Effort: —

### STEP 8: Review Phase 3 — Requirements Verification ###
Type: Review
Description: Scans code changes against Acceptance Criteria
Model / Effort: Sonnet / Low

### STEP 9: Check-In 3 ###
Type: Checkpoint
Description: Summary of Acceptance Criteria review
Model / Effort: —

### STEP 10: Review Phase 4 — Regression Inspector ###
Type: Review
Description: Detailed scan for regressions and new bugs, triggers Auto-fixes
Model / Effort: Sonnet / High

## Mentorship ##
### Code Reviews ###
	- Review Pull Requests in a timely manner
	- Always pair positive encouragement with constructive criticism
	- Provide examples to explain concepts
	
### Pair Programming ###
	- Always available to discuss topics
	- Walking through components and explaining the flow
	- Discussing options between different solutions
	- Incorporating best practices throughout


## UI Focus Group Leader (2023 - Present) ##
### Monthly Meetings ###
	- Review progress on major initiatives
	- Celebrate wins
	- Discuss strategies for solving difficult problems related to UI codebase and front end practices
	- Encourage collaboration and teamwork
	- Assign actions items - tackle initiatives as a team
### Technical Debt Cleanup ###
	- Removing legacy React functions
	- Refactoring React Class components to Functional components
### Modernization Initiatives ###
	- React version upgrade
	- File conversions from JavaScript to TypeScript
	- Adding type definitions
	- Refactoring old component structure to fit modern recommendations

