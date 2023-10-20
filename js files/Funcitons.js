
// function way1
// function myFunction() {
//     console.log("simple/normal function");
// }
// myFunction();

// function way2
// const myFunction = function() {
//     console.log("function using variable");
// }
// myFunction();

// function way3 arrow function

// const myFunction = ()=> {
//     console.log("arrow function");
// }
// myFunction();

const students = [];

const addStudent = (studName,studAge,studDatesWhenAbsent,studAddress)=> {
    const student = {
        name : studName,
        age : studAge,
        datesWhenAbsent : studDatesWhenAbsent,
        address : studAddress,
    };
    students.push(student);
};

addStudent("ajinath",28,[12,13], {current:"pune",permanents:"ahmednagar"});
console.log(students);
