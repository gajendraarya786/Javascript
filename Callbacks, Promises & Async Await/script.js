console.log("one");
console.log("two");
console.log("three");
function hello(){
    console.log("Hello");
}
setTimeout(hello, 2000) //timeout; 2sec = 2000ms // prints hello after 2sec

console.log("one");
console.log("one");

// Callbacks 
// A callback is a function passed as an argument to another function.

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b, sumCallback) {
   sumCallback(a,b);
}

calculator(1,2, sum);
 
const Hello = () => {
    console.log("Hello");
}
setTimeout(hello, 3000);

// nesting
 
let age = 19;
if(age>=18) {
   if(age>=60){
    console.log("senior");
   }
   else{
    console.log("middle");
   }
}else{
    console.log("child");
}

for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        console.log(j);
    }
}

//database

function getData(dataId, getNextData) { //takes 2s 
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData){
        getNextData();
        }
    }, 2000); 
}
//Callback hell
//the arrow function here is for callback
getData(1, () => {
    console.log("getting data 2");
    getData(2, () =>{
        console.log("getting data 3");
        getData(3);
    });
});

//To solve the problem of callback hell we have promises
//promises

 let promise = new Promise((resolve, reject) => {
     console.log("I am a promise");
     resolve("I am resolved"); 
 });


//use of .then() & .catch()

 const getPromise = () => {
    return new Promise((resolve, reject) => {
         console.log("I am a promise1");
         resolve("Successful");    
     });
 };

let promise2 = getPromise();
promise.then((res) => {
    console.log("Promise fulfilled", res);
});

// to catch the error we use .catch()

 