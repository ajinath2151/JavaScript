
//reverse string
const stringReverseFunction = (str) =>{
    //split - method use to split string into array
    let arr = str.split("");
    arr.reverse();
    //join - method use to join array into string
    str = arr.join("");
    console.log(str);
}
stringReverseFunction("ajinath");
stringReverseFunction("shinde");
stringReverseFunction("object");