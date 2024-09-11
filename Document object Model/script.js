alert("This is Gajendra arya");
console.dir(window);
console.log(window.document); 
// to display body
console.dir(document.body);
console.dir(document.head);
console.dir(document.body.childNodes[1]);

// JS is used to make a dynamic change in the website during runtime
// for example
document.body.style.background = "Green";

// DOM Manipulation
// DOM stands for Document Object Model
// Accesaing elements of html class
// It returns html collection

let headings = document.getElementsByClassName("headings");
console.dir(headings);
console.log(headings);

//Selecting with tags
let para = document.getElementsByTagName("p")
console.dir(para);

//Query Selector

//document.querySelector("myId/myClass/tag")
// It returns first element

// document.querySelectorAll("myId/myClass/tag")
// returns a NodeList

let elements = document.querySelector("p"); //first element
console.dir(elements);

let allELements = document.querySelectorAll("p");
console.dir(allELements);

// properties get,set or change/update
//1) tagName
//2) innerHTML
//3) innerText
//4) outerHTML
//5) textContent

// Node: firstChild property
// Node: lastChild property
// Node: Children property

// for example
let children = document.querySelector("div").children;
console.log(children);

// innerText property returns only text 
// innerHTML property returns text and html tags both

let divv = document.querySelector("table").innerText;
console.dir(divv);

// Question 
// Create a H2 heading element with text - "Hello Javascript". Append "from Apna College students" to this text using JS
let h2_JS = document.querySelector("JS");
console.dir(h2_JS);






