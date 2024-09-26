
// create a new map

const roomType = new Map([
    ["kitchen", "2"],
    ["bedroom", "4"],
    ["hall", "2"],
]);
let flat = roomType.get("kitchen");
console.log(flat);


// add element to map method with set() method

let cars = new Map();
cars.set("indica","1200");
cars.set("maruti","400");
cars.set("swift","900");

let maCar = cars.get("swift");
console.log(maCar);

//map method for change existing map value

cars.set("indica","1000");
console.log(cars.get("indica"));


// another example to demonstrate use of map method

let numbers = [1,2,3,4,5];

let doubleNumbers = numbers.map((number)=>{
    return number * 2;
});
console.log(doubleNumbers);

