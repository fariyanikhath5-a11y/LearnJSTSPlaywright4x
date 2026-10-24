let tests = ["login", "checkout", "Search"];

for (let i = 0; i < tests.length; i++) {
    console.log(i, tests[i]); // this for loop is used most of the times
}

console.log("-----------------------------------------------");

// for...of (cleanest for values)

for (let test of tests) {
    console.log(test);  //value , this for loop is used sometimes
}

console.log("------------------------------------------------");

console.log(" -------forEach Below -----------------");

// forEach (no return value) sometimes we use this

tests.forEach((test, index) => 
{
    console.log(`${index}: ${test}`);
} );

console.log( " ------------------------");

// entries() — index + value

for(let [i,test] of tests.entries())
{
    console.log(i,test);
}

let students = ["methi" , "senthil" , "ajay" , "rahul"];

for(let student in students)
{
    console.log(student , " --->"  ,students[student]) ; // Index in
}