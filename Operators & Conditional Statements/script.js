    console.log("hello world");

// Arithmetic operators
let a= 5;
let b = 2;
console.log("a+b =", a+b);
console.log("a-b =", a-b);
// modulus operator
console.log("a%b =", a%b)

// power operator
console.log("a**b = ", a**b);

// Unary operator

let c=5;
c++;
console.log(c);

let d= 10;
d--;
console.log(d);

// Assignment operators
// =, +=, -=, *=, %=, **=

 d%=4;
 console.log(d);

 // FOr oor comparison operators
  console.log("a==b" ,a==b);
  

  // Conditional Statements
   let mode="Dark";
   let color;
   if(mode === "Dark"){
    color = "black";
    }
    if(mode==="light"){
        color= "white";
    }
    console.log(color);

//    let age = 25;
//    if(age>18){
//     console.log("you can vote");
//    }

// to check if the number is odd or even
let num= 11;
if(num%2 === 0){
    console.log("Even");
}
else{
    console.log("odd");
}

// ternary operator

let age=25;
let result = age>=18? "adult" : "not adult";
console.log(result);

// alert("Hello");  // one time popup

let number = prompt("Enter a number:");
if(number%5 === 0){

console.log(number," is multiple of 5");
}
else{
    console.log(number, "is not a multiple of 5");
}

// Code which can give grades to students according to their scores

let score = 75;
let grade;

if(score>=90 && score<=100){
    grade = 'A';
}
else if(score>=70 && score<=89){
    grade= 'B';
}
else if(score>=60 && score<=69){
    grade = 'C';
}
else if(score>=40 && score<=59){
    grade = 'D';
}
else if (score>=0 && score<=39){
    grade = 'F'
}

console.log("according to your marks your grade is:", grade);
