// console.log("the calculator is running");

let screen = document.getElementById("screen");
let parentScreen = document.getElementById("parentScreen");
let buttoms = document.querySelectorAll("button");
let screenValue =" ";
for(items of buttoms){
items.addEventListener('click',(e)=>{
    screenValue = screen.value;
    buttomText = e.target.innerText;
    if (buttomText == 'X') {
        buttomText = '*';
        screenValue += buttomText;
        screen.value=screenValue;
    }else if(buttomText=='CE'){
        screenValue ="";
        parentScreen.value="";
        screen.value=screenValue;
    }else if(buttomText == "<--"){
        screenValue = screen.value;
        screen.value=screenValue.substr(0,screenValue.length-1);
    }else if(buttomText=="="){
        try {
            screenValue = screen.value;
            parentScreenVal=eval(screenValue);
            if(parentScreenVal== undefined){
                parentScreen.value="Input invaid";
            }else{
                parentScreen.value= parentScreenVal;
            }
        } catch (error) {
            parentScreen.value="Syntex error";
        }
    }else{
        screenValue += buttomText; 
        screen.value = screenValue;
    }
});}

