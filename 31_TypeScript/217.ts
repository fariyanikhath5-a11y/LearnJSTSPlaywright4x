// Arrow function annotations

const multiple = (a:number , b:number) : number => a*b;

// Object annotations
let user : { name: string ; age: number} = {
    name : "john",
    age: 30
};

function sayHello(msg: string) : void { 
    console.log(msg);
}

// Function annotations
function greet(name: string) : string { 
    return `Hello , ${name}!` ;  //string literal with backtick
}

