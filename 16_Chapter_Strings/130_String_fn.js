// String Properties & Basic Access

let a = "dasdadas\nadasdadas";
//let a1 = "dasdadas\"; //error
let a2= 'dasdas "a"sdsa\ndasd';

let str="Hello , World!" ;
//console.log(str.length()); //start 1  , error not a function
console.log(str.length); // 14

console.log(str[0]); // H
console.log(str[7]); // space 
console.log(str.at[-1]); //undefined
console.log(str.at(-1)); //!
console.log(str.at(-6)); // W
 
// charAt()
console.log(str.charAt(1)); // e
console.log(str.charAt(0)); // H
console.log(str.charCodeAt(0)); // 72 , prints unicode of H
console.log(str.charCodeAt(1)); // 101 (e)
console.log(str.charCodeAt(2)); // 108 (l)
console.log(str.charCodeAt(4)); // 111(o)

