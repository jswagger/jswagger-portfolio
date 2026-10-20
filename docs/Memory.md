# Repository Memory

This file captures the working preferences and engineering principles that agents should apply in this portfolio repository.

## Collaboration

- Communicate with Jeremy in a warm, upbeat, personable, and professional tone.
- Keep updates concise, concrete, and useful. Explain what was learned, what changed, and what comes next.
- Ask for clarification when requirements, file locations, or design choices are ambiguous instead of making broad assumptions.
- For decisions with two to four clear options, prefer a multiple-choice question when the interaction supports it.
- During investigation, work in small increments and report meaningful findings before moving from diagnosis to implementation.
- Use the AskUserQuestion tool (multiple-choice format) when asking clarifying or scoping questions. Jeremy finds this interaction style significantly better than plain-text questions.
- Ask follow-up questions and check in frequently rather than making broad assumptions and plowing ahead.

Why: Jeremy really likes the back-and-forth communication style. It is usually better to ask for more detail than to assume and get it wrong — assumptions waste more time than a quick question.

How to apply: When hitting a blocker, an ambiguity, or a design decision with multiple valid paths, stop and ask. Don't pick the "most likely" answer and proceed silently. Short check-in questions mid-task are welcome.

## Investigation Workflow

1. Start from the most specific available anchor: a file, component, symbol, failing behavior, or test.
2. Read only enough nearby code to identify the controlling path, one falsifiable hypothesis, and one focused check.
3. Prefer targeted searches and local call sites over broad repository scans.
4. If a message or behavior is missing, check branch differences and whether a fix was merged but not deployed before blaming an external system.
5. After each substantive edit, run the narrowest relevant test, typecheck, lint, or build check before expanding the scope.
6. Do not edit during an investigation unless the user has asked for a fix or the next small probe is necessary to validate the hypothesis.

## Engineering Principles

- Stability and regression avoidance matter more than opportunistic cleanup.
- Favor the smallest change that fully satisfies the requirement.
- Keep abstractions proportional to the problem; avoid speculative state, wrappers, error handling, and generic utilities.
- Prefer simple happy-path logic with explicit, immediate guards for required failure conditions.
- Use early returns and guard clauses to keep control flow flat.
- Extract nested callbacks, conditionals, and transformations into named helpers when they become difficult to scan.
- Name helpers after what they compute or represent, not the implementation mechanism.
- Keep functions focused on one responsibility and make orchestration read like a clear sequence of steps.

## React and TypeScript

- Use modern TypeScript and React patterns consistent with the existing project.
- Prefer `.ts` and `.tsx` files, `interface` for object shapes, `T[]` for arrays, and `const` unless reassignment is required.
- Preserve the repository's existing formatting, import ordering, quote style, and indentation when modifying code.
- Keep components readable and visually flat. Extract repeated or substantial mapped JSX into small subcomponents.
- Avoid deeply nested ternaries and compound conditional rendering in JSX; compute clear view states above the return.
- Keep view components focused on rendering. Move complex state management, data transformation, and asynchronous work into focused hooks or helpers.
- Do not introduce speculative context, state, or abstraction for a single visual use case.
- Prioritize accessible, responsive, intentional UI that matches the existing visual language.

## Reviews and Reporting

For multi-item analysis, triage, or review findings, lead with issues ordered by severity:

| # | Severity | Item |
|---|----------|------|
| 1 | Critical | Likely regressions or correctness problems |
| 2 | Warning | Risks, gaps, or behavior that needs confirmation |
| 3 | Cleanup | Minor maintainability or polish items |

For review reports, use three sections in this order:

1. Regressions / Likely Bugs
2. Warnings
3. Clean, with a concise checklist table of verified regression traps

Use 🔴/🟡/✅ severity table for any multi-item analysis, bug triage, or review findings

For tickets with multiple acceptance criteria or repositories, track each criterion in a table with its title, description, repository or file, and status. Keep the table current as work progresses.

## Repository Context

- This is a React and TypeScript portfolio application built with Vite.
- Source components live under `src/components`; shared content lives under `src/data` and `src/types`.
- Visual assets and portfolio philosophy notes live under `src/assets`.
- Protect the existing personal voice and visual identity when making UI changes.
- Prefer complete, tested user experiences over isolated implementation details.

## Decision Filter

Before changing code, ask:

- What exact behavior or experience is being changed?
- Which file or abstraction directly controls it?
- What is the cheapest focused check that could disprove the approach?
- Does the change introduce unnecessary complexity or regression risk?

After changing code, verify the focused behavior first, then run broader checks when the change warrants them.
