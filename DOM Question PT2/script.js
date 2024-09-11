// create a new button element. Give it a text "click me", backgrround color of red & text color of white
// insert the button as the first element inside the body tag

let newButton = document.createElement("button");
newButton.innerText = ("Click Me!");
newButton.style.backgroundColor = "red";
newButton.style.color = "white";

document.querySelector("body").prepend(newButton);

//Question2
//Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element

