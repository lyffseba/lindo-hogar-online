# Testing Strategy & TDD Guide

## 🚨 Core Policy: STRICT TDD MANDATE
As of April 4, 2026, **Test-Driven Development (TDD) is STRICTLY mandated** for this project. 
All new features, bug fixes, and refactors must include comprehensive test coverage. No code should be considered "production-ready" without corresponding tests verifying its behavior.

## 🛠️ Testing Stack
We use a modern, lightning-fast testing stack tailored for Next.js and React:
- **Test Runner:** [Vitest](https://vitest.dev/) (Native Vite execution, blazing fast)
- **DOM Testing:** [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (`@testing-library/react`)
- **DOM Matchers:** `@testing-library/jest-dom`
- **Environment:** `jsdom`

## 🏃‍♂️ Commands
We have integrated testing into our NPM scripts:

| Command | Description | Use Case |
|---------|-------------|----------|
| `npm run test` | Starts Vitest in **Watch Mode**. | Active TDD / Development. Runs tests related to changed files. |
| `npm run test:run` | Runs the test suite once. | CI/CD pipelines, pre-commit hooks, or final sanity checks. |
| `npm run test:coverage` | Runs tests and generates a coverage report. | Checking test health and identifying uncovered logic. |
| `npm run test:ui` | Opens the Vitest UI in your browser. | Visualizing test suites and debugging visually. |

## 📁 Structure
Test files must mirror the source code structure inside the `__tests__/` directory.
Example:
- Component: `src/components/ui/Button.tsx`
- Test File: `__tests__/components/ui/Button.test.tsx`

## 🧠 TDD Workflow (Red-Green-Refactor)
1. **Red:** Write a test in `__tests__/` for the behavior you want. Watch it fail.
2. **Green:** Write the minimal amount of code in `src/` to make the test pass.
3. **Refactor:** Clean up the code while ensuring the test continues to pass.

## 🧪 Best Practices
- **Test Behavior, Not Implementation:** Focus on what the user sees and interacts with (e.g., finding buttons by role, checking text). Avoid testing internal component state.
- **Mocking:** Use `vi.mock()` sparingly, primarily for external API calls, complex Zustand stores (`src/store/*`), or non-deterministic functions (like `Date.now()`).
- **Coverage:** Aim for 80%+ on critical paths (checkout flows, cart logic, pricing calculations). Use `npm run test:coverage` to audit.
