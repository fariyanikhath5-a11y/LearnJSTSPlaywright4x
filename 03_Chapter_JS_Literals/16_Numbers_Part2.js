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
Position 0	0	\(2^0 = 1\)	\(0 \times 1\)	0 */


let hexseparator = 0xFF_FF_FF; // Numeric separator in hexadecimal
console.log("Hexadecimal with Numeric Separator 0xFF_FF_FF:", hexseparator); // Output: 16777215

let hexsep = 0xFF_FF; // Numeric separator in hexadecimal
console.log("Hexadecimal with Numeric Separator 0xFF_FF:", hexsep); // Output: 65535 

// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------


