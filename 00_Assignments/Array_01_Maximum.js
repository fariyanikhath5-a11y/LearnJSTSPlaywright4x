const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of elements: ", function (n) {
    rl.question("Enter the elements separated by space: ", function (input) {
        /*let arr = input.split(' ').map(Number);
        let max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }   
        console.log("Maximum element is:", max);
        rl.close();
    })});*/

    let arr = input.trim().split(/\s+/).map(Number);

        if (arr.length !== Number(n)) {
            console.log("Error: Please enter exactly " + n + " elements.");
        } 
        else {
            let max = arr[0];

            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }

            console.log("Maximum element is:", max);
        }

        rl.close();
    });
});


/*Editor
const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
// Use 'arr' (the dynamic test data input) instead of a hardcoded array
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max); */