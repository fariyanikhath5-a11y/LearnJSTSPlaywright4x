// ============================================================
// Topic: null vs undefined in JavaScript
// ============================================================

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
*/

// var x;
// console.log(x); //undefined

// var audi = null;
// console.log(audi); //null

// --------------------------------------------------------
// 1. undefined
// --------------------------------------------------------

let userName; // declared but not assigned any value
console.log(userName); //undefined
console.log(typeof userName); //undefined

let userEmail = null; // explicitly assigned null
console.log(userEmail); //null
console.log(typeof userEmail); //object

/*
function greetUser() {
  let userAge;
  console.log(userAge); //undefined
  console.log(typeof userAge); //undefined
}

// interview question: what is the difference between null and undefined?
function greet()
{
    //undefined no return statement
}
console.log(greet()); //undefined
*/

let x=10;
console.log(x); //10

// --------------------------------------------------------
// 2. null
// --------------------------------------------------------

let profilePicture=null; // explicitly assigned null
console.log(profilePicture);
console.log(typeof profilePicture); //object  <-- known JS quirk!

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/

