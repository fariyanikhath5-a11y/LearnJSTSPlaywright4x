console.log("Test 1: Started");
setTimeout(function() {
    console.log("Test 2: started");
}, 2000); // this function will be called after 2 seconds, so it will be printed after Test 3: Started

console.log("Test 3: Started");

/* o/p: 
Test 1: Started
Test 3: Started
Test 2: started */