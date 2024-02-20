// constructor example.js

class constructorDemo {
    constructor() {
        console.log("constructor called");
        this.name = "ajinath";
    }
}
let cDemo = new constructorDemo();
let cDemo2 = new constructorDemo();
console.log(cDemo2.name);
