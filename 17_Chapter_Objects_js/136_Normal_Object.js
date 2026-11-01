const user= {
    name: "Fari",
    age: 34,
    email: "example@gmail.com"
};

console.log(user);

// Accessing properties
console.log(user.name); // Fari
console.log(user["age"]); // 34
console.log(user.email); // example@gmail.com

// Adding/modifying properties
user.city = "New York";
user.age = 28;


console.log(user);
