const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", function(str) {

    let result = "";

    for (let i = 0; i < str.length; i++) {

        if (!result.includes(str[i])) {
            result = result + str[i];
        }
    }

    console.log("String without duplicates: " + result);

    rl.close();
});


/* Editor
const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];

// Write your solution here
let result = "";

for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
        result = result + str[i];
    }
}

console.log(result); */