
// program for replace specific character at specific position
let str = 'ajinath';
console.log(str);
// convert string into an array
let arr = str.split('');
console.log(arr);
let position =1;
let char = 'q';
// parameter, 1st at position, 2nd how many elements delete, 3rd add new character 
arr.splice(position, 0, char); // 
console.log(arr);