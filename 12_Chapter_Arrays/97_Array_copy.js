let original = [1,2,3,4];
let copy1 = [...original]; //creates new array , spread does not change the original array
console.log(original); //[ 1, 2, 3, 4 ]
console.log(copy1); //[ 1, 2, 3, 4 ]

let copy2 = original.slice (); //creates new array
console.log(copy2); //[ 1, 2, 3, 4 ]

// Deep copy it will change original array mutate the array
let deep_copy_array=original;
deep_copy_array.push(89); //original array will be changed ,arrays are mutable in nature will change
console.log(original); //[ 1, 2, 3, 4, 89 ]
console.log(deep_copy_array);//[ 1, 2, 3, 4, 89 ]

let copy3 = original.slice(); //it does not change the original array 
copy3.push(91);
copy1.push(93);
console.log(copy3); //[ 1, 2, 3, 4, 89, 91 ]
console.log(original); //[ 1, 2, 3, 4, 89 ]
console.log(copy1); //[ 1, 2, 3, 4, 93 ]
