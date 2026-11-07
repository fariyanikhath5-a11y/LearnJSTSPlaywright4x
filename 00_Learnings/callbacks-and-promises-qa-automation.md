# Callbacks & Promises in QA Automation

An interview-focused guide to JavaScript asynchronous programming, with examples from browser and API test automation.

## The core idea: asynchronous work

Automation code often starts an operation that finishes later: loading a page, waiting for an element, sending an API request, or reading a file. JavaScript can continue running while that work is in progress. The code needs a way to handle the result (or failure) when it becomes available.

Two common ways to do that are **callbacks** and **promises**.

## Callbacks

A **callback** is a function passed to another function so it can be called later—often when an operation finishes.

```js
function getStatusCode(url, callback) {
  request(url, (error, response) => {
    if (error) return callback(error);
    callback(null, response.statusCode);
  });
}

getStatusCode("https://example.test/health", (error, status) => {
  if (error) throw error;
  console.log("Status:", status);
});
```

This example uses the traditional Node.js **error-first callback** convention: the first argument is an error (or `null`), followed by the result.

Callbacks are also used for synchronous events, such as a function invoked for each test case. The word “callback” alone does not mean the operation is asynchronous.

### Callback advantages

- Simple and lightweight for one short operation or event handler.
- Supported by many older libraries and event-based APIs.
- Makes the “run this when the event occurs” pattern explicit.

### Callback limitations

- **Nested flow:** sequential steps can become deeply nested (“callback hell”).
- **Error handling:** every level must remember to propagate or handle errors.
- **Control flow:** parallel work, sequencing, and cleanup become harder to reason about.
- **Test completion:** a test runner must know when the callback-based work is done; otherwise, it can report a false pass, fail, or timeout.
- **Single-result convention:** callbacks do not inherently enforce whether they run once, more than once, or at all.

### Callback example: a fragile chain

```js
openPage(url, (error) => {
  if (error) return done(error);
  findButton("Submit", (error, button) => {
    if (error) return done(error);
    click(button, (error) => {
      if (error) return done(error);
      readConfirmation((error, text) => {
        if (error) return done(error);
        assert.equal(text, "Saved");
        done();
      });
    });
  });
});
```

The callback nesting makes the test's sequence and cleanup harder to scan. The `done` callback must also be called exactly once, including on failure.

## Promises

A **Promise** is an object representing the eventual outcome of an asynchronous operation. It is:

- **pending** while the operation is in progress;
- **fulfilled** with a value when it succeeds; or
- **rejected** with a reason (usually an error) when it fails.

Promises let code attach success and failure handling with `.then()` and `.catch()`. Returning a promise from `.then()` links the next asynchronous step in the chain.

```js
openPage(url)
  .then(() => findButton("Submit"))
  .then((button) => click(button))
  .then(() => readConfirmation())
  .then((text) => assert.equal(text, "Saved"))
  .catch((error) => {
    console.error("Test step failed:", error);
    throw error;
  });
```

### `async` / `await`

`async` / `await` is syntax built on promises. An `async` function always returns a promise. `await` pauses that function until a promise settles; it does **not** block the entire JavaScript runtime.

```js
async function testSubmitShowsConfirmation(page) {
  await page.goto("https://example.test/form");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("Saved")).toBeVisible();
}
```

Here, each awaited operation completes before the next line runs. A rejected promise behaves like a thrown error and can be handled with `try` / `catch`.

```js
try {
  const response = await fetch("https://example.test/api/health");
  if (!response.ok) throw new Error(`Unexpected status: ${response.status}`);
} catch (error) {
  console.error("Health check failed:", error);
  throw error; // Preserve the failure so the test runner marks the test failed.
}
```

### Promise advantages

- **Readable sequencing:** chains or `async` / `await` express the order of test steps clearly.
- **Consistent error propagation:** a rejection flows through the chain until handled.
- **Composition:** `Promise.all`, `Promise.allSettled`, and `Promise.race` support common concurrency patterns.
- **Test-runner integration:** modern JavaScript test frameworks generally wait for a returned promise or an `async` test function.
- **Ecosystem fit:** modern browser and API automation libraries commonly expose promise-based APIs.

### Promise limitations

- Promises add concepts and syntax that may be unnecessary for a tiny event handler.
- A promise settles once; it is not a stream of repeated events. Use event listeners, async iterators, or observables for ongoing updates.
- Promises do not automatically cancel the underlying operation. Use an API-specific cancellation mechanism (for example, `AbortController` where supported).
- Forgetting to `await` or return a promise can let a test finish before its assertion or request completes.
- `Promise.all` rejects when one input rejects, but does not automatically stop the other operations.
- Overusing parallel execution can create shared-state races, rate-limit issues, or flaky tests.

## Callbacks vs. Promises

| Aspect | Callback | Promise |
|---|---|---|
| Basic shape | Pass a function to be invoked later | Receive an object for a future result |
| Chaining steps | Often nested callbacks | `.then()` chain or `async` / `await` |
| Error flow | Usually explicit error argument and propagation | Rejection propagates through the chain |
| Parallel work | Manual coordination | Helpers such as `Promise.all()` |
| Repeated events | A natural fit for event handlers | One settlement only; not an event stream |
| Common QA use | Event listeners, legacy APIs, hooks that accept a function | Browser actions, API calls, waits, and test steps in modern libraries |
| Main risk | Deep nesting or missed completion/error paths | Missing `await` / `return`, or unsafe parallelism |

