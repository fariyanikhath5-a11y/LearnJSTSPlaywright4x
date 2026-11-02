const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", function(str) {

    let vowels = 0;
    let consonants = 0;

    for (let i = 0; i < str.length; i++) {

        let ch = str[i].toLowerCase();

        if (ch >= 'a' && ch <= 'z') {

            if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log("Vowels: " + vowels + " Consonants: " + consonants);

    rl.close();
});

/* Editor
const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase().trim();
// Write your solution here
let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') {
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }
}

//console.log("Vowels: " + vowels + "\n" + " Consonants: " + consonants);
//console.log("Vowels: " + vowels + " Consonants: " + consonants);
//process.stdout.write("Vowels: " + vowels + " Consonants: " + consonants);
console.log("Vowels: " + vowels + "\nConsonants: " + consonants);    */