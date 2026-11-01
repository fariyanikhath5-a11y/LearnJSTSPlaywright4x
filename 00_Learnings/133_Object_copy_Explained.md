# ELI5: Understanding `133_Object_copy.js`

Imagine an object is a toy stored in one box. Variables `a` and `b` are labels
that point to that box. Giving the box's address to `b` does not make a second
box; both labels still point to the same toy.

## The code

```javascript
let a = { status: "pass" };
let b = a; // copy the reference
b.status = "fail"; // change the value through b
console.log(a.status); // "fail"
```

## What happens, step by step

| Step | What JavaScript does | `a.status` | `b.status` |
| --- | --- | --- | --- |
| 1 | Creates one object and makes `a` refer to it. | `"pass"` | — |
| 2 | Makes `b` refer to the same object as `a`. | `"pass"` | `"pass"` |
| 3 | Changes that object's `status` through `b`. | `"fail"` | `"fail"` |
| 4 | Reads `a.status` and prints it. | `"fail"` | `"fail"` |

```text
a ──┐
    ├──> { status: "fail" }
b ──┘
```

The line `let b = a` copies the **reference** (the way to find the object), not
the object itself. That is why changing the object using `b` is also visible
when reading it using `a`.

## If you want a separate, shallow copy

For this simple object, object spread creates a different outer object:

```javascript
let a = { status: "pass" };
let b = { ...a };

b.status = "fail";
console.log(a.status); // "pass"
console.log(b.status); // "fail"
```

This is a **shallow** copy: if an object has nested objects, those nested
objects are still shared unless you copy them separately or use an appropriate
deep-copy approach.

## Try it

Change `b.status = "fail"` to `b.status = "done"` in the original code.
Because `a` and `b` refer to the same object, `console.log(a.status)` then
prints `"done"`.
