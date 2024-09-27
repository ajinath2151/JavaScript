
// used to iterate over an array and reduce it to a single value
// take 2 arguments, first callback function which execute on each element, 2nd is optional for initial value if not provided then 
//takes first Element as default value

// example 1 , sum of array
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum=(value,count)=>{
    return value + count;
}
let result = numbersArray.reduce(sum);
console.log(result); // output 55

// example 2 , finding largest number

let largestNumberArray = [1,4,38,22,7,6,5,3]

const largeFunciton = (number,value) =>{
    return number > value ? number : value;
}
let resultLargeNumebr = largestNumberArray.reduce(largeFunciton,largestNumberArray[0]); //here default value 0 is provided which is optional
console.log(resultLargeNumebr);
