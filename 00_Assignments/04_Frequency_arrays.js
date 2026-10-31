//editor 
// const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
//const n = data[0];
//const arr = data.slice(1, 1 + n);

//for (let i = 0; i < n; i++) {
  //  let count = 1;
    //if (arr[i] === -1) continue;

    //for (let j = i + 1; j < n; j++) {
        //if (arr[i] === arr[j]) {
            //count++;
            //arr[j] = -1;
        //}
    //}
    //console.log(arr[i] + " appears " + count + " times");
//}

const readline = require('readline');
//require() is used to import a built-in Node.js module.
//readline helps us accept input from the keyboard.
//We use it because we want the user to enter array elements.

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//const rl creates a variable named rl.
//createInterface() creates an interface for user input and output.
//process.stdin reads input from the keyboard.
//process.stdout displays output on the terminal.

rl.question("Enter array elements separated by spaces: ", function(input) {
 //   rl.question() asks the user to enter array elements.
//function(input) receives the value entered by the user.
//input stores the complete user input as a string.
    const arr = input.split(" ").map(Number);

    //This is a very important line.
//It has two operations:
//1. split(" ") converts the input string into separate elements.
//2. map(Number) converts those string elements into numbers.
//Example:
//Before:"1 2 1 3 2"
//after: [1, 2, 1, 3, 2]


    for (let i = 0; i < arr.length; i++) {
        let count = 1;
//let i = 0: Starts the loop from index 0.
//i < arr.length: Runs until the last array element.
//i++: Increases the index by 1.
//count = 1: Initially assumes the current element appears once.
        if (arr[i] === -1) continue;
        //Checks whether the current element is already visited.
//continue skips the current iteration if the condition is true.
//We use -1 as a marker for duplicate elements already counted.

        for (let j = i + 1; j < arr.length; j++) {
            //This is the inner loop.
// j = i + 1 starts checking from the next element.
// It compares the current element with the remaining array elements.
// j++ moves to the next element.
            if (arr[i] === arr[j]) {
                count++;
                arr[j] = -1;
            }
            //This is the main frequency calculation.
//arr[i] === arr[j]: Checks whether two elements are equal.
//count++: Increases the frequency by 1.
//arr[j] = -1: Marks the duplicate element as visited.
        }

        console.log(arr[i] + " appears " + count + " times");
        //Prints the element and its frequency.
//For example:
//1 appears 2 times
    }

    rl.close(); //Closes the readline interface after processing the input.
});