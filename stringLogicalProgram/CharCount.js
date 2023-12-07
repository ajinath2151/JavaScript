
// char / character count of string

let str = "javascript" 


let obj = {

};
//any string is array of character so we can use for of loop
for(let x of str) {
  if(obj[x])   {
    obj[x] = obj[x] + 1;
  }
  else {
    obj[x] = 1
  }
}
console.log(obj);