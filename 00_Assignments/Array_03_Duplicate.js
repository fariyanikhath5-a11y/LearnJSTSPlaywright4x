const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the number of elements: ", function(n) {

    rl.question("Enter the array elements separated by space: ", function(input) {

        let arr = input.trim().split(/\s+/).map(Number);

        if (arr.length !== Number(n)) {
            console.log("Please enter exactly " + n + " elements.");
        } else {

            let duplicates = [];

            for (let i = 0; i < arr.length; i++) {

                for (let j = 0; j < i; j++) {

                    if (arr[i] === arr[j]) {

                        if (!duplicates.includes(arr[i])) {
                            duplicates.push(arr[i]);
                        }

                        break;
                    }
                }
            }

            if (duplicates.length === 0) {
                console.log("No duplicates found");
            } else {
                console.log(duplicates.join(" "));
            }
        }

        rl.close();
    });
});


/*const a= [1,2,3,4,5,2,3,6];
let duplicate = a.filter((value , index) =>
    a.indexOf(value) !== index && a.lastIndexOf(value) === index);

console.log(duplicate); //[2,3] */


/* Editor not passed tc
const data = require('fs').readFileSync(0, 'utf8');
//const tokens = data.split(/\s + /).filter(s => s.length > 0).map(Number);
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
let duplicates = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] === arr[j]) {
            duplicates.push(arr[i]);
            break;
        }
    }
}

if (duplicates.length === 0) {
    console.log("No duplicates found");
} else {
    console.log(duplicates.join(" "));
} */