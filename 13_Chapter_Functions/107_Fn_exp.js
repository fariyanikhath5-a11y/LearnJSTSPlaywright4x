// Function as Expression

function greet(name)
{
 return `Hello , ${name}` ; //nothing is printed
}

// Anonymous Fn - Fn without name.

const greet1 = function(name)
{
    return `Hello , ${name}` ; 
}

console.log(greet("Amit")); //Hello , Amit
console.log(greet1 ("Fari")); //Hello , Fari

