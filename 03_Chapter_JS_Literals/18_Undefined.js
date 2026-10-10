let u;
console.log(u); //undefined
// ? 
let n= null;
console.log(n); //null
console.log(typeof n); // object (quirky)

console.log(typeof u); // undefined 

// Interview question: 
// 1. What is the difference between null and undefined in JavaScript? 
// undefined is a value that is automatically assigned to variables that have been declared but not initialized.    
// null is an assignment value that represents no value or no object.

/* 1.which of these is not a literal in JavaScript?
1. true
2. "undefined" (with the quotes))
3. null
4. undefined (without the quotes) answer: undefined (without the quotes) is not a literal in JavaScript. It is a primitive value that represents the absence of a value or an uninitialized variable. undefined is a read-only property of the global object.

2. what does console.log (0b1010 + 0o10 + 0xA) print?
1. 28
2. NaN
3. 0b10100o100XA
4. 30
Answer: 28.   
JavaScript automatically converts numeric literals in different bases into base-10 (decimal) standard numbers before performing the addition:
• 0b1010 (Binary/Base-2): 
(1 × 2^3) + (0 × 2^2) + (1 × 2^1) + (0 × 2^0) = 10
(1 × 8) + (0 × 4) + (1 × 2) + (0 × 1) = 10
• 0o10 (Octal/Base-8): 
(1 × 8^1) + (0 × 8^0) 
 (1 × 8) + (0 × 1) =8
• 0xA (Hexadecimal/Base-16): The letter A represents 10
\(10+8+10=28\) 

3. what does console.log(1,,3,]. length) print?
1. 2
2. 3
3. syntaxerror
4. 4

Answer: 3









*/


