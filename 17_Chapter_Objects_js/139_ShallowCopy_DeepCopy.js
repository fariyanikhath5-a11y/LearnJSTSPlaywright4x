// 1. Call by reference: one object, two names

let a = {status :"Pass"};
let b = a;
b.status = "Fail";
console.log(a.status);  // Output: Fail (a changed because b is a reference to a)

// 2. Shallow copy (...spread): new object, but the inner object is shared
let user1 = {name: "John", address: {city: "New York"}};
let copy1 = {...user1};  // Shallow copy
copy1.name = "Jane";
copy1.address.city = "Los Angeles";  // Modifying the inner object
console.log(user1.name); // Output: John (outer object is not shared)
console.log(user1.address.city);  // Output: Los Angeles (inner object is shared)

// 3. Deep copy (JSON.parse(JSON.stringify())): new object, new inner objects
//// 3. Deep copy (structuredClone): everything is new

let user2 = {name: "Alice", address: {city: "Chicago"}};
//let copy2 = JSON.parse(JSON.stringify(user2));
let copy2 = structuredClone(user2);  // Deep copy
copy2.name = "Bob";
copy2.address.city = "Houston";
console.log(user2.name); // Output: Alice (outer object is not shared)
console.log(user2.address.city);  // Output: Chicago (inner object is not shared)
