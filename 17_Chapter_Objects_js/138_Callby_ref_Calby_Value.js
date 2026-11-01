// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined

// Primitive, number, string, boolean, null, undefined

let a =10;
let b = a; // copy value of a to b
b = 20; // change value of b
console.log(a); // 10 ,this call by value, so a is not affected by change in b
console.log(b); // 20

console.log("-----")
// Non-primitive data types - call by reference
// Objects — the reference value is copied, so both variables point to the same object.
// Non-primitive, object, array, function   

let obj1 = {value: 10};
let obj2 = obj1;    
obj2.value = 20; // change value of obj2
console.log(obj1.value); // 20, this call by reference, so obj1 is affected by change in obj2


