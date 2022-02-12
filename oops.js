// OOPS : Object Oriented programming
// - Classes ()
//     - Object
//         - Property
//         - Functionalities
// 

// function Person(p_firstName, p_age) {
//    var age = p_age; // Private variable
//     this.firstName = p_firstName; // Public Variable
//     // this.age = p_age;
//     // this.getAge=function() {
//     //     return age;
//     // }
// }
// Person.prototype.getAge=function() {
//     return age;
// }
// var p1 = new Person("xyz", 28);
// var p2 = new Person("xyz", 29);
// var p3 = new Person("xyz", 30);
// var p4 = new Person("xyz", 31);
// var p5 = new Person("xyz", 32);

// // console.log(p1.firstName, p1.getAge());
// console.log(p1, p2, p3, p4, p5);


// creating Person Class
// function Person(p_firstName, p_age) {
//     var age = null; // Private
//     this.firstName = null; // Private
//     this.init(p_age, p_firstName);
    
// }
// // initialise variable - constructor
// Person.prototype.init = function(p_age, p_firstName) {
//     age = p_age;
//     this.firstName = p_firstName;
// }

// // Get age function to retrieve the provate variable
// Person.prototype.getAge = function() {
//     return age;
// }

// creating the object
// var p1 = new Person("XYZ", 28);
// console.log(p1.getAge());


// Udemy
// Aarrow function
// const printMyName = (name) => {
//     console.log(name);
// }
// printMyName('Rabindra prajapati');

// const multiply = (number) => {
//     return number * 2;
// }
//  console.log(multiply(2));

 // Exports & Imports(Modules)


 // Encapsulation
/*
    Binding data and funcations to one single unit is called encapsulation

*/
// What is an inheritence?

function Person(name, age) {
    this.name=name;
    this.age=age;
}

Person.prototype.greet=function() {
    return "Hello " + this.name;
}

var p1 = new Person("Mahesh", 25);
console.log(p1.greet());

var p2 = new Person("Rabin", 40);
console.log(p2.greet());

// console.log(p1, p2);

// function Employee(name, age, id, dept) {
//     // this.name=name;
//     // Person.call (this, name, age);
//     Person.apply (this, [name, age]);
    

//     this.id=id;
//     this.dept=dept;
// }

// for(var key in personalbar.prototype) {
//     Employee.prototype[key]=prototype[key];
// }

// var e1 = new Employee("Ram", 34,  1001, "IT");
// var e2= new Employee("RamHari", 36, 1002, "CS");

// console.log(e1.e2);
class Human {
    constructor() {
        this.gender = 'Male';
    }
    printGender() {
        console.log(this.gender);
    }
}

class Man extends Human {
    constructor() {
        super();
        this.name = 'Max';
        this.gender = "female";
    }
    printMyName() {
        console.log(this.name);
        man.printGender();
    }
}
const man = new Man();
man.printMyName();
