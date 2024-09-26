
// filter method filter the data form  element and create a new array
// not execute on empty array
// does not change in existing array
// creates a shallow copy of a portion of a given array

let voterList =[5,10,15,30,20,25];

let result = voterList.filter((age) =>{
    return age > 18
});
console.log(result);


// eg.2

let characters = ["ajinath", " sunil", "mohit", "priyanka", "divya", "aarti","madhuri"];
let charlen = characters.filter((namge)=>{
    return namge.length > 6
})
console.log(charlen);
