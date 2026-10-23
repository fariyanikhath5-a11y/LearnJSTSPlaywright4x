let arr=[1,2,3];
console.log(arr); // [ 1, 2, 3 ]

// Add to End of the array

arr.push(4);
console.log(arr); //[ 1, 2, 3, 4 ]

//Remove from end of array

arr.pop(4);
console.log(arr); //[ 1, 2, 3 ]

arr.push(5);
console.log(arr); //[ 1, 2, 3, 5 ]

arr.pop();
console.log(arr); //[ 1, 2, 3 ]


arr.push(7,8);
console.log(arr); //[ 1, 2, 3, 7, 8 ]

// Add to BEGINNING

arr.unshift(0);
console.log(arr); //[ 0, 1, 2, 3, 7, 8 ]

// Remove from BEGINNING
arr.shift();
console.log(arr); // [ 1, 2, 3, 7, 8 ]

//[ 1, 2, 3, 7, 8 ]
arr.splice(2,1);
console.log(arr); //[ 1, 2, 7, 8 ]

arr.splice(2,0,99); //it will add 99 at 2nd index ,since 0 we have used it will not delete anything it will insert
console.log(arr); //[ 1, 2, 99, 7, 8 ]

arr.splice(2,1,90); //it will replace 2nd index element which is 99
console.log(arr); // [ 1, 2, 90, 7, 8 ]

arr.splice(2,2,80); //it will delete 2 elements from 2nd index i.e.,arr[2] and arr[3] will be deleted and 80 will be inserted at arr[2] index
console.log(arr); //[ 1, 2, 80, 8 ]

// arr.splice(2, 1, 99);
// arr.splice(2, 2, 99);

//[ 1, 2, 80, 8 ]

arr.splice(1,2,10,20); // it will start from index[1] and index[1] and 2 and replace index[1] and 2 by 10 and 20
console.log(arr); ////[ 1, 10, 20, 8 ]




