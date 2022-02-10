// let name = 'Rabin';
// console.log(name);

//Rules
// Cannot be a reserved keyword
// should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen(-)


// let firstName= 'Rabin';
// lastName = 'Prajapati';

// Constants

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// here if we need reassign use let otherwise use const.


//Primitives/ Value Type and Reference Types

// String, Number, Boolean, Undefined, Null

// let name = "Rabin"; // String Literal
// let age = 30;  // Number Literal
// let isApproved = true; // Boolean Literal
// let firstName = undefined;
// let selectedColor = null;

// Dynamic Typing

// Reference Types
// Object, Array, Function

// Object
/*
let person = {
    name: 'rabin',
    age: 30
};

// Dot Notation or bracket Notation to change Object's name
// person.name = 'John';
person['name'] = 'Mary';

console.log(person.name);


// Array

let selectedColor = ['red', 'blue'];
selectedColor[2] = 'green';
console.log(selectedColor.length);



// Function
// performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName); // concatination
}


greet('John', 'Smith');
greet ('Mary', 'Oli');

// Calculating a value

function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);


// Object-Oriented Programing
    // Creating Objects
    // Factories and Constructors
    //Primitives and Reference Types
    // Working with Properties
    // Private Properties
    // Getters / Setters

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(basesalary, overtime, rate) {
    return baseSalary + (overTime * rate);
}

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,

    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();
*/
// Factory Function
function createCircle(radius) {
    return {
        radius, 
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// Constructor Fucntion

function Circle(radius) {
   
    this.radius = radius;
    this.draw = function()
 {
     console.log('draw');
 }
}
const another = new Circle(1);