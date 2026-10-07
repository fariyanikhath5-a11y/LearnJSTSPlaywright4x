# Rules of Keywords and Identifiers

## 1. Keywords

**Keywords** are reserved words in a programming language. They have a special meaning and cannot be used for naming variables, functions, classes, or other user-defined elements.

### Rules for Keywords

1. Keywords have a predefined meaning in the programming language.
2. Keywords cannot be used as identifiers.
3. Keywords are usually written in lowercase in languages such as Java, Python, and JavaScript.
4. The set of keywords depends on the programming language.
5. Keywords cannot normally be changed or redefined by the programmer.

### Examples of Common Keywords

```text
if
else
for
while
class
public
private
static
return
int
boolean
new
```

> **Example:** `class` is a keyword in Java, so it cannot be used as a variable name.

---

## 2. Identifiers

**Identifiers** are names given by the programmer to programming elements such as variables, methods, classes, objects, and interfaces.

### Rules for Identifiers

1. An identifier can contain **letters, digits, underscore (`_`), and, depending on the language, other allowed characters**.
2. An identifier **must not start with a digit**.
3. An identifier **must not be a keyword**.
4. Identifiers are generally **case-sensitive** in languages such as Java, Python, and JavaScript.
5. Spaces are not allowed in identifiers.
6. Special characters such as `@`, `#`, `%`, `-`, and `!` are generally not allowed.
7. Use meaningful and descriptive names.
8. The exact rules can vary slightly between programming languages.

### Valid Identifier Examples

```text
studentName
age
totalMarks
_marks
employee123
calculateTotal
```

### Invalid Identifier Examples

```text
123student       # Starts with a digit
student name     # Contains a space
class             # Keyword
total-marks       # Contains a hyphen
@name             # Contains an invalid special character
```

---

## 3. Keywords vs Identifiers

| Keywords | Identifiers |
|---|---|
| Reserved words | User-defined names |
| Have a predefined meaning | Used to name program elements |
| Cannot normally be used as names | Can be created by the programmer |
| Examples: `if`, `class`, `return` | Examples: `studentName`, `age`, `totalMarks` |

---

## 4. Simple Example

```java
int studentAge = 10;
```

In this example:

- `int` → **Keyword**
- `studentAge` → **Identifier**
- `10` → **Literal**

### Easy Way to Remember

**Keyword = Reserved word provided by the programming language**

**Identifier = Name given by the programmer**
