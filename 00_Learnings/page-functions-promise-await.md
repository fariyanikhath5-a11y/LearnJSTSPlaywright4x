# Playwright `page` Functions: Promise and `await` Reference

This reference covers the JavaScript/TypeScript methods in Playwright's official [`Page` API](https://playwright.dev/docs/api/class-page), including methods not used in this repository. A function requires `await` when it returns a promise. Functions that do not return a promise are synchronous, so `await` is not required.

## Promise-returning methods: use `await`

| Category | `page` functions | Promise returned? | Use `await`? |
|---|---|---|---|
| Navigation and waiting | `goto`, `goBack`, `goForward`, `reload`, `waitForClose`, `waitForCondition`, `waitForConsoleMessage`, `waitForDownload`, `waitForEvent`, `waitForFileChooser`, `waitForFunction`, `waitForLoadState`, `waitForNavigation`, `waitForPopup`, `waitForRequest`, `waitForRequestFinished`, `waitForResponse`, `waitForSelector`, `waitForTimeout`, `waitForURL`, `waitForWebSocket`, `waitForWorker` | Yes | Yes |
| Page interactions | `bringToFront`, `check`, `click`, `dblclick`, `dispatchEvent`, `dragAndDrop`, `fill`, `focus`, `hover`, `press`, `selectOption`, `setChecked`, `setInputFiles`, `tap`, `type`, `uncheck` | Yes | Yes |
| Legacy element-handle selectors (version-dependent; prefer Locator) | `$(selector)`, `$$(selector)`, `$eval(selector, fn)`, `$$eval(selector, fn)` | Yes | Yes |
| Locator picking and handlers | `addLocatorHandler`, `cancelPickLocator`, `hideHighlight`, `pickLocator`, `removeLocatorHandler` | Yes | Yes |
| Reading page or element data | `ariaSnapshot`, `ariaSnapshotJSON`, `content`, `getAttribute`, `innerHTML`, `innerText`, `inputValue`, `isChecked`, `isDisabled`, `isEditable`, `isEnabled`, `isHidden`, `isVisible`, `querySelector`, `querySelectorAll`, `textContent`, `title` | Yes | Yes |
| Evaluation and page setup | `addInitScript`, `addScriptTag`, `addStyleTag`, `emulateMedia`, `evalOnSelector`, `evalOnSelectorAll`, `evaluate`, `evaluateHandle`, `exposeBinding`, `exposeFunction`, `setContent`, `setExtraHTTPHeaders`, `setViewportSize` | Yes | Yes |
| Screenshots, PDF, and cleanup | `close`, `pause`, `pdf`, `screenshot`, `removeAllListeners` | Yes | Yes |
| Network and routing | `requests`, `route`, `routeFromHAR`, `routeWebSocket`, `unroute`, `unrouteAll` | Yes | Yes |
| Console, errors, and runtime | `clearConsoleMessages`, `clearPageErrors`, `consoleMessages`, `pageErrors`, `requestGC` | Yes | Yes |
| Page opener | `opener` | Yes | Yes |

These methods return promises even when the eventual result is a simple value such as a string, boolean, element handle, or `null`. Use `await` to get that result or to ensure the operation has completed before continuing.

## Synchronous methods: no `await` required

These functions do **not** return promises. They synchronously return an object, value, or configure a setting, so `await` is not required.

| Category | `page` functions | Promise returned? | Use `await`? | What they return or do |
|---|---|---|---|---|
| Create locators | `locator`, `frameLocator`, `getByAltText`, `getByLabel`, `getByPlaceholder`, `getByRef`, `getByRole`, `getByTestId`, `getByText`, `getByTitle` | No | No | Return a `Locator` or `FrameLocator`. Locator actions such as `click()` and locator assertions are separate calls and commonly return promises. |
| Find frames | `frame`, `frameByUrl`, `frames`, `mainFrame` | No | No | Return a frame or frames synchronously. |
| Read page state or related objects | `context`, `isClosed`, `url`, `video`, `viewportSize`, `workers` | No | No | Return the context, a boolean, a string, an optional video, viewport dimensions, or worker objects. |
| Configure timeouts | `setDefaultNavigationTimeout`, `setDefaultTimeout` | No | No | Set a timeout and return synchronously. |
| Register a dialog callback | `onceDialog` | No | No | Registers a callback synchronously. |

Node.js `EventEmitter` methods inherited by `Page`, such as `addListener`, `emit`, `off`, `on`, `once`, and `removeListener`, are also synchronous and do not require `await`. Playwright's `page.removeAllListeners()` is an asynchronous Page method and is listed in the first table.

## Example

```ts
await page.goto('https://playwright.dev/'); // Promise returned: await required.

const heading = page.locator('h1'); // No promise returned: await not required.
await heading.click(); // The click action returns a promise: await required.

const currentUrl = page.url(); // No promise returned: await not required.
const title = await page.title(); // Promise returned: await required.
```

The return behavior belongs to the specific method being called. Creating a locator is synchronous; performing an action through that locator is asynchronous.

The dollar-selector methods are legacy compatibility APIs and may not be exposed by every Playwright version. Some other methods also have discouraged alternatives; prefer locator-based actions and auto-waiting where Playwright recommends them. Check the linked API reference for current guidance and version availability.
