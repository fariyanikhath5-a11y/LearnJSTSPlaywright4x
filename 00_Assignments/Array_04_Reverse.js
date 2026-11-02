const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter numbers separated by spaces: ", (input) => {
    const arr = input.split(" ").map(Number);
const reversedArr = arr.reverse();
    console.log("Reversed array is:", reversedArr.join(' '));
    rl.close();
});



    /* Editor
const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
// Reverse the array using the built-in method
const reversedArr = arr.reverse();

// Output the space-separated elements of the reversed array
console.log(reversedArr.join(' ')); */