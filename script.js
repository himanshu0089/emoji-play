var btnTranslate= document.querySelector("#translate-btn");
var txtInput= document.querySelector("#text");
var txtOut= document.querySelector("#output");




var serverURL="https://api.funtranslations.com/translate/emoji.json"



function getTranlationURL(myinput){
    return serverURL + "?"+"text="+myinput
}


function errorHandler(error){
    console.log("An error occured!!", error);
    alert("Try after sometime");
}


function clickHandler(){
    var txt=txtInput.value;

    fetch(getTranlationURL(txt))
    .then(response => response.json())
    .then(json => {
        var translatedText= json.contents.translated;
        txtOut.innerHTML=translatedText;})
    .catch(errorHandler)


};

btnTranslate.addEventListener("click", clickHandler)