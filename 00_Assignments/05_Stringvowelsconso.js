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