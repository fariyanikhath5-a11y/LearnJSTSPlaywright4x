# ELI5: Test Duration Report

This program keeps track of how long several tests take. It adds up all their
durations and remembers which test took the longest.

## The simple idea

Imagine each test hands a stopwatch result to a shared scoreboard:

- The test's name and duration are saved on that test's own object.
- The shared scoreboard adds the duration to the total.
- If this test is slower than the previous slowest test, the scoreboard
  updates the slowest test.

## The active program

```javascript
class TestResult {
  static totalDuration = 0;
  static maxDuration = -1;
  static slowestTest = '';

  constructor(name, duration) {
    this.name = name;
    this.duration = duration;

    TestResult.totalDuration += duration;

    if (duration > TestResult.maxDuration) {
      TestResult.maxDuration = duration;
      TestResult.slowestTest = name;
    }
  }
}

const test1 = new TestResult('loginTest', 1200);
const test2 = new TestResult('checkoutTest', 3400);
const test3 = new TestResult('searchTest', 800);

console.log(`Total: ${TestResult.totalDuration} ms`);
console.log(`Slowest: ${TestResult.slowestTest}`);
```

## What the important parts mean

- `class TestResult` is a recipe for creating test-result objects.
- `constructor(name, duration)` runs whenever we create an object with
  `new TestResult(...)`.
- `this.name` and `this.duration` belong to one particular test object.
- `static` properties belong to the class itself, not to an individual test.
  That makes them a convenient shared scoreboard for all test objects.
- `TestResult.totalDuration += duration` adds this test's time to the shared
  total.
- The `if` statement checks whether this test took longer than the slowest
  one seen so far. If it did, it updates both the longest duration and its
  test name.
- The final two `console.log` lines print the scoreboard.

## Follow one test at a time

| Test created | Duration added | Running total | Slowest so far |
| --- | ---: | ---: | --- |
| `loginTest` | 1200 ms | 1200 ms | `loginTest` |
| `checkoutTest` | 3400 ms | 4600 ms | `checkoutTest` |
| `searchTest` | 800 ms | 5400 ms | `checkoutTest` |

So the program prints:

```text
Total: 5400 ms
Slowest: checkoutTest
```

The `maxDuration` starts at `-1`, so the first test will become the slowest
even if its duration is `0`. If two tests have the same longest duration,
the first one stays listed because the comparison uses `>` rather than `>=`.

## The commented-out input version

The lower part of the source file is inside a block comment, so JavaScript
does not run it. It shows a version designed for text input:

1. Read all input from standard input.
2. Read the number of tests from the first line.
3. Read each remaining line as a test name and duration.
4. Create a `TestResult` for each line. Its constructor updates the shared
   totals and slowest test.
5. Call `TestResult.printSummary()` to display the report.

That version puts the printing logic in a static method. The active example
instead creates three test objects directly and prints the static values
afterward.
