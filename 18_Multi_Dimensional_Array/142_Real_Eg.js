let testMatrix= [
    ["Login", "Pass", 200],
    ["Checkout","Fail", 404],
    ["Search","Pass", 180]
];

for(let i=0 ; i<testMatrix.length ; i++){
    for(let j=0 ; j<testMatrix[i].length ; j++){
        process.stdout.write(testMatrix[i][j] + " ");
    }
    console.log(" ");
}

console.log(" --------- ");