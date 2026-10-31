const a= [1,2,3,4,5,2,3,6];
let duplicate = a.filter((value , index) =>
    a.indexOf(value) !== index && a.lastIndexOf(value) === index);

console.log(duplicate); //[2,3]