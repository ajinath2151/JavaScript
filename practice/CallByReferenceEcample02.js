
//call by reference example
let arrayA = [1, 2, 3, 4];
let arrayB = arrayA;

console.log(arrayA);
console.log(arrayB);

arrayA.push(10); //pushing value in only arrayA but if also reflecting in arrayB

console.log(arrayA);
console.log(arrayB);


