let url = "https://api.funtranslations.com/translate/minion.json";
let txtInput=document.querySelector("#translate-input");
let button=document.querySelector("#btn");
let output=document.querySelector("#translate-output");

function geturl(text){
    return `${url}`;
}

function errorHandler(error)
{
    console.log("error occured",error)
    alert("something wrong with server!try again after some time");
}
function clickHandler(){
  let inputText=txtInput.value;
  fetch(geturl(inputText))
  .then(response=>response.json())
  .then(data=>{
    let translatedText=data.contents;
    output.innerText=translatedText.translated;
  })
  .catch(errorHandler);
}
button.addEventListener("click",clickHandler)