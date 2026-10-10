// --------------------------------------------------------
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------

let million= 1_000_000; // Numeric separator for better readability
console.log("Numeric Separator 1_000_000:", million); // Output: 1000000

let billion = 1_000_000_000; // Numeric separator for better readability        
console.log("Numeric Separator 1_000_000_000:", billion); // Output: 1000000000

let binaryseparator = 0b1010_1010; // Numeric separator in binary
console.log("Binary with Numeric Separator 0b1010_1010:", binaryseparator); // Output: 170

let binarysep= 0b1010_0001; // Numeric separator in binary  
console.log("Binary with Numeric Separator 0b1010_0001:", binarysep); // Output: 161

/*
Step-by-Step Mathematical Calculation

To convert a binary number to a decimal (base-10) number, you multiply each digit (bit) by \(2\) raised to the power of its position index, starting from 0 on the far right.
The binary sequence is 10101010. Let's map each bit to its positional value:

Bit Position (from right)	Binary Digit	Positional Value (\(2^{\text{position}}\))	Calculation	Contribution
Position 7	1	\(2^7 = 128\)	\(1 \times 128\)	128
Position 6	0	\(2^6 = 64\)	\(0 \times 64\)	0
Position 5	1	\(2^5 = 32\)	\(1 \times 32\)	32
Position 4	0	\(2^4 = 16\)	\(0 \times 16\)	0
Position 3	1	\(2^3 = 8\)	\(1 \times 8\)	8
Position 2	0	\(2^2 = 4\)	\(0 \times 4\)	0
Position 1	1	\(2^1 = 2\)	\(1 \times 2\)	2
Position 0	0	\(2^0 = 1\)	\(0 \times 1\)	0 
Now, add all the non-zero contributions together:
\(\text{Total}=128+0+32+0+8+0+2+0=170\)
*/

let hexseparator = 0xFF_FF_FF; // Numeric separator in hexadecimal
console.log("Hexadecimal with Numeric Separator 0xFF_FF_FF:", hexseparator); // Output: 16777215

let hexsep = 0xFF_FF; // Numeric separator in hexadecimal
console.log("Hexadecimal with Numeric Separator 0xFF_FF:", hexsep); // Output: 65535 

/*
Hexadecimal uses sixteen symbols: 0-9 and A-F (where A=10, B=11, C=12, D=13, E=14, and F=15).
To convert 0xFFFF to a decimal (base-10) number, you calculate the sum of each digit multiplied by \(16\) raised to the power of its position (starting from 0 on the far right):
\(\text{Output}=(F\times 16^{3})+(F\times 16^{2})+(F\times 16^{1})+(F\times 16^{0})\)
Substituting \(15\) for \(F\):
\(\text{Output}=(15\times 4096)+(15\times 256)+(15\times 16)+(15\times 1)\)
\(\text{Output}=61440+3840+240+15\)
\(\text{Output}=\mathbf{65535}\)  */

// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------


let big= 1234567890123456789012345678901234567890n; // BigInt literal with 'n' suffix
console.log("BigInt Literal 1234567890123456789012345678901234567890n:", big); // Output: 1234567890123456789012345678901234567890n

let big1= 1234567890123456789012345678901234567890n + 10n; // BigInt addition
console.log("BigInt Addition 1234567890123456789012345678901234567890n + 10n:", big1); // Output: 1234567890123456789012345678901234567900n

let big2= BigInt("1234567890123456789012345678901234567890") + BigInt("10"); // BigInt addition using BigInt constructor
console.log("BigInt Addition using BigInt constructor:", big2); // Output: 1234567890123456789012345678901234567900n

let big3= BigInt("1234567890123456789012345678901234567890"); 
console.log("BigInt using BigInt constructor:", big3); // Output: 1234567890123456789012345678901234567890n

let bigFromNum=BigInt(42); // BigInt from a number
console.log("BigInt from Number 42:", bigFromNum); // Output: 42n

console.log("typeof bigInt:", typeof bigFromNum); // Output: bigint
