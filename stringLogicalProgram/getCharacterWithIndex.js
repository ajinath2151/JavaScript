
//get specific character with it's index from string.

const getChar = (str,index) => {
    let arr = str.split("");
    // for(let i=0;i<arr.length;i++) {
    // }
    if(arr[index]) {
        console.log(arr[index]);
    }
    else {
        console.log("please enter valid index.");
    }
}
let inputString = getChar("shinde","2"); // return character by provided string