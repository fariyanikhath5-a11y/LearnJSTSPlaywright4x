# JavaScript Strings: `charAt()` vs `at()`

Both methods return the character at a string index. JavaScript indexes start
at `0`, so index `0` in `"abc"` is `"a"`.

```javascript
const text = "abc";

text.charAt(0); // "a"
text.at(0);     // "a"
```

## Difference table

| Feature | `charAt()` | `at()` |
| --- | --- | --- |
| Purpose | Returns the character at an index. | Returns the character at an index. |
| Index `0` in `"abc"` | `"a"` | `"a"` |
| Negative indexes | Not supported; returns an empty string. | Supported; `-1` means the last character. |
| Example: index `-1` | `"abc".charAt(-1)` → `""` | `"abc".at(-1)` → `"c"` |
| Out-of-range index | Returns an empty string. | Returns `undefined`. |

## Negative index examples

```javascript
const text = "abc";

text.charAt(-1); // ""
text.at(-1);     // "c"
text.at(-2);     // "b"
```

## Correct capitalization

The method name is `charAt`, with a capital `A`. JavaScript is case-sensitive,
so `"abc".charat(0)` is not the correct method name and throws a `TypeError`.
Use `"abc".charAt(0)`.
