let numbers=[10,25,30,45];
let result=numbers.find(temp => temp>20);

console.log(result); //25

// findIndex
let index = numbers.findIndex(n => n > 20);
console.log(index); //1

let index1=numbers.findIndex(m => m>=30);
console.log(index1); //2

numbers.findLast(n => n > 20); //  45
console.log(index) //1
numbers.findLastIndex(n => n > 20); 
console.log(index);// 1


