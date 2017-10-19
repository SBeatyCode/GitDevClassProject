class Person {
    constructor(name, color) {
        this.name = name;
        this.color = color; 
    }
    
    greet() {
        console.log("Hello, my name is " + this.name + " and I like the color " + this.color + "! Please love me");
    }
}

//module.exports = Person;
export default Person;