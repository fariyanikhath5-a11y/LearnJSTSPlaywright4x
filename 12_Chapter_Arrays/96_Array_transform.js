// Map and Filters


// every  - all must pass vs some

// every — ALL must pass

console.log([80,76,90] .every (s => s >=75)); //true
console.log([80,74,91].every(s => s >=75)); // false

// some — AT LEAST ONE must pass

console.log([80, 60, 85].some(s => s < 70)); //true
console.log([80, 90, 85].some(s => s < 70)); // false

console.log([80,90,65].some(s => s<=80)); //true