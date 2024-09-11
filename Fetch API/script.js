const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#facts");
document.querySelector("#btn");
const getFacts = async () => {
   console.log("getting data.....");
   let response = await fetch(URL);
   console.log(response); //JSON format
   // we have to convert from json format to js object format to use it 
   let data = await response.json();
   console.log(data[1].text);
   factPara.innerText = data[0].text;
};
btn.addEventListener("click", getFacts); 