## When to use each in QA automation

### Use callbacks when

- Working with an API that specifically expects a callback, especially a legacy API.
- Registering for repeated events, such as a browser event listener or a process output event.
- Providing a short synchronous function to an iterator, assertion helper, or test hook.
- Bridging callback-based code into a promise-based test; wrap it once at the boundary when practical.

### Use promises (usually `async` / `await`) when

- A test needs to perform ordered asynchronous steps: navigate, interact, and assert.
- Making HTTP/API calls, waiting for a condition, or reading test data asynchronously.
- You need clear error propagation or need to coordinate independent work.
- Your automation framework returns promises. Follow its documented completion model.

### Typical QA examples

**Sequential browser steps:** use `async` / `await` so each action and assertion is easy to follow.

```js
test("user can save a profile", async ({ page }) => {
  await page.goto("https://example.test/profile");
  await page.getByLabel("Display name").fill("Sam");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Profile saved")).toBeVisible();
});
```

**Independent API checks:** use `Promise.all` only when the requests are genuinely independent.

```js
const [profileResponse, settingsResponse] = await Promise.all([
  fetch("https://example.test/api/profile"),
  fetch("https://example.test/api/settings"),
]);

if (!profileResponse.ok || !settingsResponse.ok) {
  throw new Error("One or more API checks failed");
}
```

**Repeated browser events:** callbacks can be appropriate for event listeners. Remove listeners when finished so they do not leak across tests.

```js
const onDialog = (dialog) => dialog.accept();
page.on("dialog", onDialog);
// Perform the action that opens the dialog, then remove the listener when appropriate.
```

Prefer the automation framework's built-in dialog or event-waiting API when available; it often handles registration and cleanup more safely.

## Common QA automation pitfalls

1. **Forgetting `await`:**

   ```js
   page.getByRole("button", { name: "Save" }).click(); // May still be running
   ```

   Use `await` or return the promise so the test runner waits for it.

2. **Not returning a promise from a callback-based test hook:**

   A runner may finish the test before asynchronous work completes. Use the runner's documented callback completion pattern or return/await a promise—never mix the two completion styles casually.

3. **Swallowing errors:**

   Catching an error and logging it without rethrowing can make a failed test appear to pass.

4. **Using fixed sleeps for synchronization:**

   `await page.waitForTimeout(3000)` waits for a duration, not for the expected application state. Prefer condition-based waits or the framework's auto-waiting assertions where available.

5. **Running dependent actions in parallel:**

   Do not use `Promise.all` for steps where the second depends on the first (for example, submit a form and then verify its response).

6. **Confusing events with one-time results:**

   A promise is suitable for one eventual result. For events that may happen many times, use the framework's event API or a stream abstraction.

## Interview questions and concise answers

### 1. What is a callback?

A function passed to another function to be called later, often after an operation or event. It can be synchronous or asynchronous.

### 2. What is a promise?

An object representing the eventual success or failure of one asynchronous operation. It moves from pending to fulfilled or rejected.

### 3. What is the main difference between callbacks and promises?

Callbacks pass a function that the API invokes later. Promises return an object that represents a future result and can be composed with chaining or `async` / `await`.

### 4. What is callback hell, and how do promises help?

Callback hell is deeply nested asynchronous code that is difficult to read and maintain. Promise chains flatten sequential steps and centralize error handling; `async` / `await` can make the flow look like ordinary sequential code.

### 5. Does `await` block JavaScript?

No. It suspends the current `async` function until the promise settles, allowing the runtime to do other work.

### 6. How can an asynchronous test pass before an assertion runs?

The test may not return or await the promise, or may fail to signal completion correctly when using callbacks. The runner then considers the test finished too early.

### 7. When would you use `Promise.all` in testing?

For independent operations that can safely run at the same time, such as checking separate read-only endpoints. Avoid it for dependent UI steps or operations that share mutable state.

### 8. Are promises always better than callbacks?

No. Promises are generally easier for composing one-time asynchronous work, but callbacks remain useful for event handlers and APIs designed around callbacks. Choose the interface that fits the operation and use a consistent completion model.

### 9. What is the difference between a promise and `async` / `await`?

Promises are the underlying abstraction. `async` / `await` is syntax for working with promises in a sequential, readable style.

### 10. How do you avoid flaky waits in UI automation?

Wait for the actual condition—such as an element becoming visible or a response completing—and use the framework's auto-waiting or retrying assertions. Avoid arbitrary fixed delays when a state-based wait exists.

## Interview summary

> **Callbacks** are functions invoked later and are useful for events and callback-based APIs. **Promises** represent one future result and make asynchronous sequencing, error handling, and concurrency easier to compose. In modern QA automation, prefer the framework's promise-based API with `async` / `await` for test steps, use callbacks where the API or repeated-event model calls for them, and make sure every asynchronous operation is awaited or returned so the test runner observes its true result.

### Quick decision guide

- **One event handler or legacy callback API?** Callback is fine.
- **Ordered async test steps?** Promise with `async` / `await`.
- **Independent one-time operations?** Consider `Promise.all`.
- **Repeated events?** Event listener or stream pattern.
- **Unsure whether the test runner waits?** Check the framework's documented async completion model.
