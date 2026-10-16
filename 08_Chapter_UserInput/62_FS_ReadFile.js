// const data= require ('fs').readFileSync(0, 'utf-8');
//const userInput = data;
//console.log(userInput);

//console.log("Enter the number!");
//const data = require('fs').readFileSync(0, 'utf8');
//console.log("Hi", data);

// In the terminal:
// Type 15
// Press Enter
// Press Ctrl+D for mac and ctrl - z for windows

// triangle 
const fs = require('fs');

console.log("Enter the three sides of the triangle separated by spaces:");

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

if (
    input.length !== 3 ||
    !input.every(value => value !== '' && Number.isFinite(Number(value))) ||
    a <= 0 || b <= 0 || c <= 0 ||
    a + b <= c ||
    a + c <= b ||
    b + c <= a
) {
    console.log("Invalid triangle");
} else if (a === b && b === c) {
    console.log("Equilateral Triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
} 

 /* let input = '';

process.stdin.on('data', (data) => {
    input += data;
});

process.stdin.on('end', () => {
    const sides = input.trim().split(/\s+/).map(Number);
    const [a, b, c] = sides;

    if (a === b && b === c) {
        console.log('Equilateral');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles');
    } else {
        console.log('Scalene');
    }
}); */