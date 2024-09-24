
// 1: length method - it return count/size of array.array

let arrLen =  [1,2,3,4,5,6,7,8];
console.log("array length is : "  + arrLen.length);

let arrFruits = ["banana","apple","orange","pineapple"];
let len = arrFruits.length;
console.log("fruits array length " + len);

// 2: toString - converts an array into a string, with each element of the array separated by commas.

let fruits = ["banana","apple","orange","pineapple"];
console.log("before array to string: " + fruits);
let fruitsString = fruits.toString();
console.log("after array to string: " + fruitsString);
// Create an array
let fruits2 = ['Apple', 'Banana', 'Cherry', 'Mango'];

// Convert the array to a string
let fruitsString2 = fruits2.toString();

console.log("toString string " + fruitsString2); // Output: "Apple,Banana,Cherry,Mango"


// 3: at - at() method returned indexed element from an array

let arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let result = arr3.at(5);
console.log("char at position 5 is : " + result);

// 4: join - join() method join string or convert array to string same like toString() method, and additionally we can specify separator

let arr4 = [1,2,3,4,5];
console.log("before join : " + arr4);
let result4 = arr4.join('#');
console.log("after join : " + result4);

// 5: push - push() method add element at the end of array

let arr5 = [1,2,3,4,5];
arr5.push(8);
console.log("array after push : " + arr5);

// 6: pop - pop() method remove element from the end of array 

let arr6 = [1,2,3,4,5];
let result6 =arr6.pop();
console.log("array after pop : " + arr6);
// or
console.log("array after pop : " + arr6.pop());

// 7: shift - shift() method  remove first element of array

let arr7 = [1,2,3,4,5];
arr7.shift(8);
console.log("array after shift : " + arr7);


// 8: unshift - unshift() add element to start of array

let arr8 = [1,2,3,4,5];
arr8.unshift(8);
console.log("array after unshift : " + arr8);

// 9: delete - delete specific elements and show undefined(1 empty item), instead of this recommended to use pop or shift

let arr9 = [1, 2, 3, 4, 5];
delete arr9[3];
console.log(arr9);

// 10: concat - create new array by merging existing arrays

let arr10 = [1, 2, 3, 4, 5];
let arr101 = [6,7,8,9,10,11]
let mergingArray = arr10.concat(arr101);
console.log("array after merge : " + mergingArray);

// 11: copyWithin - copy array element from one to another position of array element within array.

let arr11 = [1, 2, 3, 4, 5];
arr11.copyWithin(2,4); // 1:element replace to index number 2:element copy from index number
console.log("array after copy 4th element within 2nd element : " + arr11);

// 12: flat - convert a multi-dimensional array into a one-dimensional array.

let arr12 = [[1,2],[3,4],[5,6],[7,8]]; //multi-dimensional array
let arr12Result = arr12.flat(); 
console.log("Multi-dimension array after use flat() method : " + arr12Result);


// 13: splice - to add new elements in array

let arr13 = [1,2,3,4,5]
arr13.splice(2,0,30,40) //1st for from where to insert, 2nd for how many elements delete and next.....(30,40) are actual element to add
console.log("after splice method : " + arr13);

// 14: slice - slice out (remove) the pice of array which is under mentioned element size

let arr14 = [1,2,3,4,5];   
arr14.splice(1,3);
console.log("after slice method : " + arr14);

