let grid = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

console.log(grid[0][0]); // 10
console.log(grid[1][2]); // 60

console.log(grid[2][1]); // 80
console.log(grid[0][2]); // 30
console.log(grid[1][0]); // 40
console.log(grid[2][2]); // 90
console.log(grid[1][1]); // 50
console.log(grid[0][1]); // 20
console.log(grid[2][0]); // 70
console.log(grid[1][7]); // undefined
//console.log(grid[7][7]); // undefined error

grid[1][7] = 100; // Adding a new element at index 7 of row 1
console.log(grid[1][7]); // 100

grid[0][0]= 99; // Updating the value at index 0 of row 0
console.log(grid[0][0]); // 99


console.log(grid); // Display the entire grid
console.log(grid.length); // 3 (number of rows)
console.log(grid[0].length); // 3 (number of columns in the first row)
console.log(grid[1].length); // 8 (number of columns in the second row after adding an element)
console.log(grid[2].length); // 3 (number of columns in the third row)
console.log(grid[1]); // Display the second row
