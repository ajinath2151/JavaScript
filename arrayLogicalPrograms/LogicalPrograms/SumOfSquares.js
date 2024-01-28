
// sum of array element square

let sum = 0;
let arr = [0,1, 2, 3, 4,5];
for (let i = 0; i < arr.length; i++) {
    let square = arr[i]*arr[i];
    sum = sum + square;
}
console.log(sum);