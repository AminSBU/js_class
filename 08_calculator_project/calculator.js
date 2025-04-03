function calButtonFunction(calButton){
    const display = document.getElementById('inputText');

    display.value += calButton;
}

function calResult(){
    const display = document.getElementById('inputText');

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}

function calClear(){
    const display = document.getElementById('inputText');

    display.value = "";
}