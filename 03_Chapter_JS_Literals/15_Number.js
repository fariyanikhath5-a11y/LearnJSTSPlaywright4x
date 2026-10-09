// ============================================================
// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/

// --------------------------------------------------------
// 1. INTEGER LITERALS
// --------------------------------------------------------

// Decimal (Base 10) - most common

let decimal = 42; // 42 is a decimal integer literal
console.log("Decimal:" , decimal); // Output: 42

// Binary (Base 2) - starts with 0b or 0B

let binary = 0b101010; // 42 in binary
console.log("Binary:", binary); // Output: 42

let binary2 = 0b1010; // 10 in binary
console.log("Binary2 0b1010:", binary2); // Output: 10

// Octal (Base 8) - starts with 0o or 0O

let octal = 0o52; // 42 in octal
console.log("Octal 0o52:", octal); // Output: 42 

// Hexadecimal (Base 16) - starts with 0x or 0X

let hex = 0x2A; // 42 in hexadecimal
console.log("Hexadecimal 0x2A:", hex); // Output: 42 

// --------------------------------------------------------
// 2. FLOATING-POINT LITERALS
// --------------------------------------------------------

// Floating-point numbers can be written with a decimal point or in exponential notation

let float1 = 3.14;
console.log("Float 3.14:", float1); // Output: 3.14

let float2 = 2.5e3; // 2.5 * 10^3 = 2500
console.log("Float 2.5e3:", float2); // Output: 2500        

let float3 = -0.5;
let float4 = .5;  // valid, but avoid for readability
let float5= 5.; // All valid floating-point literals ,  // valid, but avoid for readability
console.log("Float -0.5:", float3);
console.log("Float .5:", float4);
console.log("Float 5.:", float5); //5

// Exponential notation

let exp1 = 1.23e4; // 1.23 * 10^4 = 12300
console.log("Exponential 1.23e4:", exp1); // Output: 12300

let exp2 = 5.67e-3; // 5.67 * 10^-3 = 0.00567
console.log("Exponential 5.67e-3:", exp2); // Output: 0.00567

let exp3 = 1e6; // 1 * 10^6 = 1000000
console.log("Exponential 1e6:", exp3); // Output: 1000000   

let exp4 = 1e-6; // 1 * 10^-6 = 0.000001
console.log("Exponential 1e-6:", exp4); // Output: 0.000001 

// 0.0.0.0.0.01 - simply move the decimal point to the right by 6 places for +ve,   which is equivalent to multiplying by 10^6. So, 1e-6 = 0.000001

let exp5 = 1.5e3; // 1.5 * 10^3 = 1500
console.log("Exponential 1.5e3:", exp5); // Output: 1500

let exp6 = 1.5e-3; // 1.5 * 10^-3 = 0.0015
console.log("Exponential 1.5e-3:", exp6); // Output: 0.0015

let exp7 = 2E10; // 2 * 10^10 = 20000000000
console.log("Exponential 2E10:", exp7); // Output: 20000000000
//simply move the decimal point to the right by 10 places for +ve, which is equivalent to multiplying by 10^10. So, 2E10 = 20000000000

let exp8 = 2E-10; // 2 * 10^-10 = 0.0000000002
console.log("Exponential 2E-10:", exp8); // Output: 0.0000000002 , but in console for more than 6 zeros after decimal point javscript defaults to scienfic notation, so it will show 2e-10
//simply move the decimal point to the left by 10 places for -ve, which is equivalent to dividing by 10^10. So, 2E-10 = 0.0000000002    

console.log("Exponential 2E-10 in scientific notation:", exp8.toExponential()); // Output: 2e-10


