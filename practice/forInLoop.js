//for in loop in javascript with object
let myObj = {
    fname:"ajinath",
    lname:"shinde",
    salary:50000
}
for(let i in myObj) {
    console.log("inside for : " + myObj[i]);        
}
console.log(myObj.fname);
console.log(myObj.salary);



//for in loop in javascript with array

let arr = [1,2,3,4,5];
for(let x in arr) {    
    console.log(arr[x]); 
}