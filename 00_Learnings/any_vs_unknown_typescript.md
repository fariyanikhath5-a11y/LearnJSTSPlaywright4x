# `any` vs `unknown` in TypeScript

Both can hold any value. The difference is what TypeScript lets you **do** with that value.

- **`any`** switches type checking off. Anything goes, so mistakes show up only when the code runs.
- **`unknown`** means "I don't know the type yet". You must check it first, so mistakes show up while you type.

From lesson [31_Typescript/215_Basic.ts](../31_Typescript/215_Basic.ts):

```ts
// Any (avoid when possible)
let anything: any = "hello";

// Unknown (safer than any)
let unknown: unknown = "hello";
```

## Side by side

| | `any` | `unknown` |
|:--|:--|:--|
| Can hold any value? | ✅ Yes | ✅ Yes |
| Call a method on it (`x.toUpperCase()`) | ✅ Compiles, even if wrong | ❌ Error `TS18046`, until you check the type |
| Read a property that doesn't exist (`x.foo.bar()`) | ✅ Compiles, then crashes at runtime | ❌ Error before it runs |
| Assign it to a typed variable (`let s: string = x`) | ✅ Allowed, unchecked | ❌ Error `TS2322` |
| Assign any value to it | ✅ Allowed | ✅ Allowed |
| Type checking | Turned off | Still on |
| When the mistake shows up | At runtime (the test fails or crashes) | In the editor, while you type |
| Safe? | ❌ No | ✅ Yes |

## The same code with each

| Line of code | With `any` | With `unknown` |
|:--|:--|:--|
| `x = 42; x = true;` | ✅ OK | ✅ OK |
| `x.toUpperCase();` | ✅ OK (no check) | ❌ `'x' is of type 'unknown'` |
| `x.foo.bar();` | ✅ Compiles, then `TypeError: Cannot read properties of undefined` | ❌ Compile error |
| `let s: string = x;` | ✅ OK (no check) | ❌ `Type 'unknown' is not assignable to type 'string'` |
| `if (typeof x === "string") { x.toUpperCase(); }` | ✅ OK | ✅ OK, the check narrows it to `string` |
| `const s = x as string;` | ✅ OK | ✅ OK, you take responsibility |

## How to use an `unknown` value

Check what it is first; TypeScript then knows the type inside that block.

```ts
let data: unknown = "hello";

if (typeof data === "string") {
    console.log(data.toUpperCase());   // OK: data is a string here
}
```

| How to narrow | Example |
|:--|:--|
| `typeof` | `typeof data === "number"` |
| `Array.isArray` | `Array.isArray(data)` |
| `instanceof` | `data instanceof Error` |
| Type assertion (no check, you promise) | `data as string` |

## Which one should I use?

| Situation | Use |
|:--|:--|
| Data from outside you haven't checked yet: an API response, `JSON.parse(...)`, user input, a caught error | `unknown` |
| Moving old JavaScript to TypeScript step by step, when you can't type something yet | `any`, as a temporary fix |
| Everything else | A real type: `string`, `number`, an interface |

**Rule of thumb:** prefer `unknown` over `any`. `unknown` asks you to check before you use; `any` lets you skip the check and find out at runtime.

*Checked with `tsc` 6.0.2 (`--strict`) and Node 22: the `unknown` lines fail to compile with the errors shown, and the `any` lines compile, with `x.foo.bar()` crashing at runtime.*
