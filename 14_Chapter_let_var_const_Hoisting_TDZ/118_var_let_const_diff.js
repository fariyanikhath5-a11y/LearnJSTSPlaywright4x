// var is actual traitor - cheator
// let is sincere person
// const is just const which will not change.

// VARIABLE - Fn Scoped

var a=10;
console.log(a) ; //10

function hello()
{
    console.log("Hello" );
    var a=20;
    console.log(a); //20
    if(true)
    {
        var a=30;
        console.log(a); //30
    }
    console.log(a); //30
}

hello();