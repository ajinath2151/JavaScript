
let str  = " this     is    a multiple       spaces string   ok";
let newStr = str.replace(/\s+/g, ' ');
console.log(newStr);