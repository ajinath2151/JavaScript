const rollNumber = [1,2,3,4,5,6,7,8,9,10];
const rollNumber2 = [5,8,4,6,9,7,2,3,6,5];

console.log(rollNumber);

// push element to array index at last
rollNumber.push(17);
// console.log(rollNumber);

// pop - remove last array index element
rollNumber.pop();
// console.log(rollNumber);

// slice - remove some item
// console.log(rollNumber.slice(2,5)); // return array element from 2 to <5 index

// splice -  add or remove element

// At position 2, , remove 2 items: 
// console.log(rollNumber.splice(2,2));
// console.log(rollNumber);

// At position 2, remove: 0, add 2 items 100 and 200: 
// console.log(rollNumber.splice(2,0, 100,200));
// console.log(rollNumber);

// sort
console.log(rollNumber2.sort());


// & so many other methods