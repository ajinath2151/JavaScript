
let matrixA =[
    [1,2],
    [3,4]
];
let matrixB = [
    [5,6],
    [7,8]
];

let result = [];

for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixB[0].length; j++) {
        result[i][j] = 0;
        for (let k = 0; k < matrixA[0].length; k++) {
            result[i][j] += matrixA[i][k] * matrixB[k][j];
        }
    }
}

console.log(result);