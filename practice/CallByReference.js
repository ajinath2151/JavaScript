


function myName(obj) {
    obj.name="bhagwan";
    console.log("inside funciton : ", obj); // print bhagwan
}
let nameObject = {name: "ajinath"}
myName(nameObject);
console.log("outside funciton : ", nameObject); // print bhagwan