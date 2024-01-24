
// Write a JavaScript function to check whether an `input` is an array or not.

function checkArr(arr) {
    if(typeof arr == 'object')  {
        return "this is an array"
    }
    else {
        return "not array"
    }
}
let arr = [1,2,3,4,5];
let arr2 = "sti"
// console.log(typeof arr);

let checking = checkArr(arr);
// let checking = checkArr(arr2);
console.log(checking);
