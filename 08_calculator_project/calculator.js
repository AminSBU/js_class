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

// Add keyboard support  
document.addEventListener('keydown', function(event) {  
    const display = document.getElementById('inputText');  

    // Check for number keys and basic operators  
    if (event.key >= 0 && event.key <= 9) {  
        calButtonFunction(event.key);  
    } else if (event.key === '+') {  
        calButtonFunction('+');  
    } else if (event.key === '-') {  
        calButtonFunction('-');  
    } else if (event.key === '*') {  
        calButtonFunction('*');  
    } else if (event.key === '/') {  
        calButtonFunction('/');  
    } else if (event.key === 'Enter' || event.key === '=') {  
        calResult();  
    } else if (event.key === 'Escape' || event.key === 'c') {  
        calClear();  
    }  
});  