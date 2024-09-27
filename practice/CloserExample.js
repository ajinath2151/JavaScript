
// in closer inner function can have access of outer function

const outerFunction = () => {
    let outerVariable="i am from outer function"

    const innerFunction = () => {        
        console.log(outerVariable);        
    };    
    return innerFunction;
};
let result = outerFunction();
result(); // return call as like function because result is holding reference of inner function, result is actually a function itself, not a static value.

