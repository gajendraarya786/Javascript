let h2 = document.querySelector("h2");
console.dir(h2.innerText);
// to add text we can use property innerText
h2.innerText = h2.innerText + " from Apna College Students";

// QUestion
//Create 3 divs with common class name- :"box". Access them & add some unique text to each of them.
// let divs = document.querySelectorAll(".box");
// console.dir(divs[0]);
// console.dir(divs[1]);
// console.dir(divs[2]);
// divs[0].innerText = "New value";
// divs[2].innerText = "hi guys";

// doing it using for loop
let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// Attributes
// 1. getAttribute() method
// 2. hasAttribute() method
// 3. removeAttribute() method
// 4. setAttribute() method

let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);
let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// to change the attribute
console.log(para.setAttribute("class", "paragraph"));

// to access style tag
div.style.backgroundColor = "Green";
div.style.fontSize = "26px";
div.innerText = "hello guyz"; 

// to hide html element from JS
// div.style.visibility = "hidden";

// Insert Elements
// first create the element

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!"
console.log(newBtn);

let p = document.querySelector("p");
p.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "This is my website";
console.log(newHeading);

let heading = document.querySelector("h2");
heading.before(newHeading);

let paraa = document.querySelector("p");
paraa.remove();
