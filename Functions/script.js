console.log("Hello");

// Defining a function

function myFunctin(){
    console.log("My Name is gajendra");
    console.log("hello");
}

myFunctin();

// passing argument from function call

function newFunction(msg){ // parameter
    console.log(msg);
}

newFunction("hello world"); // argument

// function to add two numbers

function sum(a,b){
   console.log(a+b);
}

sum(1,8);

// sum function
function summ(a,b){
    return a +b;
}

// multiply function
function multiply(a,b){
    return a*b;
}

// arrow function
// const functionName=(para1, para2...) =>{
    // do some work
//}

// Multiplication function using arrow function

const arrowMul =(a,b) =>{
    console.log(a*b);
}
arrowMul(3,4);

const printHello = () =>{
    console.log("Hello");
}
printHello();

//Question
// Create a function using the "function" keyword that takes a
// string as an argument and returns the number of vowels in the string.

function countVowels(str){
    //"Apna College", count = 0
    let count = 0;
    for(const char of str){
        if(
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u' 
        ) {
        count++;
        }
    }
    console.log(count);
}

// create the same function using arrow function

const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u' 
        ) {
            count++;
        }
}
console.log(count);
}
// Higher order function/ methods - They use another functions as parameters
// forEach Loop in arrays
// used when we want to perform action on every element of an array 

let arr = [1,2,3,4,5];
arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
});

// Question
// For a given array of numbers, print the square of each value using the forEach loop.
let array = [1,2,3,4,5];
array.forEach((val) => {
    console.log(val * val);
});

// or
 let nums = [45,95,52];
 let calcSquare = (num) => {
    console.log(num*num);
 }
 nums.forEach(calcSquare);

 // map method is used to create a new array using the previous values
 // it returns a new array with the results of applying the provided function on every element in this array

 let numbers = [1,4,6,8,10];

 let newArr = numbers.map((val) => {
    return val * 2;
 });
 console.log(newArr); // [2, 8, 12, 16, 20

 // Filter Method
 // It creates a new array with all elements that pass the test implemented by the provided function.

 let arrayy = [ 1, 2, 4, 5, 6, 9, 10, 12];

 let evenArray = arrayy.filter((val) => {
    return val % 2 === 0;
 });
 console.log(evenArray); // [2, 4, 6, 10]




