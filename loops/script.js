// let i;
for(let i=1; i<=10; i++){
    console.log("Gajendra");
}

// to calculate sum of 1 to 5

let sum=0;
for(let i=1; i<=5; i++){
  sum= sum+i;
}
console.log(sum);

// use of while loop

// let i = 1;
// while(i<=10){
//     console.log("Apna College");
//     i++;
// }

// use of do while loop

let n = 5;
do{
    console.log("apna college");
} while(n<=10);

// for-of loop

let str= "Dilsahib";

let size = 0;
for(let i of str){
  console.log(i);
  size++;
}
console.log(size); // to calculate the size of string ie 10 characters

// for in loops (used to print keys of objects)

let student = {
       name: "rahul",
       age: 18,
       cgpa: 8.5,
       isPass: true,
};

for(let key in student){
  console.log("key=", key, "value=", student[key]);
}