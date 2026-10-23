let browsers=["chrome" , "firefox" ,"edge", "IE" , "Safari"]; // this is used

let scores = new Array(3);// creates [empty x 3]
scores[0]=1;

let scores1 = new Array(1,2,3);

let numbers= new Array(100,200,300,400);

let test= Array.of(10,20,30,40,50);

console.log(test.length); // o/p: 5


// Array.from()
let chars = Array.from("hello"); //used only when string to char conversion
// ["h", "e", "l", "l", "o"]

let chars1=Array.from("Fariya");
console.log(chars1); // o/p : [ 'F', 'a', 'r', 'i', 'y', 'a' ]