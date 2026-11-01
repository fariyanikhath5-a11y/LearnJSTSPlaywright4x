let a = {status: "pass"};
let b=a; //copy the reference
b.status="fail"; //change the value of b
console.log(a.status); //output: fail

