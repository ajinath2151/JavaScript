
// creating object

const student = {
    name: "ajinath",
    course : "MCA",
    fees : 40000,
    isPresent : "true",
    bonus : undefined,
    datesWhenAbsent:[12,13,15,20,25], //this property called array defined within object
    address : {                      // this is object within object
        current: "pune",
        permanent: "ahmednagar"
    },
}
console.log(student);
console.log(Object.entries(student)); //print using "Object" object.
console.log(Object.keys(student)); //print only keys
console.log(Object.values(student)); //print only values
console.log(student.name); //print only name value i.e.ajinath
console.log(student["name"]); //print only name value i.e.ajinath (same as above)

// delete object property
delete(student.bonus); //delete bonus property from student object
console.log(Object.values(student));

// delete object property
delete(student["name"]); //delete name property from student object
console.log(Object.values(student));

//access stored array within object
console.log("ajinath was absent on", student.datesWhenAbsent);

// array can also store object see below example

const student2 = [student, {
    name: "vikas",
    course : "bca",
    fees : 80000,
    isPresent : "true",
    bonus : undefined,
    datesWhenAbsent:[12,13,15,20,25], //this property called array defined within object
    address : {                      // this is object within object
        current: "pune",
        permanent: "ahmednagar"
    },  
}]
console.log("student" + JSON.stringify(student2));

//another way to print string with variable values(recommended)
console.log(`my course is : ${student.course} and fees is : ${student.fees} `); //here name cannot print because we delete it above