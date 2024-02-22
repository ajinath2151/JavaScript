
// in call by value if primitive datatype is passed as argument and value change inside function are not affected.

function updateValue(value) {
    value = 50;
    console.log(value);    // this will print 50
}
let originalValue = 10;
updateValue(originalValue);
console.log(originalValue); // this will print 10 which is unchanged value