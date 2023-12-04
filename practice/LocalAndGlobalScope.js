// type of scope / variables in
// block scope variables
// function scope variables
// global scope variables

var global = 50;
// {
//     let a=10; //it give error let have block lever scope
// }
// console.log(a);
{
    var b=20; //it will print because var has global scope
    console.log(global);
}
console.log(b);
console.log(global);

//function scope variables
function ax()  {
    var c=30; 
    console.log(c);
    console.log(global);
}
ax();
console.log(global);
console.log(c);