 let btn1 = document.querySelector("#btn1");
//  btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
//  }

 // event listener
 // to add
btn1.addEventListener("click", () => {
   console.log("Button1 was clicked - handler1");
});

btn1.addEventListener("click", () => {
   console.log("Button1 was clicked - handler2");
});

const handler3 = () => {
   console.log("Button1 was clicked - handler3");
};

btn1.addEventListener("click", () => {
   console.log("Button1 was clicked - handler4");
}); 

// to remove an event listener

btn1.removeEventListener("click", handler3);