let scores= [ 
    [85, 90, 78],
    [92, 88, 95],
    [76, 84, 89]
]

// Matrix -> Row = Col -> 

//let rowSum=scores.map(row => row.reduce((sum, score) => sum + score, 0));
let rowSum=scores.map(row => row.reduce((a, b) => a + b));
console.log("Row Sum: ", rowSum); //Row Sum:  [ 253, 275, 249 ]

//let colSum = scores[0].map((colIndex) => scores.reduce((sum, row) => sum + row[colIndex], 0));//Column Sum:  [ NaN, NaN, NaN ]
let colSum = scores[0].map((_, colIndex) => scores.reduce((sum, row) => sum + row[colIndex], 0));
console.log("Column Sum: ", colSum); //Column Sum:  [ 253, 262, 262 ]

/*
scores[0] is the first row. Its length tells .map() how many columns to process.
For each column, colIndex is that column’s position: 0, then 1, then 2, and so on.
scores.reduce(...) visits every row and adds the number at that column’s position to sum.
It starts at 0.
.map() collects each column’s total into colSum.
So the result [253, 262, 262] means: column 1 totals 253, column 2 totals 262, and column 3 
totals 262.

The _ is the current item from the first row, but it’s intentionally unused; the code only needs the column index. This assumes every row has the same number of columns.
*/


