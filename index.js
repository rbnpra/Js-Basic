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


// from the magnus

var temp = new Array();
var str = "Hello World";
console.log(str.split(" "));
str.split(" ").forEach(function(val) {
    temp.push(val.split("").reverse().join(""));
    
});
console.log(temp.join(" "));

// javaScript functions

// function add(a, b){
//     console.log("inside function ", arguments)
//     return a+b;
// }
// console.log(add); 
// console.log(add.lenght); // will print the number of 
// //parameters we pass to the function

// console.log(add(2, 3));
// console.log(add.call(null, 4, 3));
// console.log(add.apply(null, [4, 3]));

// Variable hoisting in JavaScript



c -> POP = procedure oriented programming language
start -> 1
end -> 2

function add() {
    var a = 10;
    var b = 20;
    var sum = a+b;
    return sum;
}
add()

// OOPS : Object Oriented programming
- Classes ()
    - Object
        - Property
        - Functionalities
*/

// function Person(p_firstName, p_age) {
//    var age = p_age; // Private variable
//     this.firstName = p_firstName; // Public Variable
//     // this.age = p_age;
//     this.getAge=function() {
//         return age;
//     }
// }
// var p1 = new Person("xyz", 28);
// console.log(p1.firstName, p1.getAge());

//Inheritance

// function Home(Builder, year, condition) {
//     this.Builder=Builder;
//     this.year=year;
//     this.condition=condition;
// }
// const H1 = new Home("Seapac", 2019, "Excellent" );
// const H2 = new Home("Robinhood", 1982, "Good Condition");

// console.log(H1, H2);

// function Address(city, ward, country) {
//     this.city=city;
//     this.ward=ward;
//     this.country=country;
// }
// const A1 = new Address("Madhyapur-Thimi", 10, "Nepal");
// const A2 = new Address("Bhaktapur", 40, "Nepal")
// console.log(A1, A2);


// function ShrepanchamiGuthi(Name, EntryYear, MemberNumber) {
//      this.Name=Name;
//      this.EntryYear=EntryYear;
//      this.MemberNumber=MemberNumber;
// }

// const S1 = new ShrepanchamiGuthi("Prem", 2019, 16);
// const S2 = new ShrepanchamiGuthi("Rajesh", 2020, 17);

// ShrepanchamiGuthi.prototype.greet=function() {
//     return "Welcome to Guthi " + this.Name;
// }
// console.log(S1.greet());
// console.log(S2.greet());
// console.log(S1, S2);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// }
// Person.prototype.greet=function() { // overriding
//     return "Hellow " + this.name;
// }



// var p1 = new Person("Rabin", 40);
// console.log(p1.greet());
// var p2 = new Person("RamHari", 35);
// console.log(p2.greet());

// console.log(p1, p2);

// function Employee(name, age, id, dept) {
//     this.name=name;
//     this.age=age;
//     this.id=id;
//     this.dept=dept;
// }
// var e1 = new Employee("Ram", 40, 221, "IT");
// var e2 = new Employee("Hari", 35, 222, "Account");
// console.log(e1, e2);

// function add() { // Variadic function (Function overloading) (Polymorphism)
//     var sum=0;
//     for(var key in arguments) {
//         sum+=arguments[key];
//     }
//     return sum; 

// }
// // console.log("Answer : "+ add(1,2,2, 45));
// var money = [56, 98, 76, 32];
// console.log(add.apply(null, money));

// var wastedDaysoJan = [5, 3, 5, 8];
// console.log(add.apply(null, wastedDaysoJan));

// var values = [1, 2, 3, 7, 6, 4];
// console.log(add.apply(null, values)); // Calling the function with apply



// function PersonalInfo(Name, Address, ContactNo) {
//     this.Name=Name;
//     this.Address=Address;
//     this.ContactNo=ContactNo;
// }
// PersonalInfo.prototype.greet=function() {
//     return "Hello " + this.Name;
// }

// PersonalInfo.prototype.greet=function() {
//     return "Hello There! " + this.Name;
// }

// const Per = new PersonalInfo("Suraj Ranjitkar", "Lynnwood, WA", 9841544432);

// const Per1 = new PersonalInfo("Amir Prajapati", "Shoreline, WA", 987654324);
// console.log(Per.greet());
// console.log(Per1.greet());
// console.log(Per, Per1);

const myObject = {
    city : 'Madrid',
    greet() {
        console.log(`Greetings from ${this.city}`);
    }
}
myObject.greet();




const myContry = {
    Country : 'Nepal',
    greet() {
        console.log(`Namste from ${this.Country}`);
    }
}
myContry.greet();