const readline = require('readline');

// 1. Set up the input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Ask the user for the year
rl.question('Enter a year to check: ', (userInput) => {
    
    // Convert the text input into a number
    let year = parseInt(userInput);

    // 3. Simple if/else decisions
    if (isNaN(year)) {
        console.log("Error: You did not enter a valid number.");
    } 
    else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year! 🎉");
    } 
    else {
        console.log(year + " is NOT a leap year. ❌");
    }

    // 4. Always close the input stream at the end
    rl.close();
});