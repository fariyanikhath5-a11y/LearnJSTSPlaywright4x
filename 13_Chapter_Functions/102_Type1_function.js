// Type 1 - No param / argument, No Return -> final return undefined.

// Fn Define
function greet()
{
    console.log("Welcome to functions concept learning !");
}

//function calling
greet(); //Welcome to functions concept learning !


greet();//Welcome to functions concept learning !


greet();//Welcome to functions concept learning !

function openbrowser()
{
    console.log("Open browser");
    //opens the browser
}

openbrowser(); //Open browser

let msg= greet(); // Welcome to functions concept learning ! 
console.log(msg); //undefined since there is no return type




