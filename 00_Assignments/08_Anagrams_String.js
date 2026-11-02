const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first string: ", function (str1) {
    rl.question("Enter second string: ", function (str2) {
        let s1 = str1.toLowerCase().replace(/\s/g, '');
        let s2 = str2.toLowerCase().replace(/\s/g, '');

        let arr1 = s1.split('').sort();
        let arr2 = s2.split('').sort();

        if (arr1.join('') === arr2.join('')) {
            console.log("YES");
        } else {
            console.log("NO");
        }
        rl.close();
    })});





/*Editor: 
const data = require('fs').readFileSync(0, 'utf8');
const lines = data.split('\n');
const s1 = (lines[0] || '');
const s2 = (lines[1] || '');

// Write your solution here
let str1 = s1.toLowerCase().replace(/\s/g, '');
let str2 = s2.toLowerCase().replace(/\s/g, '');

let arr1 = str1.split('').sort();
let arr2 = str2.split('').sort();

if (arr1.join('') === arr2.join('')) {
    console.log("YES");
} else {
    console.log("NO");
}*/