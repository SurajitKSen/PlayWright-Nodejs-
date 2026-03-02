# Copilot Instructions for Playwright(Nodejs) Project

## Project Overview
This is a **Playwright-based browser automation testing framework** in TypeScript. It's designed for automated web testing across multiple browsers (Chromium, Firefox, WebKit) with HTML reporting.

## Architecture & Key Components

### Test Structure
- **Test Directory**: `./tests/` (contains spec files) and `./e2e/` (contains end-to-end tests)
- **Page Object Model**: Located in `tests/Pages/TestAutomation.ts` - encapsulates page elements and interactions
  - Pattern: Create a class per page with private element locators and public methods for actions
  - Example: `TestAutomation` class wraps elements like `sunday` checkbox with XPath selectors
  - Import and instantiate in tests: `const TA = new TestAutomation(page); await TA.checkBoxSundat();`

### Test Files Organization
- `*.spec.ts` files use Playwright test framework with `test()` and `expect()` from `@playwright/test`
- Tests are async/await based: `test('name', async ({ page }) => { ... })`
- Use `test.skip()` to skip individual tests during development
- Examples: `checkBox.spec.ts`, `inputBox.spec.js`, `radioButtons.spec.js`, `Resume.spec.js`

### Configuration
- **`playwright.config.ts`**: Central configuration file
  - `testDir: './e2e'` - points to test directory for auto-discovery
  - Parallel execution enabled: `fullyParallel: true`
  - CI-aware: Retries and worker count adjust based on `process.env.CI`
  - Reporter: HTML format (`'html'`) - generates `playwright-report/`
  - Trace collection on first retry for debugging: `trace: 'on-first-retry'`
  - Multi-browser projects defined: Chromium, Firefox, WebKit

## Development Workflows

### Running Tests
```bash
npm test                    # Runs all tests
npx playwright test --debug # Debug mode with inspector
npx playwright test --headed # Run with visible browser
npx playwright test --project=chromium # Run specific browser
```

### Viewing Reports
- After test run, open `playwright-report/index.html` in browser
- Contains detailed test results, screenshots, traces for failures

### Adding New Tests
1. Create `*.spec.ts` file in `./e2e/` or `./tests/`
2. Import: `import { test, expect } from '@playwright/test';`
3. Follow pattern:
   ```typescript
   test('description', async ({ page }) => {
       // Use POM if testing existing page
       // Or use page.goto(), page.locator(), page.click(), await expect()
   });
   ```

### Adding New Pages (POM)
1. Create class in `tests/Pages/` extending pattern from `TestAutomation.ts`
2. Define private XPath/selector strings for elements
3. Create public async methods for user interactions
4. Use `constructor(page: Page)` to receive page fixture

## Project-Specific Patterns & Conventions

### Locator Strategy
- Primary: XPath selectors (e.g., `"//input[@class='form-check-input' and @id='sunday']"`)
- Alternative: Use Playwright's role-based selectors for accessibility: `page.getByRole('link', { name: 'Get started' })`

### Assertion Pattern
```typescript
await expect(element).toBeChecked();      // Common for forms
await expect(page).toHaveTitle(/Pattern/); // Title checking
await expect(element).toBeVisible();       // Visibility checks
```

### Async Handling
- Always use `await` with async operations (page navigation, clicks, waits)
- Avoid hardcoded `waitForTimeout()` - use Playwright's auto-waiting instead

## Key Files Reference
- **Config**: `playwright.config.ts` - browser setup, reporter config
- **Core POM**: `tests/Pages/TestAutomation.ts` - example page class
- **Sample Tests**: `e2e/example.spec.ts`, `tests/example.spec.ts` - reference implementations
- **Dependencies**: `package.json` - `@playwright/test` and `@types/node` versions

## Common Pitfalls
- Missing `await` on async operations causes test flakiness
- Hardcoded delays instead of relying on Playwright's auto-waiting
- Tests not following POM pattern lead to maintenance issues
- Forgetting to enable trace collection for debugging

## External Resources
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Assertion Library](https://playwright.dev/docs/api/class-locatorassertions)
- [Test Configuration Guide](https://playwright.dev/docs/test-configuration)
