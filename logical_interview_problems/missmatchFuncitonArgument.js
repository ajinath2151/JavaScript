
//in below program will take two same name function arguments and pass only one value so value override 
// and output should be undefined

// 1. one
// pass tow same name arguments
function missMatchArgs(a,a) {
    console.log(a);
}
//provide only one value snf expected output is undefined because value override 
missMatchArgs(10)


function missMatchArgs(a,a) {
    console.log(a);
}
//because of both parameter name same second parameter override value and print 20
missMatchArgs(10,20)