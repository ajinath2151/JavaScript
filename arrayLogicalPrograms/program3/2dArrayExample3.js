// create 2d array and store element in it and access any element and print it

let matrixA = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let matrixB = [
    [11,12,13],
    [14,15,16],
    [17,18,19]
]

for (let i = 0; i < matrixA.length; i++) {
    for (let j = 0; j < matrixB.length; j++) {
        // console.log(matrixA[i][j], matrixB[i][j]);       
    }    
}
console.log(matrixB[1][0]);   // expected output 14
console.log(matrixA[1][2]); // expected output 6
console.log(matrixB[0][1], matrixB[2][0]);  // expected output 12,17
console.log(matrixA[1][1], matrixB[0][0]);  // expected output 5,11