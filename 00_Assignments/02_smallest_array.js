//editor code: 
//const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
//const n = data[0];
//const arr = data.slice(1, 1 + n);

//let smallest = arr[0];

//for (let i = 1; i < n; i++) {
  //  if (arr[i] < smallest) {
    //    smallest = arr[i];
    //}
//}

//console.log(smallest);

//---------------------------------------------

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
    const arr = input.split(" ").map(Number);

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    console.log("Smallest element is:", smallest);

    rl.close();
});
