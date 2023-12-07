
//check if is string palindrom or not
// palindrom - if original string and it's reverse is same then string is palindrom
const isPalindromFun = (str) => {
    let temp = str
    let arr = str.split("");
    arr.reverse();
    str = arr.join("");    
    // console.log(temp);
    // console.log(str);
    if(str == temp) {
        console.log("palindrom string");
    }
    else {
        console.log(("not palindrom"));
    }
}
isPalindromFun("madam");
isPalindromFun("nitin");
isPalindromFun("vikas");

