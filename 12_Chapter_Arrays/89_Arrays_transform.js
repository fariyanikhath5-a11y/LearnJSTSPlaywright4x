let scores = [45,82,91,60,73];

let grades = scores.map (i => i >70 ? "pass" : "fail" ); 
console.log(grades); //[ 'fail', 'pass', 'pass', 'fail', 'pass' ]


// Filter
let passing = scores.filter (s => s>=70);
console.log(passing); // [ 82, 91, 73 ]

//----------------------------
let scores1= [11,32,9,14,-4];

let grades1 = scores1.map (i1 => i1 > 30 ? "PAss" : "Fail")
console.log(grades1); // [ 'Fail', 'PAss', 'Fail', 'Fail', 'Fail' ]

