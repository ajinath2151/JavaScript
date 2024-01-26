
// accept string form user and change character case

let str = "indIA iS My COUntry";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let result = [];

for(let i=0; i<str.length; i++) {
    if(upper.indexOf(str[i])!==-1) {
        result.push(str[i].toLocaleLowerCase());
    }
    else if(lower.indexOf(str[i])!==-1) {
        result.push(str[i].toLocaleUpperCase());
    }
    else {
        result.push(str[i]);
    }
}
console.log(result.join(""));
