const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", function(num) {
    let n = parseInt(num);  
    for (let i = 1; i <= n; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern = pattern + "*";
        }   
        console.log(pattern);
    }
    rl.close();
});
    


/*Editor
// const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);
// Write your solution here

for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern = pattern + "*";
    }

    console.log(pattern);
} */