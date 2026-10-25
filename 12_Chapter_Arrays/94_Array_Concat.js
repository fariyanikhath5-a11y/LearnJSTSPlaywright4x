let a = [1,2];
let b = [3,4];
let c = a.concat(b);
console.log(c); //[ 1, 2, 3, 4 ]

// spread (modern way) - concatenation. (...)
let d = [...a,...b];
console.log(d);

let d1= [...a , ...b];
console.log(d1); //[ 1, 2, 3, 4 ]


