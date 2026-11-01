let a={
    name: "fari"
};

let a1 = {status : "pass"}; 
console.log(a1.status); //pass
console.log(a1["status"]); // this is mostly used , pass

// keys are case sensitive.
let a2 = {status: "pass", Status: "fail"};
console.log(a2.status);  // Output: "pass"
console.log(a2.Status);  // Output: "fail"

console.log(a2["status"]);  // Output: "pass"
console.log(a2["Status"]);  // Output: "fail"

