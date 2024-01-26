// print most frequent Element from Array

let arr = [9, 1, 4, 3, 5, 6, 3, 4, 1, 2];
let counter = 0; //m
let big = 1; // mf
let char = ""; // item
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      counter++;
    }
    if (big < counter) {
      big = counter;
      char = arr[i];
    }
  }
  counter = 0;
}
console.log("Element  " + char + " occurs most : " + big + " times");
