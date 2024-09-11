// ques 1

// to print all the even numbers from 0 to 100

for(let num=0; num<=100; num++){
    if(num%2===0){
    console.log(num);
}
}

// to print all the odd number from 0 to 100

for(let number=0; number<=100; number++){
    if(number%2!=0){
        console.log(number);
    }
}

// ques 2
 
let gameNum = 25;
let usernumber=prompt("Guess the game number:");
while(usernumber!=gameNum){
      usernumber = prompt("You entered the wrong number, guess again");
}
console.log("Congratulations, you entered the right number");