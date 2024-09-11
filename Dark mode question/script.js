// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let modeButton = document.querySelector("#Mode");
let currMode = "Light";
modeButton.addEventListener("click", ()=> {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
})