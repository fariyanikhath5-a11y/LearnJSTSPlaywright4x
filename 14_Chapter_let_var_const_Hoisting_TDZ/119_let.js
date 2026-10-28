let b = 20; // Global Scope
console.log(b); //20

function Hello()
{
    console.log("hello1");
    let b=30; //Local scope
    console.log(b) ; //30
    if (true)
    {
        let b=5;
        console.log(b) ; //5
    }
    console.log("Let ===> " ,b) ; //30


}
Hello();
//let is block scoped and var is function scoped