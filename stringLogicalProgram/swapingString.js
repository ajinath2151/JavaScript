
// string swapping

let strSwap = (str) => {

    let arr = str.split("");
    let length = arr.length;

    for(let i=0;i<length-1;i+=2) {
        let temp = arr[i];  
        arr[i] = arr[i+1];
        arr[i+1] =temp        
    }
    let swappedString = arr.join("");
    return swappedString;    
}
let inputString = "abcdef";
let result = strSwap(inputString);
console.log(`Original string : ${inputString}`);
console.log(`after swapping  : ${result}`);