// --------------------------------------------------------
// 5. SPECIAL NUMERIC VALUES
// --------------------------------------------------------

// infinity
console.log("1/0 is: " , 1 / 0); // Infinity
console.log("-1/0 is: " , -1 / 0); // -Infinity   
console.log("Infinity:", Infinity); // Infinity  
console.log(typeof Infinity); // number
console.log("Number.POSITIVE_INFINITY is: " , Number.POSITIVE_INFINITY); // Infinity
console.log("Number.NEGATIVE_INFINITY is: " , Number.NEGATIVE_INFINITY); // -Infinity

// - Infinity is a special numeric value that represents a value greater than any finite number. It is the result of dividing a positive number by zero. Similarly, -Infinity represents a value less than any finite number and is the result of dividing a negative number by zero.

console.log("Infinity + 1 is: " , Infinity + 1); // Infinity
console.log("Infinity - 1 is: " , Infinity - 1); // Infinity
console.log("Infinity * 2 is: " , Infinity * 2); // Infinity
console.log("Infinity / 2 is: " , Infinity / 2); // Infinity    
Console.log("Infinity + Infinity is: " , Infinity + Infinity); // Infinity
console.log("Infinity - Infinity is: " , Infinity - Infinity); // NaN
console.log("-Infinity :" , - Infinity); // -Infinity

// NaN (Not a Number) - result of invalid math

console.log("0/0 is: " , 0 / 0); // NaN
console.log("NaN is: " , NaN);  //NaN
console.log("'Hellio' * 2 is: " , "Hello" * 2); // NaN
console.log("typeof NaN is: " , typeof NaN); // number (quirky)

//my extra exercise: 
console.log("Number.NaN is: " , Number.NaN); // NaN
Console.log("Number.isNaN(NaN) is: " , Number.isNaN(NaN)); // true
