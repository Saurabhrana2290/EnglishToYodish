var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/yoda.json";  //server api link

function  getTranslationUrl(input){       //function to add text to url
    return serverUrl + "?" + "text=" + input;
}
function errorHandler(error){        //function to print error
    console.log("error",error);
}
function clickEventHandler(){       //function to handle event when button is clicked 
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))  //fetching api from server 
    .then(
        response => response.json()
    )
    .then(
        json => {
            var translatedText=json.contents.translated;
            divOutput.innerText = translatedText;
        }
    )
    .catch(errorHandler);             
}

btnTranslate.addEventListener("click",clickEventHandler);    //adding event listener