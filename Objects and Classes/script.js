// creating an object
const student ={
    name: 'John Doe',
    marks: '94.4',
    printMarks: function() {
        console.log("marks =", this.marks);
        //this.marks means student.marks
    },
};
console.log(student.name);

const employee ={
    calcTax() {
        console.log("tax rate is 10%");
    },
};
const KaranArjun ={
    salary: 50000,
    calcTax(){
        console.log("tax rate is 20%"); 
    }

};
//prototypes in js syntax: .__proto__
KaranArjun.__proto__ = employee;
 console.log(KaranArjun); 
 console.log(KaranArjun.calcTax()); 
 
 // Classes in JS
 //Class is program-code template for creating objects.
 //Those objects will have some (variables) & some behaviour (functions) inside it.

 class ToyotaCar {
    constructor(brand, mileage) {
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
 }
 // To create an object from a class
 let fortuner = new ToyotaCar("Toyota", 10);
 console.log(fortuner);
 let Innova = new ToyotaCar("Toyota", 12.5);
 console.log(Innova);

 //Inheritance
 //Inheritance is a mechanism in which one class can inherit the properties and methods of another class.

 class Parent{
  hello(){
       console.log("Hello");
    }
 }
 class Child extends Parent{}
  let obj = new Child();

  class Person{
    constructor() {
        this.species= "homo sapiens"; // every object of any class doctor or engineer will have species property  as homo sapiens
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
  }

  class Engineer extends Person {
    constructor(branch) {
        super(); // to invoke parent class constructor
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("solve problems, build something");
    } 
  }
  class Doctor extends Person{
    work(){
        console.log("treat people");
    }
  }
  let GajendraObj = new Engineer("Chemical engg");


 
 
