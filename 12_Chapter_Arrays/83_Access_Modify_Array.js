// Accessing & Modifying

let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]); //pass
console.log(statuses[2]); //skip

console.log(statuses.at(-1)); // skip
console.log(statuses.at(-2)); // fail
console.log(statuses.at(-4)); // undefined

// Modify

statuses[1]= "blocked"; //Arrays content can be modified whereas length cant be modified need to create new array
console.log(statuses);

console.log(statuses.length); //3